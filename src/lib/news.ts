import {IMG} from './images';

export type CategoryKey =
  | 'health'
  | 'humanitarian'
  | 'capacity'
  | 'research'
  | 'climate';

type Localized = {en: string; bn: string};

export type Article = {
  slug: string;
  image: string;
  date: string; // ISO
  category: CategoryKey;
  featured?: boolean;
  title: Localized;
  excerpt: Localized;
  body: {en: string[]; bn: string[]};
};

export const CATEGORY_COLORS: Record<CategoryKey, string> = {
  health: 'bg-phd-primary',
  humanitarian: 'bg-phd-gold',
  capacity: 'bg-phd-accent',
  research: 'bg-phd-primary-light',
  climate: 'bg-phd-accent-dark',
};

// Sample editorial content. Replace with CMS data later — the page components
// only depend on the helpers below, so the swap is isolated.
export const ARTICLES: Article[] = [
  {
    slug: 'strengthening-community-health-systems',
    image: IMG.healthWorker,
    date: '2026-05-28',
    category: 'health',
    featured: true,
    title: {
      en: 'Strengthening community health systems in underserved districts',
      bn: 'সুবিধাবঞ্চিত জেলায় কমিউনিটি স্বাস্থ্য ব্যবস্থা শক্তিশালীকরণ',
    },
    excerpt: {
      en: 'A new initiative is expanding access to quality primary healthcare for thousands of families across rural Bangladesh.',
      bn: 'একটি নতুন উদ্যোগ গ্রামীণ বাংলাদেশের হাজার হাজার পরিবারের জন্য মানসম্মত প্রাথমিক স্বাস্থ্যসেবায় প্রবেশাধিকার বৃদ্ধি করছে।',
    },
    body: {
      en: [
        'Across rural Bangladesh, distance and cost remain among the biggest barriers to quality healthcare. PHD is working alongside the Directorate General of Health Services and local communities to bring primary care closer to those who need it most.',
        'The programme strengthens community clinics, trains frontline health workers, and introduces simple digital tools for tracking maternal and child health — ensuring that no family is left behind.',
        'Early results show a measurable increase in antenatal visits and childhood immunisation coverage in the participating districts, demonstrating the power of locally-owned, system-strengthening approaches.',
      ],
      bn: [
        'গ্রামীণ বাংলাদেশে দূরত্ব ও খরচ এখনও মানসম্মত স্বাস্থ্যসেবার অন্যতম বড় বাধা। PHD স্বাস্থ্য অধিদপ্তর ও স্থানীয় কমিউনিটির সঙ্গে মিলে যাদের সবচেয়ে বেশি প্রয়োজন তাদের কাছে প্রাথমিক সেবা পৌঁছে দিতে কাজ করছে।',
        'এই কর্মসূচি কমিউনিটি ক্লিনিক শক্তিশালী করে, সম্মুখসারির স্বাস্থ্যকর্মীদের প্রশিক্ষণ দেয় এবং মা ও শিশুর স্বাস্থ্য পর্যবেক্ষণে সহজ ডিজিটাল টুল চালু করে — যাতে কোনো পরিবার পিছিয়ে না থাকে।',
        'প্রাথমিক ফলাফলে অংশগ্রহণকারী জেলাগুলোতে গর্ভকালীন পরিদর্শন ও শিশু টিকাদানের হার উল্লেখযোগ্যভাবে বেড়েছে, যা স্থানীয় মালিকানার ব্যবস্থা-শক্তিশালীকরণ পদ্ধতির শক্তি প্রমাণ করে।',
      ],
    },
  },
  {
    slug: 'emergency-response-climate-affected-areas',
    image: IMG.relief,
    date: '2026-05-14',
    category: 'humanitarian',
    featured: false,
    title: {
      en: 'Emergency response reaches families in climate-affected areas',
      bn: 'জলবায়ু-আক্রান্ত এলাকায় জরুরি সাড়াদান পরিবারগুলোর কাছে',
    },
    excerpt: {
      en: 'Coordinated relief delivered essential supplies to communities displaced by recent flooding along the coastal belt.',
      bn: 'সমন্বিত ত্রাণ উপকূলীয় অঞ্চলে সাম্প্রতিক বন্যায় বাস্তুচ্যুত কমিউনিটির কাছে প্রয়োজনীয় সামগ্রী পৌঁছে দিয়েছে।',
    },
    body: {
      en: [
        'When flooding struck the coastal belt, thousands of families were forced from their homes overnight. PHD’s emergency teams mobilised within hours, coordinating with local authorities and partners to deliver clean water, food, and hygiene supplies.',
        'Beyond immediate relief, the response focused on protecting the most vulnerable — pregnant women, young children, and the elderly — through mobile health support and safe shelter.',
        'Recovery efforts now centre on rebuilding livelihoods and strengthening community preparedness for future climate shocks.',
      ],
      bn: [
        'উপকূলীয় অঞ্চলে বন্যা আঘাত হানলে হাজার হাজার পরিবার রাতারাতি ঘরছাড়া হয়। PHD-এর জরুরি দল কয়েক ঘণ্টার মধ্যে সক্রিয় হয়ে স্থানীয় কর্তৃপক্ষ ও অংশীদারদের সঙ্গে সমন্বয় করে বিশুদ্ধ পানি, খাবার ও স্বাস্থ্যবিধি সামগ্রী পৌঁছে দেয়।',
        'তাৎক্ষণিক ত্রাণের বাইরে, সাড়াদানে সবচেয়ে ঝুঁকিপূর্ণদের — গর্ভবতী নারী, শিশু ও বয়স্কদের — মোবাইল স্বাস্থ্যসেবা ও নিরাপদ আশ্রয়ের মাধ্যমে রক্ষায় গুরুত্ব দেওয়া হয়।',
        'পুনরুদ্ধার কার্যক্রম এখন জীবিকা পুনর্গঠন ও ভবিষ্যতের জলবায়ু ধাক্কার জন্য কমিউনিটির প্রস্তুতি জোরদারে কেন্দ্রীভূত।',
      ],
    },
  },
  {
    slug: 'training-next-generation-changemakers',
    image: IMG.classroom,
    date: '2026-04-30',
    category: 'capacity',
    title: {
      en: 'Training the next generation of changemakers',
      bn: 'পরবর্তী প্রজন্মের পরিবর্তনকারীদের প্রশিক্ষণ',
    },
    excerpt: {
      en: 'Capacity-building workshops are equipping young professionals and local institutions with skills for lasting impact.',
      bn: 'সক্ষমতা-উন্নয়ন কর্মশালা তরুণ পেশাজীবী ও স্থানীয় প্রতিষ্ঠানকে টেকসই প্রভাবের দক্ষতায় সজ্জিত করছে।',
    },
    body: {
      en: [
        'Sustainable change depends on strong local institutions. Through hands-on workshops and mentorship, PHD is helping young professionals build the technical and leadership skills needed to drive development from within their own communities.',
        'Participants gain practical experience in project management, monitoring and evaluation, and financial governance — capabilities that strengthen organisations long after a project ends.',
      ],
      bn: [
        'টেকসই পরিবর্তন শক্তিশালী স্থানীয় প্রতিষ্ঠানের ওপর নির্ভর করে। হাতে-কলমে কর্মশালা ও মেন্টরশিপের মাধ্যমে PHD তরুণ পেশাজীবীদের নিজেদের কমিউনিটির ভেতর থেকে উন্নয়ন এগিয়ে নিতে প্রয়োজনীয় কারিগরি ও নেতৃত্বের দক্ষতা গড়তে সহায়তা করছে।',
        'অংশগ্রহণকারীরা প্রকল্প ব্যবস্থাপনা, পর্যবেক্ষণ ও মূল্যায়ন এবং আর্থিক সুশাসনে ব্যবহারিক অভিজ্ঞতা অর্জন করে — যা প্রকল্প শেষ হওয়ার পরও প্রতিষ্ঠানকে শক্তিশালী রাখে।',
      ],
    },
  },
  {
    slug: 'research-driving-evidence-based-policy',
    image: IMG.meeting,
    date: '2026-04-12',
    category: 'research',
    title: {
      en: 'Research driving evidence-based health policy',
      bn: 'গবেষণা যা তথ্যভিত্তিক স্বাস্থ্যনীতিকে এগিয়ে নিচ্ছে',
    },
    excerpt: {
      en: 'New field research is informing smarter, more equitable decisions for health programming nationwide.',
      bn: 'নতুন মাঠ গবেষণা সারাদেশে স্বাস্থ্য কর্মসূচির জন্য আরও সুবিবেচিত ও সমতাভিত্তিক সিদ্ধান্তে সহায়তা করছে।',
    },
    body: {
      en: [
        'Good decisions begin with good evidence. PHD’s research teams work in close partnership with academic institutions to generate rigorous, locally-relevant data on health and development outcomes.',
        'These insights help government and partners design programmes that reach the right people, in the right places, with measurable results.',
      ],
      bn: [
        'ভালো সিদ্ধান্ত ভালো তথ্য দিয়ে শুরু হয়। PHD-এর গবেষণা দল একাডেমিক প্রতিষ্ঠানের সঙ্গে ঘনিষ্ঠ অংশীদারিত্বে স্বাস্থ্য ও উন্নয়ন ফলাফল নিয়ে নির্ভরযোগ্য, স্থানীয়ভাবে প্রাসঙ্গিক তথ্য তৈরি করে।',
        'এই অন্তর্দৃষ্টি সরকার ও অংশীদারদের এমন কর্মসূচি ডিজাইনে সহায়তা করে যা সঠিক জায়গায় সঠিক মানুষের কাছে পরিমাপযোগ্য ফলাফল নিয়ে পৌঁছায়।',
      ],
    },
  },
  {
    slug: 'building-climate-resilient-communities',
    image: IMG.childrenCommunity,
    date: '2026-03-22',
    category: 'climate',
    title: {
      en: 'Building climate-resilient communities',
      bn: 'জলবায়ু-সহনশীল কমিউনিটি গড়ে তোলা',
    },
    excerpt: {
      en: 'Community-led adaptation is helping vulnerable families withstand and recover from climate shocks.',
      bn: 'কমিউনিটি-চালিত অভিযোজন ঝুঁকিপূর্ণ পরিবারগুলোকে জলবায়ু ধাক্কা সহ্য ও পুনরুদ্ধারে সহায়তা করছে।',
    },
    body: {
      en: [
        'For communities on the front line of climate change, resilience is a daily necessity. PHD supports locally-led adaptation — from climate-smart livelihoods to early-warning systems — that puts communities in control of their own future.',
        'By combining local knowledge with technical support, these efforts reduce risk and protect hard-won development gains.',
      ],
      bn: [
        'জলবায়ু পরিবর্তনের সম্মুখসারির কমিউনিটির জন্য সহনশীলতা প্রতিদিনের প্রয়োজন। PHD স্থানীয়ভাবে পরিচালিত অভিযোজনে সহায়তা করে — জলবায়ু-সচেতন জীবিকা থেকে আগাম সতর্কীকরণ ব্যবস্থা পর্যন্ত — যা কমিউনিটিকে নিজেদের ভবিষ্যতের নিয়ন্ত্রণে রাখে।',
        'স্থানীয় জ্ঞানকে কারিগরি সহায়তার সঙ্গে যুক্ত করে এই প্রচেষ্টা ঝুঁকি কমায় এবং কষ্টার্জিত উন্নয়ন অর্জন রক্ষা করে।',
      ],
    },
  },
  {
    slug: 'partnership-for-stronger-grant-management',
    image: IMG.giving,
    date: '2026-03-05',
    category: 'health',
    title: {
      en: 'Partnership for stronger, more transparent grant management',
      bn: 'শক্তিশালী ও স্বচ্ছ গ্রান্ট ব্যবস্থাপনার জন্য অংশীদারিত্ব',
    },
    excerpt: {
      en: 'Transparent financial stewardship is helping donors and partners maximise the impact of every contribution.',
      bn: 'স্বচ্ছ আর্থিক ব্যবস্থাপনা দাতা ও অংশীদারদের প্রতিটি অবদানের প্রভাব সর্বোচ্চ করতে সহায়তা করছে।',
    },
    body: {
      en: [
        'Trust is the foundation of every partnership. PHD’s grant-management systems ensure that funds are managed transparently, reported accurately, and directed where they create the greatest impact.',
        'This accountability gives donors confidence and ensures that communities receive the full benefit of every investment.',
      ],
      bn: [
        'আস্থা প্রতিটি অংশীদারিত্বের ভিত্তি। PHD-এর গ্রান্ট-ব্যবস্থাপনা ব্যবস্থা নিশ্চিত করে যে তহবিল স্বচ্ছভাবে পরিচালিত, নির্ভুলভাবে প্রতিবেদিত এবং যেখানে সর্বোচ্চ প্রভাব তৈরি হয় সেখানে পরিচালিত হয়।',
        'এই জবাবদিহিতা দাতাদের আস্থা দেয় এবং নিশ্চিত করে যে কমিউনিটি প্রতিটি বিনিয়োগের পূর্ণ সুফল পায়।',
      ],
    },
  },
];

export function getAllArticles(): Article[] {
  return [...ARTICLES].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticle(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}

export function getRelated(slug: string, limit = 3): Article[] {
  const current = getArticle(slug);
  return getAllArticles()
    .filter((a) => a.slug !== slug)
    .sort((a) => (current && a.category === current.category ? -1 : 0))
    .slice(0, limit);
}

export function formatDate(iso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale === 'bn' ? 'bn-BD' : 'en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(iso));
}
