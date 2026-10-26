import React from 'react';
import {
  Scissors,
  Sprout,
  Flower2,
  Wind,
  Check,
  ArrowUpRight
} from 'lucide-react';
import {
  AUSTIN_SERVICES,
  ServiceFrequency,
  ServiceItem,
  ServiceTypeId
} from '../utils/estimateCalculator';

interface ServicesGridProps {
  selectedService: ServiceTypeId;
  selectedFrequency: ServiceFrequency;
  onFrequencyChange: (freq: ServiceFrequency) => void;
  onSelectServiceForQuote: (service: ServiceTypeId) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({
  selectedService,
  selectedFrequency,
  onFrequencyChange,
  onSelectServiceForQuote
}) => {
  const renderServiceIcon = (id: ServiceTypeId) => {
    switch (id) {
      case 'Lawn Mowing & Maintenance':
        return <Scissors className="w-5 h-5 text-[#1E5631]" aria-hidden="true" />;
      case 'Weed Control & Texas Fertilization':
        return <Sprout className="w-5 h-5 text-[#1E5631]" aria-hidden="true" />;
      case 'Mulching & Flower Bed Upkeep':
        return <Flower2 className="w-5 h-5 text-[#1E5631]" aria-hidden="true" />;
      case 'Aeration':
        return <Wind className="w-5 h-5 text-[#1E5631]" aria-hidden="true" />;
    }
  };

  const computeDisplayedStartingPrice = (service: ServiceItem): number => {
    if (selectedFrequency === 'weekly') {
      return Math.round(service.basePrice * 0.88);
    }
    if (selectedFrequency === 'seasonal') {
      return Math.round(service.basePrice * 1.12);
    }
    return service.basePrice;
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-20 py-20 bg-[#F9FAF7] border-b border-[#DCE3D8]"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header + Interactive Frequency Pricing Toggle */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-semibold tracking-wide text-[#1E5631] mb-2">
              Tailored for Central Texas Turf &amp; Soil
            </p>
            <h2
              id="services-heading"
              className="font-display text-3xl sm:text-4xl font-bold text-[#14241B] tracking-tight"
            >
              Our 4 Core Lawn &amp; Landscaping Services
            </h2>
            <p className="text-base text-[#43584B] mt-3 max-w-2xl leading-relaxed">
              Every service is calibrated for Austin’s alkaline limestone soil, Blackland clay,
              and intense summer sun. Select a schedule below to preview starting route rates
              for a standard Austin residential lot.
            </p>
          </div>

          {/* Interactive Frequency Segmented Control */}
          <div className="shrink-0 w-full sm:w-auto">
            <span className="block text-xs font-medium text-[#43584B] mb-2">
              Preview Pricing By Schedule:
            </span>
            <div
              role="group"
              aria-label="Service Schedule Pricing Preview"
              className="grid grid-cols-3 sm:inline-flex items-center gap-1 p-1 bg-[#EAEFE7] border border-[#CFD9CA] rounded-lg w-full sm:w-auto"
            >
              <button
                type="button"
                onClick={() => onFrequencyChange('weekly')}
                className={`px-2 sm:px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedFrequency === 'weekly'
                    ? 'bg-[#1E5631] text-white shadow-xs'
                    : 'text-[#2C4234] hover:text-[#14241B]'
                }`}
              >
                Weekly (-12%)
              </button>
              <button
                type="button"
                onClick={() => onFrequencyChange('biweekly')}
                className={`px-2 sm:px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedFrequency === 'biweekly'
                    ? 'bg-[#1E5631] text-white shadow-xs'
                    : 'text-[#2C4234] hover:text-[#14241B]'
                }`}
              >
                Bi-Weekly Plan
              </button>
              <button
                type="button"
                onClick={() => onFrequencyChange('seasonal')}
                className={`px-2 sm:px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                  selectedFrequency === 'seasonal'
                    ? 'bg-[#1E5631] text-white shadow-xs'
                    : 'text-[#2C4234] hover:text-[#14241B]'
                }`}
              >
                Single Visit
              </button>
            </div>
          </div>
        </div>

        {/* 4 Clear Service Cards Grid (2x2 on Desktop with Rich Deliverables) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AUSTIN_SERVICES.map((service) => {
            const isSelected = selectedService === service.id;
            const displayedPrice = computeDisplayedStartingPrice(service);

            return (
              <article
                key={service.id}
                className={`flex flex-col justify-between rounded-xl bg-white border transition-colors p-7 sm:p-8 ${
                  isSelected
                    ? 'border-[#1E5631] ring-2 ring-[#1E5631]/15'
                    : 'border-[#DCE3D8] hover:border-[#9BB5A2]'
                }`}
              >
                <div>
                  {/* Top Row: Clean Editorial Number + Icon + Starting Rate */}
                  <div className="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-[#EBF0E8]">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-lg bg-[#EFF5EE] border border-[#D4E2D3] flex items-center justify-center shrink-0">
                        {renderServiceIcon(service.id)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs text-[#4E6757] font-medium">
                          <span className="font-mono-tabular font-semibold text-[#1E5631]">
                            {service.indexNumber}
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>{service.turfTypes}</span>
                        </div>
                        <h3 className="font-display text-xl font-bold text-[#14241B] mt-0.5">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="block text-[11px] text-[#5B7263]">Starting at</span>
                      <span className="font-mono-tabular text-2xl font-bold text-[#14241B]">
                        ${displayedPrice}
                      </span>
                      <span className="block text-[11px] text-[#5B7263]">per visit</span>
                    </div>
                  </div>

                  {/* Description & Austin Soil Note */}
                  <p className="text-sm text-[#33473B] leading-relaxed mb-4">
                    {service.description}
                  </p>

                  <div className="bg-[#F4F7F2] border border-[#E1E8DD] rounded-lg p-3.5 mb-5">
                    <p className="text-xs text-[#23382B] leading-relaxed">
                      <strong className="font-semibold text-[#1E5631]">
                        Austin Climate Calibration:{' '}
                      </strong>
                      {service.austinSoilContext}
                    </p>
                  </div>

                  {/* Concrete Deliverables Checklist */}
                  <ul className="space-y-2.5 mb-6" aria-label={`${service.title} deliverables`}>
                    {service.deliverables.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2C3E33]"
                      >
                        <Check
                          className="w-4 h-4 text-[#1E5631] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer: Timing Metadata + Direct Quote Action */}
                <div className="pt-5 border-t border-[#EBF0E8] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-[#546B5C]">
                    <span className="font-medium text-[#14241B]">Schedule: </span>
                    <span>{service.recommendedSeason}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForQuote(service.id)}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'bg-[#1E5631] text-white hover:bg-[#164225]'
                        : 'bg-[#EFF5EE] text-[#14241B] hover:bg-[#1E5631] hover:text-white border border-[#C8D8C6]'
                    }`}
                  >
                    <span>
                      {isSelected
                        ? `Selected: ${service.title}`
                        : `Quote ${service.title}`}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
