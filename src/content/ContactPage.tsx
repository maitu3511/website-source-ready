import React, { useState } from "react";
import { PageId } from "../types";
import { COMPANY_INFO } from "../data/companyData";
import { ReadyForProductionSection } from "../components/ReadyForProductionSection";
import { Phone, Mail, MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { WhatsAppIcon } from "../components/WhatsAppIcon";
import contactHeroImg from "../assets/contact-hero.jpg";

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate: _onNavigate,
  onOpenQuote,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Precision Injection Moulds",
    quantity: "",
    message: "",
  });
  const [uploadedFileName, setUploadedFileName] = useState("");
  const [fileError, setFileError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const ALLOWED_DRAWING_EXTENSIONS = ["step", "stp", "iges", "igs", "pdf", "dwg", "dxf", "zip"];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!ext || !ALLOWED_DRAWING_EXTENSIONS.includes(ext)) {
      setFileError(
        "Invalid format! Only STEP, STP, IGES, IGS, PDF, DWG, DXF, and ZIP formats are allowed.",
      );
      e.target.value = "";
      setUploadedFileName("");
      return;
    }

    setFileError(null);
    setUploadedFileName(file.name);
  };

  const handleRemoveFile = (e: React.MouseEvent) => {
    e.stopPropagation();
    setFileError(null);
    setUploadedFileName("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fileError) return;

    const whatsappNumber = "919979043224";
    const text = `*NEW INQUIRY / RFQ - ADVAY ENGINEERS*
----------------------------------------
*Name:* ${formData.name}
*Company:* ${formData.company || "N/A"}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Est. Quantity:* ${formData.quantity || "N/A"}
*Message / Requirements:* ${formData.message}${uploadedFileName ? `\n*Drawing/CAD Attached:* ${uploadedFileName}` : ""}
----------------------------------------`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    // Instantly launch WhatsApp with filled message
    const link = document.createElement("a");
    link.href = whatsappUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setSubmitted(true);
  };

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      {/* 1. HERO SECTION WITH DEDICATED BACKGROUND IMAGE */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-[#0B2545]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src={contactHeroImg}
            alt="Contact Advay Engineers"
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="w-full h-full object-cover object-center filter brightness-100 contrast-105 animate-hero-video-zoom"
            referrerPolicy="no-referrer"
          />
          {/* Neutral dark cinematic overlay (No heavy blue color cast, factory works remains fully visible and natural) */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/80" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-white">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 text-[#0B2545] border border-[#E8E1D3] text-xs font-mono font-bold tracking-widest uppercase mb-4 shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#8B1E1E] animate-pulse" />
            <span>DIRECT FACTORY INQUIRIES &amp; CONTACT</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight drop-shadow-2xl animate-heading-side mb-6 text-white">
            Contact Advay Engineers
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg lg:text-xl text-[#F1F5F9] font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Send your 2D/3D component drawings (STEP, IGES, DXF) for mould feasibility reviews,
            toolmaking quotes, and OEM production schedule discussions.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT DETAILS & RFQ FORM */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Factory Coordinates */}
          <div className="lg:col-span-5 space-y-8 scroll-reveal-left">
            <div>
              <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#8B1E1E]">
                REGISTERED TOOLROOM WORKS
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] mt-1 mb-4 section-heading-ltr">
                Rajkot Engineering Facility
              </h2>
              <p className="text-sm sm:text-base text-[#0B2545]/75 leading-relaxed">
                You are welcome to visit our toolroom in Veraval (Shapar), Rajkot to inspect active
                mould builds, Haas VMC machining centers, and sample trial components.
              </p>
            </div>

            {/* Coordinates Card */}
            <div className="space-y-6 p-8 rounded-3xl bg-white border border-[#E8E1D3] shadow-md card-hover-elevate">
              {/* Works & Toolroom Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] text-[#8B1E1E] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B1E1E]">
                    Works &amp; Toolroom
                  </h3>
                  <p className="text-sm font-semibold text-[#0B2545] mt-1 leading-snug">
                    {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2},{" "}
                    {COMPANY_INFO.address.city} – {COMPANY_INFO.address.pincode},{" "}
                    {COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}
                  </p>
                </div>
              </div>

              {/* Direct Phone Lines */}
              <div className="flex items-start gap-4 border-t border-[#E8E1D3] pt-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] text-[#0B2545] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B1E1E]">
                    Direct Phone Lines
                  </h3>
                  <div className="space-y-1 mt-1 text-sm font-bold text-[#0B2545]">
                    <a
                      href={`tel:${COMPANY_INFO.phones[0]?.raw}`}
                      className="block hover:text-[#8B1E1E] transition-colors"
                    >
                      {COMPANY_INFO.phones[0]?.label} (Engineering &amp; Sales)
                    </a>
                    <a
                      href={`tel:${COMPANY_INFO.phones[1]?.raw}`}
                      className="block hover:text-[#8B1E1E] transition-colors"
                    >
                      {COMPANY_INFO.phones[1]?.label} (Toolroom Works)
                    </a>
                  </div>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-4 border-t border-[#E8E1D3] pt-6">
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#E8E1D3] text-[#0B2545] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B1E1E]">
                    Official Email
                  </h3>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="block text-sm font-bold text-[#0B2545] hover:text-[#8B1E1E] transition-colors mt-1"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="border-t border-[#E8E1D3] pt-6">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Advay%20Engineers,%20I%20have%20an%20inquiry%20regarding%20injection%20moulding%20and%20tooling.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct RFQ Form */}
          <div className="lg:col-span-7 scroll-reveal-right delay-150">
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E8E1D3] shadow-xl card-hover-elevate">
              <div className="mb-8">
                <span className="text-xs uppercase font-mono font-bold tracking-widest text-[#8B1E1E]">
                  START A PROJECT
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0B2545] mt-1 section-heading-ltr">
                  Let’s Discuss Your Requirement.
                </h3>
                <p className="text-xs sm:text-sm text-[#0B2545]/80 mt-2 leading-relaxed">
                  Send us your component drawing, mould requirement or manufacturing brief. Our team
                  will review the project and connect with you regarding the next steps.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-[#FAF8F5] border border-emerald-300 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0B2545]">
                    Requirement Submitted Successfully!
                  </h4>
                  <p className="text-sm text-[#0B2545]/80 max-w-md mx-auto">
                    Thank you, <strong>{formData.name}</strong>. Our engineering team at Advay
                    Engineers will review your technical specifications and contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block mt-4 text-xs font-bold text-[#8B1E1E] hover:underline cursor-pointer"
                  >
                    Submit another requirement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#0B2545] mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E1D3] bg-[#FAF8F5] text-sm text-[#0B2545] focus:outline-none focus:border-[#8B1E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#0B2545] mb-1.5">
                        Company *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E1D3] bg-[#FAF8F5] text-sm text-[#0B2545] focus:outline-none focus:border-[#8B1E1E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#0B2545] mb-1.5">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E1D3] bg-[#FAF8F5] text-sm text-[#0B2545] focus:outline-none focus:border-[#8B1E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#0B2545] mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 Phone number"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E1D3] bg-[#FAF8F5] text-sm text-[#0B2545] focus:outline-none focus:border-[#8B1E1E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#0B2545] mb-1.5">
                        Product / Project Requirement
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E1D3] bg-[#FAF8F5] text-sm text-[#0B2545] focus:outline-none focus:border-[#8B1E1E]"
                      >
                        <option>Precision Injection Moulds</option>
                        <option>Injection Moulding</option>
                        <option>OEM Manufacturing</option>
                        <option>Product Development</option>
                        <option>Custom Plastic Components</option>
                        <option>Thin-Wall Enclosures &amp; Boxes</option>
                        <option>Jewellery Packaging &amp; Storage Boxes</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#0B2545] mb-1.5">
                        Material
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. PA66, POM, PC, ABS, PP, PBT"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E1D3] bg-[#FAF8F5] text-sm text-[#0B2545] focus:outline-none focus:border-[#8B1E1E]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#0B2545] mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g. 5,000 - 50,000 pcs / Tool only"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E1D3] bg-[#FAF8F5] text-sm text-[#0B2545] focus:outline-none focus:border-[#8B1E1E]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-bold uppercase text-[#0B2545] mb-1.5">
                        Project Timeline
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Immediate / 1-2 Months"
                        className="w-full px-4 py-3 rounded-xl border border-[#E8E1D3] bg-[#FAF8F5] text-sm text-[#0B2545] focus:outline-none focus:border-[#8B1E1E]"
                      />
                    </div>
                  </div>

                  {/* Drawing Upload */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase text-[#0B2545] mb-1.5">
                      Drawing Upload (STEP, STP, IGES, IGS, PDF, DWG, DXF, ZIP)
                    </label>
                    <div
                      className={`border-2 border-dashed rounded-xl p-4 text-center cursor-pointer transition-colors ${
                        fileError
                          ? "border-red-500 bg-red-50/40"
                          : uploadedFileName
                            ? "border-[#0B2545] bg-emerald-50/30"
                            : "border-[#E8E1D3] hover:border-[#8B1E1E] bg-[#FAF8F5]"
                      }`}
                    >
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        accept=".step,.stp,.iges,.igs,.pdf,.dwg,.dxf,.zip"
                        id="contact-file-upload"
                        className="hidden"
                      />
                      {uploadedFileName ? (
                        <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#0B2545]">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                          <span className="font-mono text-emerald-900 font-bold">
                            Attached: {uploadedFileName}
                          </span>
                          <button
                            type="button"
                            onClick={handleRemoveFile}
                            className="ml-2 text-xs text-red-600 hover:text-red-800 underline font-mono cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                      ) : (
                        <label htmlFor="contact-file-upload" className="cursor-pointer block">
                          <span className="text-sm font-bold text-[#8B1E1E] block">
                            Click to upload 2D/3D component drawing
                          </span>
                          <span className="text-xs sm:text-sm text-[#0B2545]/80 font-medium mt-1 block">
                            Accepted formats: STEP / STP, IGES / IGS, PDF, DWG, DXF, ZIP
                          </span>
                        </label>
                      )}
                    </div>
                    {fileError && (
                      <p className="text-xs text-red-600 font-medium mt-1.5 flex items-center gap-1">
                        <span>⚠️</span>
                        <span>{fileError}</span>
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-mono font-bold uppercase text-[#0B2545] mb-1.5">
                      Message / Project Notes *
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your component application, tolerances, or specific tooling requirements."
                      className="w-full px-4 py-3 rounded-xl border border-[#E8E1D3] bg-[#FAF8F5] text-sm text-[#0B2545] focus:outline-none focus:border-[#8B1E1E]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 py-4 rounded-xl bg-[#8B1E1E] hover:bg-[#731717] text-white font-bold text-base shadow-xl hover:shadow-2xl transition-all cursor-pointer group"
                  >
                    <span>SUBMIT YOUR REQUIREMENT</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs sm:text-sm text-[#0B2545]/80 font-medium text-center pt-1">
                    Your drawings and specifications are protected under strict NDA confidentiality.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. GOOGLE MAPS SECTION (Embedded interactive map as requested) */}
      <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-reveal">
        <div className="rounded-3xl overflow-hidden border border-[#E8E1D3] shadow-xl bg-white p-6 sm:p-8">
          <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#8B1E1E]">
                INTERACTIVE FACTORY LOCATION MAP
              </span>
              <h3 className="text-2xl font-extrabold text-[#0B2545] mt-1 animate-heading-side">
                Advay Engineers Works &amp; Toolroom
              </h3>
              <div className="relative w-24 h-1.5 rounded-full overflow-hidden my-2 animate-color-scroll shadow-xs">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
              </div>
              <p className="text-sm text-[#0B2545]/70 mt-0.5">
                {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2},{" "}
                {COMPANY_INFO.address.city} – {COMPANY_INFO.address.pincode}
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=Veraval+Shapar+Rajkot+Essen+Road+360024"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0B2545] hover:bg-[#8B1E1E] text-white text-xs font-bold transition-all shadow-md shrink-0 group"
            >
              <MapPin className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              <span>OPEN IN GOOGLE MAPS</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="rounded-2xl overflow-hidden h-80 sm:h-[420px] border border-[#E8E1D3] bg-slate-100">
            <iframe
              title="Advay Engineers Google Maps Location"
              src="https://maps.google.com/maps?q=Essen%20Road,%20Veraval,%20Shapar,%20Rajkot,%20Gujarat%20360024&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* 4. READY FOR PRODUCTION SECTION (No Box, 1 Side Content, Facing 2 Buttons) */}
      <ReadyForProductionSection onOpenQuote={onOpenQuote} />
    </div>
  );
};
