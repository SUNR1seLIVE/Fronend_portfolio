import { defineStore } from "pinia";
import { Project } from "@/editor/types/Types";
import { Ref, ref } from "vue";

export const useProjectsStore = defineStore("projectStore", () => {
  const projects: Ref<Project[]> = ref([
    {
      id: 0,
      scene: null,
      name: "Проект №0",
    },
    {
      id: 1,
      scene: null,
      name: "Проект №1",
    },
  ]);

  const activeProjectsId: Ref<number[]> = ref([]);
  const activeProjects: Ref<Project[]> = ref([]);

  const getProjects = () => {
    return projects.value;
  };

  const getActiveProjectsId = () => {
    return activeProjectsId.value;
  };

  const getActiveProjects = () => {
    return activeProjects.value;
  };

  const addProject = (): Project => {
    const newProject: Project = {
      id: getProjects().length,
      scene: null,
      name: `Проект №${getProjects().length}`,
    };
    projects.value.push(newProject);
    activeProjectsId.value.push(newProject.id);
    activeProjects.value.push(projects.value[projects.value.length - 1]);
    return newProject;
  };

  const openProject = (id: number) => {
    activeProjectsId.value.push(id);
    activeProjects.value.push(
      projects.value[projects.value.findIndex((project) => project.id === id)]
    );
  };

  const getProject = (id: number) => {
    return projects.value.find((item) => item.id === id);
  };

  return {
    getProjects,
    addProject,
    getProject,
    getActiveProjects,
    getActiveProjectsId,
    openProject,
  };
});
