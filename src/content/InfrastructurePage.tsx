import React from "react";
import { PageId } from "../types";
import { INFRASTRUCTURE_HIGHLIGHTS, COMPANY_INFO } from "../data/companyData";
import { ReadyForProductionSection } from "../components/ReadyForProductionSection";
import { SectionHeader } from "../components/SectionHeader";

interface InfrastructurePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const InfrastructurePage: React.FC<InfrastructurePageProps> = ({
  onNavigate: _onNavigate,
  onOpenQuote,
}) => {
  const machineryList = [
    {
      category: "CNC Machining Center",
      name: "Haas Vertical Machining Center (VMC)",
      specs: "High-speed spindle, hardened steel milling, rigid tapping",
      tolerance: "±0.005 mm axis positioning",
      application: "Core and cavity 3D surface profiles, runner blocks, and ejector plates",
    },
    {
      category: "Electrical Discharge Machining",
      name: "Precision Spark Erosion EDM",
      specs: "Z-axis digital readout, copper & graphite electrode spark machining",
      tolerance: "Fine spark finishing to VDI 12 - 24",
      application: "Deep narrow ribs, sharp corners, and intricate text contours",
    },
    {
      category: "Toolroom Surface Grinding",
      name: "High-Precision Surface Grinders",
      specs: "Magnetic chuck, balanced spindle, diamond dressing",
      tolerance: "Flatness & parallelism within 0.003 mm",
      application: "Mould base squaring, parting line kiss-off, and guide pillar alignment",
    },
    {
      category: "Injection Moulding",
      name: "Automatic Injection Moulding Machines",
      specs: "Microprocessor closed-loop control, hydraulic clamp units 50T - 250T",
      tolerance: "Shot weight repeatability ±0.1%",
      application: "High-precision engineering plastic component serial manufacturing",
    },
    {
      category: "Bench Fitting & Assembly",
      name: "Heavy-Duty Mould Assembly & Blue Matching",
      specs: "Dedicated assembly cranes, precision surface plates, pneumatic die grinders",
      tolerance: "100% blue matching on all parting surfaces",
      application: "Final tool assembly, flash-free kiss-off verification, and trial readiness",
    },
    {
      category: "CAD / CAM Digital Engineering",
      name: "Parametric 3D Design Workstations",
      specs: "NX / SolidWorks / PowerMILL CAD/CAM toolpath simulation",
      tolerance: "Seamless STEP, IGES, Parasolid translation",
      application: "DFM mold flow, draft angle checks, and collision-free CNC programs",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header / Hero with Dedicated Background Image */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0B2545]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={COMPANY_INFO.images.infrastructureHero}
            alt="Advanced Injection Moulding Machine Shopfloor & Toolroom Infrastructure"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="w-full h-full object-cover object-center filter brightness-100 contrast-105 animate-hero-video-zoom"
            referrerPolicy="no-referrer"
          />
          {/* Neutral dark cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 text-[#0B2545] border border-[#E8E1D3] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#8B1E1E] animate-pulse" />
            <span>WORKS &amp; MACHINERY INFRASTRUCTURE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-2xl animate-heading-side mb-6 text-white">
            Advanced Toolroom &amp; Injection Facility
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-[#F1F5F9] font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Our facility at Veraval (Shapar), Rajkot combines high-speed CNC milling, precision
            toolroom craftsmanship, and automatic injection moulding machines to maintain strict
            micron repeatability across all projects.
          </p>
        </div>
      </section>

      {/* 4 Core Pillars Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <SectionHeader
          kicker="PRODUCTION CELLS"
          kickerColor="bg-[#0B2545] text-white px-3.5 py-1 rounded-full inline-block font-mono text-xs font-bold shadow-xs"
          title="Four Unified Divisions Under One Roof"
          subtitle="Equipped for comprehensive in-house manufacturing from tool conception to continuous high-volume parts dispatch."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INFRASTRUCTURE_HIGHLIGHTS.map((item, index) => {
            const delays = ["", "delay-150", "delay-200", "delay-250"];
            return (
              <div
                key={index}
                className={`rounded-3xl overflow-hidden bg-white border border-[#E8E1D3] shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col card-hover-elevate box-scroll-reveal ${delays[index % 4]}`}
              >
                <div className="h-64 sm:h-72 overflow-hidden relative bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center img-zoom-hover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-lg bg-[#8B1E1E] text-white text-xs font-mono font-bold uppercase shadow-sm">
                    {item.sub}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-[#0B2545] mb-2 group-hover:text-[#8B1E1E] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-base font-medium text-[#0B2545]/85 mb-3 leading-relaxed">
                      {item.description}
                    </p>
                    <p className="text-sm text-[#0B2545]/70 leading-relaxed border-t border-[#E8E1D3] pt-4">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Technical Machinery Directory */}
      <section className="py-20 bg-white border-y border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="TECHNICAL ASSETS"
            title="Machinery &amp; Equipment Register"
            subtitle="Detailed technical specifications and process tolerances of our in-house manufacturing plant."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {machineryList.map((m, idx) => {
              const delays = ["", "delay-100", "delay-150", "delay-200", "delay-250", "delay-300"];
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] hover:border-[#8B1E1E]/40 hover:shadow-md transition-all flex flex-col justify-between card-hover-elevate box-scroll-reveal ${delays[idx % 6]}`}
                >
                  <div>
                    <span className="text-xs font-mono font-extrabold text-[#8B1E1E] uppercase tracking-wider">
                      {m.category}
                    </span>
                    <h3 className="text-lg font-bold text-[#0B2545] mt-1 mb-2">{m.name}</h3>
                    <p className="text-sm text-[#0B2545]/90 mb-3">
                      <strong className="text-[#0B2545]">Specs:</strong> {m.specs}
                    </p>
                    <div className="inline-block px-3 py-1 rounded bg-white border border-[#E8E1D3] text-xs sm:text-sm font-mono font-bold text-[#0B2545] mb-3">
                      {m.tolerance}
                    </div>
                  </div>
                  <p className="text-sm text-[#0B2545]/80 italic border-t border-[#E8E1D3] pt-3">
                    {m.application}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* READY FOR PRODUCTION SECTION */}
      <ReadyForProductionSection onOpenQuote={onOpenQuote} />
    </div>
  );
};
