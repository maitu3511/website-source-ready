import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "../content/AboutPage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Advay Engineers – Toolroom Heritage & Excellence Since 2016" },
      {
        name: "description",
        content:
          "Established in 2016 in Rajkot, Gujarat by Keyur Vaghani. Integrated toolroom craftsmanship, Haas CNC machining, and dependable plastic injection manufacturing.",
      },
      {
        name: "keywords",
        content:
          "About Advay Engineers, Keyur Vaghani, Toolroom Gujarat, Plastic Mould Maker Rajkot, Injection Moulding History, Veraval Shapar Engineering",
      },
      { property: "og:site_name", content: "Advay Engineers" },
      {
        property: "og:title",
        content: "About Us | Advay Engineers – Toolroom Heritage & Excellence Since 2016",
      },
      {
        property: "og:description",
        content:
          "Established in 2016 in Rajkot, Gujarat by Keyur Vaghani. Integrated toolroom craftsmanship, Haas CNC machining, and dependable plastic injection manufacturing.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/3ceb244e-6b6c-470f-80cf-77d17c0139cc/hero_about_heritage_new.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "About Us | Advay Engineers – Toolroom Heritage & Excellence Since 2016",
      },
      {
        name: "twitter:description",
        content:
          "Established in 2016 in Rajkot, Gujarat by Keyur Vaghani. Integrated toolroom craftsmanship, Haas CNC machining, and dependable plastic injection manufacturing.",
      },
      {
        name: "twitter:image",
        content:
          "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/3ceb244e-6b6c-470f-80cf-77d17c0139cc/hero_about_heritage_new.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://advayengineers.com/about" }],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <AboutPage {...actions} />;
}
