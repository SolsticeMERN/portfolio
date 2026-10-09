export interface ProfileInfo {
  name: string;
  tagline: string;
  headline: string;
  location: string;
  email: string;
  phonePlaceholder: string;
  linkedin: string;
  researchGate: string;
  resumeUrl: string;
  summary: string;
  portraits: {
    main: string;
    alt1: string;
    alt2: string;
  };
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: string;
  description: string;
  keyResponsibilities: string[];
  skillsUsed: string[];
}

export interface SkillItem {
  name: string;
  category: 'marketing' | 'research' | 'professional';
  description: string;
  proficiencyNote: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  badge: string;
  summary: string;
  image: string;
  tools: string[];
  externalUrl?: string;
  isPublication?: boolean;
  detailedCaseStudy: {
    context: string;
    challenge: string;
    methodology: string[];
    outcomes: string[];
  };
}

export interface ResearchPublication {
  title: string;
  publicationDate: string;
  platform: string;
  methodology: string;
  description: string;
  url: string;
  highlights: string[];
  keywords: string[];
}

export interface LeadershipItem {
  id: string;
  title: string;
  role: string;
  context: string;
  description: string;
  impactMetrics?: string;
  icon: string;
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  passingYear: string;
  result: string;
  notes: string;
}
