
export default function BlobSvg({ className = "" }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1920 1080" 
            className={className} 
            preserveAspectRatio="xMidYMid meet"
        >
            <g transform="translate(1475.681466277218 55.99117359920757)">
                <defs>
                    <linearGradient id="orangeGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#f97316" /> {/* orange-500 */}
                        <stop offset="50%" stopColor="#fb923c" /> {/* orange-400 */}
                        <stop offset="100%" stopColor="#facc15" /> {/* yellow-400 */}
                    </linearGradient>
                </defs>
                <path 
                    d="M662 -908.2C854.6 -771.3 1005.1 -573.4 1068.4 -353.1C1131.8 -132.9 1108 109.7 1029.3 329.1C950.7 548.5 817.1 744.7 636.4 863.2C455.7 981.6 227.9 1022.4 2.7 1018.6C-222.4 1014.8 -444.8 966.5 -613.7 844.2C-782.7 722 -898.3 525.7 -961.8 315.9C-1025.2 106.1 -1036.7 -117.2 -976.8 -322.3C-917 -527.4 -785.9 -714.3 -611.2 -857.1C-436.5 -999.8 -218.3 -1098.4 8.2 -1109.7C234.7 -1121.1 469.4 -1045.1 662 -908.2" 
                    fill="url(#orangeGradient)"
                />
            </g>
        </svg>
    );
}
