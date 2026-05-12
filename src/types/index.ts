export type Project = {
  title: string;
  titlePt: string;
  description: string;
  descriptionPt: string;
  icon: string;
  links: Array<{
    href: string;
    label: string;
    icon: string;
  }>;
  tags: string[];
};

export type SkillCategory = {
  title: string;
  titlePt: string;
  skills: Array<{
    name: string;
    percent: number;
  }>;
};

export type TimelineItem = {
  year: string;
  badge?: string;
  title: string;
  titlePt: string;
  company: string;
  description: string;
  descriptionPt: string;
  achievements: Array<{
    text: string;
    textPt: string;
  }>;
  tags: string[];
};

export type Service = {
  title: string;
  titlePt: string;
  description: string;
  descriptionPt: string;
  icon: string;
};

export type ServiceFeature = {
  text: string;
  textPt: string;
  icon: string;
};
