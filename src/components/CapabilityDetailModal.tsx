import React from "react";
import { DetailedCapability } from "../data/companyData";
import { X, Check, ArrowUpRight, Wrench, Layers } from "lucide-react";

interface CapabilityDetailModalProps {
  capability: DetailedCapability | null;
  onClose: () => void;
  onRequestQuote: (capabilityName: string) => void;
}

export const CapabilityDetailModal: React.FC<CapabilityDetailModalProps> = ({
  capability,
  onClose,
  onRequestQuote,
}) => {
  if (!capability) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#0B2545]/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#E8E1D3] overflow-hidden z-10 my-8 animate-fade-in-scale max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 sm:p-8 border-b border-[#E8E1D3] bg-[#FAF8F5]">
          <div>
            <span className="text-xs uppercase font-mono font-bold text-[#8B1E1E] tracking-wider">
              TECHNICAL SPECIFICATIONS & CAPABILITY DOSSIER
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] mt-1">
              {capability.name}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-10 h-10 rounded-full bg-white border border-[#E8E1D3] flex items-center justify-center text-[#0B2545] hover:text-[#8B1E1E] hover:border-[#8B1E1E] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-8 overflow-y-auto">
          {/* Main Visual & Overview */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            {capability.image && (
              <div className="md:col-span-5 rounded-2xl overflow-hidden border border-[#E8E1D3] h-60 bg-slate-100 group">
                <img
                  src={capability.image}
                  alt={capability.name}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
            <div className={`space-y-3 ${capability.image ? "md:col-span-7" : "md:col-span-12"}`}>
              <p className="text-sm sm:text-base text-[#0B2545]/85 leading-relaxed">
                {capability.description}
              </p>
              {capability.keyPoints && (
                <ul className="space-y-1.5 pt-2">
                  {capability.keyPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[#0B2545]/90"
                    >
                      <Check className="w-4 h-4 text-[#8B1E1E] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Technical Specifications Matrix */}
          {capability.detailedSpecs && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase font-mono text-[#8B1E1E] tracking-wider flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#8B1E1E]" />
                <span>ENGINEERING TOLERANCES & METRICS</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3]">
                  <p className="text-xs uppercase font-mono text-[#0B2545]/80 font-bold">
                    Tool Steel / Machinery
                  </p>
                  <p className="text-sm font-bold text-[#0B2545] mt-1">
                    {capability.detailedSpecs.toolSteel}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3]">
                  <p className="text-xs uppercase font-mono text-[#0B2545]/80 font-bold">
                    Cavity / Tonnage Range
                  </p>
                  <p className="text-sm font-bold text-[#0B2545] mt-1">
                    {capability.detailedSpecs.cavityRange}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3]">
                  <p className="text-xs uppercase font-mono text-[#0B2545]/80 font-bold">
                    Machining Tolerance
                  </p>
                  <p className="text-sm font-bold text-[#8B1E1E] mt-1">
                    {capability.detailedSpecs.tolerance}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3]">
                  <p className="text-xs uppercase font-mono text-[#0B2545]/80 font-bold">
                    Cycle & Production Speed
                  </p>
                  <p className="text-sm font-bold text-[#0B2545] mt-1">
                    {capability.detailedSpecs.cycleTime}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3]">
                  <p className="text-xs uppercase font-mono text-[#0B2545]/80 font-bold">
                    Compatible Polymers
                  </p>
                  <p className="text-sm font-bold text-[#0B2545] mt-1">
                    {capability.detailedSpecs.typicalResins}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3]">
                  <p className="text-xs uppercase font-mono text-[#0B2545]/80 font-bold">
                    Surface Finish Standard
                  </p>
                  <p className="text-sm font-bold text-[#0B2545] mt-1">
                    {capability.detailedSpecs.surfaceFinish}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Typical Industrial Use Cases */}
          {capability.useCases && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase font-mono text-[#8B1E1E] tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#8B1E1E]" />
                <span>SUITABLE PRODUCTION APPLICATIONS</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {capability.useCases.map((useCase, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#FAF8F5] border border-[#E8E1D3]"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B1E1E]" />
                    <span className="text-xs text-[#0B2545] font-medium">{useCase}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-[#E8E1D3] bg-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#0B2545]/70">
            Have a custom requirement for {capability.name}?
          </p>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-lg border border-[#E8E1D3] bg-white text-xs font-bold uppercase tracking-wider text-[#0B2545] hover:bg-slate-50 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(capability.name);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-lg bg-[#8B1E1E] hover:bg-[#A32626] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-md"
            >
              <span>REQUEST QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
