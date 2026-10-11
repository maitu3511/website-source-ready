import { createFileRoute } from "@tanstack/react-router";
import { IndustriesPage } from "../content/IndustriesPage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries & Applications | Advay Engineers – Plastic Tooling Solutions" },
      {
        name: "description",
        content:
          "Moulds and engineered plastic parts across Automotive, Electrical, Industrial, Irrigation, Consumer Goods, Thin-Wall Enclosures, and Sanitary applications.",
      },
      {
        property: "og:title",
        content: "Industries & Applications | Advay Engineers – Plastic Tooling Solutions",
      },
      {
        property: "og:description",
        content:
          "Moulds and engineered plastic parts across Automotive, Electrical, Industrial, Irrigation, Consumer Goods, Thin-Wall Enclosures, and Sanitary applications.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/a135d4bb-4715-4c80-93b9-b1824200a9e1/hero_applications_parts_new.jpg" },
      { name: "twitter:image", content: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/a135d4bb-4715-4c80-93b9-b1824200a9e1/hero_applications_parts_new.jpg" },
    ],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <IndustriesPage {...actions} />;
}
