import DomControl from "@/editor/core/DomControl/DomControl";
import { useProjectsStore } from "@/store/editor/ProjectsStore";
import { ref, Ref } from "vue";
import Router from "@/front/router";
import ProjectControl from "@/editor/core/Project/ProjectControl";
import Constants from "@/editor/settings/Constants";
import { ToastServiceMethods } from "primevue/toastservice";

export default class Core {
  static toast: ToastServiceMethods;
  static domControl: DomControl;
  static projectControl: ProjectControl;
  static activeProjectId: Ref<number | null> = ref(null);
  static itemsMenu = ref();

  static init(toast: ToastServiceMethods) {
    Core.toast = toast;
    Core.domControl = new DomControl();
    Core.projectControl = new ProjectControl();
    Core.projectControl.init();

    Core.itemsMenu.value = Core.getItems(toast).value;
  }

  static addProject() {
    // const store = ;
    const project = useProjectsStore().addProject();
    Core.activeProjectId.value = project.id;
    this.projectControl.setActiveProject(project.id);
    Router.push(`/editor`).then();
  }

  static getProjects() {
    return ref(useProjectsStore().getProjects());
  }

  static getActiveProjectId() {
    return Number(Router.currentRoute.value.params.id);
  }

  static getProject(id: number) {
    return useProjectsStore().getProject(id);
  }

  static getActiveProjects() {
    return useProjectsStore().getActiveProjects();
  }

  static openProject = (id: number) => {
    useProjectsStore().openProject(id);
    Core.activeProjectId.value = id;
    this.projectControl.setActiveProject(id);
    Router.push(`/editor`);
  };

  static getItems = (toast: ToastServiceMethods) => {
    return Constants.itemsMainMenuPanel(toast);
  };
}
