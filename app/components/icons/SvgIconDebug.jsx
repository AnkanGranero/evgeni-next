import React from "react";

const SvgIconDebug = ({ maskId, maskPath, size = 100 }) => {
  const viewBox = "0 0 600 600";
  const fill = "#000";

  return (
    <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
      {/* MASK-version */}
      <svg width={size} height={size} viewBox={viewBox}>
        <defs>
          <mask id={`${maskId}-mask`}>
            <rect width="600" height="600" fill="white" />
            <path d={maskPath} fill="black" fillRule="evenodd" />
          </mask>
        </defs>
        <circle
          cx="300"
          cy="300"
          r="297.5"
          fill={fill}
          mask={`url(#${maskId}-mask)`}
        />
      </svg>

      {/* CLIP-PATH-version */}
      <svg width={size} height={size} viewBox={viewBox}>
        <defs>
          <clipPath id={`${maskId}-clip`}>
            <path d={maskPath} />
          </clipPath>
        </defs>
        <circle
          cx="300"
          cy="300"
          r="297.5"
          fill={fill}
          clipPath={`url(#${maskId}-clip)`}
        />
      </svg>
    </div>
  );
};

export default SvgIconDebug;