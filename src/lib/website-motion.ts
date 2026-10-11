const revealSelector =
  "h1, h2, h3, .section-heading-ltr, .heading-ltr, .animate-heading-side, .section-line-expand, .heading-scroll-reveal, .heading-scroll-reveal > span, .heading-scroll-reveal > p, .scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-up, .box-scroll-reveal, .card-hover-elevate, .scroll-counter";

/** Progressive enhancement: content stays readable even without observers or animation APIs. */
export function installWebsiteMotion(root: HTMLElement): () => void {
  const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
  const registered = new WeakSet<Element>();
  const animatedSet = new WeakSet<Element>();
  const animations = new Set<Animation>();
  let intersection: IntersectionObserver | undefined;
  let mutations: MutationObserver | undefined;
  let scrollRafId: number | undefined;

  const animate = (element: Element) => {
    if (!(element instanceof HTMLElement)) return;
    if (animatedSet.has(element)) return;
    animatedSet.add(element);

    element.classList.add("is-visible");

    // If a heading-scroll-reveal container enters view, animate its heading and line
    if (element.matches(".heading-scroll-reveal, section")) {
      const headingChildren = element.querySelectorAll<HTMLElement>(
        "h1, h2, h3, .section-heading-ltr, .heading-ltr, .section-line-expand, .heading-scroll-reveal > span, .heading-scroll-reveal > p, .box-scroll-reveal, .card-hover-elevate"
      );
      headingChildren.forEach((child) => animate(child));
      return;
    }

    if (typeof element.animate !== "function") return;

    const isHeadline = element.matches(
      "h1, h2, h3, .section-heading-ltr, .heading-ltr, .animate-heading-side"
    );

    const hasImage =
      element.tagName.toLowerCase() === "img" ||
      element.querySelector("img") !== null;

    let delay = 0;
    let keyframes: Keyframe[];

    if (preference.matches) {
      keyframes = [{ opacity: 0 }, { opacity: 1 }];
    } else if (isHeadline) {
      // Main Headings: smooth Left-to-Right sweep on scroll across the entire website
      keyframes = [
        { opacity: 0, transform: "translateX(-65px)" },
        { opacity: 1, transform: "translateX(0)" },
      ];
      delay = 40;
    } else if (element.matches(".section-line-expand")) {
      // 2-color brand accent line expands horizontally from Left to Right under heading
      element.style.transformOrigin = "left center";
      keyframes = [
        { opacity: 0, transform: "scaleX(0)" },
        { opacity: 1, transform: "scaleX(1)" },
      ];
      delay = 140;
    } else if (element.matches(".heading-scroll-reveal > span, .section-kicker")) {
      // Section badge / kicker comes in from left
      keyframes = [
        { opacity: 0, transform: "translateX(-24px)" },
        { opacity: 1, transform: "translateX(0)" },
      ];
      delay = 0;
    } else if (element.matches(".heading-scroll-reveal > p, .section-subtitle")) {
      // Subtitle description gently fades up
      keyframes = [
        { opacity: 0, transform: "translateY(16px)" },
        { opacity: 1, transform: "translateY(0)" },
      ];
      delay = 120;
    } else if (hasImage) {
      // IMAGES: NEVER shake, jiggle, or slide sideways on scroll!
      // Keep images completely steady and stable with a clean subtle fade
      keyframes = [{ opacity: 0.4 }, { opacity: 1 }];
      delay = 50;
    } else if (
      element.matches(
        ".box-scroll-reveal, .card-hover-elevate, .scroll-reveal-up, [data-card]"
      )
    ) {
      // Cards and sections slide UP from below on scroll as requested
      keyframes = [
        { opacity: 0, transform: "translateY(28px)" },
        { opacity: 1, transform: "translateY(0)" },
      ];
      const siblings = element.parentElement?.querySelectorAll(
        ":scope > .box-scroll-reveal, :scope > .card-hover-elevate, :scope > .scroll-reveal-up"
      );
      if (siblings && siblings.length > 1) {
        delay = Math.min(Array.from(siblings).indexOf(element) * 70, 350);
      } else {
        delay = 60;
      }
    } else if (element.matches(".scroll-counter")) {
      // Numerical statistics & counters rise up
      keyframes = [
        { opacity: 0, transform: "translateY(24px) scale(0.96)" },
        { opacity: 1, transform: "translateY(0) scale(1)" },
      ];
      delay = 80;
    } else {
      // Default: smooth subtle rise up from below
      keyframes = [
        { opacity: 0, transform: "translateY(24px)" },
        { opacity: 1, transform: "translateY(0)" },
      ];
      delay = 40;
    }

    const duration = preference.matches
      ? 500
      : isHeadline
        ? 850
        : element.matches(".section-line-expand")
          ? 750
          : 650;

    const animation = element.animate(keyframes, {
      duration,
      delay,
      easing: "cubic-bezier(0.16, 1, 0.3, 1)",
      fill: "both",
    });
    animations.add(animation);
    animation.onfinish = () => animations.delete(animation);
    animation.oncancel = () => animations.delete(animation);
  };

  const checkVisibleElements = () => {
    if (typeof window === "undefined") return;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    root.querySelectorAll(revealSelector).forEach((element) => {
      if (animatedSet.has(element)) return;
      if (!(element instanceof HTMLElement)) return;

      const rect = element.getBoundingClientRect();
      if (rect.top <= windowHeight - 20 && rect.bottom >= 0) {
        if (typeof intersection?.unobserve === "function") {
          intersection.unobserve(element);
        }
        animate(element);
      }
    });
  };

  const onScrollOrResize = () => {
    if (scrollRafId !== undefined) return;
    scrollRafId = window.requestAnimationFrame(() => {
      scrollRafId = undefined;
      checkVisibleElements();
    });
  };

  if (typeof IntersectionObserver !== "undefined") {
    intersection = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (typeof intersection?.unobserve === "function") {
            intersection.unobserve(entry.target);
          }
          animate(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    );
  }

  const register = () => {
    root.querySelectorAll(revealSelector).forEach((element) => {
      if (registered.has(element)) return;
      registered.add(element);
      intersection?.observe(element);
    });
    checkVisibleElements();
  };
  register();

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });
  }

  if (typeof MutationObserver !== "undefined") {
    mutations = new MutationObserver(register);
    mutations.observe(root, { childList: true, subtree: true });
  }

  return () => {
    intersection?.disconnect();
    mutations?.disconnect();
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (scrollRafId !== undefined) {
        window.cancelAnimationFrame(scrollRafId);
      }
    }
    animations.forEach((animation) => animation.cancel());
    animations.clear();
  };
}