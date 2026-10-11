import React from "react";
import { COMPANY_INFO } from "../data/companyData";
import { ArrowUpRight, UploadCloud, Phone } from "lucide-react";

interface ReadyForProductionProps {
  onOpenQuote: () => void;
}

export const ReadyForProductionSection: React.FC<ReadyForProductionProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 sm:py-24 border-t border-[#E8E1D3] bg-[#FAF8F5] scroll-reveal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split 2-Column Layout: Content on 1 Side, 2 Buttons on the other Side */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT SIDE: Content */}
          <div className="lg:col-span-7 space-y-4 scroll-reveal-left">
            <span className="inline-block text-xs uppercase font-mono font-bold tracking-widest text-[#8B1E1E]">
              START A PROJECT
            </span>

            {/* Main Heading with Left-to-Right Entrance Animation */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0B2545] tracking-tight animate-heading-side">
              Have a Component, Mould or OEM Requirement?
            </h2>

            {/* Sleek 2-Color Brand Animated Line (#0B2545 Blue to #8B1E1E Red) */}
            <div className="relative w-28 sm:w-32 h-1.5 rounded-full overflow-hidden animate-color-scroll shadow-xs section-line-expand">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
            </div>

            {/* Content text specified by user */}
            <p className="text-base sm:text-lg text-[#0B2545]/85 leading-relaxed pt-1">
              Share your drawing, component requirement or project brief with our engineering team.
            </p>
            <p className="text-base sm:text-lg text-[#0B2545]/75 leading-relaxed">
              We’ll review the application, manufacturing requirements and production expectations
              to understand the right way forward.
            </p>
          </div>

          {/* RIGHT SIDE: 2 Buttons + Speak to team note */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-center lg:items-end scroll-reveal-right">
            {/* Button 1: SEND YOUR DRAWING */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-xl transform hover:-translate-y-1 active:scale-95 transition-all cursor-pointer group w-full sm:w-auto min-w-[220px] card-shimmer"
            >
              <UploadCloud className="w-4 h-4 text-white" />
              <span>SEND YOUR DRAWING</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Button 2: REQUEST A QUOTE */}
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B2545] hover:bg-[#081B33] text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-xl transform hover:-translate-y-1 active:scale-95 transition-all cursor-pointer group w-full sm:w-auto min-w-[220px] card-shimmer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Speak with our team link */}
            <a
              href={`tel:${COMPANY_INFO.phones[0]?.raw}`}
              className="inline-flex items-center gap-2 text-xs font-bold text-[#0B2545]/80 hover:text-[#8B1E1E] transition-colors mt-1"
            >
              <Phone className="w-3.5 h-3.5 text-[#8B1E1E]" />
              <span>
                Or speak with our team about your project requirements:{" "}
                {COMPANY_INFO.phones[0]?.label}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
