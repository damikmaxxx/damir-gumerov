export interface PersonalDataItem {
  label: string;
  value: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  date: string;
}

export interface EducationItem {
  degree: string;
  university: string;
  faculty: string;
  date: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  iconKey: string;
}
