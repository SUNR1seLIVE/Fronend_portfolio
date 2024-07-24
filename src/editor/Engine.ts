import { Project } from "@/editor/types/Types";
import { ref, Ref } from "vue";
import { useProjectsStore } from "@/store/editor/ProjectsStore";
import Router from "@/front/router";
import Core from "@/editor/core/Core";
import { ToastServiceMethods } from "primevue/toastservice";

export default class Engine {
  private projectsActive: Ref<Project[]>;
  private ProjectsStore;

  constructor() {
    this.ProjectsStore = useProjectsStore();
    this.projectsActive = ref(this.ProjectsStore.getActiveProjects());
  }

  init(container: HTMLDivElement, id: number, toast: ToastServiceMethods) {
    if (!this.ProjectsStore.getProject(id)) {
      Router.push(`/editor`);
      return;
    }
    Core.init(toast);
    Core.domControl.init(container);
  }

  getActiveProjects() {
    return this.projectsActive;
  }

  closeProject(id: number) {
    const index = this.projectsActive.value.findIndex(
      (project) => project.id === id
    );

    if (
      index === this.projectsActive.value.length - 1 &&
      this.projectsActive.value.length > 1
    ) {
      this.projectsActive.value.splice(index, 1);
      Core.activeProjectId.value =
        this.projectsActive.value[this.projectsActive.value.length - 1].id;
    } else if (index === 0 && this.projectsActive.value.length > 1) {
      this.projectsActive.value.splice(index, 1);
      Core.activeProjectId.value =
        this.projectsActive.value[this.projectsActive.value.length - 1].id;
    } else if (index === 0 && this.projectsActive.value.length === 1) {
      this.projectsActive.value.splice(index, 1);
      Core.activeProjectId.value = 0;
    } else {
      this.projectsActive.value.splice(index, 1);
      Core.activeProjectId.value = this.projectsActive.value[index].id;
    }

    return Core.activeProjectId.value;
  }
}
