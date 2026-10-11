import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "../content/ContactPage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact / RFQ | Advay Engineers – Rajkot Works & Quotation" },
      {
        name: "description",
        content:
          "Send your component drawing, mould requirement or manufacturing brief. Connect with our engineering team in Veraval (Shapar), Rajkot.",
      },
      {
        property: "og:title",
        content: "Contact / RFQ | Advay Engineers – Rajkot Works & Quotation",
      },
      {
        property: "og:description",
        content:
          "Send your component drawing, mould requirement or manufacturing brief. Connect with our engineering team in Veraval (Shapar), Rajkot.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:image", content: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/6325f8f7-407f-4461-913b-8a1ce6c605cf/contact_plant_exterior_1791346820103.jpg" },
      { name: "twitter:image", content: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/6325f8f7-407f-4461-913b-8a1ce6c605cf/contact_plant_exterior_1791346820103.jpg" },
    ],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <ContactPage {...actions} />;
}
