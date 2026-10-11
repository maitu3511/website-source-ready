import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "../content/HomePage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Advay Engineers – Plastic Injection Moulds & Engineering Components" },
      {
        name: "description",
        content:
          "Manufacturer of precision plastic injection moulds, engineering plastic components & OEM manufacturing solutions in Rajkot, Gujarat. In-house Haas VMC toolroom.",
      },
      {
        name: "keywords",
        content:
          "Plastic Injection Moulds, Engineering Plastic Components, OEM Manufacturing, Toolroom Rajkot, Haas VMC Machining, Gujarat Mould Maker, Precision Tooling India, Veraval Shapar Rajkot",
      },
      { property: "og:site_name", content: "Advay Engineers" },
      {
        property: "og:title",
        content: "Advay Engineers – Plastic Injection Moulds & Engineering Components",
      },
      {
        property: "og:description",
        content:
          "Manufacturer of precision plastic injection moulds, engineering plastic components & OEM manufacturing solutions in Rajkot, Gujarat. In-house Haas VMC toolroom.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/f8a846b8-b107-4d85-9641-31b8a5988ca3/hero-machine-working.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Advay Engineers – Plastic Injection Moulds & Engineering Components",
      },
      {
        name: "twitter:description",
        content:
          "Manufacturer of precision plastic injection moulds, engineering plastic components & OEM manufacturing solutions in Rajkot, Gujarat. In-house Haas VMC toolroom.",
      },
      {
        name: "twitter:image",
        content:
          "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/f8a846b8-b107-4d85-9641-31b8a5988ca3/hero-machine-working.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://advayengineers.com/" }],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <HomePage {...actions} />;
}
