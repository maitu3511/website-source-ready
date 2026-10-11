import React, { useState, useEffect, useRef } from "react";

interface ScrollCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
  pauseDuration?: number;
}

export const ScrollCounter: React.FC<ScrollCounterProps> = ({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
  duration = 1800,
  pauseDuration = 2000,
  className = "",
}) => {
  const [count, setCount] = useState<number>(0);
  const [isPausedAtTarget, setIsPausedAtTarget] = useState<boolean>(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isCancelled = false;
    let animationFrameId: number | null = null;
    let pauseTimer: ReturnType<typeof setTimeout> | null = null;
    let isRunning = false;

    const startCycle = () => {
      if (isCancelled) return;
      isRunning = true;
      setIsPausedAtTarget(false);
      let startTime: number | null = null;

      const step = (currentTime: number) => {
        if (isCancelled) return;
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Smooth cubic ease out curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = easeOut * target;
        setCount(currentVal);

        if (progress < 1) {
          animationFrameId = requestAnimationFrame(step);
        } else {
          // Reached target: stop and hold
          setCount(target);
          setIsPausedAtTarget(true);

          // After stopping at the target for pauseDuration, restart the scroll from 0!
          pauseTimer = setTimeout(() => {
            if (!isCancelled) {
              setCount(0);
              // Brief 150ms reset pause before scrolling up again
              setTimeout(() => {
                if (!isCancelled) {
                  startCycle();
                }
              }, 150);
            }
          }, pauseDuration);
        }
      };

      animationFrameId = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          if (!isRunning) {
            startCycle();
          }
        } else {
          // Optional: pause if scrolled out of view
        }
      },
      { threshold: 0.15 },
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      isCancelled = true;
      isRunning = false;
      observer.disconnect();
      if (animationFrameId !== null) cancelAnimationFrame(animationFrameId);
      if (pauseTimer !== null) clearTimeout(pauseTimer);
    };
  }, [target, duration, pauseDuration]);

  const formattedValue =
    decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toLocaleString("en-US");

  return (
    <div
      ref={elementRef}
      suppressHydrationWarning
      className={`tabular-nums inline-flex items-center justify-center transition-all duration-300 ${isPausedAtTarget ? "scale-[1.03]" : "scale-100"} ${className}`}
    >
      {prefix}
      <span suppressHydrationWarning>{formattedValue}</span>
      {suffix}
    </div>
  );
};
