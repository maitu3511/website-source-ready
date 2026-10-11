import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "../content/IndustriesPage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/applications")({
  head: () => ({
    meta: [
      { title: "Applications & Sectors | Advay Engineers – Precision Moulded Parts" },
      {
        name: "description",
        content:
          "High-precision injection tooling and engineering plastic components across Automotive, Electrical Switchgear, Plumbing & Sanitary, Agriculture, and Consumer sectors.",
      },
      {
        name: "keywords",
        content:
          "Automotive Plastic Clips, Electrical Switchgear Parts, Irrigation Drip Fittings, Plastic Enclosures, Industrial Plastic Components, Tooling Applications",
      },
      { property: "og:site_name", content: "Advay Engineers" },
      {
        property: "og:title",
        content: "Applications & Sectors | Advay Engineers – Precision Moulded Parts",
      },
      {
        property: "og:description",
        content:
          "High-precision injection tooling and engineering plastic components across Automotive, Electrical Switchgear, Plumbing & Sanitary, Agriculture, and Consumer sectors.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/a135d4bb-4715-4c80-93b9-b1824200a9e1/hero_applications_parts_new.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Applications & Sectors | Advay Engineers – Precision Moulded Parts",
      },
      {
        name: "twitter:description",
        content:
          "High-precision injection tooling and engineering plastic components across Automotive, Electrical Switchgear, Plumbing & Sanitary, Agriculture, and Consumer sectors.",
      },
      {
        name: "twitter:image",
        content:
          "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/a135d4bb-4715-4c80-93b9-b1824200a9e1/hero_applications_parts_new.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://advayengineers.com/applications" }],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <IndustriesPage {...actions} />;
}
