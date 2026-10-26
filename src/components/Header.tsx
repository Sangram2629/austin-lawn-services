import React from 'react';

interface HeaderProps {
  onGetQuoteClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onGetQuoteClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F9FAF7]/95 backdrop-blur-md border-b border-[#DCE3D8]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-8 px-4 sm:px-6 py-3.5 sm:py-4">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-display text-base sm:text-xl font-bold tracking-tight text-[#14241B] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1E5631]"
        >
          Austin Elite Lawn Care
        </a>

        {/* Zone 2: 4 concise single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#3B5244]"
        >
          <a
            href="#services"
            className="hover:text-[#14241B] hover:underline underline-offset-8 decoration-[#1E5631] decoration-2 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Services
          </a>
          <a
            href="#why-choose-us"
            className="hover:text-[#14241B] hover:underline underline-offset-8 decoration-[#1E5631] decoration-2 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Why Choose Us
          </a>
          <a
            href="#austin-proof"
            className="hover:text-[#14241B] hover:underline underline-offset-8 decoration-[#1E5631] decoration-2 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Local Results
          </a>
          <a
            href="#estimate-form"
            className="hover:text-[#14241B] hover:underline underline-offset-8 decoration-[#1E5631] decoration-2 transition-colors whitespace-nowrap shrink-0 py-1"
          >
            Instant Estimate
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={onGetQuoteClick}
            className="px-3.5 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#1E5631] rounded-lg hover:bg-[#164225] active:scale-[0.99] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E5631]"
          >
            Get a Free Quote
          </button>
        </div>
      </div>
    </header>
  );
};
