export type ProjectTypes = {
  id: number;
  filter: string[];
  title: string;
  description: string;
  technologies: string[];
  imgPath: string;
  githubUrl: string;
  websiteUrl: string;
};

export interface ProjectProps {
  project: ProjectTypes;
}
