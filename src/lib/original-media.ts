import mediaPaths from "../assets/imported/media-paths.json";

const originalMedia: Readonly<Record<string, string>> = mediaPaths;
const assetOrigin = "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app";

export function originalMediaDestination(pathname: string): string | undefined {
  return Object.hasOwn(originalMedia, pathname) ? originalMedia[pathname] : undefined;
}

export function mediaUrl(pathname: string): string {
  const destination = originalMediaDestination(pathname);
  if (!destination) throw new Error(`Missing original website asset: ${pathname}`);
  return new URL(destination, assetOrigin).href;
}
