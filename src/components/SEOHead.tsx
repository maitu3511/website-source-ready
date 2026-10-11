import React, { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { COMPANY_INFO, FAQ_ITEMS } from "../data/companyData";

interface SEOProps {
  page: string;
}

const PAGE_SEO_DATA = {
  home: {
    title: "Advay Engineers – Plastic Injection Moulds & Engineering Components",
    description:
      "Precision Plastic Injection Moulds, Engineering Plastic Components & OEM Manufacturing in Rajkot, Gujarat. In-house Haas VMC toolroom and automated injection moulding.",
    keywords:
      "Plastic Injection Moulds, Engineering Plastic Components, OEM Manufacturing, Toolroom Rajkot, Haas VMC Machining, Gujarat Mould Maker, Precision Tooling India, Veraval Shapar Rajkot",
    path: "/",
    image:
      "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/f8a846b8-b107-4d85-9641-31b8a5988ca3/hero-machine-working.jpg",
  },
  about: {
    title: "About Us | Advay Engineers – Toolroom Heritage & Excellence Since 2016",
    description:
      "Established in 2016 in Rajkot, Gujarat by Keyur Vaghani. Integrated toolroom craftsmanship, Haas CNC machining, and dependable plastic injection manufacturing.",
    keywords:
      "About Advay Engineers, Keyur Vaghani, Toolroom Gujarat, Plastic Mould Maker Rajkot, Injection Moulding History, Veraval Shapar Engineering",
    path: "/about",
    image:
      "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/3ceb244e-6b6c-470f-80cf-77d17c0139cc/hero_about_heritage_new.jpg",
  },
  capabilities: {
    title: "Products & Capabilities | Advay Engineers – Precision Tooling & Parts",
    description:
      "Design & manufacturing of precision injection moulds, automatic injection moulding production, OEM contract manufacturing, DFM reviews, and custom plastic parts.",
    keywords:
      "Injection Mould Manufacturing, Plastic Component Production, OEM Contract Manufacturing, DFM Tool Design, Custom Plastic Components, Multi-cavity Moulds",
    path: "/capabilities",
    image:
      "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/9ddbfe4e-ee5a-4ff8-965a-4e02c8b3de8c/hero_capabilities_moulds_new.jpg",
  },
  applications: {
    title: "Applications & Industries | Advay Engineers – High-Precision Plastic Parts",
    description:
      "Engineered plastic injection components for Automotive, Electrical Switchgear, Plumbing & Sanitary, Agriculture, Consumer Goods, and Industrial Enclosures.",
    keywords:
      "Automotive Plastic Clips, Electrical Switchgear Components, Irrigation Fittings, Plastic Enclosures, Industrial Plastic Parts, Precision Moulding Applications",
    path: "/applications",
    image:
      "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/a135d4bb-4715-4c80-93b9-b1824200a9e1/hero_applications_parts_new.jpg",
  },
  infrastructure: {
    title: "Toolroom & Plant Infrastructure | Advay Engineers – Haas VMC Centers",
    description:
      "Our facility at Veraval (Shapar), Rajkot features Haas VMC high-speed machining centers, precision EDM spark erosion, surface grinding, and automated injection moulding machines.",
    keywords:
      "Haas VMC Rajkot, Toolroom Machinery, Automatic Injection Molding Machines, EDM Spark Erosion, CNC Milling Gujarat, Metrology Lab",
    path: "/infrastructure",
    image:
      "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/30cd3887-7b97-4799-bbc9-cfa058d71ce9/hero_infrastructure_plant_new.jpg",
  },
  quality: {
    title: "Quality Assurance & Metrology Standards | Advay Engineers",
    description:
      "Rigorous quality control: 3D CMM metrology inspection, ±0.005mm toolroom tolerances, FAI reports, certified tool steels (P20/H13/Stavax), and 800+ custom moulds delivered.",
    keywords:
      "CMM Quality Lab, Injection Mould Inspection, First Article Inspection, Tool Steel Certification, Dimensional Quality Control, ±0.005mm Tolerance",
    path: "/quality",
    image:
      "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/57a93132-8d81-466a-bff0-1e27df21e3a0/hero_quality_metrology_new.jpg",
  },
  contact: {
    title: "Contact Advay Engineers | Request a Quote (RFQ) – Veraval (Shapar), Rajkot",
    description:
      "Submit your CAD drawing (STEP, STP, IGES, PDF, DWG, DXF, ZIP) for instant tooling review and competitive manufacturing quotation. Visit our works in Rajkot.",
    keywords:
      "Contact Advay Engineers, RFQ Injection Moulds, Veraval Shapar Toolroom Contact, CAD Drawing Upload, Plastic Tooling Quote, Rajkot Factory Address",
    path: "/contact",
    image:
      "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/6325f8f7-407f-4461-913b-8a1ce6c605cf/contact_plant_exterior_1791346820103.jpg",
  },
};

export const SEOHead: React.FC<SEOProps> = ({ page }) => {
  const location = useLocation();
  const currentSeo = PAGE_SEO_DATA[page as keyof typeof PAGE_SEO_DATA] || PAGE_SEO_DATA.home;

  useEffect(() => {
    // 1. Dynamic document title
    document.title = currentSeo.title;

    // Helper to safely set or update meta tag
    const setMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    // Standard SEO Tags
    setMeta("description", currentSeo.description);
    setMeta("keywords", currentSeo.keywords);
    setMeta("author", "Advay Engineers");
    setMeta("publisher", "Advay Engineers");
    setMeta(
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );
    setMeta("googlebot", "index, follow");

    // Geo Meta Tags (for Local Indian Manufacturing SEO)
    setMeta("geo.region", "IN-GJ");
    setMeta("geo.placename", "Rajkot, Gujarat, India");
    setMeta("geo.position", "21.8497;70.8197");
    setMeta("ICBM", "21.8497, 70.8197");

    // OpenGraph Tags
    const origin =
      typeof window !== "undefined" ? window.location.origin : "https://advayengineers.com";
    const canonicalUrl = `${origin}${currentSeo.path === "/" ? "" : currentSeo.path}`;

    setMeta("og:title", currentSeo.title, true);
    setMeta("og:description", currentSeo.description, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", canonicalUrl, true);
    setMeta("og:image", currentSeo.image, true);
    setMeta("og:image:width", "1200", true);
    setMeta("og:image:height", "630", true);
    setMeta("og:image:alt", currentSeo.title, true);
    setMeta("og:site_name", "Advay Engineers", true);
    setMeta("og:locale", "en_IN", true);

    // Twitter Card Tags
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", currentSeo.title);
    setMeta("twitter:description", currentSeo.description);
    setMeta("twitter:image", currentSeo.image);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);

    // 2. Structured Data: Schema.org FAQPage if on home page
    const existingFaqScript = document.getElementById("faq-jsonld-schema");
    if (page === "home") {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      };

      if (!existingFaqScript) {
        const script = document.createElement("script");
        script.id = "faq-jsonld-schema";
        script.type = "application/ld+json";
        script.text = JSON.stringify(faqSchema);
        document.head.appendChild(script);
      } else {
        existingFaqScript.textContent = JSON.stringify(faqSchema);
      }
    } else if (existingFaqScript) {
      existingFaqScript.remove();
    }
  }, [page, currentSeo, location.pathname]);

  return null;
};
