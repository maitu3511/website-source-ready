import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { WebsiteLayout } from "../components/WebsiteLayout";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://advayengineers.com/#organization",
  name: "Advay Engineers",
  legalName: "Advay Engineers",
  url: "https://advayengineers.com",
  logo: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/20504afb-05a0-4a0f-9286-acbf8055079a/advay-engineers-logo.jpg",
  image:
    "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/f8a846b8-b107-4d85-9641-31b8a5988ca3/hero-machine-working.jpg",
  description:
    "Manufacturer of precision plastic injection moulds, engineering plastic components, and turnkey OEM manufacturing solutions in Rajkot, Gujarat, India.",
  foundingDate: "2016",
  founder: {
    "@type": "Person",
    name: "Krunal Adhvaryu",
    jobTitle: "Founder & Managing Director",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "SR. No. 202, Plot No. 51, Shed No. 51A, Opp. Inova Cast, Essen Road, Veraval (Shapar)",
    addressLocality: "Rajkot",
    addressRegion: "Gujarat",
    postalCode: "360024",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.8497,
    longitude: 70.8197,
  },
  telephone: ["+919974698789", "+918866604575"],
  email: "advayengineers1@gmail.com",
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/advay.engineers/",
    "https://www.facebook.com/advayengineers",
    "https://www.linkedin.com/company/advay-engineers",
    "https://www.youtube.com/@advayengineers",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://advayengineers.com/#website",
  url: "https://advayengineers.com",
  name: "Advay Engineers",
  publisher: {
    "@id": "https://advayengineers.com/#organization",
  },
  inLanguage: "en-IN",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Advay Engineers – Plastic Injection Moulds & Engineering Components" },
      {
        name: "description",
        content:
          "Manufacturer of high-precision plastic injection moulds and engineering plastic components in Rajkot, Gujarat. OEM & custom component manufacturing solutions since 2016.",
      },
      {
        name: "keywords",
        content:
          "Plastic Injection Moulds, Engineering Plastic Components, OEM Manufacturing, Toolroom Rajkot, Haas VMC Machining, Gujarat Mould Maker, Precision Tooling India, Veraval Shapar Rajkot, Injection Moulding Gujarat",
      },
      { name: "author", content: "Advay Engineers" },
      { name: "publisher", content: "Advay Engineers" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { name: "googlebot", content: "index, follow" },
      { name: "geo.region", content: "IN-GJ" },
      { name: "geo.placename", content: "Rajkot, Gujarat, India" },
      { name: "geo.position", content: "21.8497;70.8197" },
      { name: "ICBM", content: "21.8497, 70.8197" },
      { property: "og:site_name", content: "Advay Engineers" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      {
        property: "og:title",
        content: "Advay Engineers – Plastic Injection Moulds & Engineering Components",
      },
      {
        property: "og:description",
        content:
          "Manufacturer of high-precision plastic injection moulds and engineering plastic components in Rajkot, Gujarat. OEM & custom component manufacturing solutions since 2016.",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content: "Advay Engineers Precision Injection Moulds & Engineering Components",
      },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Advay Engineers – Plastic Injection Moulds & Engineering Components",
      },
      {
        name: "twitter:description",
        content:
          "Manufacturer of high-precision plastic injection moulds and engineering plastic components in Rajkot, Gujarat. OEM & custom component manufacturing solutions since 2016.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss || "/src/styles.css",
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      {
        rel: "preconnect",
        href: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app",
        crossOrigin: "anonymous",
      },
      {
        rel: "dns-prefetch",
        href: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app",
      },
      {
        rel: "preload",
        as: "image",
        href: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/f8a846b8-b107-4d85-9641-31b8a5988ca3/hero-machine-working.jpg",
      },
      {
        rel: "preload",
        as: "image",
        href: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/9ddbfe4e-ee5a-4ff8-965a-4e02c8b3de8c/hero_capabilities_moulds_new.jpg",
      },
      {
        rel: "preload",
        as: "image",
        href: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/a135d4bb-4715-4c80-93b9-b1824200a9e1/hero_applications_parts_new.jpg",
      },
      {
        rel: "preload",
        as: "image",
        href: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/30cd3887-7b97-4799-bbc9-cfa058d71ce9/hero_infrastructure_plant_new.jpg",
      },
      {
        rel: "preload",
        as: "image",
        href: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/57a93132-8d81-466a-bff0-1e27df21e3a0/hero_quality_metrology_new.jpg",
      },
      {
        rel: "preload",
        as: "image",
        href: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/3ceb244e-6b6c-470f-80cf-77d17c0139cc/hero_about_heritage_new.jpg",
      },
      {
        rel: "preload",
        as: "image",
        href: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/6325f8f7-407f-4461-913b-8a1ce6c605cf/contact_plant_exterior_1791346820103.jpg",
      },
      {
        rel: "preload",
        as: "image",
        href: "https://id-preview--7812fedb-978a-4d3f-b7af-27b541ebd405.lovable.app/__l5e/assets-v1/20504afb-05a0-4a0f-9286-acbf8055079a/advay-engineers-logo.jpg",
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap",
      },
      { rel: "stylesheet", href: "https://fonts.cdnfonts.com/css/sansation" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <HeadContent />
        {/* Schema.org Organization & LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Schema.org WebSite JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-[#FAF8F5] text-[#0B2545] antialiased" suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <WebsiteLayout />
    </QueryClientProvider>
  );
}
