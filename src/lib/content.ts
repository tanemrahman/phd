// Institutional content datasets for the expanded site (board, leadership,
// partners, careers, publications, transparency, stories, case studies).
// Proper nouns (names, document titles, donor names) stay in English in both
// locales; surrounding UI copy is translated via next-intl messages.

/* ---------- Leadership: Board of Directors ---------- */
export type Person = {
  name: string;
  role: string;
  bio: string;
  initials: string;
};

export const board: Person[] = [
  {
    name: 'Prof. Dr. A. K. M. Rahman',
    role: 'Chairperson',
    bio: 'Public health physician with four decades in national health-systems leadership and academia.',
    initials: 'AR',
  },
  {
    name: 'Ms. Farzana Karim',
    role: 'Vice Chairperson',
    bio: 'Development finance specialist focused on transparent grant governance and donor accountability.',
    initials: 'FK',
  },
  {
    name: 'Mr. Shahidul Islam',
    role: 'Treasurer',
    bio: 'Chartered accountant overseeing financial stewardship, audit and compliance.',
    initials: 'SI',
  },
  {
    name: 'Dr. Nasrin Sultana',
    role: 'Member',
    bio: 'Maternal and child health expert with extensive field experience in hard-to-reach districts.',
    initials: 'NS',
  },
  {
    name: 'Mr. Tariq Hasan',
    role: 'Member',
    bio: 'Humanitarian practitioner specialising in disaster risk reduction and emergency response.',
    initials: 'TH',
  },
  {
    name: 'Ms. Rumana Ahmed',
    role: 'Member',
    bio: 'Gender and inclusion advocate advancing women-led, community-owned development.',
    initials: 'RA',
  },
];

/* ---------- Senior Management Team ---------- */
export const team: Person[] = [
  {
    name: 'Md. Abul Kalam Azad',
    role: 'Assistant Director',
    bio: 'Leads programme coordination, partnerships and institutional communications.',
    initials: 'AK',
  },
  {
    name: 'Dr. Sabrina Yeasmin',
    role: 'Director — Programmes',
    bio: 'Oversees the full portfolio of health, climate and livelihoods programmes.',
    initials: 'SY',
  },
  {
    name: 'Mr. Kamrul Hossain',
    role: 'Director — Finance & Operations',
    bio: 'Responsible for financial management, procurement and donor compliance.',
    initials: 'KH',
  },
  {
    name: 'Ms. Tahmina Akter',
    role: 'Head of MEAL',
    bio: 'Drives monitoring, evaluation, accountability and learning across all projects.',
    initials: 'TA',
  },
  {
    name: 'Mr. Rezaul Karim',
    role: 'Head of Humanitarian Response',
    bio: 'Coordinates anticipatory action and rapid emergency operations nationwide.',
    initials: 'RK',
  },
  {
    name: 'Ms. Nadia Islam',
    role: 'Head of Human Resources',
    bio: 'Builds a safeguarding-first, inclusive and high-performing workforce.',
    initials: 'NI',
  },
];

/* ---------- Donors & development partners ---------- */
export const partnerGroups: {group: string; names: string[]}[] = [
  {
    group: 'UN agencies',
    names: ['UNICEF', 'WFP', 'UNDP', 'UNHCR', 'UN Women', 'FAO', 'IOM', 'WHO'],
  },
  {
    group: 'Bilateral & government',
    names: [
      'European Union',
      'FCDO',
      'USAID / BHA',
      'GIZ',
      'SIDA',
      'Global Affairs Canada',
      'Embassy of the Netherlands',
      'KOICA',
    ],
  },
  {
    group: 'Multilaterals & foundations',
    names: [
      'World Bank',
      'Asian Development Bank',
      'Green Climate Fund',
      'Gates Foundation',
      'START Network',
      'BRAC',
      'Save the Children',
      'Oxfam',
    ],
  },
];

/* ---------- Careers ---------- */
export type Job = {
  title: string;
  unit: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Internship';
  closing: string;
};

export const jobs: Job[] = [
  {title: 'Programme Manager — Climate Resilience', unit: 'Programmes', location: 'Khulna', type: 'Full-time', closing: '30 Jun 2026'},
  {title: 'MEAL Coordinator', unit: 'Quality & Accountability', location: 'Dhaka', type: 'Full-time', closing: '05 Jul 2026'},
  {title: 'Gender & Inclusion Specialist', unit: 'Technical', location: 'Dhaka', type: 'Full-time', closing: '12 Jul 2026'},
  {title: 'Finance Officer — Grants', unit: 'Finance', location: 'Dhaka', type: 'Full-time', closing: '08 Jul 2026'},
  {title: 'WASH Engineer', unit: 'Programmes', location: 'Barishal', type: 'Contract', closing: '18 Jul 2026'},
  {title: 'Communications Intern', unit: 'Communications', location: 'Dhaka', type: 'Internship', closing: '25 Jun 2026'},
];

/* ---------- Procurement & tenders ---------- */
export const tenders = [
  {ref: 'PHD/RFQ/2026/061', title: 'Supply of solar-powered water pumps (12 units)', type: 'RFQ', closing: '24 Jun 2026'},
  {ref: 'PHD/RFP/2026/058', title: 'Endline evaluation — ALOKITO education programme', type: 'RFP', closing: '01 Jul 2026'},
  {ref: 'PHD/ITT/2026/055', title: 'Construction of 3 climate-resilient cyclone shelters', type: 'Tender', closing: '10 Jul 2026'},
  {ref: 'PHD/RFQ/2026/053', title: 'Framework agreement — ICT equipment & support', type: 'RFQ', closing: '19 Jun 2026'},
];

/* ---------- Knowledge: publications & reports ---------- */
export type PublicationType =
  | 'Annual Report'
  | 'Research'
  | 'Policy Brief'
  | 'Evaluation'
  | 'Financial'
  | 'Newsletter';

export type Publication = {
  title: string;
  type: PublicationType;
  year: number;
  pages: number;
};

export const publications: Publication[] = [
  {title: 'PHD Annual Report 2025', type: 'Annual Report', year: 2025, pages: 84},
  {title: 'PHD Annual Report 2024', type: 'Annual Report', year: 2024, pages: 78},
  {title: 'Locally-Led Adaptation: Evidence from the Coastal Belt', type: 'Research', year: 2025, pages: 46},
  {title: 'Forecast-Based Financing in Bangladesh — A Policy Brief', type: 'Policy Brief', year: 2025, pages: 12},
  {title: 'Graduation Model Endline Evaluation (UTTORON)', type: 'Evaluation', year: 2024, pages: 58},
  {title: 'Gender Transformative Programming: Lessons Learned', type: 'Research', year: 2024, pages: 38},
  {title: 'PHD Quarterly Newsletter — Q2 2026', type: 'Newsletter', year: 2026, pages: 8},
];

/* ---------- Transparency: audit & financial documents ---------- */
export const auditDocs = [
  {title: 'Audited Financial Statements FY2024–25', type: 'Financial', year: '2025'},
  {title: 'Annual Audit Report (External)', type: 'Audit', year: '2025'},
  {title: 'Income & Expenditure Summary', type: 'Financial', year: '2025'},
  {title: 'Donor Fund Utilisation Report', type: 'Financial', year: '2024'},
];

export const incomeSplit = [
  {key: 'institutional', pct: 72},
  {key: 'un', pct: 16},
  {key: 'foundations', pct: 9},
  {key: 'individual', pct: 3},
];

// Policy items: key drives the translated label, icon picked in the page.
export const policies = [
  'safeguarding',
  'childProtection',
  'antiCorruption',
  'whistleblower',
  'conflictInterest',
  'dataProtection',
] as const;

/* ---------- Success stories ---------- */
export type Story = {
  slug: string;
  name: string;
  location: string;
  program: string;
  headline: string;
  quote: string;
};

export const stories: Story[] = [
  {
    slug: 'rahima-floating-garden',
    name: 'Rahima Begum',
    location: 'Satkhira, Khulna',
    program: 'Climate Resilience',
    headline: 'From saline ruin to a floating harvest',
    quote:
      'When the land turned to salt, I thought we would have to leave. Now my floating garden feeds my children and earns enough to send them to school.',
  },
  {
    slug: 'jamal-early-warning',
    name: 'Jamal Uddin',
    location: 'Kurigram, Rangpur',
    program: 'Disaster Risk Reduction',
    headline: 'The volunteer who gives his village a head start',
    quote:
      'Now the warning reaches us a full day earlier. Last monsoon, not one family in my ward lost a goat or a grain store.',
  },
  {
    slug: 'shilpi-enterprise',
    name: 'Shilpi Rani',
    location: 'Jamalpur, Mymensingh',
    program: "Women's Empowerment",
    headline: 'A savings group that became a business',
    quote:
      'I started with a loan of five thousand taka. Today I employ six women from my char, and I sit on the union council.',
  },
];

/* ---------- Case studies ---------- */
export type CaseStudy = {
  title: string;
  sector: string;
  location: string;
  challenge: string;
  approach: string;
  result: string;
  stat: {value: string; label: string};
};

export const caseStudies: CaseStudy[] = [
  {
    title: 'Anticipatory cash before the flood peak',
    sector: 'Disaster Risk Reduction',
    location: 'Kurigram, Rangpur',
    challenge:
      'Riverine communities lose assets every monsoon because aid arrives only after flooding destroys homes and livelihoods.',
    approach:
      'Forecast-based financing triggered multipurpose cash and early warnings 24 hours before the Brahmaputra crossed danger level.',
    result:
      'Households protected livestock, grain stores and tools, recovering far faster than in previous floods.',
    stat: {value: '96K', label: 'people reached before the peak'},
  },
  {
    title: 'Floating agriculture in the saline belt',
    sector: 'Climate Resilience',
    location: 'Satkhira, Khulna',
    challenge:
      'Rising salinity made traditional cropping impossible across large parts of the south-west coast.',
    approach:
      'Nature-based floating gardens, saline-tolerant varieties and water-management training restored year-round production.',
    result:
      'Families regained food security and income without migrating, while women gained new economic roles.',
    stat: {value: '142K', label: 'people in climate-resilient livelihoods'},
  },
  {
    title: 'Graduating households out of extreme poverty',
    sector: 'Livelihoods & Food Security',
    location: 'Nilphamari, Rangpur',
    challenge:
      'Monga-affected ultra-poor households were trapped in seasonal hunger and debt cycles.',
    approach:
      'An asset-plus-coaching graduation model paired transfers with savings, skills and market linkages.',
    result:
      'An independent endline found average household income more than doubled over the project period.',
    stat: {value: '64K', label: 'people on a path out of poverty'},
  },
];
