export function Logo({ className }: { className?: string }) {
    return (
      <div className={className}>
        <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
          {/* ASK */}
          <text 
            x="100" 
            y="25" 
            fontFamily="'Poppins', sans-serif" 
            fontSize="40" 
            fontWeight="900" 
            fill="#E52321" 
            textAnchor="middle"
            fontStyle="italic"
          >
            ASK
          </text>
          
          {/* BRANDS & SIGNS */}
          <text 
            x="100" 
            y="42" 
            fontFamily="'Poppins', sans-serif" 
            fontSize="14" 
            fontWeight="700" 
            fill="#004A99" 
            textAnchor="middle"
          >
            BRANDS &amp; SIGNS
          </text>
          
          {/* In associate with */}
          <text 
            x="100" 
            y="65" 
            fontFamily="'PT Sans', sans-serif" 
            fontSize="12" 
            fill="#333" 
            textAnchor="middle"
            fontStyle="italic"
          >
            In associate with
          </text>

          {/* Stars */}
          <g transform="translate(100, 85) scale(0.8)">
            <g transform="translate(-40, 0) rotate(-15)">
              <text fontSize="12" fill="#FAD201" transform="translate(0, 2)">★</text>
              <text fontSize="12" fill="#F9A825" transform="translate(12, -1)">★</text>
              <text fontSize="12" fill="#F57C00" transform="translate(24, -3)">★</text>
              <text fontSize="12" fill="#E65100" transform="translate(36, -4)">★</text>
              <text fontSize="12" fill="#D50000" transform="translate(48, -4)">★</text>
              <text fontSize="12" fill="#C40000" transform="translate(60, -3)">★</text>
            </g>
          </g>
          
          {/* URMIADS */}
          <text 
            x="100" 
            y="110" 
            fontFamily="'Poppins', sans-serif" 
            fontSize="36" 
            fontWeight="900" 
            fill="#E52321" 
            textAnchor="middle"
          >
            URMIADS
          </text>
          
          {/* Advertising | Designing | Printing */}
          <text 
            x="100" 
            y="125" 
            fontFamily="'PT Sans', sans-serif" 
            fontSize="10" 
            fill="#333" 
            textAnchor="middle" 
            letterSpacing="0.5"
          >
            Advertising | Designing | Printing
          </text>
        </svg>
      </div>
    );
  }