import React from "react";

const SvgIcon = ({
  maskId,
  maskPath,
  fill = "#000",
  size = 100
}) => {
  const viewBox = "0 0 600 600";
  const hasMask = maskId && maskPath;

  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {hasMask && (
        <defs>
          <mask id={maskId}>
            <rect width="600" height="600" fill="white" />
            <path d={maskPath} fill="black" fillRule="evenodd" />
          </mask>
        </defs>
      )}
      <circle
        cx="300"
        cy="300"
        r="297.5"
        fill={fill}
        mask={hasMask ? `url(#${maskId})` : undefined}
      />
    </svg>
  );
};

export default SvgIcon;
