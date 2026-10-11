import React from "react";

interface AnimatedTwoColorLineProps {
  className?: string;
  width?: string;
  height?: string;
  align?: "center" | "left" | "right";
}

/**
 * Animated two-color accent line representing the primary website brand colors:
 * - Brand Deep Navy Blue: #0B2545
 * - Brand Crimson Red: #8B1E1E
 * Features an active luminous light shimmer that sweeps continuously across both colors.
 */
export const AnimatedTwoColorLine: React.FC<AnimatedTwoColorLineProps> = ({
  className = "",
  width = "w-28 sm:w-32",
  height = "h-1.5",
  align = "center",
}) => {
  const alignClass = align === "center" ? "mx-auto" : align === "right" ? "ml-auto" : "mr-auto";

  return (
    <div
      className={`relative ${width} ${height} ${alignClass} rounded-full overflow-hidden animate-color-scroll shadow-xs ${className}`}
      aria-hidden="true"
    >
      {/* Luminous light shimmer wave animating continuously across both colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer" />
    </div>
  );
};
