<template>
  <div class="w-5 h-25rem bg-white border-round">
    <div class="h-full flex flex-row flex-nowrap">
      <div class="w-4 h-full">
        <Button
          class="w-15rem h-2rem"
          label="Новый проект"
          severity="secondary"
          raised
          @click="Core.addProject()"
          >Новый проект
        </Button>
      </div>
      <div class="w-full h-full flex flex-column">
        <div class="h-max">
          <h2 class="my-2 ml-3">Последние проекты</h2>
        </div>
        <div class="flex-grow-1 px-3 pb-3">
          <splitter style="height: 100%">
            <splitter-panel
              class="w-full h-full overflow-y-auto"
              :min-size="40"
              :size="60"
            >
              <div
                class="w-full p-2 gap-2 flex flex-column flex-nowrap align-items-start justify-content-start"
              >
                <Button
                  class="w-15rem h-2rem"
                  v-for="project of latestProjects"
                  :key="project.id"
                  :label="project.name"
                  severity="secondary"
                  raised
                  @dblclick="Core.openProject(project.id)"
                  @click="useSelectedProject(project.id)"
                  >{{ project.name }}
                </Button>
              </div>
            </splitter-panel>
            <splitter-panel
              class="flex align-items-center justify-content-center"
              :min-size="30"
              :size="40"
            >
              <span v-if="selectedProject">{{ selectedProject.name }}</span>
            </splitter-panel>
          </splitter>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Core from "@/editor_1/core/Core";
import { ref, Ref } from "vue";
import { Project } from "@/editor_1/types/Types";
import { useToast } from "primevue/usetoast";

const toast = useToast();

const selectedProject: Ref<Project | null> = ref(null);

const latestProjects: Ref<Project[]> = ref(Core.latestProjects);
Core.updateLatestProjects(toast);

const useSelectedProject = (id: number) => {
  selectedProject.value =
    latestProjects.value.find((project) => project.id === id) || null;
};
</script>

<style scoped lang="scss"></style>
