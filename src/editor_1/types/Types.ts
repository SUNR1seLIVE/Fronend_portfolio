import { Scene } from "three";

export interface mainMenuItem {
  label: string;
  icon: string;
  items: Array<mainMenuItem | itemMenuCommand | separator>;
}

interface itemMenuCommand {
  label: string;
  icon: string;
  command: () => void;
}

interface separator {
  separator: boolean;
}

export interface Project {
  readonly id: number;
  readonly type: "model" | "fragment" | "furniture" | "drawing";
  name: string | "Новый проект";
}
