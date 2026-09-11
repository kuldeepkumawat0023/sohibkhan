export interface ProfileData {
  name: string;
  role: string;
  shortTitle: string;
  tagline: string;
  status: string;
  summary: string[];
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    resumePdf: string;
  };
  metrics: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  languages: string[];
  hobbies: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary?: string;
  points: string[];
  technologies?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  url: string;
  displayUrl: string;
  description: string;
  validatedTags: string[];
  category?: string;
  testCaseCount?: number;
  criticalBugsFound?: number;
  testingTypes?: string[];
  detailedReport?: {
    overview: string;
    scope: string[];
    defectsCaught: string[];
    toolsUsed: string[];
    status: "Verified & Production" | "Testing Active" | "Completed";
  };
}

export interface SkillItem {
  name: string;
  iconId: string;
}

export interface SkillGroup {
  category: "testing" | "tools" | "languages" | "database";
  title: string;
  skills: SkillItem[];
}

export interface EducationItem {
  degree: string;
  institution?: string;
  period: string;
  score?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date?: string;
  description: string;
  credentialId?: string;
}
