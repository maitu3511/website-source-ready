import { mediaUrl } from "../lib/original-media";
import React, { useState, useEffect } from "react";
import { PageId } from "../types";
import { Link } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight } from "lucide-react";

const logoUrl = mediaUrl("/media/branding/advay-engineers-symbol.png");

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: { id: PageId; label: string; path: string }[] = [
    { id: "home", label: "Home", path: "/" },
    { id: "capabilities", label: "Capabilities", path: "/capabilities" },
    { id: "about", label: "About", path: "/about" },
    { id: "applications", label: "Application", path: "/applications" },
    { id: "infrastructure", label: "Infrastructure", path: "/infrastructure" },
    { id: "quality", label: "Quality", path: "/quality" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-md border-[#E5DFD3] shadow-md"
          : "bg-[#FAF8F5] border-[#E8E1D3]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Wordmark Branding */}
          <Link
            to="/"
            preload="viewport"
            onClick={handleLinkClick}
            className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
          >
            <img
              src={logoUrl}
              alt="Advay Engineers logo"
              className="w-14 h-14 shrink-0 object-contain"
            />
            <div className="flex flex-col items-start leading-none select-none">
              <span className="text-xl sm:text-2xl font-extrabold tracking-[0.05em] text-[#0B2545] group-hover:text-[#8B1E1E] transition-colors leading-tight font-sansation whitespace-nowrap">
                ADVAY ENGINEERS
              </span>
              <div className="w-full h-[1.5px] bg-[#8B1E1E] my-1 rounded-full" />
              <span className="text-[10px] sm:text-xs font-medium tracking-[0.24em] text-[#0B2545] leading-tight font-sansation whitespace-nowrap">
                Redefine Excellence
              </span>
            </div>
          </Link>

          {/* Navigation Links with animated hover indicator */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <Link
                  key={item.id}
                  to={item.path}
                  preload="viewport"
                  onClick={handleLinkClick}
                  className={`relative py-1 text-sm xl:text-base tracking-wide transition-all duration-200 cursor-pointer whitespace-nowrap font-bold ${
                    isActive
                      ? "text-[#8B1E1E] scale-105"
                      : "text-[#0B2545] hover:text-[#8B1E1E] hover:-translate-y-0.5"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B1E1E] rounded-full animate-fade-in" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Visible Header Action CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenQuote}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold text-[#FAF8F5] bg-[#0B2545] hover:bg-[#8B1E1E] rounded-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap cursor-pointer"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-[#FAF8F5]" />
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#0B2545] hover:bg-[#F3EFE6] rounded-lg transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAF8F5] border-b border-[#E8E1D3] px-4 pt-3 pb-6 space-y-1 shadow-lg animate-fade-in-down">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <Link
                key={item.id}
                to={item.path}
                preload="intent"
                onClick={handleLinkClick}
                className={`w-full flex items-center justify-between px-3 py-2.5 text-base font-bold rounded-lg text-left transition-colors cursor-pointer ${
                  isActive ? "bg-[#F3EFE6] text-[#8B1E1E]" : "text-[#0B2545] hover:bg-[#F3EFE6]"
                }`}
              >
                <span>{item.label}</span>
                {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#8B1E1E]" />}
              </Link>
            );
          })}
          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-bold text-[#FAF8F5] bg-[#0B2545] hover:bg-[#8B1E1E] rounded-lg transition-colors cursor-pointer shadow-sm"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-4 h-4 text-[#FAF8F5]" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
