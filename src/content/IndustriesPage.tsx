import React from "react";
import { PageId } from "../types";
import { INDUSTRIES, COMPANY_INFO } from "../data/companyData";
import { IconRenderer } from "../components/IconRenderer";
import { ReadyForProductionSection } from "../components/ReadyForProductionSection";
import { ArrowUpRight } from "lucide-react";

interface IndustriesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({
  onNavigate: _onNavigate,
  onOpenQuote,
}) => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Header / Hero with Dedicated Background Image */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0B2545]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={COMPANY_INFO.images.applicationsHero}
            alt="Multi-Industry Precision Engineered Plastic Components & Applications"
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
            <span>ENGINEERED INDUSTRIAL APPLICATIONS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-2xl animate-heading-side mb-6 text-white">
            Plastic Injection Moulding Applications
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-[#F1F5F9] font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Advay Engineers engineers bespoke moulds and high-durability plastic components tailored
            to the strict mechanical, thermal, dielectric, and regulatory demands of varied
            industrial applications.
          </p>
        </div>
      </section>

      {/* 1 Side Image and 1 Side Details, Space & Animated 1 Line, then Next Application */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 scroll-reveal">
        {INDUSTRIES.map((industry, index) => {
          const isEven = index % 2 === 0;
          const appNum = String(index + 1).padStart(2, "0");

          return (
            <div key={industry.id} className="space-y-16 scroll-reveal">
              {/* 1 Side Image, 1 Side Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Visual Side */}
                <div
                  className={`lg:col-span-6 ${isEven ? "lg:order-1 scroll-reveal-left" : "lg:order-2 scroll-reveal-right"}`}
                >
                  <div className="relative rounded-3xl overflow-hidden border border-[#E8E1D3] shadow-xl group bg-slate-100 card-hover-elevate">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-80 sm:h-96 lg:h-[380px] object-cover object-center img-zoom-hover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-[#0B2545]/90 backdrop-blur-md text-white font-mono font-bold text-xl flex items-center justify-center shadow-lg border border-white/20 transition-transform group-hover:scale-110">
                      {appNum}
                    </div>
                  </div>
                </div>

                {/* Details Side */}
                <div
                  className={`lg:col-span-6 space-y-6 ${isEven ? "lg:order-2 scroll-reveal-right" : "lg:order-1 scroll-reveal-left"}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E8E1D3] flex items-center justify-center text-[#8B1E1E] shadow-sm">
                      <IconRenderer name={industry.iconName} className="w-5 h-5" />
                    </div>
                    <span className="text-base font-mono tracking-wider text-[#8B1E1E] font-black">
                      {appNum}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight section-heading-ltr">
                    {industry.name}
                  </h2>

                  <p className="text-base sm:text-lg text-[#0B2545]/80 leading-relaxed">
                    {industry.description}
                  </p>

                  {/* Highlighted Parts */}
                  <div className="p-5 rounded-2xl bg-white border border-[#E8E1D3] shadow-sm space-y-1">
                    <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                      TYPICAL COMPONENTS &amp; TOOLING APPLICATIONS
                    </span>
                    <p className="text-sm sm:text-base font-semibold text-[#0B2545]">
                      {industry.highlightPart}
                    </p>
                  </div>

                  {/* Action */}
                  <div className="pt-2">
                    <button
                      onClick={onOpenQuote}
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <span>INQUIRE FOR {industry.name.toUpperCase()}</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 2-Color Brand Animated 1 Line */}
              {index < INDUSTRIES.length - 1 && (
                <div className="relative w-full h-[4px] rounded-full overflow-hidden my-16 flex shadow-sm border border-[#E8E1D3]">
                  <div className="w-1/2 h-full bg-[#0B2545]/40" />
                  <div className="w-1/2 h-full bg-[#8B1E1E]/40" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8B1E1E] to-transparent animate-shimmer" />
                </div>
              )}
            </div>
          );
        })}
      </section>

      {/* READY FOR PRODUCTION SECTION (No Box, 1 Side Content, Facing 2 Buttons) */}
      <ReadyForProductionSection onOpenQuote={onOpenQuote} />
    </div>
  );
};
