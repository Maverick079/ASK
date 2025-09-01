export function Logo({ className }: { className?: string }) {
    return (
      <div className={className}>
        <svg viewBox="0 0 160 80" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
            <path d="M48 0L96 24H0Z" fill="black" transform="translate(24)"/>
            <path d="M0 20 H160 V80 H0 Z" fill="#EE3339"/>
            <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="38"
                fontWeight="900"
                fontFamily="sans-serif"
                >
                ASK
            </text>
            <text
                x="50%"
                y="78%"
                dominantBaseline="middle"
                textAnchor="middle"
                fill="white"
                fontSize="12"
                fontWeight="500"
                letterSpacing="0.5"
                fontFamily="sans-serif"
            >
                BRANDS &amp; SIGNS
            </text>
        </svg>
      </div>
    );
  }
  