import type {
  ProfileInfo,
  ExperienceItem,
  SkillItem,
  ProjectItem,
  ResearchPublication,
  LeadershipItem,
  EducationItem,
} from '../types/portfolio';

export const profileData: ProfileInfo = {
  name: 'Md Shakil Sarker',
  tagline: 'Research, Digital Marketing & Lead Generation Professional',
  headline: 'Curious Mind. Purposeful Work. Continuous Growth.',
  location: 'Bogura, Bangladesh',
  email: 'shakil.srkr.bd@gmail.com',
  phonePlaceholder: '+8801783025100',
  linkedin: 'https://www.linkedin.com/in/shakilleadgen/',
  researchGate:
    'https://www.researchgate.net/publication/387678538_Effect_of_Student-Centered_Teaching_Approach_on_Academic_Performance_in_Mathematics_at_the_Secondary_School_Level',
  resumeUrl: '/Md_Shakil_Sarker_Resume.pdf',
  summary:
    'Versatile professional with corporate employment and freelance experience specializing in online research, data management, client communication, and digital marketing. Holds a Bachelor of Education (B.Ed.) in Science Education from Khulna University (CGPA 3.58 / 4.00) with published empirical research in secondary mathematics pedagogy. Knowledgeable in Google Ads, Meta Ads, SEO, email marketing, and market research. Demonstrates strong analytical, organizational, communication, and leadership abilities for banking, corporate operations, marketing, administration, and public-sector opportunities.',
  portraits: {
    main: '/images/portrait-main.png',
    alt1: '/images/portrait-2.png',
    alt2: '/images/portrait-3.png',
  },
};

export const aboutNarrative = {
  eyebrow: 'A LITTLE ABOUT ME',
  heading: 'Different Experiences. One Continuous Journey.',
  lead:
    'My professional path combines academic rigor from Khulna University, corporate analytical discipline at SJ Innovation LLC, hands-on digital marketing training, and cross-border client operations.',
  keyPoints: [
    'B.Ed. in Science Education from Khulna University · CGPA 3.58 / 4.00',
    'Published empirical research in secondary mathematics education',
    'B2B lead generation, data operations, and international client delivery',
  ],
  highlights: [
    { label: 'Academic Rigor', detail: 'B.Ed. in Science Education (Khulna University, CGPA 3.58)' },
    { label: 'Corporate Delivery', detail: 'Lead Generation Specialist at SJ Innovation LLC' },
    { label: 'Global Engagements', detail: 'Fiverr & Upwork International Clients (2021–Present)' },
    { label: 'Published Research', detail: 'Secondary Mathematics Study (ResearchGate 2024)' },
  ],
  associatedEntities: [
    { name: 'SJ Innovation LLC', type: 'Corporate Employer (NYC / Remote)' },
    { name: 'Upwork', type: 'International Freelance' },
    { name: 'Fiverr', type: 'International Freelance' },
    { name: 'ResearchGate', type: 'Scholarly Platform' },
    { name: 'Khulna University', type: 'Athletics & Academics' },
  ],
};

export const experienceData: ExperienceItem[] = [
  {
    id: 'freelance-international',
    company: 'Independent Professional Engagements',
    role: 'Freelance Lead Generation Specialist',
    period: 'January 10, 2021 – Present',
    location: 'Remote (Fiverr & Upwork)',
    type: 'International Freelance / Self-Employed',
    description:
      'Delivered freelance B2B lead generation, prospect research, and contact list building services to international clients through Fiverr and Upwork.',
    keyResponsibilities: [
      'Conducted B2B prospect research, advanced LinkedIn research, and verified business contact list building.',
      'Collected, verified, and organized corporate decision-maker contact details with strict data hygiene standards.',
      'Communicated directly with international clients to clarify project specifications and manage scope requirements.',
      'Maintained consistent on-time project delivery across multiple concurrent tasks while upholding data accuracy.',
    ],
    skillsUsed: ['B2B Sales & Lead Gen', 'Data Management', 'Online Research', 'Client Communication', 'Project Coordination'],
  },
  {
    id: 'sj-innovation',
    company: 'SJ Innovation LLC',
    role: 'Lead Generation Specialist (Former)',
    period: 'August 23, 2021 – February 28, 2023',
    location: 'New York City, USA (Remote)',
    type: 'Full-time / Corporate Employment',
    description:
      'Conducted B2B lead generation, prospect identification, and online business research within the Sales & Marketing department of an international IT/software development firm.',
    keyResponsibilities: [
      'Conducted systematic B2B lead generation and web research to discover high-value business prospects across global commercial sectors.',
      'Collected, verified, and organized business contact information for target decision-makers according to project briefs.',
      'Maintained CRM data accuracy and supported client requirements through timely delivery of verified prospect lists.',
      'Researched target companies and executive profiles, managing assigned pipelines and delivering outputs within agreed deadlines.',
    ],
    skillsUsed: ['B2B Sales & Lead Gen', 'CRM Data Management', 'Online Research', 'Prospect Discovery', 'Quality Assurance'],
  },
];

export const skillsData: SkillItem[] = [
  // Category A: Digital Marketing
  {
    name: 'Google Ads',
    category: 'marketing',
    description: 'Search campaign structure, keyword intent analysis, ad copy drafting, and conversion tracking principles.',
    proficiencyNote: 'Campaign Setup & Intent Mapping',
    iconName: 'Target',
  },
  {
    name: 'Meta Ads',
    category: 'marketing',
    description: 'Audience persona targeting, Facebook & Instagram ad formats, funnel mapping, and creative placement.',
    proficiencyNote: 'Paid Social Architecture',
    iconName: 'Layers',
  },
  {
    name: 'Search Engine Optimization (SEO)',
    category: 'marketing',
    description: 'Keyword research, on-page optimization, content structure, meta tags, and fundamental technical audit methods.',
    proficiencyNote: 'Organic Search Strategy',
    iconName: 'Search',
  },
  {
    name: 'Email Marketing',
    category: 'marketing',
    description: 'List segmentation, template copywriting, inbox deliverability fundamentals, and drip campaign coordination.',
    proficiencyNote: 'Outreach & Nurturing',
    iconName: 'Mail',
  },
  {
    name: 'Digital Marketing & Promotion',
    category: 'marketing',
    description: 'Omni-channel marketing awareness, promotional planning, brand positioning, and digital audience engagement.',
    proficiencyNote: 'Marketing Execution',
    iconName: 'TrendingUp',
  },

  // Category B: Research and Business
  {
    name: 'B2B Lead Generation',
    category: 'research',
    description: 'Systematic prospect discovery, ICP targeting, decision-maker profiling, and structured pipeline building.',
    proficiencyNote: 'Corporate & Freelance Track Record',
    iconName: 'Briefcase',
  },
  {
    name: 'Online & Business Research',
    category: 'research',
    description: 'Boolean search syntax, open-source web intelligence, competitive analysis, and corporate registry discovery.',
    proficiencyNote: 'Deep Web Intelligence',
    iconName: 'Globe',
  },
  {
    name: 'Data Management & Hygiene',
    category: 'research',
    description: 'Structured spreadsheet modeling, duplicate suppression, field standardization, and categorical sorting.',
    proficiencyNote: 'Quality & Integrity Control',
    iconName: 'Database',
  },
  {
    name: 'Data Verification & Deliverability',
    category: 'research',
    description: 'Multi-step validation for corporate contacts, email deliverability checks, and domain authenticity confirmation.',
    proficiencyNote: 'Zero-Bounce Protocol',
    iconName: 'CheckCircle2',
  },
  {
    name: 'Market Research',
    category: 'research',
    description: 'Industry competitor reconnaissance, consumer landscape evaluation, and commercial trend synthesis.',
    proficiencyNote: 'Commercial Analysis',
    iconName: 'BarChart3',
  },

  // Category C: Professional Skills
  {
    name: 'Professional Communication',
    category: 'professional',
    description: 'Fluent, courteous, and articulate written and verbal coordination with international and local stakeholders.',
    proficiencyNote: 'Bilingual English & Bengali',
    iconName: 'MessageSquare',
  },
  {
    name: 'Client Relationship Management',
    category: 'professional',
    description: 'Managing client expectations, providing transparent progress briefings, and addressing bespoke specifications.',
    proficiencyNote: 'Stakeholder Relations',
    iconName: 'Users',
  },
  {
    name: 'Project Coordination & Timing',
    category: 'professional',
    description: 'Systematic task prioritization, milestone tracking, deadline adherence, and deliverables control.',
    proficiencyNote: 'Operational Rigor',
    iconName: 'Clock',
  },
  {
    name: 'Analytical Thinking & Problem Solving',
    category: 'professional',
    description: 'Translating ambiguous requirements into systematic workflows backed by empirical rationale.',
    proficiencyNote: 'Empirical Mindset',
    iconName: 'Compass',
  },
  {
    name: 'Team Leadership & Event Management',
    category: 'professional',
    description: 'University sports captaincy, 3-consecutive-year tour leadership (70–80 delegates), and academic seminar moderation.',
    proficiencyNote: 'Proven Athletic & Tour Leadership',
    iconName: 'Award',
  },
];

export const projectsData: ProjectItem[] = [
  {
    id: 'b2b-lead-generation-framework',
    title: 'B2B Lead Generation & Account Intelligence Architecture',
    category: 'Lead Generation & Data Ops',
    badge: 'Corporate Experience',
    summary:
      'Systematic prospect research and multi-step data verification methodology refined during full-time corporate employment at SJ Innovation LLC.',
    image: '/images/projects/b2b-leadgen.svg',
    tools: ['LinkedIn Research', 'Data Hygiene', 'CRM Fields', 'Email Verification', 'Spreadsheet Modeling'],
    detailedCaseStudy: {
      context: 'Corporate B2B business development initiatives requiring verified decision-maker information across international markets.',
      challenge: 'High bounce rates, outdated directories, and ambiguous corporate titles frequently degrade outreach efficiency.',
      methodology: [
        'Defined precise ideal customer profiles (ICP) including company headcount, revenue band, and target job titles.',
        'Applied multi-source online research across corporate registries, press statements, and professional directories.',
        'Executed triple-verification protocols using SMTP handshakes, MX record validation, and domain hygiene checks.',
        'Built standardized data structures to ensure seamless import into enterprise CRM systems with zero duplicate records.',
      ],
      outcomes: [
        'Delivered verified contact lists with high deliverability rates directly supporting sales pipeline targets.',
        'Eliminated duplicate records and reduced delivery friction for outbound outreach teams.',
        'Standardized repeatable research protocols for ongoing corporate pipeline development.',
      ],
    },
  },
  {
    id: 'academic-research-mathematics',
    title: 'Effect of Student-Centered Teaching on Secondary Mathematics',
    category: 'Academic Research & Publication',
    badge: 'ResearchGate Publication',
    summary:
      'Published academic research evaluating the impact of student-centered pedagogical interventions on secondary-level mathematics performance.',
    image: '/images/projects/math-research.svg',
    tools: ['Quasi-Experimental Design', 'Convenience Sampling', 'Pre-Test/Post-Test', 'Pedagogical Frameworks'],
    externalUrl:
      'https://www.researchgate.net/publication/387678538_Effect_of_Student-Centered_Teaching_Approach_on_Academic_Performance_in_Mathematics_at_the_Secondary_School_Level',
    isPublication: true,
    detailedCaseStudy: {
      context: 'Secondary school science education curriculum seeking to improve student conceptual mastery in mathematics.',
      challenge: 'Traditional teacher-centric lecture models often fail to stimulate active mathematical reasoning and collaborative problem solving among secondary learners.',
      methodology: [
        'Designed a rigorous quasi-experimental research study with non-equivalent control and experimental groups.',
        'Implemented student-centered instructional interventions emphasizing guided inquiry, group problem-solving, and participatory discussions.',
        'Administered standardized pre-tests and post-tests to gauge empirical gains between cohorts.',
        'Conducted comparative statistical analysis to determine significant performance differentials.',
      ],
      outcomes: [
        'Demonstrated measurable, statistically significant gains in mathematics achievement among students receiving participatory instruction.',
        'Published in September 2024 with full methodological transparency on ResearchGate.',
        'Contributed actionable pedagogical recommendations for secondary mathematics curriculum development.',
      ],
    },
  },
  {
    id: 'paid-acquisition-campaign-design',
    title: 'Multi-Channel Paid Acquisition & Campaign Architecture',
    category: 'Digital Marketing & Ads',
    badge: 'Marketing Strategy',
    summary:
      'Strategic framework for paid search and social campaigns across Google Ads and Meta platforms incorporating full-funnel audience alignment.',
    image: '/images/projects/meta-google-ads.svg',
    tools: ['Google Ads', 'Meta Ads Manager', 'Search Intent Mapping', 'Ad Copywriting', 'Negative Keywords'],
    detailedCaseStudy: {
      context: 'Structuring paid advertising campaigns for business promotion, lead acquisition, and brand visibility.',
      challenge: 'Wasted ad spend resulting from overly broad keywords, improper demographic match, and disjointed post-click experiences.',
      methodology: [
        'Mapped multi-tier campaign structures separating high-intent bottom-of-funnel search terms from broader awareness groups.',
        'Curated exhaustive negative keyword lists to shield Google Ads budgets from irrelevant queries.',
        'Drafted modular ad copy variations testing specific value propositions, clear calls-to-action, and tailored headlines.',
        'Constructed custom Meta ad set audiences segmented by interests, behaviors, and lookalike parameters.',
      ],
      outcomes: [
        'Created a modular blueprint for cost-efficient ad deployment without budget leakage.',
        'Established clear conversion tracking guidelines for transparent measurement.',
      ],
    },
  },
  {
    id: 'technical-and-on-page-seo-audit',
    title: 'On-Page & Technical SEO Foundation Architecture',
    category: 'Search Engine Optimization',
    badge: 'Organic Search Strategy',
    summary:
      'Comprehensive methodology for website crawlability, search intent optimization, metadata engineering, and semantic hierarchy.',
    image: '/images/projects/seo-audit.svg',
    tools: ['Keyword Intent Clustering', 'On-Page SEO', 'Technical Crawl Auditing', 'Schema Markup', 'Content Structuring'],
    detailedCaseStudy: {
      context: 'Preparing web properties for sustained organic discovery and strong search engine ranking signals.',
      challenge: 'Thin content, duplicate title tags, weak heading hierarchy, and crawl errors impairing search visibility.',
      methodology: [
        'Conducted systematic keyword research grouping search terms by informational, navigational, and commercial intent.',
        'Optimized title tags, meta descriptions, and header tags (H1-H3) to match primary search queries.',
        'Audited site architecture for crawl depth, canonical tag health, and XML sitemap integrity.',
        'Formulated internal linking siloing strategies to concentrate topical authority around core service pages.',
      ],
      outcomes: [
        'Formulated actionable audit checklists covering technical, on-page, and architectural SEO best practices.',
        'Established structured protocols ensuring content aligns with modern search engine quality guidelines.',
      ],
    },
  },
  {
    id: 'cross-border-client-operations',
    title: 'Cross-Border Freelance Project Management & Fulfillment',
    category: 'Client Operations & Freelance',
    badge: 'International Work',
    summary:
      'Proven client communication and project delivery workflows developed across international engagements on Upwork and Fiverr since 2021.',
    image: '/images/projects/client-operations.svg',
    tools: ['Fiverr', 'Upwork', 'Brief Analysis', 'Async Communication', 'Deliverables Review'],
    detailedCaseStudy: {
      context: 'Collaborating remotely with international business founders and marketing leads with tight delivery windows.',
      challenge: 'Misaligned project expectations, time-zone differentials, and incomplete initial project specifications.',
      methodology: [
        'Developed an onboarding intake checklist to extract explicit project goals, file formats, and delivery timelines.',
        'Maintained proactive async updates, highlighting completed milestones and clarifying potential ambiguities before execution.',
        'Implemented rigorous pre-delivery quality checks against initial client specifications.',
        'Offered structured post-delivery handover and iteration support to guarantee client satisfaction.',
      ],
      outcomes: [
        'Maintained high client satisfaction through transparent, professional English communication.',
        'Demonstrated the capability to coordinate independent workflows with discipline and accountability.',
      ],
    },
  },
];

export const researchPublicationData: ResearchPublication = {
  title: 'Effect of Student-Centered Teaching on Mathematics Performance at Secondary Level',
  publicationDate: 'September 12, 2024',
  platform: 'ResearchGate',
  methodology: 'Quasi-Experimental Method with Convenience Sampling',
  description:
    'Empirical investigation examining how student-centered teaching approaches affect secondary students’ academic performance in mathematics. The study utilized a quasi-experimental design and convenience sampling to select schools and students for participatory pedagogical interventions.',
  url: 'https://www.researchgate.net/publication/387678538_Effect_of_Student-Centered_Teaching_Approach_on_Academic_Performance_in_Mathematics_at_the_Secondary_School_Level',
  highlights: [
    'Quasi-experimental design contrasting student-centered active learning against traditional lecture cohorts',
    'Conducted across secondary education schools in Bangladesh using convenience sampling',
    'Pre-test and post-test comparative analysis evaluating academic achievement',
    'Published and accessible on ResearchGate with full academic documentation',
  ],
  keywords: [
    'Mathematics Education',
    'Student-Centered Learning',
    'Quasi-Experimental Method',
    'Secondary Education',
    'Pedagogical Research',
    'Khulna University',
  ],
};

export const leadershipData: LeadershipItem[] = [
  {
    id: 'cricket-captain',
    title: "University Men's Cricket Team Captain",
    role: 'Team Captain & Tactical Strategist',
    context: 'Khulna University Athletics',
    description:
      'Served as Captain of the Khulna University Men’s Cricket Team. Led squad conditioning, team selection, match tactics, and field positioning under competitive tournament pressure.',
    impactMetrics: 'Team Captaincy',
    icon: 'Trophy',
  },
  {
    id: 'volleyball-captain',
    title: 'University Volleyball Team Captain',
    role: 'Captain & Team Coordinator',
    context: 'Khulna University Volleyball Championship',
    description:
      'Served as Captain of the Khulna University Men’s Volleyball Team. Coordinated team formations, game drills, defensive setups, and fostered team discipline and cohesion.',
    impactMetrics: 'Team Captaincy',
    icon: 'Activity',
  },
  {
    id: 'womens-volleyball-trainer',
    title: "Trainer, University Women's Volleyball Team",
    role: 'Athletic Trainer & Skills Coach',
    context: 'Khulna University Sports Program',
    description:
      'Served as official trainer for the Khulna University Women’s Volleyball Team, mentoring student athletes in technical court movements, serving accuracy, and tactical gameplay.',
    impactMetrics: 'Athletic Coaching',
    icon: 'Sparkles',
  },
  {
    id: 'tour-leadership',
    title: 'University Tour Coordinator (3 Consecutive Years)',
    role: 'Head Tour Coordinator & Logistics Lead',
    context: 'Khulna University | 70–80 Participants Per Year',
    description:
      'Led Khulna University study and excursion tours for three consecutive years. Managed comprehensive event planning, transportation arrangements, hotel lodging, participant safety, and budget administration for groups of 70 to 80 participants.',
    impactMetrics: '70–80 Participants Annually',
    icon: 'Navigation',
  },
  {
    id: 'debates-and-seminars',
    title: 'Academic Debates & School Program Organizer',
    role: 'Event Organizer & Moderator',
    context: 'Institutional Seminars & Debate Forums',
    description:
      'Organized academic debate competitions, educational seminars, and school programs. Managed logistics, guest coordination, venue setup, and stage moderation.',
    impactMetrics: 'Event Logistics & Moderation',
    icon: 'Mic2',
  },
  {
    id: 'sports-awards',
    title: 'Multi-Sport Participation & Competitive Honors',
    role: 'Athletic Competitor & Certificate Holder',
    context: 'Cricket, Football, Volleyball, Badminton',
    description:
      'Competed actively in cricket, football, volleyball, and badminton since high school; received sports medals, awards, and certificates in recognized institutional tournaments.',
    impactMetrics: 'Medals, Awards & Certificates',
    icon: 'Medal',
  },
];

export const educationData: EducationItem[] = [
  {
    degree: 'Bachelor of Education (B.Ed.) in Science Education',
    field: 'Science Education & Pedagogical Sciences',
    institution: 'Khulna University, Bangladesh',
    passingYear: 'Graduation Year: 2023 (4-Year Full-Time Program)',
    result: 'CGPA: 3.58 / 4.00',
    notes:
      'Comprehensive 4-year degree covering scientific pedagogy, empirical research design, educational psychology, curriculum planning, and secondary mathematics instruction.',
  },
];
