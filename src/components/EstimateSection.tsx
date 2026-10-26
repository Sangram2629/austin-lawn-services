import React, { useState } from 'react';
import {
  Calculator,
  CheckCircle2,
  AlertCircle,
  PhoneCall,
  Clock,
  MapPin,
  Check,
  FileCheck2
} from 'lucide-react';
import {
  AUSTIN_SERVICES,
  calculateInstantEstimate,
  InstantEstimateResult,
  ServiceFrequency,
  ServiceTypeId,
  validateLeadForm,
  ValidationErrors
} from '../utils/estimateCalculator';

interface SubmittedQuoteRecord {
  id: string;
  name: string;
  phone: string;
  address: string;
  submittedAt: string;
  estimate: InstantEstimateResult;
}

interface EstimateSectionProps {
  nameInputRef: React.RefObject<HTMLInputElement | null>;
  selectedService: ServiceTypeId;
  onServiceChange: (service: ServiceTypeId) => void;
  selectedFrequency: ServiceFrequency;
  onFrequencyChange: (freq: ServiceFrequency) => void;
  address: string;
  onAddressChange: (addr: string) => void;
}

const LOT_SIZE_PRESETS = [
  { label: 'Urban Bungalow (~4,500 sq ft)', sqFt: 4500 },
  { label: 'Standard Austin Lot (~7,500 sq ft)', sqFt: 7500 },
  { label: 'Quarter-Acre Lot (~11,000 sq ft)', sqFt: 11000 },
  { label: 'Hill Country Estate (~16,500 sq ft)', sqFt: 16500 }
];

export const EstimateSection: React.FC<EstimateSectionProps> = ({
  nameInputRef,
  selectedService,
  onServiceChange,
  selectedFrequency,
  onFrequencyChange,
  address,
  onAddressChange
}) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [lotSizeSqFt, setLotSizeSqFt] = useState<number>(7500);
  const [notes, setNotes] = useState<string>('');
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [latestConfirmation, setLatestConfirmation] =
    useState<SubmittedQuoteRecord | null>(null);
  const [savedQuotes, setSavedQuotes] = useState<SubmittedQuoteRecord[]>([
    {
      id: 'seed-1',
      name: 'Barton Creek Demo Property',
      phone: '(512) 555-0148',
      address: '1904 Barton Springs Rd, Austin, TX 78704',
      submittedAt: 'Today · 9:15 AM',
      estimate: calculateInstantEstimate({
        serviceType: 'Lawn Mowing & Maintenance',
        lotSizeSqFt: 7500,
        frequency: 'weekly',
        address: '1904 Barton Springs Rd'
      })
    }
  ]);

  const liveEstimate = calculateInstantEstimate({
    serviceType: selectedService,
    lotSizeSqFt,
    frequency: selectedFrequency,
    address: address || 'ATX'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validation = validateLeadForm({
      name,
      phone,
      address,
      serviceType: selectedService
    });

    if (!validation.isValid) {
      setErrors(validation.errors);
      setLatestConfirmation(null);
      return;
    }

    setErrors({});

    const computedEstimate = calculateInstantEstimate({
      serviceType: selectedService,
      lotSizeSqFt,
      frequency: selectedFrequency,
      address
    });

    const newRecord: SubmittedQuoteRecord = {
      id: `quote-${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
      submittedAt: 'Just now · Confirmed',
      estimate: computedEstimate
    };

    setLatestConfirmation(newRecord);
    setSavedQuotes((prev) => [newRecord, ...prev]);
  };

  const handleFillSampleAustinLead = () => {
    setName('Jordan Miller');
    setPhone('(512) 555-0182');
    onAddressChange('1804 Brackenridge St, Austin, TX 78704');
    setLotSizeSqFt(7500);
    setErrors({});
  };

  return (
    <section
      id="estimate-form"
      aria-labelledby="estimate-heading"
      className="scroll-mt-20 py-20 bg-[#F9FAF7] border-b border-[#DCE3D8]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-wide text-[#1E5631] mb-2">
            Transparent Local Pricing · Zero Obligation
          </p>
          <h2
            id="estimate-heading"
            className="font-display text-3xl sm:text-4xl font-bold text-[#14241B] tracking-tight"
          >
            Get Your Free Instant Estimate
          </h2>
          <p className="text-base text-[#43584B] mt-3 leading-relaxed">
            Enter your Austin property details below to calculate an instant per-visit
            estimate and lock in priority route availability with our neighborhood crew.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left 7 Columns: Lead Capture / Contact Form */}
          <div className="lg:col-span-7 bg-white border border-[#CFD9CA] rounded-xl p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-[#EBF0E8]">
              <div>
                <h3 className="font-display text-xl font-bold text-[#14241B]">
                  Property &amp; Contact Information
                </h3>
                <p className="text-xs text-[#546B5C] mt-0.5">
                  All fields marked with * are required for your written Austin property quote.
                </p>
              </div>

              <button
                type="button"
                onClick={handleFillSampleAustinLead}
                className="text-xs font-semibold text-[#1E5631] hover:underline whitespace-nowrap shrink-0 cursor-pointer"
              >
                Auto-Fill Sample 78704 Property
              </button>
            </div>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              {/* Field 1: Name */}
              <div>
                <label
                  htmlFor="lead-name"
                  className="block text-xs font-semibold text-[#14241B] mb-1.5"
                >
                  Name *
                </label>
                <input
                  ref={nameInputRef}
                  id="lead-name"
                  name="name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                  placeholder="e.g., Sarah Jenkins"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'error-name' : undefined}
                  className={`w-full px-4 py-3 text-sm bg-[#FBFDF9] border rounded-lg text-[#14241B] placeholder:text-[#7B9082] focus:outline-none focus:ring-2 ${
                    errors.name
                      ? 'border-[#C93B2B] focus:ring-[#C93B2B]/25'
                      : 'border-[#C6D3C1] focus:border-[#1E5631] focus:ring-[#1E5631]/20'
                  }`}
                />
                {errors.name && (
                  <p
                    id="error-name"
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#C93B2B]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.name}</span>
                  </p>
                )}
              </div>

              {/* Field 2: Phone */}
              <div>
                <label
                  htmlFor="lead-phone"
                  className="block text-xs font-semibold text-[#14241B] mb-1.5"
                >
                  Phone *
                </label>
                <input
                  id="lead-phone"
                  name="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                  placeholder="e.g., (512) 555-0194"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'error-phone' : undefined}
                  className={`w-full px-4 py-3 text-sm bg-[#FBFDF9] border rounded-lg text-[#14241B] placeholder:text-[#7B9082] focus:outline-none focus:ring-2 ${
                    errors.phone
                      ? 'border-[#C93B2B] focus:ring-[#C93B2B]/25'
                      : 'border-[#C6D3C1] focus:border-[#1E5631] focus:ring-[#1E5631]/20'
                  }`}
                />
                {errors.phone && (
                  <p
                    id="error-phone"
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#C93B2B]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Field 3: Address in Austin */}
              <div>
                <label
                  htmlFor="lead-address"
                  className="block text-xs font-semibold text-[#14241B] mb-1.5"
                >
                  Address in Austin *
                </label>
                <input
                  id="lead-address"
                  name="address"
                  type="text"
                  required
                  value={address}
                  onChange={(e) => {
                    onAddressChange(e.target.value);
                    if (errors.address) setErrors({ ...errors, address: undefined });
                  }}
                  placeholder="e.g., 2408 Windsor Rd, Austin, TX 78703"
                  aria-invalid={Boolean(errors.address)}
                  aria-describedby={errors.address ? 'error-address' : undefined}
                  className={`w-full px-4 py-3 text-sm bg-[#FBFDF9] border rounded-lg text-[#14241B] placeholder:text-[#7B9082] focus:outline-none focus:ring-2 ${
                    errors.address
                      ? 'border-[#C93B2B] focus:ring-[#C93B2B]/25'
                      : 'border-[#C6D3C1] focus:border-[#1E5631] focus:ring-[#1E5631]/20'
                  }`}
                />
                {errors.address && (
                  <p
                    id="error-address"
                    role="alert"
                    className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-[#C93B2B]"
                  >
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.address}</span>
                  </p>
                )}
              </div>

              {/* Field 4: Service Type */}
              <div>
                <label
                  htmlFor="lead-service"
                  className="block text-xs font-semibold text-[#14241B] mb-1.5"
                >
                  Service Type *
                </label>
                <select
                  id="lead-service"
                  name="serviceType"
                  value={selectedService}
                  onChange={(e) => onServiceChange(e.target.value as ServiceTypeId)}
                  className="w-full px-4 py-3 text-sm bg-[#FBFDF9] border border-[#C6D3C1] rounded-lg text-[#14241B] focus:outline-none focus:border-[#1E5631] focus:ring-2 focus:ring-[#1E5631]/20"
                >
                  {AUSTIN_SERVICES.map((svc) => (
                    <option key={svc.id} value={svc.id}>
                      {svc.title} (Starting at ${svc.basePrice}/visit)
                    </option>
                  ))}
                </select>
              </div>

              {/* Interactive Lot Size Selector for Real-Time Calculation */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label
                    htmlFor="lot-size-range"
                    className="text-xs font-semibold text-[#14241B]"
                  >
                    Approximate Lawn Area (Sq Ft)
                  </label>
                  <span className="font-mono-tabular text-xs font-bold text-[#1E5631]">
                    {lotSizeSqFt.toLocaleString()} sq ft
                  </span>
                </div>

                <input
                  id="lot-size-range"
                  type="range"
                  min={2500}
                  max={20000}
                  step={500}
                  value={lotSizeSqFt}
                  onChange={(e) => setLotSizeSqFt(Number(e.target.value))}
                  className="w-full accent-[#1E5631] cursor-pointer mb-2"
                />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {LOT_SIZE_PRESETS.map((preset) => (
                    <button
                      key={preset.sqFt}
                      type="button"
                      onClick={() => setLotSizeSqFt(preset.sqFt)}
                      className={`px-2.5 py-1.5 text-[11px] font-medium rounded-md border transition-colors whitespace-nowrap truncate cursor-pointer ${
                        lotSizeSqFt === preset.sqFt
                          ? 'bg-[#1E5631] text-white border-[#1E5631]'
                          : 'bg-[#F4F7F2] text-[#354B3D] border-[#D5E0D1] hover:border-[#1E5631]'
                      }`}
                    >
                      {preset.sqFt.toLocaleString()} sq ft
                    </button>
                  ))}
                </div>
              </div>

              {/* Optional Property Gate / Shade Notes */}
              <div>
                <label
                  htmlFor="lead-notes"
                  className="block text-xs font-semibold text-[#14241B] mb-1.5"
                >
                  Gate Code, Dogs, or Shade Notes (Optional)
                </label>
                <input
                  id="lead-notes"
                  name="notes"
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g., Locked cedar gate on left side, two friendly golden retrievers"
                  className="w-full px-4 py-2.5 text-sm bg-[#FBFDF9] border border-[#C6D3C1] rounded-lg text-[#14241B] placeholder:text-[#7B9082] focus:outline-none focus:border-[#1E5631]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 text-base font-semibold text-white bg-[#1E5631] rounded-lg hover:bg-[#164225] active:scale-[0.99] transition-all duration-150 cursor-pointer shadow-xs whitespace-nowrap"
              >
                Calculate &amp; Lock In My Free Quote
              </button>
            </form>

            {/* Immediate Confirmation Alert Upon Form Submission */}
            {latestConfirmation && (
              <div
                role="status"
                aria-live="polite"
                className="mt-6 p-5 rounded-xl bg-[#ECF6EE] border border-[#96C7A2] text-[#122B1B]"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    className="w-5 h-5 text-[#1E5631] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="font-display text-base font-bold text-[#14241B]">
                        Instant Estimate Confirmed for {latestConfirmation.name}
                      </h4>
                      <span className="font-mono-tabular text-xs font-semibold text-[#1E5631]">
                        Ref: {latestConfirmation.estimate.referenceCode}
                      </span>
                    </div>
                    <p className="text-xs text-[#2B4635] mt-1 leading-relaxed">
                      We have prepared your written estimate of{' '}
                      <strong className="font-mono-tabular">
                        ${latestConfirmation.estimate.estimatedPerVisit}/visit
                      </strong>{' '}
                      ({latestConfirmation.estimate.serviceType}) for{' '}
                      <strong>{latestConfirmation.address}</strong>. Our Austin route manager
                      will text <strong>{latestConfirmation.phone}</strong> within 15 minutes
                      to confirm your preferred arrival window.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right 5 Columns: Live Instant Estimate Breakdown + Recent Estimates Log */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#13281C] text-white border border-[#284B36] rounded-xl p-7">
              <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-[#254531]">
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-[#7CE395]" aria-hidden="true" />
                  <span className="text-xs font-semibold tracking-wide text-[#A7C4B2]">
                    Live Instant Price Breakdown
                  </span>
                </div>
                <span className="font-mono-tabular text-xs text-[#7CE395]">
                  {liveEstimate.referenceCode}
                </span>
              </div>

              <div className="mb-6">
                <p className="text-xs text-[#B6CFC0] mb-1">
                  Estimated Rate for {liveEstimate.serviceType}:
                </p>
                <div className="flex items-baseline gap-3">
                  <span className="font-mono-tabular text-4xl font-bold text-white">
                    ${liveEstimate.estimatedPerVisit}
                  </span>
                  <span className="text-xs text-[#7CE395] font-mono-tabular">
                    (Range: ${liveEstimate.estimatedRangeLow}–${liveEstimate.estimatedRangeHigh} / visit)
                  </span>
                </div>
                <p className="text-xs text-[#9AB8A6] mt-1">
                  {liveEstimate.frequencyLabel} · {liveEstimate.lotSizeSqFt.toLocaleString()} sq ft lawn
                </p>
              </div>

              {/* Frequency Quick Switch inside Calculator */}
              <div className="grid grid-cols-3 gap-1.5 p-1 bg-[#0D1D14] rounded-lg border border-[#254531] mb-6">
                {(
                  [
                    { id: 'weekly', label: 'Weekly (-12%)' },
                    { id: 'biweekly', label: 'Bi-Weekly' },
                    { id: 'seasonal', label: 'Single Visit' }
                  ] as const
                ).map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => onFrequencyChange(tab.id)}
                    className={`py-2 px-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap truncate cursor-pointer ${
                      selectedFrequency === tab.id
                        ? 'bg-[#254D35] text-white'
                        : 'text-[#9AB8A6] hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="space-y-2.5 pb-5 mb-5 border-b border-[#254531] text-xs">
                <p className="font-semibold text-[#D5E2DA]">
                  Included in Every {liveEstimate.serviceType} Visit:
                </p>
                {liveEstimate.includedChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-[#B8D0C1]">
                    <Check
                      className="w-3.5 h-3.5 text-[#7CE395] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-xs text-[#B8D0C1]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#7CE395]" aria-hidden="true" />
                    <span>Estimated On-Site Crew Time:</span>
                  </span>
                  <span className="font-mono-tabular font-semibold text-white">
                    ~{liveEstimate.estimatedCrewMinutes} mins
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#7CE395]" aria-hidden="true" />
                    <span>Next Austin Route Opening:</span>
                  </span>
                  <span className="font-semibold text-[#7CE395]">
                    {liveEstimate.nextAvailableWindow}
                  </span>
                </div>
              </div>
            </div>

            {/* Active / Saved Quote Requests Log */}
            <div className="bg-white border border-[#DCE3D8] rounded-xl p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-[#1E5631]" aria-hidden="true" />
                  <h4 className="text-sm font-bold text-[#14241B]">
                    Your Recent Austin Quote Calculations ({savedQuotes.length})
                  </h4>
                </div>
                <a
                  href="tel:5125550199"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#1E5631] hover:underline"
                >
                  <PhoneCall className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>(512) 555-0199</span>
                </a>
              </div>

              <div className="space-y-3">
                {savedQuotes.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-lg bg-[#F5F8F3] border border-[#E1E8DD] text-xs flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <p className="font-semibold text-[#14241B] truncate">
                        {item.estimate.serviceType}
                      </p>
                      <p className="text-[#52695A] truncate">
                        {item.address} · {item.estimate.lotSizeSqFt.toLocaleString()} sq ft
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-mono-tabular text-sm font-bold text-[#1E5631]">
                        ${item.estimate.estimatedPerVisit}/visit
                      </p>
                      <p className="text-[11px] text-[#5B7263]">{item.submittedAt}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
