// Project portfolio data (ToR: "Program/project portfolio pages").
// Titles, donors and summaries are kept in English in both locales — they are
// proper nouns / official project names. Filter labels are translated in the UI.

export type ProjectStatus = 'Ongoing' | 'Completed' | 'Pipeline';

export type Project = {
  id: string;
  title: string;
  donor: string;
  sector: string; // matches a sector name below
  division: string; // Bangladesh administrative division
  districts: string[];
  status: ProjectStatus;
  startYear: number;
  endYear: number;
  budgetUsd: number;
  beneficiaries: number;
  summary: string;
};

export const divisions = [
  'Barishal',
  'Chattogram',
  'Dhaka',
  'Khulna',
  'Mymensingh',
  'Rajshahi',
  'Rangpur',
  'Sylhet',
] as const;

export const sectors = [
  'Climate Resilience',
  'Disaster Risk Reduction',
  'Livelihoods & Food Security',
  'Health & Nutrition',
  'Education',
  'Water, Sanitation & Hygiene',
  "Women's Empowerment",
  'Emergency Response',
] as const;

export const donors = [
  'European Union',
  'FCDO',
  'USAID / BHA',
  'GIZ',
  'World Bank',
  'Asian Development Bank',
  'UNICEF',
  'WFP',
  'UNDP',
  'Global Affairs Canada',
  'SIDA',
  'Embassy of the Netherlands',
] as const;

export const projects: Project[] = [
  {
    id: 'PHD-2401',
    title: 'Coastal Resilience & Adaptation in the Sundarbans Belt (CRAB)',
    donor: 'European Union',
    sector: 'Climate Resilience',
    division: 'Khulna',
    districts: ['Khulna', 'Satkhira', 'Bagerhat'],
    status: 'Ongoing',
    startYear: 2023,
    endYear: 2027,
    budgetUsd: 8_400_000,
    beneficiaries: 142_000,
    summary:
      'Nature-based adaptation, saline-tolerant livelihoods and climate-resilient WASH across the south-west coastal belt.',
  },
  {
    id: 'PHD-2387',
    title: 'Anticipatory Action for Flood-Prone Communities (ANTICIPATE)',
    donor: 'FCDO',
    sector: 'Disaster Risk Reduction',
    division: 'Rangpur',
    districts: ['Kurigram', 'Gaibandha', 'Lalmonirhat'],
    status: 'Ongoing',
    startYear: 2022,
    endYear: 2026,
    budgetUsd: 5_100_000,
    beneficiaries: 96_000,
    summary:
      'Forecast-based financing, early-warning systems and pre-positioned cash that release before monsoon flooding peaks.',
  },
  {
    id: 'PHD-2290',
    title: 'Graduation Pathways out of Extreme Poverty (UTTORON)',
    donor: 'World Bank',
    sector: 'Livelihoods & Food Security',
    division: 'Rangpur',
    districts: ['Nilphamari', 'Rangpur', 'Kurigram'],
    status: 'Ongoing',
    startYear: 2021,
    endYear: 2026,
    budgetUsd: 12_600_000,
    beneficiaries: 64_000,
    summary:
      'An ultra-poor graduation model combining assets, coaching, savings and market linkages for monga-affected households.',
  },
  {
    id: 'PHD-2155',
    title: 'Maternal & Child Nutrition Surge (SHASTHO+)',
    donor: 'UNICEF',
    sector: 'Health & Nutrition',
    division: 'Sylhet',
    districts: ['Sylhet', 'Sunamganj', 'Habiganj'],
    status: 'Ongoing',
    startYear: 2023,
    endYear: 2025,
    budgetUsd: 3_900_000,
    beneficiaries: 220_000,
    summary:
      'Community management of acute malnutrition and maternal health outreach across the haor basin.',
  },
  {
    id: 'PHD-1998',
    title: 'Second-Chance Learning for Out-of-School Girls (ALOKITO)',
    donor: 'Global Affairs Canada',
    sector: 'Education',
    division: 'Chattogram',
    districts: ["Cox's Bazar", 'Bandarban'],
    status: 'Ongoing',
    startYear: 2022,
    endYear: 2026,
    budgetUsd: 6_700_000,
    beneficiaries: 38_000,
    summary:
      'Accelerated, disability-inclusive learning centres returning marginalised girls to formal education.',
  },
  {
    id: 'PHD-2402',
    title: 'Climate-Resilient WASH for Saline Communities (NIRMAL)',
    donor: 'Embassy of the Netherlands',
    sector: 'Water, Sanitation & Hygiene',
    division: 'Barishal',
    districts: ['Barishal', 'Patuakhali', 'Bhola'],
    status: 'Ongoing',
    startYear: 2024,
    endYear: 2028,
    budgetUsd: 4_300_000,
    beneficiaries: 175_000,
    summary:
      'Managed aquifer recharge, rainwater harvesting and CLTS for communities facing severe salinity.',
  },
  {
    id: 'PHD-2050',
    title: "Women's Economic Empowerment in Char Lands (SHOKTI)",
    donor: 'SIDA',
    sector: "Women's Empowerment",
    division: 'Mymensingh',
    districts: ['Jamalpur', 'Sherpur'],
    status: 'Ongoing',
    startYear: 2021,
    endYear: 2025,
    budgetUsd: 5_500_000,
    beneficiaries: 82_000,
    summary:
      "Enterprise development, savings groups and GBV response that put resources and voice in women's hands.",
  },
  {
    id: 'PHD-2410',
    title: 'Cyclone Remal Emergency Response & Recovery',
    donor: 'USAID / BHA',
    sector: 'Emergency Response',
    division: 'Khulna',
    districts: ['Khulna', 'Satkhira', 'Bagerhat', 'Patuakhali'],
    status: 'Completed',
    startYear: 2024,
    endYear: 2024,
    budgetUsd: 2_800_000,
    beneficiaries: 310_000,
    summary:
      'Rapid multipurpose cash, emergency shelter and WASH following Cyclone Remal landfall.',
  },
  {
    id: 'PHD-1875',
    title: 'Haor Livelihoods & Flash-Flood Resilience (HAOR-LIFE)',
    donor: 'GIZ',
    sector: 'Livelihoods & Food Security',
    division: 'Sylhet',
    districts: ['Sunamganj', 'Netrokona'],
    status: 'Completed',
    startYear: 2019,
    endYear: 2023,
    budgetUsd: 7_200_000,
    beneficiaries: 118_000,
    summary:
      'Submergence-tolerant rice, floating agriculture and flash-flood early warning across the haor wetlands.',
  },
  {
    id: 'PHD-2360',
    title: 'Urban Climate Resilience for Informal Settlements (NAGAR)',
    donor: 'Asian Development Bank',
    sector: 'Climate Resilience',
    division: 'Dhaka',
    districts: ['Dhaka', 'Gazipur'],
    status: 'Ongoing',
    startYear: 2023,
    endYear: 2027,
    budgetUsd: 9_800_000,
    beneficiaries: 205_000,
    summary:
      "Heat-resilient housing, drainage and livelihoods for climate migrants in Dhaka's informal settlements.",
  },
  {
    id: 'PHD-2415',
    title: 'Disability-Inclusive Disaster Preparedness (SHOMOTA)',
    donor: 'UNDP',
    sector: 'Disaster Risk Reduction',
    division: 'Barishal',
    districts: ['Bhola', 'Barguna'],
    status: 'Pipeline',
    startYear: 2025,
    endYear: 2028,
    budgetUsd: 3_400_000,
    beneficiaries: 54_000,
    summary:
      'Inclusive early-warning, evacuation and shelter design co-created with persons with disabilities.',
  },
  {
    id: 'PHD-2420',
    title: 'School Feeding & Nutrition for Climate-Affected Children',
    donor: 'WFP',
    sector: 'Health & Nutrition',
    division: 'Rangpur',
    districts: ['Kurigram', 'Gaibandha'],
    status: 'Pipeline',
    startYear: 2025,
    endYear: 2029,
    budgetUsd: 6_100_000,
    beneficiaries: 130_000,
    summary:
      'Home-grown school feeding linking smallholder farmers to nutritious meals for primary-school children.',
  },
];

export const fmtUsd = (n: number) => {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `$${Math.round(n / 1_000)}K`;
  return `$${n}`;
};
