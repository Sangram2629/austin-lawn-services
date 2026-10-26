import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';

interface FooterProps {
  onGetQuoteClick: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onGetQuoteClick }) => {
  return (
    <footer className="bg-[#0F2016] text-[#B8CEC0] border-t border-[#23412E]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#213D2B]">
          {/* Brand & Local Austin Credentials */}
          <div className="md:col-span-5">
            <a
              href="#top"
              className="font-display text-xl font-bold text-white tracking-tight inline-block mb-3"
            >
              Austin Elite Lawn Care
            </a>
            <p className="text-sm text-[#9FB8A8] leading-relaxed max-w-md mb-4">
              Dedicated residential lawn mowing, alkaline soil fertilization, native hardwood
              mulching, and mechanical core aeration across Greater Austin, Texas.
            </p>
            <div className="text-xs text-[#88A693] space-y-1.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#7CE395] shrink-0" aria-hidden="true" />
                <span>4209 S Congress Ave, Suite B, Austin, TX 78745</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#7CE395] shrink-0" aria-hidden="true" />
                <span>(512) 555-0199 · Mon–Sat 7:00 AM – 6:30 PM CT</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#7CE395] shrink-0" aria-hidden="true" />
                <span>Texas Dept. of Agriculture Applicator License #0849210</span>
              </p>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-semibold text-white tracking-wide mb-3">
              Austin Lawn &amp; Landscape Services
            </h3>
            <ul className="space-y-2 text-xs text-[#9FB8A8]">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  01. Lawn Mowing &amp; Maintenance
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  02. Weed Control &amp; Texas Fertilization
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  03. Mulching &amp; Flower Bed Upkeep
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  04. Core &amp; Liquid Clay Aeration
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas & Direct Action */}
          <div className="md:col-span-3 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-semibold text-white tracking-wide mb-3">
                Austin Neighborhood Routes
              </h3>
              <p className="text-xs text-[#9FB8A8] leading-relaxed mb-4">
                Westlake Hills · Tarrytown · Travis Heights · Barton Hills · Zilker · Circle C
                Ranch · Mueller · Hyde Park · Crestview · Allandale
              </p>
            </div>

            <button
              type="button"
              onClick={onGetQuoteClick}
              className="w-full py-2.5 px-4 text-xs font-semibold text-[#0F2016] bg-[#7CE395] rounded-lg hover:bg-[#68D382] transition-colors whitespace-nowrap cursor-pointer"
            >
              Get a Free Quote
            </button>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7D9B89]">
          <p>© {new Date().getFullYear()} Austin Elite Lawn Care LLC. All rights reserved.</p>
          <p>Proudly serving homeowners across Austin, TX · 100% Satisfaction Guarantee</p>
        </div>
      </div>
    </footer>
  );
};
