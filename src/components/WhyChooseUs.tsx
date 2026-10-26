import React, { useState } from 'react';
import {
  MapPinned,
  ShieldCheck,
  BatteryCharging,
  Award,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import {
  AUSTIN_ZONES,
  AustinZoneSpec,
  ServiceTypeId
} from '../utils/estimateCalculator';

interface WhyChooseUsProps {
  onSelectZoneProgram: (service: ServiceTypeId, sampleAddress: string) => void;
}

const PILLARS = [
  {
    number: '01.',
    title: 'Local Austin Expertise',
    subtitle: 'Edwards Limestone & Blackland Prairie Clay Specialists',
    description:
      'National franchises use generic Midwest fertilizer blends that burn Central Texas turf. Our agronomists formulate specifically for Austin’s pH 7.8–8.2 alkaline soil, oak wilt pruning windows, and LCRA Stage 2 watering rules.',
    proofStat: '10+ Years Serving Travis & Williamson Counties',
    icon: MapPinned
  },
  {
    number: '02.',
    title: 'Fully Insured Crew',
    subtitle: '$2,000,000 Commercial Liability & W-2 Uniformed Technicians',
    description:
      'Every crew leader is a background-checked, full-time employee covered by $2M General Liability and Texas Workers’ Compensation. We text you 20 minutes before arrival and send photo verification of locked back gates upon completion.',
    proofStat: '100% Gate-Lock Verification & Zero Subcontractors',
    icon: ShieldCheck
  },
  {
    number: '03.',
    title: 'Eco-Friendly Equipment',
    subtitle: 'Commercial 82V Battery-Electric Fleet & Pet-Safe Treatments',
    description:
      'Our mowers, edgers, and blowers run on commercial lithium-ion power—reducing neighborhood noise by 65% for work-from-home households and eliminating gas exhaust or oil drips on your driveway.',
    proofStat: '65% Quieter Operation · Pet-Safe Bio-Organic Nutrients',
    icon: BatteryCharging
  },
  {
    number: '04.',
    title: '100% Satisfaction Guarantee',
    subtitle: '24-Hour Free Re-Service Promise or You Don’t Pay',
    description:
      'We never lock you into a long-term binding contract. If a mower stripe, bed edge, or stubborn weed patch ever falls short of your expectations, let us know within 48 hours and our supervisor returns within 24 hours free of charge.',
    proofStat: '4.96 / 5.0 Average Rating Across 640+ Verified Austin Homeowners',
    icon: Award
  }
];

const SAMPLE_ADDRESS_BY_ZONE: Record<string, string> = {
  westlake: '3104 Redbud Trail, Austin, TX 78746',
  'travis-heights': '1512 Alameda Dr, Austin, TX 78704',
  tarrytown: '2408 Exposition Blvd, Austin, TX 78703'
};

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onSelectZoneProgram
}) => {
  const [activeZoneId, setActiveZoneId] = useState<string>(AUSTIN_ZONES[0].id);
  const activeZone: AustinZoneSpec =
    AUSTIN_ZONES.find((z) => z.id === activeZoneId) ?? AUSTIN_ZONES[0];

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="scroll-mt-20 py-20 bg-[#F2F5EF] border-b border-[#DCE3D8]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Intro */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-wide text-[#1E5631] mb-2">
            Built for Austin Homeowners
          </p>
          <h2
            id="why-choose-us-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-[#14241B] tracking-tight"
          >
            Why Austin Homeowners Trust Our Turf &amp; Landscape Crew
          </h2>
          <p className="text-base text-[#43584B] mt-3 leading-relaxed">
            Maintaining a lush yard in Central Texas takes more than a mower in the back of a
            pickup truck. We combine local soil science, quiet commercial battery equipment,
            and ironclad accountability.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {PILLARS.map((pillar) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white border border-[#DCE3D8] rounded-xl p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#EFF5EE] border border-[#D4E2D3] flex items-center justify-center shrink-0">
                        <IconComponent
                          className="w-5 h-5 text-[#1E5631]"
                          aria-hidden="true"
                        />
                      </div>
                      <div>
                        <span className="font-mono-tabular text-xs font-semibold text-[#1E5631]">
                          {pillar.number}
                        </span>
                        <h3 className="font-display text-xl font-bold text-[#14241B]">
                          {pillar.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-semibold text-[#2E523B] mb-2">
                    {pillar.subtitle}
                  </p>
                  <p className="text-sm text-[#394E40] leading-relaxed mb-5">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#EBF0E8] flex items-center gap-2 text-xs font-medium text-[#1E5631]">
                  <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>{pillar.proofStat}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Adjacent Claim-to-Proof: Interactive Austin Soil Zone & Case Study Explorer */}
        <div
          id="austin-proof"
          className="scroll-mt-24 bg-white border border-[#CFD9CA] rounded-xl p-7 sm:p-9"
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-7 mb-8 border-b border-[#E5ECE1]">
            <div>
              <p className="text-xs font-semibold text-[#1E5631] mb-1">
                Verified Neighborhood Case Studies · Claim-to-Proof Evidence
              </p>
              <h3 className="font-display text-2xl font-bold text-[#14241B]">
                Inspect Our Results Across Austin Soil Zones
              </h3>
              <p className="text-sm text-[#43584B] mt-1">
                West Austin limestone ledges and East/South Austin clay require completely
                different treatment protocols. Select your area to see documented homeowner
                outcomes:
              </p>
            </div>

            {/* Interactive Neighborhood Zone Selector */}
            <div
              role="tablist"
              aria-label="Austin Neighborhood Soil Zones"
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EFF3EC] border border-[#D5DFD0] rounded-lg shrink-0"
            >
              {AUSTIN_ZONES.map((zone) => {
                const isSelected = zone.id === activeZone.id;
                return (
                  <button
                    key={zone.id}
                    role="tab"
                    aria-selected={isSelected}
                    type="button"
                    onClick={() => setActiveZoneId(zone.id)}
                    className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1E5631] text-white shadow-xs'
                        : 'text-[#2C4234] hover:text-[#14241B]'
                    }`}
                  >
                    {zone.name}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Zone Split Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left: Soil & Agronomic Profile */}
            <div className="lg:col-span-5 bg-[#F7FAF5] border border-[#DCE6D7] rounded-xl p-6 flex flex-col justify-between">
              <div>
                <div className="text-xs text-[#4E6757] font-medium mb-3">
                  <span>ZIP Codes Served: </span>
                  <span className="font-mono-tabular font-semibold text-[#14241B]">
                    {activeZone.zipCodes}
                  </span>
                </div>

                <h4 className="font-display text-xl font-bold text-[#14241B] mb-4">
                  {activeZone.name} Turf Profile
                </h4>

                <dl className="space-y-3.5 text-xs sm:text-sm">
                  <div className="pb-3 border-b border-[#E3EBE0]">
                    <dt className="text-[#566E5E] font-medium">Subsurface Soil Geology</dt>
                    <dd className="font-semibold text-[#14241B] mt-0.5">
                      {activeZone.soilProfile}
                    </dd>
                  </div>
                  <div className="pb-3 border-b border-[#E3EBE0]">
                    <dt className="text-[#566E5E] font-medium">Primary Turfgrass Species</dt>
                    <dd className="font-semibold text-[#14241B] mt-0.5">
                      {activeZone.dominantTurf}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[#566E5E] font-medium">Seasonal Stress Factor</dt>
                    <dd className="font-semibold text-[#14241B] mt-0.5">
                      {activeZone.primaryChallenge}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE6D7]">
                <button
                  type="button"
                  onClick={() =>
                    onSelectZoneProgram(
                      activeZone.recommendedProgram,
                      SAMPLE_ADDRESS_BY_ZONE[activeZone.id] ??
                        '2408 Exposition Blvd, Austin, TX 78703'
                    )
                  }
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-semibold text-white bg-[#1E5631] rounded-lg hover:bg-[#164225] transition-colors whitespace-nowrap cursor-pointer"
                >
                  <span>
                    Load {activeZone.name} Preset in Estimate Calculator
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Right: Concrete Case Study & Attributable Homeowner Testimonial */}
            <div className="lg:col-span-7 bg-[#14261B] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-[#A7C4B2] pb-4 mb-5 border-b border-[#264632]">
                  <span>Documented Case Study · {activeZone.caseStudy.neighborhood}</span>
                  <span className="font-mono-tabular text-[#7CE395]">
                    {activeZone.caseStudy.timeframe}
                  </span>
                </div>

                <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-[#7CE395] mb-4">
                  {activeZone.caseStudy.metricHeadline}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-xs sm:text-sm">
                  <div className="bg-[#1B3325] border border-[#2C4E39] rounded-lg p-4">
                    <p className="font-semibold text-[#A7C4B2] mb-1">Before Our Crew:</p>
                    <p className="text-[#E2EDE6] leading-relaxed">
                      {activeZone.caseStudy.beforeState}
                    </p>
                  </div>
                  <div className="bg-[#1B3325] border border-[#2C4E39] rounded-lg p-4">
                    <p className="font-semibold text-[#7CE395] mb-1">Protocol &amp; Outcome:</p>
                    <p className="text-[#E2EDE6] leading-relaxed">
                      {activeZone.caseStudy.actionTaken}{' '}
                      {activeZone.caseStudy.outcomeStatement}
                    </p>
                  </div>
                </div>
              </div>

              <footer className="pt-4 border-t border-[#264632] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <span className="font-semibold text-white">
                    {activeZone.caseStudy.clientName}
                  </span>
                  <span className="text-[#9AB8A6]"> · {activeZone.caseStudy.clientRole}</span>
                </div>
                <span className="text-[#7CE395] font-medium">
                  Primary Service: {activeZone.recommendedProgram}
                </span>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
