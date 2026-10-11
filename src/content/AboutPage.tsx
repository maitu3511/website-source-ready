import React from "react";
import { PageId } from "../types";
import { COMPANY_INFO } from "../data/companyData";
import { ReadyForProductionSection } from "../components/ReadyForProductionSection";
import { SectionHeader } from "../components/SectionHeader";
import { Compass, ShieldCheck, Target, ArrowUpRight, Check } from "lucide-react";

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate: _onNavigate, onOpenQuote }) => {
  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* 1. HERO SECTION WITH DEDICATED BACKGROUND IMAGE */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0B2545]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={COMPANY_INFO.images.aboutHero}
            alt="Advay Engineers Engineering Headquarters & Manufacturing Facility"
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-2xl animate-heading-side mb-6 text-white">
            Precision Engineering &amp; Heritage
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-[#F1F5F9] font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Dedicated toolroom engineering, Haad VMC Toolroom Matrix, and turnkey plastic
            injection moulding under one unified roof in Rajkot, Gujarat.
          </p>
        </div>
      </section>

      {/* 2. SECTION 1: COMPANY OVERVIEW & IMAGE */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <SectionHeader
          kicker="WHO WE ARE"
          title="Company Overview &amp; Journey"
          subtitle="Building dependable, high-precision injection tooling and components since 2016."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Side: Company Facility / Shopfloor Image */}
          <div className="lg:col-span-6 scroll-reveal-left">
            <div className="relative rounded-3xl overflow-hidden border border-[#E8E1D3] shadow-xl group bg-slate-100 card-hover-elevate">
              <img
                src={COMPANY_INFO.images.oemCell}
                alt="Advay Engineers Manufacturing Facility Shopfloor"
                className="w-full h-80 sm:h-96 lg:h-[420px] object-cover object-center img-zoom-hover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E1D3] text-[#18181B]">
                <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                  RAJKOT TOOLROOM &amp; PLANT
                </span>
                <p className="text-sm font-semibold">
                  {COMPANY_INFO.address.line2}, Rajkot – {COMPANY_INFO.address.pincode}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Company Overview Details */}
          <div className="lg:col-span-6 space-y-6 scroll-reveal-right">
            <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#8B1E1E]">
              ESTABLISHED IN 2016
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
              Turnkey Plastic Tooling &amp; Precision Components Under One Roof
            </h3>

            <p className="text-base text-[#0B2545]/80 leading-relaxed">
              Established in 2016 in the premier industrial belt of Veraval (Shapar), Rajkot,{" "}
              <strong>Advay Engineers</strong> was built to solve a major industrial bottleneck: the
              friction between third-party mould makers and production injection moulders.
            </p>

            <p className="text-base text-[#0B2545]/75 leading-relaxed">
              By combining high-speed Haas VMC machining, EDM spark erosion, precision surface
              grinding, and automated injection moulding machines in one facility, we offer complete
              end-to-end accountability. From product design review to serial production, your
              tooling never leaves our custody.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#0B2545]">
                  In-house Haas VMC machining and high-grade hardened tool steels
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#0B2545]">
                  Automated injection moulding with closed-loop process parameters
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#8B1E1E]/10 text-[#8B1E1E] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-sm font-semibold text-[#0B2545]">
                  Full customer confidentiality backed by strict bilateral NDAs
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECTION 2: FOUNDER IMAGE & FOUNDER OVERVIEW */}
      <section className="py-20 bg-white border-y border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="LEADERSHIP & EXPERTISE"
            title="Founder Profile &amp; Overview"
            subtitle="Hands-on manufacturing leadership driving technical accuracy and customer satisfaction."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Side: Founder Image */}
            <div className="lg:col-span-5 scroll-reveal-left">
              <div className="relative rounded-3xl overflow-hidden border border-[#E8E1D3] shadow-2xl group bg-slate-100 card-hover-elevate">
                <img
                  src={COMPANY_INFO.founder.image}
                  alt={COMPANY_INFO.founder.name}
                  className="w-full h-96 sm:h-[460px] object-cover object-top img-zoom-hover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#E8E1D3] text-[#18181B]">
                  <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                    FOUNDER &amp; MANAGING DIRECTOR
                  </span>
                  <h3 className="text-xl font-extrabold text-[#18181B]">
                    {COMPANY_INFO.founder.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#8B1E1E]">
                    {COMPANY_INFO.founder.experience}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Founder Overview & Story */}
            <div className="lg:col-span-7 space-y-6 scroll-reveal-right">
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#8B1E1E]">
                FOUNDER'S BACKGROUND
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] tracking-tight">
                Crafting High-Precision Injection Moulds with Technical Mastery
              </h3>

              <p className="text-base sm:text-lg text-[#0B2545]/85 leading-relaxed">
                <strong>{COMPANY_INFO.founder.name}</strong> brings over 15 years of deep hands-on
                expertise in precision toolroom engineering, mould manufacturing, and injection
                moulding operations.
              </p>

              <p className="text-base text-[#0B2545]/75 leading-relaxed">
                {COMPANY_INFO.founder.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] shadow-sm card-hover-elevate">
                  <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                    Engineering Philosophy
                  </span>
                  <h4 className="font-bold text-[#0B2545] text-base mt-1">Tool Life Longevity</h4>
                  <p className="text-xs text-[#0B2545]/70 mt-1">
                    Rigid tool architectures built with certified steels for millions of defect-free
                    cycles.
                  </p>
                </div>
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] shadow-sm card-hover-elevate">
                  <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                    Customer First
                  </span>
                  <h4 className="font-bold text-[#0B2545] text-base mt-1">
                    Direct Engineering Access
                  </h4>
                  <p className="text-xs text-[#0B2545]/70 mt-1">
                    Clients work directly with technical toolmakers, ensuring quick feedback and
                    zero misunderstandings.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <span>CONNECT DIRECTLY WITH KRUNAL ADHVARYU</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. STRATEGIC FOUNDATION (VISION, MISSION & VALUES) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <SectionHeader
          kicker="STRATEGIC FOUNDATION"
          title="Our Vision, Mission &amp; Principles"
          subtitle="Guided by engineering integrity, technological innovation, and lasting partnerships."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-white border border-[#E8E1D3] shadow-sm hover:shadow-md transition-shadow card-hover-elevate box-scroll-reveal">
            <div className="w-12 h-12 rounded-2xl bg-[#0B2545] text-white flex items-center justify-center mb-5 animate-float">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0B2545] mb-3">Our Mission</h3>
            <p className="text-sm text-[#0B2545]/75 leading-relaxed">
              To build high-precision, long-lasting injection tooling and deliver consistent,
              zero-defect plastic components that empower our OEM customers to dominate their
              markets.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E8E1D3] shadow-sm hover:shadow-md transition-shadow card-hover-elevate box-scroll-reveal delay-150">
            <div className="w-12 h-12 rounded-2xl bg-[#8B1E1E] text-white flex items-center justify-center mb-5 animate-float">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B2545] mb-3">Our Vision</h3>
            <p className="text-sm text-[#0B2545]/75 leading-relaxed">
              To be the most trusted injection tooling and contract manufacturing engineering center
              in western India, celebrated for technical excellence and integrity.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E8E1D3] shadow-sm hover:shadow-md transition-shadow card-hover-elevate box-scroll-reveal delay-300">
            <div className="w-12 h-12 rounded-2xl bg-[#0B2545] text-white flex items-center justify-center mb-5 animate-float">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-[#0B2545] mb-3">Core Values</h3>
            <p className="text-sm text-[#0B2545]/75 leading-relaxed">
              Absolute dimensional integrity, total transparency on cycle times and steel
              certificates, and long-term client confidentiality secured under bilateral NDAs.
            </p>
          </div>
        </div>
      </section>

      {/* 5. READY FOR PRODUCTION SECTION */}
      <ReadyForProductionSection onOpenQuote={onOpenQuote} />
    </div>
  );
};
