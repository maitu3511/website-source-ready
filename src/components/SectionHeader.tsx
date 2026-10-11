import React from "react";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  className?: string;
  titleColor?: string;
  kickerColor?: string;
  subtitleColor?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  subtitle,
  className = "mb-16",
  titleColor = "text-[#0B2545]",
  kickerColor = "text-[#8B1E1E]",
  subtitleColor = "text-[#0B2545]/75",
}) => {
  return (
    <div className={`text-center max-w-3xl mx-auto px-4 ${className} heading-scroll-reveal`}>
      {/* Centered Kicker / Category Badge */}
      {kicker && (
        <span
          className={`inline-block text-xs uppercase font-mono font-bold tracking-widest ${kickerColor} mb-2`}
        >
          {kicker}
        </span>
      )}

      {/* Main Heading with Left-to-Right Entrance Animation */}
      <h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mt-1 section-heading-ltr ${titleColor}`}
      >
        {title}
      </h2>

      {/* Sleek 2-Color Brand Animated Accent Line Under Heading (Colors scroll continuously across the line, expands left-to-right on scroll) */}
      <div className="relative w-28 sm:w-32 h-1.5 mx-auto mt-3.5 mb-6 rounded-full overflow-hidden animate-color-scroll shadow-xs section-line-expand">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/75 to-transparent animate-shimmer" />
      </div>

      {/* Centered Subheading Description */}
      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${subtitleColor}`}>{subtitle}</p>
      )}
    </div>
  );
};
