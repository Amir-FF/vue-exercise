<script setup>
  import {
    ref,
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    onBeforeUnmount,
    onUnmounted,
  } from "vue";

  const count = ref(0);

  const increment = () => {
    //
    count.value++;
  };

  // --- Lifecycle Hooks ---

  console.log("Setup function running (like created) ");

  onBeforeMount(() => {
    console.log("Component will be mounted.");
    console.log(document.getElementById("dom-element"));
  });

  onMounted(() => {
    console.log("Component is mounted!");
    const element = document.getElementById("dom-element");
    if (element) {
      console.log("DOM Element available:", element);
      element.style.border = "3px solid red";
    }
  });

  onBeforeUpdate(() => {
    console.log(`Before Update`);
  });

  onUpdated(() => {
    console.log(`Updated: Count is ${count.value}`);
  });

  onBeforeUnmount(() => {
    console.log("Component will be unmounted. Cleaning up...");
  });

  onUnmounted(() => {
    console.log("Component has been unmounted.");
  });
</script>

<template>
  <p>Count: {{ count }}</p>
  <button @click="increment">increment</button>

  <div id="dom-element">Vue.js - webprog.io</div>
</template>

<style>
  * {
    margin: 5px;
  }
</style>
