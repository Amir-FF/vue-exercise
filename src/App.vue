<script setup>
  import { provide, reactive } from "vue";
  import CompA from "./Components/CompA.vue";

  const user = reactive({
    name: "amir",
    age: 22,
  });

  const updateUsername = (name) => {
    user.name = name;
  };

  provide("userData", user);
  provide("updateUsername", updateUsername);
</script>

<template>
  <CompA />
</template>

<style>
  * {
    margin: 5px;
  }
</style>
