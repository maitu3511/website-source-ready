import { afterEach, describe, expect, it, vi } from "vitest";
import { installWebsiteMotion } from "../lib/website-motion";

afterEach(() => {
  document.body.replaceChildren();
  vi.unstubAllGlobals();
});

describe("Website content enhancement", () => {
  it("registers content that mounts after the initial page", async () => {
    const observe = vi.fn();
    const disconnect = vi.fn();
    vi.stubGlobal("IntersectionObserver", class {
      observe = observe;
      disconnect = disconnect;
    });
    const root = document.createElement("main");
    document.body.append(root);
    const cleanup = installWebsiteMotion(root);
    const heading = document.createElement("h2");
    root.append(heading);
    await new Promise((resolve) => setTimeout(resolve, 0));
    expect(observe).toHaveBeenCalledWith(heading);
    cleanup();
    expect(disconnect).toHaveBeenCalledOnce();
  });

  it("still animates with a gentle fade when reduced motion is requested", () => {
    const observe = vi.fn();
    vi.stubGlobal("IntersectionObserver", class {
      observe = observe;
      disconnect = vi.fn();
    });
    vi.spyOn(window, "matchMedia").mockReturnValue({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    } as unknown as MediaQueryList);
    const root = document.createElement("main");
    const heading = document.createElement("h1");
    root.append(heading);
    const cleanup = installWebsiteMotion(root);
    expect(observe).toHaveBeenCalledWith(heading);
    cleanup();
    vi.restoreAllMocks();
  });
});
