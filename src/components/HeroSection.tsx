import React, { useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, MapPin, Sun } from 'lucide-react';
import { ServiceTypeId } from '../utils/estimateCalculator';

interface HeroSectionProps {
  onGetQuoteClick: () => void;
  onQuickSelectService: (service: ServiceTypeId) => void;
}

interface TurfHotspot {
  id: string;
  label: string;
  title: string;
  metric: string;
  detail: string;
  serviceLink: ServiceTypeId;
}

const TURF_HOTSPOTS: TurfHotspot[] = [
  {
    id: 'st-augustine',
    label: '3.5" Turf Cut',
    title: 'High-Cut Summer Canopy Protection',
    metric: '-14°F Root Zone Temp',
    detail:
      'Mowing St. Augustine and Zoysia at 3.5 to 3.75 inches shades shallow stolons from intense Central Texas UV and reduces weekly moisture loss.',
    serviceLink: 'Lawn Mowing & Maintenance'
  },
  {
    id: 'limestone-soil',
    label: 'pH 7.9 Soil Care',
    title: 'Alkaline Soil Iron & Pre-Emergent',
    metric: '98.6% Weed Prevention',
    detail:
      'Austin topsoil sits on alkaline Edwards limestone. Our chelated iron and sulfur nutrition keeps blades deep emerald green without nitrate runoff.',
    serviceLink: 'Weed Control & Texas Fertilization'
  },
  {
    id: 'live-oak-beds',
    label: 'Hardwood Mulch',
    title: 'Live Oak Root Flare & Bed Insulation',
    metric: '38% Less Water Evaporation',
    detail:
      'Spade-edged beds dressed with 3 inches of aged Texas native hardwood mulch protect perennial roots during 100°F+ August streaks.',
    serviceLink: 'Mulching & Flower Bed Upkeep'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onGetQuoteClick,
  onQuickSelectService
}) => {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('st-augustine');
  const activeHotspot =
    TURF_HOTSPOTS.find((h) => h.id === activeHotspotId) ?? TURF_HOTSPOTS[0];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#12261A] text-white border-b border-[#244230]"
    >
      {/* Subtle architectural background texture & organic gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          backgroundImage:
            'radial-gradient(circle at 82% 24%, rgba(56, 142, 60, 0.26) 0%, rgba(18, 38, 26, 0) 55%), radial-gradient(circle at 18% 80%, rgba(212, 185, 140, 0.12) 0%, rgba(18, 38, 26, 0) 50%)'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-12 pb-14 lg:pt-16 lg:pb-16">
        {/* 2-Column Hero Split with items-stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Core Value Proposition & Primary CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Unboxed clean metadata line (Zero-Pill discipline) */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium tracking-wide text-[#A7C4B2] mb-5">
                <MapPin className="w-3.5 h-3.5 text-[#68B684] shrink-0" aria-hidden="true" />
                <span>Locally Owned in Austin, TX</span>
                <span aria-hidden="true">·</span>
                <span>TDA Commercial Applicator #0849210</span>
                <span aria-hidden="true">·</span>
                <span>Serving Westlake, Tarrytown, 78704 &amp; Circle C</span>
              </div>

              <h1
                className="font-display text-white font-bold tracking-tight leading-[1.1] mb-6"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.75rem)' }}
              >
                Professional Lawn Care &amp; Landscaping in Austin, TX
              </h1>

              <p className="text-base sm:text-lg text-[#D5E2DA] leading-relaxed max-w-2xl mb-8">
                Dependable, uniformed turf care engineered for Central Texas limestone soils,
                mature Live Oak shade, and summer drought restrictions. From precision weekly
                mowing to targeted weed control, native hardwood mulching, and core clay
                aeration—we keep your Austin lawn thick, healthy, and weed-free year-round.
              </p>

              {/* Primary CTA + Secondary Anchor */}
              <div className="flex flex-wrap items-center gap-4 mb-8">
                <button
                  type="button"
                  onClick={onGetQuoteClick}
                  className="inline-flex items-center gap-2.5 px-7 py-4 text-base font-semibold text-[#0E2016] bg-[#7CE395] rounded-lg hover:bg-[#68D382] active:scale-[0.99] transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7CE395]"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </button>

                <a
                  href="#services"
                  className="inline-flex items-center gap-2 px-5 py-4 text-sm font-semibold text-white border border-[#355E45] rounded-lg hover:bg-[#1B3726] transition-colors whitespace-nowrap shrink-0"
                >
                  Explore 4 Core Services
                </a>
              </div>
            </div>

            {/* Trust assurance footer inside left hero column */}
            <div className="pt-6 border-t border-[#264632] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#C2D6C9]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#7CE395] shrink-0" aria-hidden="true" />
                <span>Same-Day Instant Written Quotes</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#7CE395] shrink-0" aria-hidden="true" />
                <span>$2M Fully Insured W-2 Crew</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-[#7CE395] shrink-0" aria-hidden="true" />
                <span>LCRA Watering Stage Compliant</span>
              </div>
            </div>
          </div>

          {/* Right Column: High-Craft Austin Hill Country Estate & Turf Inspection Plate */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-[#183123] border border-[#2D523C] rounded-xl overflow-hidden">
            {/* Custom SVG Architectural & Landscape Illustration with Measured Scrim */}
            <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#102318]">
              <svg
                viewBox="0 0 800 500"
                className="w-full h-full object-cover"
                role="img"
                aria-label="Illustration of a manicured Austin Hill Country limestone home with precision striped St. Augustine lawn and mature Texas Live Oak trees"
              >
                <defs>
                  <linearGradient id="austinSky" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1E3F2B" />
                    <stop offset="55%" stopColor="#2E5A3E" />
                    <stop offset="100%" stopColor="#D9C39A" stopOpacity="0.35" />
                  </linearGradient>
                  <linearGradient id="turfBase" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2D6A43" />
                    <stop offset="100%" stopColor="#1B432A" />
                  </linearGradient>
                  <linearGradient id="stripeLight" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#469260" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#265A38" stopOpacity="0.9" />
                  </linearGradient>
                  <linearGradient id="limestoneWall" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#EFECE4" />
                    <stop offset="100%" stopColor="#D8D2C3" />
                  </linearGradient>
                </defs>

                {/* Warm Golden Hour Sky Backdrop */}
                <rect width="800" height="300" fill="url(#austinSky)" />
                <circle cx="650" cy="95" r="54" fill="#F4D58D" fillOpacity="0.22" />
                <circle cx="650" cy="95" r="32" fill="#F4D58D" fillOpacity="0.35" />

                {/* Distant Austin Hill Country Ridge */}
                <path
                  d="M0 240 Q180 190 360 225 T800 210 L800 290 L0 290 Z"
                  fill="#1A3826"
                />

                {/* Modern Austin Texas Limestone & Cedar Residence */}
                <g transform="translate(210, 115)">
                  {/* Main Limestone Volume */}
                  <rect x="0" y="45" width="380" height="115" fill="url(#limestoneWall)" rx="2" />
                  {/* Horizontal Limestone Course Lines */}
                  <line x1="0" y1="72" x2="380" y2="72" stroke="#C5BDsA" strokeWidth="1" opacity="0.6" />
                  <line x1="0" y1="100" x2="380" y2="100" stroke="#C5BDAE" strokeWidth="1" opacity="0.6" />
                  <line x1="0" y1="128" x2="380" y2="128" stroke="#C5BDAE" strokeWidth="1" opacity="0.6" />

                  {/* Cedar Soffit & Architectural Overhang Roof */}
                  <polygon points="-22,45 402,45 385,22 -5,22" fill="#2A241E" />
                  <rect x="-15" y="42" width="410" height="6" fill="#9C6B3B" />

                  {/* Warm Lit Architectural Windows */}
                  <rect x="32" y="62" width="85" height="72" fill="#1D2F24" rx="2" />
                  <rect x="36" y="66" width="36" height="64" fill="#E8C574" fillOpacity="0.35" />
                  <rect x="76" y="66" width="37" height="64" fill="#E8C574" fillOpacity="0.22" />

                  <rect x="148" y="62" width="110" height="72" fill="#1D2F24" rx="2" />
                  <rect x="152" y="66" width="102" height="64" fill="#E8C574" fillOpacity="0.28" />

                  {/* Natural Cedar Entry Door */}
                  <rect x="292" y="68" width="46" height="90" fill="#8B5A2B" rx="2" />
                </g>

                {/* Mature Sprawling Texas Live Oak Canopy (Left & Right) */}
                <g fill="#163321">
                  <path d="M55 265 L55 170 Q35 135 15 125 M55 180 Q95 145 135 140" stroke="#3D2B1F" strokeWidth="12" strokeLinecap="round" fill="none" />
                  <ellipse cx="65" cy="115" rx="95" ry="52" fill="#1E462D" />
                  <ellipse cx="115" cy="130" rx="75" ry="42" fill="#27593A" />
                  <ellipse cx="30" cy="135" rx="60" ry="38" fill="#163522" />
                </g>

                <g>
                  <path d="M715 265 L715 175 Q680 140 650 135 M715 185 Q745 150 775 145" stroke="#3D2B1F" strokeWidth="10" strokeLinecap="round" fill="none" />
                  <ellipse cx="715" cy="120" rx="85" ry="48" fill="#1E462D" />
                  <ellipse cx="675" cy="135" rx="65" ry="36" fill="#27593A" />
                </g>

                {/* Dark Native Hardwood Mulch Flower Beds with Perennials */}
                <path
                  d="M0 268 Q210 252 440 264 T800 258 L800 292 L0 292 Z"
                  fill="#3B271A"
                />
                {/* Texas Red Salvia & Ornamental Muhly Accents in Mulch Bed */}
                <circle cx="175" cy="264" r="10" fill="#2E6F40" />
                <circle cx="175" cy="257" r="4" fill="#D94E34" />
                <circle cx="205" cy="266" r="12" fill="#347B48" />
                <circle cx="465" cy="265" r="11" fill="#2E6F40" />
                <circle cx="465" cy="258" r="4" fill="#D94E34" />
                <circle cx="615" cy="263" r="13" fill="#347B48" />

                {/* Foreground Manicured St. Augustine Lawn with Precision Diagonal Mowing Stripes */}
                <rect x="0" y="280" width="800" height="220" fill="url(#turfBase)" />
                <polygon points="-40,500 180,280 265,280 65,500" fill="url(#stripeLight)" />
                <polygon points="165,500 350,280 435,280 270,500" fill="url(#stripeLight)" />
                <polygon points="370,500 520,280 605,280 475,500" fill="url(#stripeLight)" />
                <polygon points="575,500 690,280 775,280 680,500" fill="url(#stripeLight)" />

                {/* Crisp Texas Limestone Walkway with Razor-Sharp Edging */}
                <polygon points="485,278 545,278 655,500 445,500" fill="#E5DFD2" />
                <polygon points="485,278 490,278 452,500 445,500" fill="#A99F8D" />
                <line x1="472" y1="340" x2="575" y2="340" stroke="#C5BCAE" strokeWidth="2" />
                <line x1="460" y1="410" x2="612" y2="410" stroke="#C5BCAE" strokeWidth="2" />
              </svg>

              {/* Measured Scrim Overlay for guaranteed 4.5:1 contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12261A] via-[#12261A]/35 to-transparent" />

              {/* Bottom caption inside illustration frame */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#E4EFE8]">
                <span className="font-medium">Austin Turf &amp; Soil Architecture</span>
                <span className="font-mono-tabular text-[#7CE395]">Click layer below to inspect</span>
              </div>
            </div>

            {/* Interactive Turf & Soil Layer Inspector */}
            <div className="p-5 flex-1 flex flex-col justify-between bg-[#162D20]">
              <div>
                <div
                  role="tablist"
                  aria-label="Austin Lawn Care Layer Breakdown"
                  className="grid grid-cols-3 gap-1.5 p-1 bg-[#0F2117] rounded-lg border border-[#264632] mb-4"
                >
                  {TURF_HOTSPOTS.map((spot) => {
                    const isActive = spot.id === activeHotspot.id;
                    return (
                      <button
                        key={spot.id}
                        role="tab"
                        aria-selected={isActive}
                        type="button"
                        onClick={() => setActiveHotspotId(spot.id)}
                        className={`px-2.5 py-2 text-xs font-medium rounded-md transition-colors whitespace-nowrap truncate cursor-pointer ${
                          isActive
                            ? 'bg-[#254D35] text-white shadow-xs'
                            : 'text-[#A7C4B2] hover:text-white'
                        }`}
                      >
                        {spot.label}
                      </button>
                    );
                  })}
                </div>

                <div className="flex items-baseline justify-between gap-2 mb-1.5">
                  <h2 className="text-sm font-semibold text-white font-sans">
                    {activeHotspot.title}
                  </h2>
                  <span className="font-mono-tabular text-xs font-semibold text-[#7CE395] shrink-0">
                    {activeHotspot.metric}
                  </span>
                </div>

                <p className="text-xs text-[#C2D6C9] leading-relaxed mb-4">
                  {activeHotspot.detail}
                </p>
              </div>

              <div className="pt-3 border-t border-[#254531] flex items-center justify-between">
                <span className="text-xs text-[#9AB8A6]">
                  Included in: <strong className="text-white">{activeHotspot.serviceLink}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => onQuickSelectService(activeHotspot.serviceLink)}
                  className="text-xs font-semibold text-[#7CE395] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Quote This Service →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Quantitative Proof Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-[#264632] grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-white">
              1,480+
            </p>
            <p className="text-xs text-[#A7C4B2] mt-1">
              Austin Residential Lawns Maintained Since 2016
            </p>
          </div>
          <div>
            <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-[#7CE395]">
              98.6%
            </p>
            <p className="text-xs text-[#A7C4B2] mt-1">
              Weed-Free Turf Retention Across 6-Step Plan Clients
            </p>
          </div>
          <div>
            <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-white">
              100%
            </p>
            <p className="text-xs text-[#A7C4B2] mt-1">
              Commercial 82V Battery-Electric Low-Noise Mowers
            </p>
          </div>
          <div>
            <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-white">
              24-Hr
            </p>
            <p className="text-xs text-[#A7C4B2] mt-1">
              Free Re-Service Guarantee on Every Scheduled Visit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
