<template>
  <div class="card w-full h-full flex flex-column">
    <div class="flex-none">
      <Menubar class="p-1" :model="items" />
    </div>
    <div class="flex-grow-1">
      <splitter style="height: 100%">
        <splitter-panel
          class="flex align-items-center justify-content-center"
          :min-size="10"
          :size="15"
        >
          Панель свойств
        </splitter-panel>
        <splitter-panel :min-size="20" :size="70">
          <TabView
            :active-index="activeProjects || 0"
            :pt="{
              panelContainer: {
                class: 'p-0',
              },
            }"
          >
            <TabPanel
              v-for="tab of openProjects"
              :key="tab.id"
              :header="tab.name"
            >
              <template #header>
                <Button
                  icon="pi pi-times"
                  class="w-1rem h-1rem mx-2"
                  @click="closeProject(tab.id)"
                />
              </template>
            </TabPanel>
          </TabView>
          <div class="w-full h-full" ref="container" />
        </splitter-panel>
        <splitter-panel
          class="flex align-items-center justify-content-center"
          :min-size="10"
          :size="15"
        >
          Структура модели
        </splitter-panel>
      </splitter>
    </div>
    <Toast />
  </div>
</template>
<script setup lang="ts">
import { Ref, ref, watch } from "vue";
import Engine from "@/editor_1/Engine";
import Core from "@/editor_1/core/Core";
import { mainMenuItem, Project } from "@/editor_1/types/Types";
import { useProjectsStore } from "@/store/editor_1/ProjectsStore";

const container = ref(null);
const tabs = ref();
const engine = new Engine();
// window.engine1 = engine;
window.engine1 = Core;

let items: Ref<mainMenuItem[]> = ref(Core.menuItems);
const openProjects: Ref<Project[]> = ref(useProjectsStore().getOpenProjects());
const activeProjects: Ref<number | null> = ref(
  useProjectsStore().activeProject
);
Core.initActiveProject(activeProjects);

const a = (index: number) => {
  console.log(index, useProjectsStore().activeProject);
  if (activeProjects.value !== null) useProjectsStore().activeProject = 1;
  // Core.updateActiveProject(activeProjects.value);
};

const closeProject = (id: number) => {
  Core.closeProject(id);
};
const updateActiveProject = (id: number) => {
  Core.updateActiveProject(id);
};

// if (!openProjects.value.length) {
//   Router.push(`/startEditor_1`).then();
// }
watch(container, async (newContainer) => {
  if (!newContainer) return;
  engine.init(newContainer);
  // items = ref(Core.getMenuItems());
});
</script>

<style scoped lang="scss"></style>
