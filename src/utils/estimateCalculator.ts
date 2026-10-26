export type ServiceTypeId =
  | 'Lawn Mowing & Maintenance'
  | 'Weed Control & Texas Fertilization'
  | 'Mulching & Flower Bed Upkeep'
  | 'Aeration';

export type ServiceFrequency = 'weekly' | 'biweekly' | 'seasonal';

export interface ServiceItem {
  id: ServiceTypeId;
  indexNumber: string;
  title: ServiceTypeId;
  shortTagline: string;
  description: string;
  austinSoilContext: string;
  deliverables: string[];
  basePrice: number;
  perThousandSqFtRate: number;
  recommendedSeason: string;
  durationMinutes: number;
  turfTypes: string;
}

export interface AustinZoneSpec {
  id: string;
  name: string;
  zipCodes: string;
  soilProfile: string;
  dominantTurf: string;
  primaryChallenge: string;
  recommendedProgram: ServiceTypeId;
  caseStudy: {
    neighborhood: string;
    metricHeadline: string;
    timeframe: string;
    beforeState: string;
    actionTaken: string;
    outcomeStatement: string;
    clientName: string;
    clientRole: string;
  };
}

export interface LeadFormInput {
  name: string;
  phone: string;
  address: string;
  serviceType: ServiceTypeId;
  lotSizeSqFt: number;
  frequency: ServiceFrequency;
  notes?: string;
}

export interface ValidationErrors {
  name?: string;
  phone?: string;
  address?: string;
  serviceType?: string;
}

export interface InstantEstimateResult {
  referenceCode: string;
  serviceType: ServiceTypeId;
  frequencyLabel: string;
  lotSizeSqFt: number;
  estimatedPerVisit: number;
  estimatedRangeLow: number;
  estimatedRangeHigh: number;
  annualSavingsEstimate: number;
  estimatedCrewMinutes: number;
  includedChecklist: string[];
  austinWaterStageNote: string;
  nextAvailableWindow: string;
}

export const AUSTIN_SERVICES: ServiceItem[] = [
  {
    id: 'Lawn Mowing & Maintenance',
    indexNumber: '01.',
    title: 'Lawn Mowing & Maintenance',
    shortTagline: 'Precision turf cutting, crisp limestone edging, and debris blow-off',
    description:
      'Calibrated deck-height mowing tailored for Austin St. Augustine, Bermuda, and Zoysia lawns. We rotate mowing patterns every visit to prevent wheel ruts and soil compaction in heat-stressed turf.',
    austinSoilContext: '3.5-inch high-cut deck setting during July–September peak heat to shade root zones and retain moisture.',
    deliverables: [
      'Pattern-rotated rotary mowing with commercial 82V battery equipment',
      'Vertical steel-blade edging along walkways, curbs, and limestone borders',
      'String trimming around live oak root flares and fence lines without bark scarring',
      'Complete hardscape blow-off of driveways, patios, and pool decks'
    ],
    basePrice: 48,
    perThousandSqFtRate: 4.5,
    recommendedSeason: 'Year-Round · Weekly (Apr–Oct) / Bi-Weekly (Nov–Mar)',
    durationMinutes: 45,
    turfTypes: 'St. Augustine · Bermuda · Zoysia · Buffalo Grass'
  },
  {
    id: 'Weed Control & Texas Fertilization',
    indexNumber: '02.',
    title: 'Weed Control & Texas Fertilization',
    shortTagline: '6-step Central Texas slow-release nutrient & pre-emergent program',
    description:
      'Formulated specifically for alkaline Edwards Plateau soils (pH 7.6–8.2). We pair split pre-emergent barriers against rescuegrass and crabgrass with chelated iron and slow-release nitrogen.',
    austinSoilContext: 'Chelated iron & sulfur soil amendments counteract limestone chlorosis (yellowing blades) without forcing weak surge growth.',
    deliverables: [
      'Early spring & fall pre-emergent barriers blocking crabgrass, rescuegrass, and burclover',
      'Targeted post-emergent spot treatment for dandelion, dollarweed, and nutsedge',
      'Slow-release humic & bio-organic fertilizer with chelated iron micronutrient pack',
      'Chinch bug and grub preventative surface monitoring during summer drought stages'
    ],
    basePrice: 69,
    perThousandSqFtRate: 5.5,
    recommendedSeason: '6 Scheduled Applications Per Year · Every 8 Weeks',
    durationMinutes: 35,
    turfTypes: 'Calibrated for Alkaline pH 7.8+ Central Texas Soils'
  },
  {
    id: 'Mulching & Flower Bed Upkeep',
    indexNumber: '03.',
    title: 'Mulching & Flower Bed Upkeep',
    shortTagline: 'Double-shredded Texas native hardwood mulch & hand-weeded beds',
    description:
      'Protect ornamental roots from 105°F summer soil temperatures and suppress bed weeds naturally. We install 2.5 to 3 inches of aged native Texas hardwood or cedar mulch with clean trench borders.',
    austinSoilContext: 'Reduces root-zone soil temperature by up to 14°F and cuts flower bed evaporative water loss by 38% during Austin Stage 2 watering rules.',
    deliverables: [
      'Hand-pulling of invasive bed weeds and Bermuda grass runners prior to dressing',
      'Spade-cut 3-inch deep V-trench bed edges to lock mulch cleanly in place',
      'Installation of double-shredded native Texas hardwood or dark aged cedar mulch',
      'Selective pruning of Texas sage, lantana, pride of barbados, and ornamental grasses'
    ],
    basePrice: 135,
    perThousandSqFtRate: 14.0,
    recommendedSeason: 'Spring Refresh (Feb–May) & Fall Insulation (Sep–Nov)',
    durationMinutes: 95,
    turfTypes: 'Native Perennials · Tree Rings · Limestone Planter Beds'
  },
  {
    id: 'Aeration',
    indexNumber: '04.',
    title: 'Aeration',
    shortTagline: 'Mechanical core & deep liquid aeration for compacted clay and limestone',
    description:
      'Relieve severe foot-traffic and drought compaction across Austin Blackland clay and thin caliche soils. Core aeration pulls 3-inch soil plugs so oxygen, water, and nutrients reach deep turf roots.',
    austinSoilContext: 'Breaks up hydrophobic surface crusts so spring thunderstorms soak into the root zone instead of running off into the street.',
    deliverables: [
      'Double-pass hollow-tine mechanical core aeration pulling 2.5"–3" soil plugs',
      'Optional liquid humic & kelp soil penetrant for shallow limestone ledge lawns',
      'Irrigation head & shallow utility line flagging prior to machine operation',
      'Over-seeding or compost top-dressing readiness check for thin canopy areas'
    ],
    basePrice: 115,
    perThousandSqFtRate: 11.0,
    recommendedSeason: 'Spring Green-Up (Apr–Jun) & Early Fall Root Recovery (Sep–Oct)',
    durationMinutes: 75,
    turfTypes: 'Compacted Clay · High-Traffic Lawns · Sloped Yards'
  }
];

export const AUSTIN_ZONES: AustinZoneSpec[] = [
  {
    id: 'westlake',
    name: 'Westlake & Barton Creek',
    zipCodes: '78746 · 78735 · 78733',
    soilProfile: 'Shallow Edwards Limestone Ledge (pH 8.1) with fast drainage',
    dominantTurf: 'Raleigh St. Augustine & Emerald Zoysia',
    primaryChallenge: 'Iron chlorosis yellowing and shallow topsoil moisture stress',
    recommendedProgram: 'Weed Control & Texas Fertilization',
    caseStudy: {
      neighborhood: 'Westlake Hills (78746)',
      metricHeadline: '+68% Turf Canopy Density in 90 Days',
      timeframe: 'Spring–Summer 2026 Program',
      beforeState: 'Thin, yellowed St. Augustine turf struggling over shallow limestone with pervasive king ranch bluestem and rescuegrass.',
      actionTaken: 'Applied chelated iron + sulfur pH buffer, split pre-emergent barrier, and switched mowing height to 3.75 inches.',
      outcomeStatement: 'Restored deep emerald color across 11,500 sq ft without increasing LCRA Stage 2 once-per-week irrigation runtime.',
      clientName: 'Marcus & Elena Vance',
      clientRole: 'Homeowners · Redbud Trail, Westlake Hills'
    }
  },
  {
    id: 'travis-heights',
    name: 'Travis Heights & South Austin',
    zipCodes: '78704 · 78745 · 78702',
    soilProfile: 'Heavy Blackland Prairie Shrink-Swell Clay',
    dominantTurf: 'Celebration Bermuda & Palmetto St. Augustine',
    primaryChallenge: 'Severe summer clay compaction and water runoff on sloped lots',
    recommendedProgram: 'Aeration',
    caseStudy: {
      neighborhood: 'Travis Heights (78704)',
      metricHeadline: '-34% Irrigation Runoff After Core Aeration',
      timeframe: 'Measured Over 12 Weeks Post-Treatment',
      beforeState: 'Rock-hard compacted clay causing sprinkler water to pool on the sidewalk within 4 minutes of running.',
      actionTaken: 'Performed double-pass hollow-tine core aeration followed by 0.25-inch screened Austin compost top-dressing and hardwood bed mulching.',
      outcomeStatement: 'Eliminated dry bare spots along the front slope and absorbed 100% of weekly irrigation cycles with zero street runoff.',
      clientName: 'Dr. Hannah Lindqvist',
      clientRole: 'Homeowner · Alameda Dr, Travis Heights'
    }
  },
  {
    id: 'tarrytown',
    name: 'Tarrytown & Northwest Hills',
    zipCodes: '78703 · 78731 · 78757',
    soilProfile: 'Dappled Mature Live Oak Canopy & Silty Clay Loam',
    dominantTurf: 'Shade-Tolerant St. Augustine & Cavaliers Zoysia',
    primaryChallenge: 'Dense oak leaf drop, surface root competition, and shaded turf thinning',
    recommendedProgram: 'Mulching & Flower Bed Upkeep',
    caseStudy: {
      neighborhood: 'Tarrytown (78703)',
      metricHeadline: '99.2% Weed-Free Beds & Thriving Under-Canopy Turf',
      timeframe: '12-Month Full Estate Maintenance',
      beforeState: 'St. Augustine receding under 60-year-old Live Oaks with compacted tree rings and horseherb takeover.',
      actionTaken: 'Expanded mulched native perennial beds around oak root flares, raised mowing deck, and applied low-nitrogen shade nutrition.',
      outcomeStatement: 'Stabilized turf border cleanly around mature oaks and cut weekly yard upkeep noise by 65% with our battery-electric crew.',
      clientName: 'David & Claire Pemberton',
      clientRole: 'Homeowners · Exposition Blvd, Tarrytown'
    }
  }
];

export function validateLeadForm(input: Partial<LeadFormInput>): {
  isValid: boolean;
  errors: ValidationErrors;
} {
  const errors: ValidationErrors = {};

  const trimmedName = (input.name ?? '').trim();
  if (!trimmedName) {
    errors.name = 'Please enter your full name.';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters.';
  }

  const rawPhone = (input.phone ?? '').trim();
  const digitsOnly = rawPhone.replace(/\D/g, '');
  if (!rawPhone) {
    errors.phone = 'Please enter a phone number for your text/call estimate.';
  } else if (digitsOnly.length < 10 || digitsOnly.length > 11) {
    errors.phone = 'Please enter a valid 10-digit phone number (e.g., 512-555-0194).';
  }

  const trimmedAddress = (input.address ?? '').trim();
  if (!trimmedAddress) {
    errors.address = 'Please enter your street address in Austin.';
  } else if (trimmedAddress.length < 6 || !/\d/.test(trimmedAddress)) {
    errors.address = 'Please include a street number and street name in Austin, TX.';
  }

  const validServiceIds = AUSTIN_SERVICES.map((s) => s.id);
  if (!input.serviceType || !validServiceIds.includes(input.serviceType)) {
    errors.serviceType = 'Please select one of our 4 core lawn care services.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

export function calculateInstantEstimate(input: {
  serviceType: ServiceTypeId;
  lotSizeSqFt: number;
  frequency: ServiceFrequency;
  address?: string;
}): InstantEstimateResult {
  const service =
    AUSTIN_SERVICES.find((s) => s.id === input.serviceType) ?? AUSTIN_SERVICES[0];

  const clampedSqFt = Math.max(2000, Math.min(30000, input.lotSizeSqFt || 7500));
  const billableThousands = Math.max(0, (clampedSqFt - 3500) / 1000);

  const rawSubtotal = service.basePrice + billableThousands * service.perThousandSqFtRate;

  let frequencyMultiplier = 1.0;
  let frequencyLabel = 'Bi-Weekly Scheduled Plan';
  if (input.frequency === 'weekly') {
    frequencyMultiplier = 0.88; // 12% recurring route efficiency discount per visit
    frequencyLabel = 'Weekly Peak-Season Route (-12% Per Visit)';
  } else if (input.frequency === 'seasonal') {
    frequencyMultiplier = 1.12;
    frequencyLabel = 'Single / Seasonal Treatment Visit';
  }

  const estimatedPerVisit = Math.round(rawSubtotal * frequencyMultiplier);
  const estimatedRangeLow = Math.max(39, Math.round(estimatedPerVisit * 0.93));
  const estimatedRangeHigh = Math.round(estimatedPerVisit * 1.08);

  const annualSavingsEstimate =
    input.frequency === 'weekly'
      ? Math.round(rawSubtotal * 0.12 * 28)
      : input.frequency === 'biweekly'
        ? Math.round(rawSubtotal * 0.07 * 20)
        : 85;

  const estimatedCrewMinutes = Math.round(
    service.durationMinutes + (clampedSqFt - 5000) / 350
  );

  const addressSeed = (input.address ?? 'ATX')
    .replace(/[^a-zA-Z0-9]/g, '')
    .toUpperCase()
    .slice(0, 4)
    .padEnd(4, '7');
  const referenceCode = `AEL-${addressSeed}-${clampedSqFt}`;

  return {
    referenceCode,
    serviceType: service.id,
    frequencyLabel,
    lotSizeSqFt: clampedSqFt,
    estimatedPerVisit,
    estimatedRangeLow,
    estimatedRangeHigh,
    annualSavingsEstimate,
    estimatedCrewMinutes: Math.max(25, estimatedCrewMinutes),
    includedChecklist: service.deliverables,
    austinWaterStageNote:
      'Calibrated for current Austin Water & LCRA drought-resilient turf guidelines.',
    nextAvailableWindow: 'Within 48 Hours (Austin Route Crew #2)'
  };
}
