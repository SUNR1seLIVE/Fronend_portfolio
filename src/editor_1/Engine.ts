import { ToastServiceMethods } from "primevue/toastservice";
import Core from "@/editor_1/core/Core";
import Router from "@/front/router";
import { useProjectsStore } from "@/store/editor_1/ProjectsStore";

export default class Engine {
  constructor() {
    Core.init();
  }

  init(container: HTMLDivElement) {
    Core.domControl.init(container);
    if (!Core.domControl.getOpenProjects().value.length) {
      Router.push(`/startEditor_1`).then();
      return;
    }
    // this.openProjects = ref(useProjectsStore().getOpenProjects());
    // Core.init(toast);
    // Core.domControl.init(container);
  }
}
