import { mediaUrl } from "../lib/original-media";
import React from "react";
import { PageId } from "../types";
import { COMPANY_INFO } from "../data/companyData";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

const logoUrl = mediaUrl("/media/branding/advay-engineers-symbol.png");

interface FooterProps {
  onNavigate?: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  const navLinks: { label: string; path: string }[] = [
    { label: "Home", path: "/" },
    { label: "Capabilities", path: "/capabilities" },
    { label: "About", path: "/about" },
    { label: "Application", path: "/applications" },
    { label: "Infrastructure", path: "/infrastructure" },
    { label: "Quality", path: "/quality" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[#FAF8F5] text-[#0B2545] border-t border-[#E8E1D3] pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 4-column footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[minmax(340px,1.4fr)_1fr_1.15fr_1.1fr] gap-12 mb-16">
          {/* Col 1: Brand, Tagline & Description */}
          <div>
            <Link
              to="/"
              preload="intent"
              onClick={handleScrollTop}
              className="flex items-center gap-3 mb-4 group cursor-pointer"
            >
              <img
                src={logoUrl}
                alt="Advay Engineers logo"
                className="w-14 h-14 shrink-0 object-contain"
              />
              <div className="flex flex-col items-start leading-none select-none">
                <span className="text-xl sm:text-2xl font-extrabold tracking-[0.05em] text-[#0B2545] group-hover:text-brand-red transition-colors leading-tight font-sansation whitespace-nowrap">
                  ADVAY ENGINEERS
                </span>
                <div className="w-full h-[1.5px] bg-[#8B1E1E] my-1 rounded-full" />
                <span className="text-[10px] sm:text-xs font-medium tracking-[0.24em] text-[#0B2545] leading-tight font-sansation whitespace-nowrap">
                  Redefine Excellence
                </span>
              </div>
            </Link>

            <p className="text-base font-black text-brand-red uppercase tracking-wider mb-3 leading-snug">
              Precision Injection Moulds • Engineering Plastic Components • OEM Manufacturing
            </p>
            <p className="text-base font-bold text-[#0B2545] leading-relaxed mb-6">
              Rajkot, Gujarat, India. Integrated tooling development, precision CNC machining and
              repeat injection moulding under one unified roof.
            </p>

            {/* Social Media Links with Official Brand Colors */}
            <div>
              <p className="text-sm uppercase tracking-wider text-[#0B2545] font-extrabold mb-3">
                Connect With Us
              </p>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href={COMPANY_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href={COMPANY_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href={COMPANY_INFO.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#0A66C2] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href={COMPANY_INFO.socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#FF0000] flex items-center justify-center text-white hover:scale-110 hover:shadow-lg transition-all"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-[#0B2545] text-lg font-black uppercase tracking-wider mb-5 border-b-2 border-brand-red pb-1.5 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    preload="viewport"
                    onClick={handleScrollTop}
                    className="text-base font-bold text-[#0B2545] hover:text-brand-red transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Manufacturing Capabilities */}
          <div>
            <h4 className="text-[#0B2545] text-lg font-black uppercase tracking-wider mb-5 border-b-2 border-brand-red pb-1.5 inline-block">
              Core Capabilities
            </h4>
            <ul className="space-y-3.5 text-base font-bold text-[#0B2545]">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
                <span>Precision Injection Moulds</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
                <span>Injection Moulding</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
                <span>OEM Manufacturing</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
                <span>Product Development</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-red shrink-0" />
                <span>Custom Plastic Components</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Coordinates */}
          <div>
            <h4 className="text-[#0B2545] text-lg font-black uppercase tracking-wider mb-5 border-b-2 border-brand-red pb-1.5 inline-block">
              Works &amp; Offices
            </h4>
            <div className="space-y-4 text-base text-[#0B2545]">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-0.5" />
                <span className="text-base font-bold leading-relaxed text-[#0B2545]">
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.line2},{" "}
                  {COMPANY_INFO.address.city} – {COMPANY_INFO.address.pincode}, Gujarat, India
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <div className="text-base flex flex-col font-black">
                  <a
                    href={`tel:${COMPANY_INFO.phones[0]?.raw}`}
                    className="text-[#0B2545] hover:text-brand-red transition-colors"
                  >
                    {COMPANY_INFO.phones[0]?.label}
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.phones[1]?.raw}`}
                    className="text-[#0B2545] hover:text-brand-red transition-colors"
                  >
                    {COMPANY_INFO.phones[1]?.label}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-base font-black text-[#0B2545] hover:text-brand-red transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenQuote}
                  className="w-full py-3 px-4 rounded-xl bg-brand-red hover:bg-brand-red-dark text-white text-sm font-bold transition-all text-center cursor-pointer shadow-md hover:shadow-lg"
                >
                  REQUEST A QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and closing line - Crisp and high-contrast */}
        <div className="pt-8 border-t border-[#E8E1D3] text-center space-y-2">
          <p className="text-lg font-black text-[#0B2545] tracking-wide">
            Engineering Precision. Manufacturing Reliability.
          </p>
          <p className="text-base font-extrabold text-[#0B2545]">
            © 2026 {COMPANY_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
