<template>
  <UCard>
    <template #header>
      <div class="w3-row">
        <div class="w3-col m3 w3-left-align">
          <NuxtLink to="/">Home</NuxtLink>
        </div>

        <div class="w3-col m6 w3-center">Header</div>

        <div class="w3-col m3 w3-right-align">
          <ColorModeToggle />
        </div>
      </div>
    </template>

    <div class="w3-row main">
      <div class="w3-col m2 w3-left-align">
        <LeftNavigation />
      </div>

      <div class="w3-col m8 w3-center">
        <slot />
      </div>

      <div class="w3-col m2 w3-right-align">
        <RightNavigation />
      </div>
    </div>

    <template #footer> Footer </template>
  </UCard>
</template>

<script setup lang="ts">
import ColorModeToggle from "~/components/buttons/ColorModeToggle.vue";
import LeftNavigation from "~/components/navigation/LeftNavigation.vue";
import RightNavigation from "~/components/navigation/RightNavigation.vue";
</script>

<style scoped>
.main {
  height: 81vh;
}
</style>
