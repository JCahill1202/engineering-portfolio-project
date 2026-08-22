export function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="#22d3ee" strokeWidth="1.2" strokeOpacity="0.5">
          <path d="M0 120 H260 V220 H520" className="animate-pulse-slow" />
          <path d="M1200 200 H900 V60 H620" className="animate-pulse-slow" style={{ animationDelay: "0.6s" }} />
          <path d="M0 500 H180 V620 H460 V700" className="animate-pulse-slow" style={{ animationDelay: "1.2s" }} />
          <path d="M1200 620 H960 V480 H700" className="animate-pulse-slow" style={{ animationDelay: "1.8s" }} />
        </g>
        <g fill="#22d3ee" fillOpacity="0.8">
          <circle cx="260" cy="120" r="4" />
          <circle cx="520" cy="220" r="4" />
          <circle cx="900" cy="200" r="4" />
          <circle cx="620" cy="60" r="4" />
          <circle cx="180" cy="500" r="4" />
          <circle cx="460" cy="700" r="4" />
          <circle cx="960" cy="620" r="4" />
          <circle cx="700" cy="480" r="4" />
        </g>
      </svg>
      <div className="absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
    </div>
  );
}
