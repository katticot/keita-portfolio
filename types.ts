export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
}

export interface EducationItem {
  year: string;
  degree: string;
  school: string;
}

export interface ExperienceItem {
  id: string;
  period: string;
  company: string;
  title: string;
  subtitle?: string; // e.g. "October 2017 - April 2022" if nested
  details: {
    label?: string; // e.g. "Leadership", "Key Achievements"
    items: string[];
  }[];
  logo?: string;
  logoClasses?: string;
}

export interface CVData {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    profileImage: string;
  };
  contact: ContactInfo;
  education: EducationItem[];
  expertise: string[];
  languages: string[];
  experience: ExperienceItem[];
}
