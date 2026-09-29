export interface StudentProfile {
  name: string;
  roleHeadline: string;
  currentStatus: string;
  semester: string;
  branch: string;
  college: string;
  location: string;
  linkedinUrl: string;
  githubUrl: string;
  email: string;
  heroIntro: string;
  aboutIntro: string;
  learningPhilosophy: string;
  goalStatement: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
  }[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: string;
  githubUrl: string;
  liveDemoUrl: string;
  codeSnippet: string;
  demoType: 'voter' | 'calculator' | 'atm' | 'grade';
  keyLearnings: string[];
}

export interface HackathonEntry {
  id: string;
  type: 'Hackathon' | 'Ideathon';
  eventName: string;
  role: string;
  year: string;
  description: string;
  focus: string;
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  location: string;
  status: string;
  focusAreas: string[];
}

export interface LearningTopic {
  title: string;
  category: string;
  description: string;
}
