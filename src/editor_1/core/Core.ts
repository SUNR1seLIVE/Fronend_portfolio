import { ref, Ref } from "vue";
import { mainMenuItem, Project } from "@/editor_1/types/Types";
import { useProjectsStore } from "@/store/editor_1/ProjectsStore";
import { ToastServiceMethods } from "primevue/toastservice";
import Router from "@/front/router";
import Constants from "@/editor_1/settings/Constants";
import DomControl from "@/editor_1/core/DomControl/DomControl";

export default class Core {
  static latestProjects: Ref<Project[]> = ref([]);
  static menuItems: Ref<mainMenuItem[]> = ref([]);
  private static constants: Constants;
  static domControl: DomControl;
  static activeProject: Ref<number | null> = ref(null);
  static store: any = null;

  static initActiveProject(activeProjects: Ref<number | null>) {
    this.activeProject = activeProjects;
    this.store = useProjectsStore();
  }

  static init() {
    Core.domControl = new DomControl();
  }

  static updateLatestProjects = (toast?: ToastServiceMethods) => {
    if (toast) {
      if (!this.constants) {
        this.constants = new Constants();
        this.constants.init(toast);
      }
    }
    this.latestProjects.value = useProjectsStore().getLatestProjects().value;

    if (this.constants) {
      this.menuItems.value = this.constants.itemsMainMenuPanel().value;
    }
    this.activeProject.value = useProjectsStore().activeProject;
  };

  static getLatestProject = () => {
    return useProjectsStore().getLatestProject();
  };

  static addProject = () => {
    useProjectsStore().addProject();
    this.updateLatestProjects();
    // this.activeProject.value = useProjectsStore().activeProject;
    Router.push(`/editor_1`).then();
  };

  static openProject = (id: number) => {
    useProjectsStore().setOpenProject(id);
    this.updateLatestProjects();
    Router.push(`/editor_1`).then();
  };

  static closeProject(id: number) {
    // Core.updateActiveProject(id);
    useProjectsStore().updateActiveProject(id);
    const activeId = useProjectsStore().activeProject;
    if (activeId !== null) {
      Core.updateActiveProject(activeId);
    }
    useProjectsStore().removeOpenProject(id);
  }

  static updateActiveProject = (id: number) => {
    useProjectsStore().setActiveProjectId(id);
    Core.activeProject.value = useProjectsStore().activeProject;
  };
}
