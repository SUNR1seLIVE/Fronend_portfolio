<script setup lang="ts"></script>

<template>
  <div
    class="flex flex-nowrap align-items-center justify-content-center h-full w-full"
    style="
      background: radial-gradient(
        ellipse farthest-corner at 70% 20%,
        #4969a9 0%,
        #252e40 60%
      );
    "
  >
    <router-view />
  </div>
</template>

<style scoped lang="scss"></style>
