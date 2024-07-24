<template>
  <div class="w-5 h-25rem bg-white border-round">
    <div class="h-full flex flex-row flex-nowrap">
      <div class="w-4 h-full">
        <div @click="addProject()">
          <span>Новый проект</span>
        </div>
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
                  v-for="project of projects"
                  :key="project.id"
                  :label="project.name"
                  severity="secondary"
                  raised
                  @click="Core.openProject(project.id)"
                  >{{ project.name }}
                </Button>
                z
              </div>
            </splitter-panel>
            <splitter-panel
              class="flex align-items-center justify-content-center"
              :min-size="30"
              :size="40"
              >bloc
            </splitter-panel>
          </splitter>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Core from "@/editor/core/Core";

const projects = ref(Core.getProjects());

const addProject = () => {
  Core.addProject();
};
</script>

<style scoped lang="scss"></style>
