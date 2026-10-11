import React, { useState, useRef, useEffect } from "react";
import { PageId } from "../types";
import {
  COMPANY_INFO,
  CAPABILITIES,
  PROCESS_STAGES,
  INFRASTRUCTURE_HIGHLIGHTS,
  INDUSTRIES,
  FAQ_ITEMS,
  WHY_ADVAY_POINTS,
  QUALITY_PILLARS,
} from "../data/companyData";
import { IconRenderer } from "../components/IconRenderer";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { ReadyForProductionSection } from "../components/ReadyForProductionSection";
import { ScrollCounter } from "../components/ScrollCounter";
import { SectionHeader } from "../components/SectionHeader";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Award,
  ShieldCheck,
  Clock,
  Users,
  CheckCircle2,
  UploadCloud,
  Layers,
  Settings,
  Target,
  PenTool,
  Cpu,
} from "lucide-react";

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenQuote }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);
  const [processViewMode, setProcessViewMode] = useState<"scroll" | "grid">("scroll");
  const [activeMachineryIndex, setActiveMachineryIndex] = useState<number>(0);
  const [selectedIndustryId, setSelectedIndustryId] = useState<string>(INDUSTRIES[0]?.id ?? "");
  const stepsContainerRef = useRef<HTMLDivElement>(null);

  const scrollStepsContainer = (direction: "left" | "right") => {
    if (stepsContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      stepsContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const selectAndScrollToStep = (index: number) => {
    setActiveProcessStep(index);
    const container = stepsContainerRef.current;
    const el = document.getElementById(`process-step-btn-${index}`);
    if (container && el) {
      const elLeft = el.offsetLeft;
      const elWidth = el.offsetWidth;
      const containerWidth = container.offsetWidth;
      container.scrollTo({
        left: elLeft - containerWidth / 2 + elWidth / 2,
        behavior: "smooth",
      });
    }
  };

  const activeProcess = PROCESS_STAGES[activeProcessStep] || PROCESS_STAGES[0];
  const activeMachinery =
    INFRASTRUCTURE_HIGHLIGHTS[activeMachineryIndex] || INFRASTRUCTURE_HIGHLIGHTS[0];
  const activeIndustry = INDUSTRIES.find((ind) => ind.id === selectedIndustryId) || INDUSTRIES[0];

  // Pre-warm interactive tab/stage images in browser memory for instantaneous switching
  useEffect(() => {
    const imagesToPrefetch = [
      ...PROCESS_STAGES.map((s) => s.image),
      ...INFRASTRUCTURE_HIGHLIGHTS.map((m) => m.image),
      ...INDUSTRIES.map((i) => i.image),
    ];
    imagesToPrefetch.forEach((src) => {
      if (src) {
        const img = new Image();
        img.src = src;
      }
    });
  }, []);

  if (!activeProcess || !activeMachinery || !activeIndustry) return null;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0B2545]">
        {/* Background Image - Natural with smooth video zoom motion */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={COMPANY_INFO.images.hero}
            alt="Advay Engineers Precision Injection Moulding"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="w-full h-full object-cover object-center filter brightness-100 contrast-105 animate-hero-video-zoom"
            referrerPolicy="no-referrer"
          />
          {/* Neutral dark cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/85" />
        </div>

        {/* Content container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          {/* Top Pill / Badge in Website Brand Colors */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/95 text-[#0B2545] border border-[#E8E1D3] text-xs sm:text-sm font-bold mb-6 shadow-lg animate-float">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8B1E1E] animate-pulse" />
            <span className="tracking-wide">
              {COMPANY_INFO.tagline}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.15] mb-4 drop-shadow-xl animate-heading-side text-white">
            Precision Moulds. Reliable Manufacturing.
          </h1>

          {/* Subheading Bullets */}
          <p className="text-base sm:text-lg lg:text-xl font-bold text-white uppercase tracking-widest mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] animate-heading-side">
            {COMPANY_INFO.bullets}
          </p>

          {/* Description */}
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed mb-10 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            {COMPANY_INFO.description}
          </p>

          {/* Action Buttons: REQUEST A QUOTE and SEND YOUR DRAWING */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95 transition-all cursor-pointer group animate-btn-glow card-shimmer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onOpenQuote}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#0B2545] font-bold text-base shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-95 transition-all cursor-pointer border border-white card-shimmer"
            >
              <UploadCloud className="w-5 h-5 text-[#8B1E1E]" />
              <span>SEND YOUR DRAWING</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="ENGINEERING FROM CONCEPT TO PRODUCTION"
            title="Built Around Precision. Driven by Manufacturing."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual with hover zoom */}
            <div className="lg:col-span-6 scroll-reveal-left">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-xl group bg-slate-100">
                <img
                  src={COMPANY_INFO.images.facility}
                  alt="Advay Engineers Manufacturing Facility"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 sm:h-96 object-cover object-center img-zoom-hover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-6 space-y-6 scroll-reveal-right">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B2545] leading-snug">
                Integrated Engineering &amp; High-Precision Manufacturing
              </h3>
              <p className="text-base sm:text-lg text-[#0B2545]/85 leading-relaxed">
                From initial product development and tooling to mould trials and production, we
                bring engineering and manufacturing together to create dependable, production-ready
                solutions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E8E1D3] shadow-sm box-scroll-reveal card-hover-elevate">
                  <span className="font-mono text-xs font-bold text-[#8B1E1E] uppercase">
                    Core Philosophy
                  </span>
                  <h4 className="font-bold text-[#0B2545] text-base mt-1">Single Ecosystem</h4>
                  <p className="text-xs text-[#0B2545]/70 mt-1">
                    Toolmaking and moulding teams working together under one roof with zero
                    friction.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E8E1D3] shadow-sm box-scroll-reveal card-hover-elevate">
                  <span className="font-mono text-xs font-bold text-[#8B1E1E] uppercase">
                    Manufacturing Focus
                  </span>
                  <h4 className="font-bold text-[#0B2545] text-base mt-1">Repeatable Precision</h4>
                  <p className="text-xs text-[#0B2545]/70 mt-1">
                    Hardened tool steels machined to tight tolerances for dependable million-cycle
                    output.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("about")}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#8B1E1E] hover:text-[#731717] group cursor-pointer"
                >
                  <span>Learn more about our journey &amp; leadership</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR CAPABILITIES SECTION */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="OUR CAPABILITIES"
            title="Integrated Engineering. Complete Manufacturing."
            subtitle="Explore our comprehensive in-house capabilities from precision mould design to high-volume engineering plastic components."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, idx) => {
              const delays = ["", "delay-100", "delay-150", "delay-200", "delay-250", "delay-300"];
              return (
                <div
                  key={cap.id}
                  className={`flex flex-col bg-[#FAF8F5] rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-sm hover:shadow-xl transition-all duration-300 group box-scroll-reveal card-hover-elevate ${delays[idx % 6]}`}
                >
                  <div className="h-44 overflow-hidden relative bg-slate-100">
                    <img
                      src={cap.image}
                      alt={cap.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center img-zoom-hover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-[#0B2545]/90 backdrop-blur-sm text-white text-xs font-mono font-bold">
                      ADVAY
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-[#0B2545] text-base mb-2 group-hover:text-[#8B1E1E] transition-colors leading-snug">
                        {cap.name}
                      </h3>
                      <p className="text-sm text-[#0B2545]/85 line-clamp-3 leading-relaxed mb-4">
                        {cap.description}
                      </p>
                    </div>

                    <button
                      onClick={() => onNavigate("capabilities")}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white hover:bg-[#8B1E1E] text-[#0B2545] hover:text-white font-bold text-xs uppercase tracking-wider border border-[#E8E1D3] hover:border-[#8B1E1E] transition-all cursor-pointer group/btn btn-magnetic"
                    >
                      <span>DETAILS</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PRODUCT DEVELOPMENT (LARGE SEPARATE SECTION) */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="PRODUCT DEVELOPMENT"
            title="From an Idea to a Production-Ready Component."
            subtitle="Translating functional customer requirements into manufacturable, high-precision engineering plastic components."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-6 scroll-reveal-left">
              <p className="text-lg text-[#0B2545] font-semibold leading-relaxed">
                We work with customers from the early stages of product development, helping
                translate functional requirements into manufacturable plastic components.
              </p>
              <p className="text-base text-[#0B2545]/80 leading-relaxed">
                Our engineering approach considers product design, material, tooling feasibility and
                production requirements before manufacturing begins.
              </p>

              <div className="space-y-3.5 pt-2 border-t border-[#E8E1D3]">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B1E1E] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#0B2545]/85 font-medium">
                    Component design evaluation and Design for Manufacturability (DFM)
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B1E1E] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#0B2545]/85 font-medium">
                    Technical resin selection based on operating temperature and mechanical stress
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#8B1E1E] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#0B2545]/85 font-medium">
                    Tooling architecture planning for rapid cycle times and prolonged mold life
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <UploadCloud className="w-4 h-4" />
                  <span>SHARE YOUR DRAWING FOR DFM REVIEW</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-6 scroll-reveal-right">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-xl group bg-slate-200">
                <img
                  src={COMPANY_INFO.images.cadDesign}
                  alt="CAD Product Design & Engineering Development"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 sm:h-96 object-cover object-center img-zoom-hover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#18181B]/95 backdrop-blur-md border border-white/30 text-white flex items-center justify-between shadow-xl">
                  <div>
                    <span className="text-xs font-mono text-white font-extrabold uppercase tracking-wider block mb-0.5">
                      DIGITAL ENGINEERING
                    </span>
                    <p className="text-sm sm:text-base font-extrabold text-white tracking-wide drop-shadow-xs">
                      3D CAD / CAM &amp; Mold Flow Simulation
                    </p>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-[#8B1E1E] text-white text-xs font-mono font-bold shadow-sm">
                    STEP / .XT
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION: FROM CONCEPT TO PRODUCTION */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8E1D3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="FROM CONCEPT TO PRODUCTION"
            title="One Integrated Manufacturing Journey."
            subtitle="From the first idea to final production, every stage is aligned for manufacturability, consistency and dependable output."
          />

          {/* Clean 7 Manufacturing Stages Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
            {PROCESS_STAGES.map((stage, idx) => {
              const isActive = activeProcessStep === idx;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveProcessStep(idx)}
                  className={`p-3.5 sm:p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between shadow-xs card-hover-elevate ${
                    isActive
                      ? "bg-[#0B2545] text-white border-[#0B2545] shadow-lg ring-2 ring-[#8B1E1E]"
                      : "bg-[#FAF8F5] text-[#0B2545] border-[#E8E1D3] hover:border-[#8B1E1E]/50 hover:bg-white"
                  }`}
                >
                  <div
                    className={`font-mono text-xs font-black mb-1.5 ${
                      isActive ? "text-white" : "text-[#8B1E1E]"
                    }`}
                  >
                    STEP {stage.step}
                  </div>
                  <h3
                    className={`text-xs sm:text-sm font-extrabold leading-snug ${
                      isActive ? "text-white" : "text-[#0B2545]"
                    }`}
                  >
                    {stage.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Interactive Stage Detail Box */}
          <div className="rounded-3xl border border-[#E8E1D3] bg-[#FAF8F5] p-6 sm:p-10 shadow-lg overflow-hidden">
            <div
              key={activeProcessStep}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fade-in-scale"
            >
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E1E] text-white text-xs font-mono font-bold">
                  <span>STEP {activeProcess.step} OF 07</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#8B1E1E]">
                  {activeProcess.title}
                </h3>

                <div className="relative w-24 h-1 rounded-full overflow-hidden animate-color-scroll">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
                </div>

                <p className="text-base text-slate-800 leading-relaxed font-normal">
                  {activeProcess.details || activeProcess.description}
                </p>

                {activeProcess.keyDeliverables && (
                  <div className="space-y-2.5 pt-2 border-t border-[#E8E1D3]">
                    <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase">
                      KEY DELIVERABLES &amp; STANDARDS:
                    </span>
                    {activeProcess.keyDeliverables.map((item, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Step Switch Buttons inside the card with exact step names */}
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      const prev = Math.max(0, activeProcessStep - 1);
                      selectAndScrollToStep(prev);
                    }}
                    disabled={activeProcessStep === 0}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-[#E8E1D3] bg-white hover:bg-[#FAF8F5] text-slate-800 text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed shadow-xs transition-all cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>
                      {activeProcessStep > 0
                        ? `Step ${PROCESS_STAGES[activeProcessStep - 1]?.step}: ${PROCESS_STAGES[activeProcessStep - 1]?.title}`
                        : "Beginning (Step 01)"}
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      const next = Math.min(PROCESS_STAGES.length - 1, activeProcessStep + 1);
                      selectAndScrollToStep(next);
                    }}
                    disabled={activeProcessStep === PROCESS_STAGES.length - 1}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white text-xs font-bold disabled:opacity-40 disabled:cursor-not-allowed shadow-sm transition-all cursor-pointer"
                  >
                    <span>
                      {activeProcessStep < PROCESS_STAGES.length - 1
                        ? `Next: Step ${PROCESS_STAGES[activeProcessStep + 1]?.step} ${PROCESS_STAGES[activeProcessStep + 1]?.title}`
                        : "Completed (Step 07)"}
                    </span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-xl group bg-slate-200">
                  <img
                    src={activeProcess.image}
                    alt={activeProcess.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-72 sm:h-96 object-cover object-center img-zoom-hover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#18181B]/95 backdrop-blur-md border border-white/30 text-white flex items-center justify-between shadow-xl">
                    <div>
                      <span className="text-xs font-mono text-white font-extrabold uppercase tracking-wider block mb-0.5">
                        ADVAY WORKFLOW
                      </span>
                      <p className="text-sm sm:text-base font-extrabold text-white">
                        {activeProcess.title}
                      </p>
                    </div>
                    <span className="px-3 py-1.5 rounded-lg bg-[#8B1E1E] text-white text-xs font-mono font-bold shadow-sm">
                      {activeProcess.step}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. MOULD DESIGN & MANUFACTURING */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="MOULD DESIGN & MANUFACTURING"
            title="Engineered for Production."
            subtitle="Our mould development process combines component understanding, tooling design and precision manufacturing to create production-ready injection moulds."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6 scroll-reveal-left">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-xl group bg-slate-100">
                <img
                  src={COMPANY_INFO.images.mouldCore}
                  alt="Precision Injection Mould Tooling"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 sm:h-96 object-cover object-center img-zoom-hover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#18181B]/95 backdrop-blur-md border border-white/30 text-white flex items-center justify-between shadow-xl">
                  <div>
                    <span className="text-xs font-mono text-white font-extrabold uppercase tracking-wider block mb-0.5">
                      TOOLROOM CAPABILITY
                    </span>
                    <p className="text-sm sm:text-base font-extrabold text-white">
                      Multi-Cavity Hardened Tool Steel Core &amp; Cavity Assemblies
                    </p>
                  </div>
                  <span className="px-3 py-1.5 rounded-lg bg-white/20 text-white text-xs font-mono font-bold shadow-sm">
                    IN-HOUSE
                  </span>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-6">
              <p className="text-lg text-slate-900 font-semibold leading-relaxed">
                Each project is developed around the component geometry, material, production
                requirement and expected tool performance.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                We design moulds for thermal stability, uniform filling, and flash-free kiss-off.
                Hardened inserts in DIN 1.2316, P20, and H13 ensure high tool longevity and reliable
                continuous production.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-[#E8E1D3] shadow-xs">
                  <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase block mb-1">
                    Thermal Balance
                  </span>
                  <p className="text-xs text-slate-600">
                    Conformal cooling lines engineered to shorten cycle time and eliminate warping.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-[#E8E1D3] shadow-xs">
                  <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase block mb-1">
                    Kinematic Reliability
                  </span>
                  <p className="text-xs text-slate-600">
                    Precision slider blocks, lifters, and unscrewing thread cores fitted for
                    millions of cycles.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("capabilities")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0B2545] hover:bg-[#081B33] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <span>EXPLORE MOULDING CAPABILITIES</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. ENGINEERING INFRASTRUCTURE / TOOLROOM */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="ENGINEERING INFRASTRUCTURE"
            title="Capability Behind Every Component."
            subtitle="Our integrated manufacturing setup brings mould development, precision machining and injection moulding together under one roof. This allows better coordination between tooling and production, faster problem-solving and greater control across the manufacturing process."
          />

          {/* 1 Line of Machinery Pillars */}
          <div className="flex items-stretch gap-3 overflow-x-auto pb-3 mb-8 scrollbar-none snap-x snap-mandatory">
            {INFRASTRUCTURE_HIGHLIGHTS.map((item, idx) => {
              const isActive = activeMachineryIndex === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveMachineryIndex(idx)}
                  className={`min-w-[180px] sm:min-w-[210px] flex-1 p-3.5 sm:p-4 rounded-xl text-left border transition-all cursor-pointer flex flex-col justify-between snap-start group shrink-0 sm:shrink ${
                    isActive
                      ? "bg-[#0B2545] text-white border-[#0B2545] shadow-lg ring-2 ring-[#8B1E1E]"
                      : "bg-[#FAF8F5] text-[#0B2545] border-[#E8E1D3] hover:border-[#8B1E1E]/50 hover:bg-white"
                  }`}
                >
                  <div className="mb-1.5">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-[11px] font-mono font-extrabold uppercase tracking-wide ${
                        isActive ? "bg-white/20 text-white" : "bg-[#0B2545] text-white"
                      }`}
                    >
                      {item.sub}
                    </span>
                  </div>
                  <h3
                    className={`text-xs sm:text-sm font-extrabold leading-snug line-clamp-2 ${isActive ? "text-white" : "text-[#0B2545]"}`}
                  >
                    {item.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Selected Machinery Showcase */}
          <div className="rounded-3xl border border-[#E8E1D3] bg-[#FAF8F5] p-6 sm:p-10 shadow-lg overflow-hidden">
            <div
              key={activeMachineryIndex}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fade-in-scale"
            >
              <div className="lg:col-span-6 space-y-5">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B2545] text-white text-xs font-mono font-bold shadow-xs">
                  <span>{activeMachinery.sub}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#8B1E1E]">
                  {activeMachinery.title}
                </h3>

                <p className="text-base text-slate-800 leading-relaxed font-medium">
                  {activeMachinery.description}
                </p>

                <div className="p-4 rounded-xl bg-white border border-[#E8E1D3] shadow-xs">
                  <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase block mb-1.5">
                    TECHNICAL SETUP &amp; CAPACITY:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {activeMachinery.detail}
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate("infrastructure")}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B2545] hover:bg-[#081B33] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
                  >
                    <span>VIEW FULL INFRASTRUCTURE SETUP</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-xl group bg-slate-200">
                  <img
                    src={activeMachinery.image}
                    alt={activeMachinery.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-72 sm:h-96 object-cover object-center img-zoom-hover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#18181B]/95 backdrop-blur-md border border-white/30 text-white flex items-center justify-between shadow-xl">
                    <div>
                      <span className="text-xs font-mono text-white font-extrabold uppercase tracking-wider block mb-0.5">
                        {activeMachinery.sub}
                      </span>
                      <p className="text-sm sm:text-base font-extrabold text-white">
                        {activeMachinery.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INDUSTRIES & APPLICATIONS */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="INDUSTRIES & APPLICATIONS"
            title="Engineering Across Diverse Applications."
            subtitle="Our tooling and manufacturing capabilities support a wide range of industrial, commercial and customised product requirements."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* List of Applications */}
            <div className="lg:col-span-5 space-y-2 max-h-[580px] overflow-y-auto pr-1 scrollbar-thin">
              {INDUSTRIES.map((ind) => {
                const isSelected = selectedIndustryId === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustryId(ind.id)}
                    className={`w-full flex items-center justify-between p-3.5 rounded-xl border text-left transition-all cursor-pointer group ${
                      isSelected
                        ? "bg-[#0B2545] text-white border-[#0B2545] shadow-md ring-2 ring-[#8B1E1E]"
                        : "bg-[#FAF8F5] text-[#0B2545] border-[#E8E1D3] hover:border-[#8B1E1E]/40 hover:bg-white"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                          isSelected
                            ? "bg-[#8B1E1E] text-white"
                            : "bg-white text-[#8B1E1E] group-hover:bg-[#8B1E1E] group-hover:text-white"
                        }`}
                      >
                        <IconRenderer name={ind.iconName} className="w-4 h-4" />
                      </div>
                      <span className="font-bold text-xs sm:text-sm truncate">{ind.name}</span>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected
                          ? "text-red-300 translate-x-1"
                          : "text-[#0B2545]/40 group-hover:translate-x-1"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Selected Application Details */}
            <div className="lg:col-span-7">
              <div
                key={selectedIndustryId}
                className="rounded-3xl border border-[#E8E1D3] bg-[#FAF8F5] p-6 sm:p-8 shadow-xl animate-fade-in-scale"
              >
                <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-md mb-6 bg-slate-100 group">
                  <img
                    src={activeIndustry.image}
                    alt={activeIndustry.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-64 sm:h-80 object-cover object-center img-zoom-hover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 p-2.5 rounded-xl bg-white/95 backdrop-blur-md text-[#8B1E1E] shadow-sm flex items-center gap-2">
                    <IconRenderer name={activeIndustry.iconName} className="w-5 h-5" />
                    <span className="text-xs font-mono font-bold text-[#0B2545] uppercase">
                      ADVAY APPLICATION
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545]">
                    {activeIndustry.name}
                  </h3>

                  <p className="text-sm sm:text-base text-[#0B2545]/85 leading-relaxed font-medium">
                    {activeIndustry.description}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-[#E8E1D3]">
                    <span className="text-xs font-mono font-bold text-[#8B1E1E] uppercase block mb-1.5">
                      TYPICAL COMPONENTS &amp; APPLICATIONS:
                    </span>
                    <p className="text-xs sm:text-sm text-[#0B2545] font-semibold leading-relaxed">
                      {activeIndustry.highlightPart}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-3">
                    <button
                      onClick={onOpenQuote}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <span>REQUEST APPLICATION QUOTE</span>
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>

                    <button
                      onClick={() => onNavigate("industries")}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0B2545] hover:bg-[#081B33] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
                    >
                      <span>EXPLORE ALL APPLICATIONS</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. QUALITY & INSPECTION */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="QUALITY & INSPECTION"
            title="Quality Built Into Every Stage."
            subtitle="Quality is integrated throughout our process — from mould development and machining to mould trials, production and final inspection. Our focus is on dimensional consistency, process control and repeatable manufacturing performance."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {QUALITY_PILLARS.map((pillar, idx) => {
              const delays = ["", "delay-100", "delay-150", "delay-200", "delay-250"];
              return (
                <div
                  key={idx}
                  className={`p-6 rounded-2xl bg-white border border-[#E8E1D3] shadow-sm hover:shadow-md transition-shadow box-scroll-reveal card-hover-elevate ${delays[idx % 5]}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3] text-[#8B1E1E] flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                    <IconRenderer name={pillar.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-[#0B2545] text-base mb-2">{pillar.title}</h3>
                  <p className="text-xs text-[#0B2545]/75 leading-relaxed">{pillar.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate("quality")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B2545] hover:bg-[#081B33] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group btn-magnetic"
            >
              <span>VIEW FULL QUALITY &amp; METROLOGY STANDARDS</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 11. WHY ADVAY ENGINEERS */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="WHY ADVAY ENGINEERS"
            title="More Than a Supplier. A Manufacturing Partner."
            subtitle="We work closely with customers from development through production, combining engineering understanding with practical manufacturing support."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_ADVAY_POINTS.map((pt, idx) => {
              const delays = ["", "delay-100", "delay-150", "delay-200", "delay-250", "delay-300"];
              return (
                <div
                  key={idx}
                  className={`p-8 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] shadow-sm hover:shadow-md hover:border-[#8B1E1E]/30 transition-all box-scroll-reveal card-hover-elevate ${delays[idx % 6]}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-[#E8E1D3] text-[#8B1E1E] flex items-center justify-center mb-5 transition-transform hover:scale-110">
                    <IconRenderer name={pt.iconName} className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#0B2545] mb-2">{pt.title}</h3>
                  <p className="text-sm text-[#0B2545]/75 leading-relaxed">{pt.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. ABOUT ADVAY ENGINEERS */}
      <section className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-[#E8E1D3] scroll-reveal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="ABOUT ADVAY ENGINEERS"
            title="Engineering Experience. Manufacturing Focus."
            subtitle="Established in 2016 in Rajkot, Gujarat, combining practical engineering, in-house manufacturing capability and close customer collaboration."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="text-lg text-slate-900 font-semibold leading-relaxed">
                Advay Engineers is focused on precision injection moulds,
                engineering plastic components and customised OEM manufacturing solutions.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Based in Rajkot, Gujarat, we support customers from product development and mould
                design through tooling, trials, injection moulding and repeat production.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                Our approach combines practical engineering, in-house manufacturing capability and
                close customer collaboration to deliver reliable, production-ready solutions.
              </p>

              <div className="p-4 rounded-xl bg-white border border-[#E8E1D3] shadow-xs">
                <span className="font-mono text-xs font-bold text-[#8B1E1E] uppercase block mb-1">
                  Brand Philosophy
                </span>
                <p className="text-base font-bold text-[#8B1E1E]">Redefine Excellence</p>
                <p className="text-sm text-slate-700 mt-1">
                  Reflects our commitment to continuously improving engineering, manufacturing and
                  customer support at every stage.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("about")}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <span>LEARN MORE ABOUT ADVAY</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-[#E8E1D3] shadow-xl group bg-slate-100">
                <img
                  src={COMPANY_INFO.images.aboutHero}
                  alt="Advay Engineers Campus"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-80 sm:h-96 object-cover object-center img-zoom-hover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#18181B]/95 backdrop-blur-md border border-white/30 text-white shadow-xl">
                  <p className="text-sm sm:text-base font-extrabold text-white">
                    Veraval (Shapar), Rajkot, Gujarat, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* 14. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#E8E1D3] scroll-reveal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            kicker="FREQUENTLY ASKED QUESTIONS"
            title="Clear Technical Guidance."
            subtitle="Frequently asked questions about file formats, quotations, tooling feasibility, and OEM manufacturing agreements."
          />

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl border border-[#E8E1D3] bg-[#FAF8F5] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-bold text-base sm:text-lg text-[#0B2545]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border border-[#E8E1D3] flex items-center justify-center text-[#0B2545] transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 bg-[#8B1E1E] text-white border-[#8B1E1E]" : "bg-white"}`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#0B2545]/80 leading-relaxed border-t border-[#E8E1D3]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 15. FINAL CALL TO ACTION (START A PROJECT) */}
      <ReadyForProductionSection onOpenQuote={onOpenQuote} />
    </div>
  );
};
