const SvgIcon = ({ maskPaths = [], fill = "#000", maskId = "icon-mask" }) => (
    <svg viewBox="0 0 32 32" width="100%" height="100%">
        <defs>
            <mask id={maskId}>
                <rect width="32" height="32" fill="black" />
                <circle cx="16" cy="16" r="15" fill="white" />
                <g transform="translate(8, 8)">
                    {maskPaths.map((d, i) => (
                        <path key={i} d={d} fill="black" />
                    ))}
                </g>
            </mask>
        </defs>
        <circle
            cx="16"
            cy="16"
            r="15"
            fill={fill}
            mask={`url(#${maskId})`}
        />
    </svg>
);

export default SvgIcon;