import { fetchJsonFile, getResumeFilePath } from "./files";

export const queryResumeData = async (): Promise<ResumeRoot> => {
  const resumeFile = await fetchJsonFile(getResumeFilePath());

  return resumeFile;
};

export interface ResumeRoot {
  basics: Basics;
  work: Work[];
  volunteer: Volunteer[];
  skills: Skill[];
  languages: Language[];
  references: Reference[];
  education: Education[];
  interests: Interest[];
}

export interface Basics {
  name: string;
  label: string;
  picture: string;
  email: string;
  phone: string;
  location: Location;
  profiles: Profile[];
}

export interface Location {
  city: string;
  countryCode: string;
}

export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Work {
  company: string;
  position: string;
  website?: string;
  startDate: string;
  highlights: string[];
  keywords: string[];
  endDate?: string;
  summary?: string;
}

export interface Volunteer {
  organization: string;
  url: string;
  type: string;
  positions: Position[];
  keywords: string[];
}

export interface Position {
  title: string;
  startDate: string;
  endDate: string;
}

export interface Skill {
  name: string;
  keywords: string[];
}

export interface Language {
  language: string;
}

export interface Reference {
  name: string;
  reference: string;
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
}

export interface Interest {
  name: string;
  keywords: string[];
}
