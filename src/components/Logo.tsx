export default function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Logo mark - stylized paper sheet with pen */}
      <div className="relative flex-shrink-0">
        <svg
          viewBox="0 0 48 48"
          className="w-10 h-10 sm:w-11 sm:h-11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Paper sheet */}
          <rect
            x="8"
            y="6"
            width="24"
            height="32"
            rx="3"
            fill="#FFF9EE"
            stroke="#63351F"
            strokeWidth="2"
          />
          {/* Lines on paper */}
          <line x1="13" y1="14" x2="27" y2="14" stroke="#39A9DB" strokeWidth="2" strokeLinecap="round" />
          <line x1="13" y1="20" x2="27" y2="20" stroke="#F7C843" strokeWidth="2" strokeLinecap="round" />
          <line x1="13" y1="26" x2="22" y2="26" stroke="#E83B2E" strokeWidth="2" strokeLinecap="round" />
          {/* Pen */}
          <path
            d="M30 30 L40 20 L42 22 L32 32 Z"
            fill="#E83B2E"
            stroke="#63351F"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <circle cx="31" cy="31" r="1.5" fill="#63351F" />
        </svg>
      </div>
      {/* Wordmark */}
      <div className="flex flex-col leading-none">
        <span className="font-display text-lg sm:text-xl font-bold text-brown tracking-tight">
          Papelaria
        </span>
        <span className="font-display text-base sm:text-lg font-semibold text-red tracking-wide">
          Delights
        </span>
      </div>
    </div>
  );
}
