<script setup>
  import { provide, reactive } from "vue";
  import CompA from "./Components/CompA.vue";
  import { useCounter } from "./composables/useCounter.js";

  const user = reactive({
    name: "amir",
    age: 22,
  });

  const updateUsername = (name) => {
    user.name = name;
  };

  provide("userData", user);
  provide("updateUsername", updateUsername);

  const { counter, plus, minus } = useCounter();
</script>

<template>
  <CompA>
    <template #header>
      <h3>card header (slot)</h3>
    </template>

    <template #default>
      <h3>card default (slot)</h3>
    </template>

    <template #footer>
      <h3>card footer (slot)</h3>
    </template>
  </CompA>

  <h1 class="ms-2">counter</h1>
  <p class="ms-2">count {{ counter }}</p>
  <button @click="minus" type="button" class="btn btn-outline-danger ms-2">
    Danger
  </button>
  <button @click="plus" type="button" class="btn btn-outline-primary ms-2">
    Primary
  </button>
</template>

<style>
  * {
    margin: 5px;
  }
</style>
