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
          <TabView>
            <TabPanel v-for="tab of projects" :key="tab.id" :header="tab.name">
              <p class="m-0">{{ tab.name }}</p>
              <div class="w-full h-full" ref="container" />
            </TabPanel>
          </TabView>
          <!--          <Tabs class="w-full h-full" :value="activeProjectId">-->
          <!--            <TabList>-->
          <!--              <Tab v-for="tab of projects" :key="tab.id" :value="tab.id"-->
          <!--                >{{ tab.name }}-->
          <!--                <Button-->
          <!--                  icon="pi pi-times"-->
          <!--                  class="h-full"-->
          <!--                  @click="closeProject(tab.id)"-->
          <!--                />-->
          <!--              </Tab>-->
          <!--            </TabList>-->
          <!--            <TabPanels class="w-full h-full p-0">-->
          <!--              <TabPanel-->
          <!--                class="w-full h-full"-->
          <!--                v-for="tab of projects"-->
          <!--                :key="tab.id"-->
          <!--                :value="tab.id"-->
          <!--              >-->
          <!--                <div class="w-full h-full" ref="container" />-->
          <!--              </TabPanel>-->
          <!--            </TabPanels>-->
          <!--          </Tabs>-->
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
import Constants from "@/editor/settings/Constants";
import { ref, watch } from "vue";
import { useToast } from "primevue/usetoast";
import Engine from "@/editor/Engine";
import Router from "@/front/router";
import Core from "@/editor/core/Core";

const routeId = Router.currentRoute.value.params.id;

const itemId: number = +(typeof routeId === "undefined" ? 0 : routeId);

const container = ref(null);
const engine = new Engine();
window.engine = engine;

const activeProjectId = ref(Core.activeProjectId);

const toast = useToast();

const items = ref(Constants.itemsMainMenuPanel(toast));
// const items = ref(Core.itemsMenu);
const projects = ref(engine.getActiveProjects());

const closeProject = (id: number) => {
  Core.activeProjectId.value = engine.closeProject(id);
};

watch(container, async (newContainer) => {
  if (!newContainer) return;
  engine.init(newContainer, itemId, toast);
  items.value = Core.itemsMenu.value;
});
</script>

<style scoped lang="scss"></style>
