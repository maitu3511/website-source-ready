import { createFileRoute } from "@tanstack/react-router";
import { QualityPage } from "../content/QualityPage";
import { useWebsiteActions } from "../lib/website-navigation";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality Assurance & Metrology | Advay Engineers – ±0.005mm Tolerance" },
      {
        name: "description",
        content:
          "Comprehensive quality framework: 3D CMM metrology inspection, ±0.005mm toolroom accuracy, FAI documentation, tool steel certification, and zero-defect OEM production.",
      },
      {
        name: "keywords",
        content:
          "CMM Quality Lab, Injection Mould Inspection, First Article Inspection, Tool Steel Certification, Dimensional Quality Control, ±0.005mm Tolerance",
      },
      { property: "og:site_name", content: "Advay Engineers" },
      {
        property: "og:title",
        content: "Quality Assurance & Metrology | Advay Engineers – ±0.005mm Tolerance",
      },
      {
        property: "og:description",
        content:
          "Comprehensive quality framework: 3D CMM metrology inspection, ±0.005mm toolroom accuracy, FAI documentation, tool steel certification, and zero-defect OEM production.",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content:
          "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/57a93132-8d81-466a-bff0-1e27df21e3a0/hero_quality_metrology_new.jpg",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Quality Assurance & Metrology | Advay Engineers – ±0.005mm Tolerance",
      },
      {
        name: "twitter:description",
        content:
          "Comprehensive quality framework: 3D CMM metrology inspection, ±0.005mm toolroom accuracy, FAI documentation, tool steel certification, and zero-defect OEM production.",
      },
      {
        name: "twitter:image",
        content:
          "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/57a93132-8d81-466a-bff0-1e27df21e3a0/hero_quality_metrology_new.jpg",
      },
    ],
    links: [{ rel: "canonical", href: "https://advayengineers.com/quality" }],
  }),
  component: Page,
});

function Page() {
  const actions = useWebsiteActions();
  return <QualityPage {...actions} />;
}
