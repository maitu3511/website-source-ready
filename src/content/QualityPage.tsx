import React from "react";
import { PageId } from "../types";
import { COMPANY_INFO, QUALITY_PILLARS } from "../data/companyData";
import { IconRenderer } from "../components/IconRenderer";
import { ReadyForProductionSection } from "../components/ReadyForProductionSection";
import { SectionHeader } from "../components/SectionHeader";
import { ScrollCounter } from "../components/ScrollCounter";
import { ArrowUpRight, Gauge, Award, ShieldCheck } from "lucide-react";

interface QualityPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({
  onNavigate: _onNavigate,
  onOpenQuote,
}) => {
  const inspectionTools = [
    {
      title: "CMM Coordinate Measuring Machine",
      spec: "3D Ruby Touch Probe metrology system with volumetric accuracy to ±0.002 mm",
      role: "Verification of complex 3D core & cavity curvatures and multi-cavity pitch distances",
    },
    {
      title: "Digital Optical Profile Projector",
      spec: "10x - 50x magnification with digital readout micrometer stages",
      role: "Non-contact measurement of gear teeth profiles, radius contours, and small chamfers",
    },
    {
      title: "Mitutoyo Digital Height Gauges",
      spec: "Precision linear height gauges mounted on Grade-0 granite surface plates",
      role: "Parting line step measurements, core pin heights, and insert parallelism checks",
    },
    {
      title: "Digital Bore & Thread Gauges",
      spec: "Calibrated plug gauges, thread ring gauges, and inside micrometers",
      role: "Internal screw thread validation and tight-tolerance bushing hole checks",
    },
  ];

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header / Hero with Dedicated Background Image */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0B2545]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={COMPANY_INFO.images.qualityHero}
            alt="CMM Metrology Lab & Precision Quality Inspection"
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
            <span>ZERO-DEFECT METROLOGY &amp; DELIVERED EXCELLENCE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-2xl animate-heading-side mb-6 text-white">
            Quality Assurance &amp; Metrology Standards
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-[#F1F5F9] font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Our quality framework spans raw tool steel validation, Haas CNC in-process probing,
            T0/T1 trial optimization, and 100% CMM dimensional reporting conforming to your
            engineering drawings.
          </p>
        </div>
      </section>

      {/* THREE CORE QUALITY & OEM MILESTONES (Exact Design from q1.PNG Screenshot with Scrolling Loop Numbers) */}
      <section className="py-14 bg-white border-b border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: 800+ Custom Injection Moulds (Highlighted Card Style from q1.PNG) */}
            <div className="p-8 sm:p-10 rounded-2xl bg-[#FCFBF8] border-2 border-[#8B1E1E]/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between card-hover-elevate relative overflow-hidden box-scroll-reveal">
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-[#8B1E1E]/5 to-transparent rounded-bl-full pointer-events-none" />
              <div>
                <div className="inline-block px-5 py-2.5 rounded-xl bg-white/95 border border-[#8B1E1E]/20 shadow-xs mb-6">
                  <ScrollCounter
                    target={800}
                    suffix="+"
                    className="font-mono text-3xl sm:text-4xl font-extrabold text-[#8B1E1E] tracking-tight"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-3 leading-snug">
                  Custom Injection Moulds
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2545]/75 leading-relaxed">
                  Delivered and commissioned for OEM clients across India and international supply
                  networks.
                </p>
              </div>
            </div>

            {/* Card 2: 2000+ Complex OEM Products (Matching q1.PNG with Scrolling Loop Numbers) */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E1D3] shadow-sm hover:shadow-md transition-all flex flex-col justify-between card-hover-elevate box-scroll-reveal delay-150">
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="inline-block px-5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3] shadow-xs">
                    <ScrollCounter
                      target={2000}
                      suffix="+"
                      className="font-mono text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-lg border border-[#8B1E1E]/30 bg-[#FAF8F5] flex items-center justify-center text-[#8B1E1E] shadow-2xs">
                    <Award className="w-5 h-5 text-[#8B1E1E]" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-3 leading-snug">
                  Complex OEM Products
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2545]/75 leading-relaxed">
                  Engineered high-tolerance tooling with intricate side-actions, hydraulic
                  core-pulls, and tight optical finishes.
                </p>
              </div>
            </div>

            {/* Card 3: 60+ Long-Standing Partnerships (Matching q1.PNG with Scrolling Loop Numbers) */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8E1D3] shadow-sm hover:shadow-md transition-all flex flex-col justify-between card-hover-elevate box-scroll-reveal delay-300">
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="inline-block px-5 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3] shadow-xs">
                    <ScrollCounter
                      target={60}
                      suffix="+"
                      className="font-mono text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight"
                    />
                  </div>
                  <div className="w-10 h-10 rounded-lg border border-[#8B1E1E]/30 bg-[#FAF8F5] flex items-center justify-center text-[#8B1E1E] shadow-2xs">
                    <ShieldCheck className="w-5 h-5 text-[#8B1E1E]" />
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0B2545] mb-3 leading-snug">
                  Long-Standing Partnerships
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2545]/75 leading-relaxed">
                  High repeat-client rate based on dependable mold longevity, responsive
                  maintenance, and on-time commissioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Quality Feature Block */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Toolroom Metrology Bench Image with zoom-on-hover */}
          <div className="lg:col-span-6 scroll-reveal-left">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8E1D3] shadow-xl group bg-slate-100 card-hover-elevate">
              <img
                src={COMPANY_INFO.images.toolroomBench}
                alt="Toolroom Inspection & Fitting Metrology Bench"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center img-zoom-hover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#E8E1D3] text-[#18181B]">
                <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                  METROLOGY STANDARDS
                </span>
                <p className="text-sm font-semibold">
                  100% Dimensional Inspection &amp; First Article Approval
                </p>
              </div>
            </div>
          </div>

          {/* Quality Principles */}
          <div className="lg:col-span-6 space-y-6 scroll-reveal-right">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#8B1E1E]">
              CORE COMMITMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight animate-heading-side">
              Rigorous Inspection from Tool Steel to Finished Plastic Part
            </h2>
            {/* Sleek 2-Color Brand Animated Accent Line */}
            <div className="relative w-24 sm:w-28 h-1.5 rounded-full overflow-hidden animate-color-scroll shadow-xs section-line-expand">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
            </div>
            <p className="text-base text-[#0B2545]/80 leading-relaxed">
              At Advay Engineers, quality is built into every phase of tool fabrication. We do not
              inspect quality into parts after they are made; rather, we control the CNC toolpaths,
              spark erosion parameters, and mold cooling temperatures to guarantee zero defects.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-[#E8E1D3] shadow-sm card-hover-elevate">
                <span className="font-mono text-2xl font-black text-[#8B1E1E]">±0.005mm</span>
                <h4 className="font-bold text-[#0B2545] text-sm mt-1">Toolroom Accuracy</h4>
                <p className="text-xs text-[#0B2545]/70 mt-1">
                  Machined on Haas VMCs with calibrated ball screws.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-[#E8E1D3] shadow-sm card-hover-elevate">
                <span className="font-mono text-2xl font-black text-[#0B2545]">100%</span>
                <h4 className="font-bold text-[#0B2545] text-sm mt-1">CAD Comparison</h4>
                <p className="text-xs text-[#0B2545]/70 mt-1">
                  Inspected against nominal 3D solid model files.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>REQUEST QUALITY ASSURANCE DOSSIER</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* THE ADVAY ENGINEERS JOURNEY TIMELINE (Exact Design from q2.PNG Screenshot) */}
      <section className="py-20 bg-[#FAF8F5] border-t border-[#E8E1D3] scroll-reveal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[#E8E1D3] p-8 sm:p-12 lg:p-14 shadow-md">
            {/* Header matching q2.PNG */}
            <div className="mb-10">
              <span className="font-mono text-xs font-bold text-[#8B1E1E] uppercase tracking-widest block mb-2">
                PROGRESSION SINCE 2016
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0B2545] tracking-tight animate-heading-side">
                The Advay Engineers Journey
              </h2>
              {/* Sleek 2-color brand animated line */}
              <div className="relative w-24 sm:w-28 h-1.5 rounded-full overflow-hidden animate-color-scroll mt-3 shadow-xs section-line-expand">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
              </div>
            </div>

            {/* Vertical Timeline matching q2.PNG */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E8E1D3] ml-3 sm:ml-4 space-y-9">
              {/* Milestone 1: 2016 */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#8B1E1E] bg-white group-hover:bg-[#8B1E1E] transition-colors" />
                <span className="font-mono text-xs font-bold text-[#8B1E1E] block mb-1">2016</span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B2545] mb-1">
                  Company Inception in Rajkot
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2545]/75 leading-relaxed max-w-2xl">
                  Advay Engineers established by Mr. Krunal Adhwaryu with a dedicated precision
                  die-making &amp; in house moulding machine setup.
                </p>
              </div>

              {/* Milestone 2: 2018 */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#8B1E1E] bg-white group-hover:bg-[#8B1E1E] transition-colors" />
                <span className="font-mono text-xs font-bold text-[#8B1E1E] block mb-1">2018</span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B2545] mb-1">
                  Expansion into Electrical &amp; Electronic Accessories
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2545]/75 leading-relaxed max-w-2xl">
                  Developed high-volume modular switch plate and IP65 junction box tooling for
                  national electrical brands by another moulding machine.
                </p>
              </div>

              {/* Milestone 3: 2020 */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#8B1E1E] bg-white group-hover:bg-[#8B1E1E] transition-colors" />
                <span className="font-mono text-xs font-bold text-[#8B1E1E] block mb-1">2020</span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B2545] mb-1">
                  Haas VMC Toolroom Setup &amp; 3D Scanning
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2545]/75 leading-relaxed max-w-2xl">
                  Upgraded CNC milling capabilities with a dedicated Haas VMC toolroom setup and
                  digital metrology.
                </p>
              </div>

              {/* Milestone 4: 2022 */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#8B1E1E] bg-white group-hover:bg-[#8B1E1E] transition-colors" />
                <span className="font-mono text-xs font-bold text-[#8B1E1E] block mb-1">2022</span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B2545] mb-1">
                  Battery of 3rd Automatic Injection Machines
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2545]/75 leading-relaxed max-w-2xl">
                  Commissioned three automated injection moulding machines to offer turnkey OEM
                  component contract manufacturing.
                </p>
              </div>

              {/* Milestone 5: Present */}
              <div className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-[#8B1E1E] bg-white group-hover:bg-[#8B1E1E] transition-colors" />
                <span className="font-mono text-xs font-bold text-[#8B1E1E] block mb-1">
                  Present
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#0B2545] mb-1">
                  800+ Custom Injection Moulds Commissioned
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2545]/75 leading-relaxed max-w-2xl">
                  Surpassed 800+ custom dies delivered across 10 core industrial applications with
                  enduring OEM partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Quality Pillars */}
      <section className="py-20 bg-white border-y border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="METHODOLOGY"
            title="Five Quality Pillars of Advay Engineers"
            subtitle="Structured quality checks integrated into every stage of mould design and continuous injection processing."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {QUALITY_PILLARS.map((pillar, idx) => {
              const delays = ["", "delay-100", "delay-150", "delay-200", "delay-250"];
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] hover:border-[#8B1E1E]/40 hover:shadow-md transition-all flex flex-col justify-between card-hover-elevate box-scroll-reveal ${delays[idx % 5]}`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E1D3] flex items-center justify-center text-[#8B1E1E] mb-4 shadow-sm transition-transform group-hover:scale-110">
                      <IconRenderer name={pillar.iconName} className="w-6 h-6" />
                    </div>
                    <h3 className="text-base font-bold text-[#0B2545] mb-2">{pillar.title}</h3>
                    <p className="text-xs text-[#0B2545]/75 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="font-mono text-xs font-bold text-[#8B1E1E] mt-4 pt-3 border-t border-[#E8E1D3]">
                    STEP 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Metrology Inspection Equipment Directory */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <SectionHeader
          kicker="METROLOGY LABORATORY"
          title="Precision Inspection Equipment"
          subtitle="Advanced tactile and optical measuring tools ensuring strict compliance to customer tolerance drawings."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {inspectionTools.map((tool, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl bg-white border border-[#E8E1D3] shadow-sm hover:shadow-md transition-shadow space-y-4 card-hover-elevate box-scroll-reveal ${idx % 2 === 1 ? "delay-150" : ""}`}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3] text-[#0B2545] flex items-center justify-center">
                  <Gauge className="w-5 h-5 text-[#8B1E1E]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B2545]">{tool.title}</h3>
              </div>
              <p className="text-sm font-semibold text-[#8B1E1E]">{tool.spec}</p>
              <p className="text-xs text-[#0B2545]/75 leading-relaxed border-t border-[#E8E1D3] pt-3">
                <strong className="text-[#0B2545]">Inspection Role:</strong> {tool.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Quality Verification & Technical Documentation */}
      <section className="py-20 bg-white border-t border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="QUALITY DELIVERABLES"
            title="Quality Reports &amp; Documentation Standards"
            subtitle="Every precision mould and mass injection component batch is accompanied by comprehensive engineering quality documentation."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] shadow-sm hover:shadow-md transition-all box-scroll-reveal card-hover-elevate">
              <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                FAI REPORTS
              </span>
              <h4 className="text-lg font-bold text-[#0B2545] mt-1 mb-2">
                First Article Inspection
              </h4>
              <p className="text-xs text-[#0B2545]/75 leading-relaxed">
                Full 2D/3D ballooned drawing dimensional approval reports before mass production
                release.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] shadow-sm hover:shadow-md transition-all box-scroll-reveal card-hover-elevate">
              <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                CMM DOSSIER
              </span>
              <h4 className="text-lg font-bold text-[#0B2545] mt-1 mb-2">
                3D Metrology Verification
              </h4>
              <p className="text-xs text-[#0B2545]/75 leading-relaxed">
                Point cloud ruby probe scan reports comparing critical cavity profiles against
                original CAD models.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] shadow-sm hover:shadow-md transition-all box-scroll-reveal card-hover-elevate">
              <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                MTC CERTIFICATE
              </span>
              <h4 className="text-lg font-bold text-[#0B2545] mt-1 mb-2">
                Material Test Certificates
              </h4>
              <p className="text-xs text-[#0B2545]/75 leading-relaxed">
                Certified tool steel chemical composition, heat treatment hardness (HRC), and
                polymer resin batch datasheets.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] shadow-sm hover:shadow-md transition-all box-scroll-reveal card-hover-elevate">
              <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                IN-PROCESS SPC
              </span>
              <h4 className="text-lg font-bold text-[#0B2545] mt-1 mb-2">Process Control Logs</h4>
              <p className="text-xs text-[#0B2545]/75 leading-relaxed">
                Continuous injection molding shot parameter recording, cycle time tracking, and part
                weight variance control.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* READY FOR PRODUCTION SECTION */}
      <ReadyForProductionSection onOpenQuote={onOpenQuote} />
    </div>
  );
};
