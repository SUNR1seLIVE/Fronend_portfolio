<template>
  <div class="w-full h-8rem pt-6 flex justify-content-center">
    <card class="flex align-items-center justify-content-end w-7 h-full">
      <template #content>
        <nav>
          <div class="flex align-items-center">
            <router-link
              class="px-2 py-5 w-max"
              v-for="link of links"
              :key="link.title"
              :to="link.path"
            >
              {{ link.title }}
            </router-link>
          </div>
        </nav>
      </template>
    </card>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const links = ref([
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Stream", path: "/stream" },
  { title: "Blog", path: "/blog" },
  { title: "Recommendation", path: "/recommendation" },
]);
</script>

<style scoped lang="scss"></style>
