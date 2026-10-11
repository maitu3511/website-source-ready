import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { originalMediaDestination } from "./lib/original-media";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!isH3SwallowedErrorBody(body)) return response;

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

function isH3SwallowedErrorBody(body: string): boolean {
  try {
    const payload = JSON.parse(body) as { unhandled?: unknown; message?: unknown };
    return payload.unhandled === true && payload.message === "HTTPError";
  } catch {
    return false;
  }
}

const assetMemoryCache = new Map<string, { body: Uint8Array<ArrayBuffer>; headers: Record<string, string> }>();

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      if (request.method === "GET" || request.method === "HEAD") {
        const url = new URL(request.url);
        let destination = originalMediaDestination(url.pathname);
        if (!destination && url.pathname.startsWith("/__l5e/")) {
          destination = url.pathname;
        }
        if (destination) {
          const cached = assetMemoryCache.get(destination);
          if (cached) {
            return new Response(cached.body, {
              status: 200,
              headers: cached.headers,
            });
          }
          const cdnUrl = new URL(
            destination,
            "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app",
          ).href;
          try {
            const cdnResponse = await fetch(cdnUrl, { method: request.method });
            if (cdnResponse.ok) {
              const arrayBuffer = await cdnResponse.arrayBuffer();
              const body = new Uint8Array(arrayBuffer);
              const headersRecord: Record<string, string> = {
                "cache-control": "public, max-age=31536000, immutable",
                "content-type": cdnResponse.headers.get("content-type") || "image/jpeg",
              };
              assetMemoryCache.set(destination, { body, headers: headersRecord });
              return new Response(body, {
                status: 200,
                headers: headersRecord,
              });
            }
          } catch (e) {
            console.error("Error proxying asset:", e);
          }
          return new Response(null, {
            status: 307,
            headers: {
              location: cdnUrl,
              "cache-control": "public, max-age=31536000, immutable",
            },
          });
        }
      }
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
