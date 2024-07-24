import { useProjectsStore } from "@/store/editor/ProjectsStore";
import { Project } from "@/editor/types/Types";
import { Ref, ref } from "vue";
import Core from "@/editor/core/Core";

export default class ProjectControl {
  private store = useProjectsStore();
  private activeProjects: Ref<Project[]> = ref([]);
  private activeProject: Project;

  constructor() {
    for (const item of this.store.getActiveProjectsId()) {
      const project = this.store.getProject(item);
      if (project) this.activeProjects.value.push(project);
    }
  }

  init() {
    console.log(this.activeProjects.value);
  }

  getActiveProjects() {
    return this.activeProjects;
  }

  setActiveProject(id: number) {
    const project = this.store.getProject(id);
    if (project) this.activeProject = project;
    console.log(id);
  }
}
