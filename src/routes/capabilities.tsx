import { createFileRoute } from "@tanstack/react-router";
import { CapabilitiesPage } from "../content/CapabilitiesPage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Products & Capabilities | Advay Engineers – Precision Tooling & Parts" },
      {
        name: "description",
        content:
          "Design & manufacturing of precision injection moulds, automatic injection moulding production, OEM contract manufacturing, DFM reviews, and custom plastic parts.",
      },
      {
        name: "keywords",
        content:
          "Injection Mould Manufacturing, Plastic Component Production, OEM Contract Manufacturing, DFM Tool Design, Custom Plastic Components, Multi-cavity Moulds",
      },
      { property: "og:site_name", content: "Advay Engineers" },
      {
        property: "og:title",
        content: "Products & Capabilities | Advay Engineers – Precision Tooling & Parts",
      },
      {
        property: "og:description",
        content:
          "Design & manufacturing of precision injection moulds, automatic injection moulding production, OEM contract manufacturing, DFM reviews, and custom plastic parts.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/9ddbfe4e-ee5a-4ff8-965a-4e02c8b3de8c/hero_capabilities_moulds_new.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Products & Capabilities | Advay Engineers – Precision Tooling & Parts",
      },
      {
        name: "twitter:description",
        content:
          "Design & manufacturing of precision injection moulds, automatic injection moulding production, OEM contract manufacturing, DFM reviews, and custom plastic parts.",
      },
      {
        name: "twitter:image",
        content:
          "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/9ddbfe4e-ee5a-4ff8-965a-4e02c8b3de8c/hero_capabilities_moulds_new.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://advayengineers.com/capabilities" }],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <CapabilitiesPage {...actions} />;
}
