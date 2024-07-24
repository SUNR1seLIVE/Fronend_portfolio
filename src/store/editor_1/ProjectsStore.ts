import { defineStore } from "pinia";
import { Project } from "@/editor_1/types/Types";
import { Ref } from "vue/dist/vue";
import { ref } from "vue";
import Core from "@/editor_1/core/Core";

export const useProjectsStore = defineStore("projectsStore", () => {
  const projects: Ref<Project[]> = ref([]);
  const openProjects: Ref<Project[]> = ref([]);
  const activeProject: Ref<number | null> = ref(
    projects.value.length ? projects.value[projects.value.length - 1].id : null
  );
  const latestProjects: Ref<Project[]> = ref([]);

  /*
   * Создаёт новый проект
   * */
  const addProject = () => {
    const id: number = projects.value.length;
    const newProject: Project = {
      id,
      type: "model",
      name: `Проект №${projects.value.length}`,
    };
    projects.value.push(newProject);
    addLatestProject(projects.value[projects.value.length - 1]);
    setOpenProject(id);
    activeProject.value = projects.value[projects.value.length - 1].id;
  };

  /*
   * Получить массив всех проектов
   * */
  // const getAllProjects = () => {
  //   return projects.value;
  // };

  /*
   * Получить массив открытых проектов
   * */
  const getOpenProjects = () => {
    return openProjects;
  };

  /*
   * Получить массив последних проектов
   * */
  const getLatestProjects = (): Ref<Project[]> => {
    return latestProjects;
  };

  /*
   * Получить последний проект
   * */
  const getLatestProject = () => {
    return latestProjects.value[latestProjects.value.length - 1];
  };

  /*
   * Добавляет последний открытый или созданный проект в массив последних проектов
   * Массив последних проектов ограничен десятью проектами.
   * */
  const addLatestProject = (project: Project) => {
    const index = latestProjects.value.findIndex(
      (item) => item.id === project.id
    );

    if (index === -1) {
      latestProjects.value.unshift(project);
      if (latestProjects.value.length > 10)
        latestProjects.value.splice(latestProjects.value.length - 1, 1);
    } else {
      latestProjects.value.splice(index, 1);
      latestProjects.value.unshift(project);
    }
  };

  /*
   * Добавляет проект в открытые
   * */
  const setOpenProject = (id: number) => {
    const openProject = openProjects.value.find((item) => item.id === id);
    if (!openProject) {
      const project = projects.value.find((item) => item.id === id);

      if (project) {
        openProjects.value.push(project);
        addLatestProject(project);
        activeProject.value = project.id;
      }
    } else {
      addLatestProject(openProject);
      activeProject.value = openProject.id;
      console.log("Проект уже открыт...");
    }
  };

  const updateActiveProject = (id: number) => {
    const openProjectIndex = openProjects.value.findIndex(
      (item) => item.id === id
    );
    let newActiveProjectId = 0;

    if (openProjectIndex === 0 && openProjects.value.length > 1) {
      newActiveProjectId = openProjects.value[openProjectIndex + 1].id;
    } else if (
      (openProjectIndex === openProjects.value.length - 1 &&
        openProjects.value.length > 1) ||
      (openProjectIndex <= openProjects.value.length - 1 &&
        openProjectIndex != 0)
    ) {
      newActiveProjectId = openProjects.value[openProjectIndex - 1].id;
    }
    setActiveProjectId(newActiveProjectId);
  };

  const removeOpenProject = (id: number) => {
    const openProjectIndex = openProjects.value.findIndex(
      (item) => item.id === id
    );

    openProjects.value.splice(openProjectIndex, 1);
    // activeProject.value = newActiveProjectId;
    // Core.updateActiveProject(newActiveProjectId);
  };

  const setActiveProjectId = (id: number) => {
    activeProject.value = id;
  };

  return {
    setActiveProjectId,
    updateActiveProject,
    activeProject,
    // getAllProjects,
    addProject,
    getLatestProjects,
    getLatestProject,
    setOpenProject,
    getOpenProjects,
    removeOpenProject,
  };
});
