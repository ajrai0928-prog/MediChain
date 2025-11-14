import React, { useEffect, useRef } from "react";

/**
 * BackgroundDNA.jsx
 * - Premium animated DNA lab scene (EXTREME)
 * - Pure SVG + CSS + small mouse parallax
 * - No external assets
 */
export default function BackgroundDNA() {
  const containerRef = useRef(null);
  const parallaxRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    function onMove(e) {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const dx = (mouseX - cx) / rect.width;
      const dy = (mouseY - cy) / rect.height;
      parallaxRef.current = { x: dx * 14, y: dy * 10 };
      // apply simple transforms to groups (throttled by requestAnimationFrame)
      requestAnimationFrame(() => {
        const g1 = el.querySelector(".dna-group-1");
        const g2 = el.querySelector(".dna-group-2");
        const g3 = el.querySelector(".dna-group-3");
        if (g1) g1.style.transform = `translate(${parallaxRef.current.x * 0.6}px, ${parallaxRef.current.y * 0.6}px)`;
        if (g2) g2.style.transform = `translate(${parallaxRef.current.x * -0.5}px, ${parallaxRef.current.y * -0.5}px)`;
        if (g3) g3.style.transform = `translate(${parallaxRef.current.x * 0.9}px, ${parallaxRef.current.y * 0.2}px)`;
      });
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-dna-scene absolute inset-0 -z-20 overflow-hidden pointer-events-none">
      <div className="dna-fog-layer" aria-hidden />

      {/* Main SVG - three DNA helices and soft glow layers */}
      <svg
        className="dna-hero-svg"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <defs>
          <linearGradient id="lgA" x1="0" x2="1">
            <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.12" />
            <stop offset="60%" stopColor="#58e6d6" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2eaaff" stopOpacity="0.06" />
          </linearGradient>

          <linearGradient id="lgB" x1="0" x2="1">
            <stop offset="0%" stopColor="#4ee2c9" stopOpacity="0.08" />
            <stop offset="60%" stopColor="#6ad2ff" stopOpacity="0.14" />
            <stop offset="100%" stopColor="#2eaaff" stopOpacity="0.04" />
          </linearGradient>

          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="20" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="tinyBlur">
            <feGaussianBlur stdDeviation="6" />
          </filter>
        </defs>

        {/* left helix group */}
        <g className="dna-group dna-group-1">
          <path
            className="dna-curve dna-curve-1"
            d="M270 60 C 230 140, 330 200, 270 280
               C 210 360, 330 420, 270 500
               C 210 580, 330 640, 270 720
               C 210 800, 330 860, 270 940"
            fill="none"
            stroke="url(#lgA)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ mixBlendMode: "screen", opacity: 0.95 }}
          />
          {/* nodes */}
          <g className="dna-nodes">
            <circle cx="270" cy="60" r="6.8" className="node node-a" />
            <circle cx="270" cy="280" r="6.8" className="node node-a" />
            <circle cx="270" cy="500" r="6.8" className="node node-a" />
            <circle cx="270" cy="720" r="6.8" className="node node-a" />
            <circle cx="270" cy="940" r="6.8" className="node node-a" />
          </g>
        </g>

        {/* center helix group */}
        <g className="dna-group dna-group-2">
          <path
            className="dna-curve dna-curve-2"
            d="M800 20 C 740 100, 860 160, 800 240
               C 740 320, 860 380, 800 460
               C 740 540, 860 600, 800 680
               C 740 760, 860 820, 800 900"
            fill="none"
            stroke="url(#lgB)"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ mixBlendMode: "screen", opacity: 0.98 }}
          />
          <g className="dna-nodes">
            <circle cx="800" cy="20" r="7" className="node node-b" />
            <circle cx="800" cy="240" r="7" className="node node-b" />
            <circle cx="800" cy="460" r="7" className="node node-b" />
            <circle cx="800" cy="680" r="7" className="node node-b" />
            <circle cx="800" cy="900" r="7" className="node node-b" />
          </g>
        </g>

        {/* right helix group */}
        <g className="dna-group dna-group-3">
          <path
            className="dna-curve dna-curve-3"
            d="M1330 120 C 1290 200, 1370 260, 1330 340
               C 1290 420, 1370 480, 1330 560
               C 1290 640, 1370 700, 1330 780
               C 1290 860, 1370 920, 1330 1000"
            fill="none"
            stroke="url(#lgA)"
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ mixBlendMode: "screen", opacity: 0.9 }}
          />
          <g className="dna-nodes">
            <circle cx="1330" cy="120" r="6.6" className="node node-c" />
            <circle cx="1330" cy="340" r="6.6" className="node node-c" />
            <circle cx="1330" cy="560" r="6.6" className="node node-c" />
            <circle cx="1330" cy="780" r="6.6" className="node node-c" />
            <circle cx="1330" cy="1000" r="6.6" className="node node-c" />
          </g>
        </g>

        {/* subtle scanning beam */}
        <rect x="-50" y="200" width="1700" height="120" className="scan-beam" />
      </svg>

      {/* foreground particles (separate DOM for performant blurs) */}
      <div className="dna-particles" aria-hidden>
        <div className="p p1" />
        <div className="p p2" />
        <div className="p p3" />
        <div className="p p4" />
        <div className="p p5" />
        <div className="p p6" />
        <div className="p p7" />
      </div>
    </div>
  );
}
