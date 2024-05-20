<template>
  <UCard>
    <template #header>
      <div class="w3-row">
        <div class="w3-col m3 w3-left-align">Header</div>

        <div class="w3-col m6 w3-center">Wurst</div>

        <div class="w3-col m3 w3-right-align">
          <ColorModeToggle />
        </div>
      </div>
    </template>

    <slot />

    <template #footer> Footer </template>
  </UCard>
</template>

<script setup>
import ColorModeToggle from "~/components/buttons/ColorModeToggle.vue";
</script>
