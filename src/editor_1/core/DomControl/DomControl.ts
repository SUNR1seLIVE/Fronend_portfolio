import { Project } from "@/editor_1/types/Types";
import { Ref, ref } from "vue";
import { useProjectsStore } from "@/store/editor_1/ProjectsStore";

export default class DomControl {
  private container: HTMLDivElement;
  private openProjects: Ref<Project[]> = ref([]);

  init(container: HTMLDivElement) {
    this.container = container;
    this.openProjects = useProjectsStore().getOpenProjects();
  }

  getContainer() {
    return this.container;
  }

  getOpenProjects() {
    console.log("sd");
    return this.openProjects;
  }
}
