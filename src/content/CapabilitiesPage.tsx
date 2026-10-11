import React, { useState } from "react";
import { PageId } from "../types";
import { CAPABILITIES, COMPANY_INFO, DetailedCapability } from "../data/companyData";
import { ReadyForProductionSection } from "../components/ReadyForProductionSection";
import { CapabilityDetailModal } from "../components/CapabilityDetailModal";
import { Check, ArrowRight, ArrowUpRight } from "lucide-react";

interface CapabilitiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const CapabilitiesPage: React.FC<CapabilitiesPageProps> = ({
  onNavigate: _onNavigate,
  onOpenQuote,
}) => {
  const [selectedCapability, setSelectedCapability] = useState<DetailedCapability | null>(null);

  const handleOpenDetail = (cap: DetailedCapability) => {
    setSelectedCapability(cap);
  };

  const handleCloseDetail = () => {
    setSelectedCapability(null);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* Page Header / Hero with Dedicated Background Image */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0B2545]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={COMPANY_INFO.images.capabilitiesHero}
            alt="Advay Engineers Precision Injection Mould Tooling Capabilities"
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
            <span>MANUFACTURING CAPABILITIES &amp; PRODUCTS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-2xl animate-heading-side mb-6 text-white">
            Precision Moulds &amp; Injection Components
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-[#F1F5F9] font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            From hardened multi-cavity injection mould design to serial production of
            high-performance engineering plastic components. Every solution is fabricated for
            repeatability, thermal stability, and tight micron tolerances.
          </p>
        </div>
      </section>

      {/* Main Products List - No Box, Large Image Left, Details Right, Animated Divider Line */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 scroll-reveal">
        {CAPABILITIES.map((cap, idx) => {
          const stepNumber = String(idx + 1).padStart(2, "0");

          return (
            <div key={cap.id} className="space-y-16 scroll-reveal">
              {/* Product Row: Large Image Left, Details Right. NO ENCLOSING BOX */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* LEFT SIDE: Large High-Resolution Image */}
                <div className="lg:col-span-6 scroll-reveal-left">
                  <div className="relative rounded-3xl overflow-hidden border border-[#E8E1D3] shadow-xl group bg-slate-100 card-hover-elevate">
                    <img
                      src={cap.image}
                      alt={cap.name}
                      className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center img-zoom-hover"
                      referrerPolicy="no-referrer"
                    />

                    {/* Number Badge - Just Number as requested */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-2xl bg-[#0B2545]/90 backdrop-blur-md text-white font-mono font-bold text-xl flex items-center justify-center shadow-lg border border-white/20 transition-transform group-hover:scale-110">
                      {stepNumber}
                    </div>
                  </div>
                </div>

                {/* RIGHT SIDE: Product Details */}
                <div className="lg:col-span-6 space-y-6 scroll-reveal-right">
                  {/* Step Number & Category */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-3xl font-black text-[#8B1E1E]">
                      {stepNumber}
                    </span>
                    <span className="text-xs uppercase font-mono tracking-widest text-[#0B2545]/60 font-semibold">
                      ADVAY MANUFACTURING SOLUTION
                    </span>
                  </div>

                  {/* Product Title */}
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0B2545] tracking-tight leading-tight section-heading-ltr">
                    {cap.name}
                  </h2>

                  {/* Full Description */}
                  <p className="text-base sm:text-lg text-[#0B2545]/80 leading-relaxed">
                    {cap.description}
                  </p>

                  {/* Key Highlights / Bullets */}
                  {cap.keyPoints && (
                    <div className="space-y-2.5 pt-2">
                      {cap.keyPoints.map((point, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                          </div>
                          <span className="text-sm sm:text-base font-medium text-[#0B2545]/90">
                            {point}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons: Request Quote & More Details */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <button
                      onClick={onOpenQuote}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <span>REQUEST A QUOTE</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => handleOpenDetail(cap)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#0B2545] border border-[#E8E1D3] font-bold text-sm shadow-sm hover:shadow-md transition-all cursor-pointer group"
                    >
                      <span>MORE DETAILS</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#8B1E1E]" />
                    </button>
                  </div>
                </div>
              </div>

              {/* 2-COLOR BRAND ANIMATED LINE UNDER EACH PRODUCT */}
              {idx < CAPABILITIES.length - 1 && (
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

      {/* READY FOR PRODUCTION SECTION (No Box, Content on 1 side, 2 buttons on other side) */}
      <ReadyForProductionSection onOpenQuote={onOpenQuote} />

      {/* Capability Technical Dossier Modal */}
      <CapabilityDetailModal
        capability={selectedCapability}
        onClose={handleCloseDetail}
        onRequestQuote={() => {
          handleCloseDetail();
          onOpenQuote();
        }}
      />
    </div>
  );
};
