<template>
  <div
    ref="container"
    class="w-full h-full flex flex-column align-items-center"
    style="
      background: radial-gradient(
        ellipse farthest-corner at 70% 20%,
        #4969a9 0%,
        #252e40 60%
      );
    "
  >
    <main-navigation />
    <div>mainLayout</div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import MainNavigation from "@/front/components/navigation/MainNavigation.vue";

const container = ref(null);

watch(container, async (newContainer) => {
  if (newContainer) return;
});
</script>

<style scoped lang="scss"></style>
