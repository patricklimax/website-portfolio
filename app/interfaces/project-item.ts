export interface Project {
  id: number;
  class: "principal" | "others";
  name: string;
  descriptionCover: string;
  descriptionProject: string;
  imgUrlCover: string;
  imgUrlTech: string;
  imgUrlFunc: string;
  technologies: string[];
  functionalities: string[];
  githubURL: string;
  onlineURL?: string;
}
