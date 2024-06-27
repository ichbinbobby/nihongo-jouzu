<template>
  <UVerticalNavigation :links="links" />
</template>

<script setup lang="ts">
const route = useRoute();

const links = [
  {
    label: "Profile",
    avatar: {
      src: "https://avatars.githubusercontent.com/u/739984?v=4",
    },
    badge: 100,
    to: "/user/profile",
  },
  {
    label: "Verbs",
    icon: "i-heroicons-home",
    to: "/verbs/overview",
  }
];
</script>

<style scoped></style>
