export interface ProfileInfo {
  name: string;
  headline: string;
  college: string;
  collegeLocation: string;
  degree: string;
  department: string;
  currentYear: string;
  graduationYear: string;
  cgpa: string;
  bio: string;
  detailedAbout: string[];
  careerGoal: string;
  email: string;
  secondaryEmail: string;
  phone: string;
  location: string;
  linkedin: string;
  github?: string;
  avatarUrl?: string;
  resumeFileName?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: 'Familiar' | 'Intermediate' | 'Proficient';
    context?: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  status: string;
  problemStatement: string;
  description: string;
  technologies: string[];
  keyFeatures: string[];
  githubUrl: string;
  demoUrl: string;
  image?: string;
  isFlagship?: boolean;
}

export interface EducationItem {
  id: string;
  institution: string;
  location: string;
  degree: string;
  field: string;
  duration: string;
  score: string;
  isCurrent: boolean;
  notes: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  credentialId?: string;
  category: 'Certification' | 'Workshop' | 'Achievement' | 'Extracurricular';
  description: string;
}
