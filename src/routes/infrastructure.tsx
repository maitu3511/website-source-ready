import { createFileRoute } from "@tanstack/react-router";
import { InfrastructurePage } from "../content/InfrastructurePage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Toolroom & Machinery Infrastructure | Advay Engineers – Haas VMC" },
      {
        name: "description",
        content:
          "In-house toolroom setup in Rajkot, Gujarat: Haas VMC machining centers, precision EDM spark erosion, surface grinding, and automated injection moulding lines.",
      },
      {
        name: "keywords",
        content:
          "Haas VMC Rajkot, Toolroom Machinery, Automatic Injection Molding Machines, EDM Spark Erosion, CNC Milling Gujarat, Metrology Lab",
      },
      { property: "og:site_name", content: "Advay Engineers" },
      {
        property: "og:title",
        content: "Toolroom & Machinery Infrastructure | Advay Engineers – Haas VMC",
      },
      {
        property: "og:description",
        content:
          "In-house toolroom setup in Rajkot, Gujarat: Haas VMC machining centers, precision EDM spark erosion, surface grinding, and automated injection moulding lines.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/30cd3887-7b97-4799-bbc9-cfa058d71ce9/hero_infrastructure_plant_new.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Toolroom & Machinery Infrastructure | Advay Engineers – Haas VMC",
      },
      {
        name: "twitter:description",
        content:
          "In-house toolroom setup in Rajkot, Gujarat: Haas VMC machining centers, precision EDM spark erosion, surface grinding, and automated injection moulding lines.",
      },
      {
        name: "twitter:image",
        content:
          "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/30cd3887-7b97-4799-bbc9-cfa058d71ce9/hero_infrastructure_plant_new.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://advayengineers.com/infrastructure" }],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <InfrastructurePage {...actions} />;
}
