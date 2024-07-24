import { Scene } from "three";

export interface Project {
  id: number;
  name: string | "Новый проект";
  scene: Scene | null;
}
