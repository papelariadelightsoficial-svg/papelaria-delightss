export function Mascot({
  size = 160,
  className = '',
  animate = true,
}: {
  size?: number;
  className?: string;
  animate?: boolean;
}) {
  return (
    <div className={`relative inline-block ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={animate ? 'animate-float-medium' : ''}
      >
        {/* Estrela */}
        <g
          className={animate ? 'animate-wiggle' : ''}
          style={{ transformOrigin: '170px 30px' }}
        >
          <path
            d="M170 18 L173 28 L183 28 L175 34 L178 44 L170 38 L162 44 L165 34 L157 28 L167 28 Z"
            fill="#F6C84C"
            stroke="#573323"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>

        {/* Coração */}
        <g
          className={animate ? 'animate-float-slow' : ''}
          style={{ transformOrigin: '30px 40px' }}
        >
          <path
            d="M30 32 C27 28 20 28 20 35 C20 42 30 50 30 50 C30 50 40 42 40 35 C40 28 33 28 30 32 Z"
            fill="#D94B6A"
            stroke="#573323"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </g>

        {/* Ondas */}
        <path
          d="M20 165 Q50 155 80 165 Q110 175 140 160 Q160 152 180 165"
          stroke="#5B8DEF"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <path
          d="M30 175 Q60 167 90 175 Q120 183 150 170 Q165 164 175 173"
          stroke="#9B7AE7"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Casco */}
        <path
          d="M40 110 L160 110 L140 150 L60 150 Z"
          fill="#573323"
          stroke="#3C2116"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <path
          d="M48 120 L152 120"
          stroke="#3C2116"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Velas */}
        <path
          d="M100 45 L100 110 L150 110 Z"
          fill="#FFF8F0"
          stroke="#573323"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <path
          d="M100 45 L100 110 L50 110 Z"
          fill="#FFF0E0"
          stroke="#573323"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />

        <line
          x1="100"
          y1="50"
          x2="100"
          y2="108"
          stroke="#573323"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Bandeira */}
        <path
          d="M100 42 L100 30 L112 36 L100 42 Z"
          fill="#D94B6A"
          stroke="#573323"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />

        {/* Olhos */}
        <ellipse
          cx="85"
          cy="88"
          rx="10"
          ry="11"
          fill="white"
          stroke="#573323"
          strokeWidth="2"
        />

        <ellipse
          cx="115"
          cy="88"
          rx="10"
          ry="11"
          fill="white"
          stroke="#8B5E3C"
          strokeWidth="2"
        />

        <circle cx="87" cy="90" r="4.5" fill="#573323" />
        <circle cx="117" cy="90" r="4.5" fill="#573323" />

        <circle cx="88.5" cy="88" r="1.5" fill="white" />
        <circle cx="118.5" cy="88" r="1.5" fill="white" />

        {/* Bochechas */}
        <ellipse
          cx="72"
          cy="102"
          rx="7"
          ry="5"
          fill="#D94B6A"
          opacity="0.5"
        />

        <ellipse
          cx="128"
          cy="102"
          rx="7"
          ry="5"
          fill="#D94B6A"
          opacity="0.5"
        />

        {/* Sorriso */}
        <path
          d="M88 100 Q100 110 112 100"
          stroke="#573323"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Lápis */}
        <g
          className={animate ? 'animate-wiggle' : ''}
          style={{ transformOrigin: '165px 105px' }}
        >
          <rect
            x="160"
            y="85"
            width="6"
            height="40"
            rx="2"
            fill="#5B8DEF"
            stroke="#573323"
            strokeWidth="1.5"
            transform="rotate(20 163 105)"
          />

          <path
            d="M160 85 L163 78 L166 85 Z"
            fill="#F6C84C"
            stroke="#573323"
            strokeWidth="1.5"
            transform="rotate(20 163 105)"
            strokeLinejoin="round"
          />

          <rect
            x="159"
            y="122"
            width="8"
            height="5"
            rx="1.5"
            fill="#D94B6A"
            stroke="#573323"
            strokeWidth="1"
            transform="rotate(20 163 105)"
          />
        </g>

        {/* Pontinhos */}
        <circle cx="45" cy="60" r="3" fill="#9B7AE7" />
        <circle cx="155" cy="55" r="2.5" fill="#5B8DEF" />
        <circle cx="175" cy="120" r="2.5" fill="#F6C84C" />
        <circle cx="25" cy="130" r="2" fill="#D94B6A" />
      </svg>
    </div>
  );
}
