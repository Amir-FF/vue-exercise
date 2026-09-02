<script setup>
  import { reactive, ref } from "vue";

  const number = ref(2);
  const array = reactive([2, 4, 6]);

  const find = array.find((arr) => {
    return arr === 6;
  });

  const upadateNubmber = () => {
    setTimeout(() => {
      number.value = 4;
    }, 3000);
  };
  upadateNubmber();
</script>

<template>
  <h1>number: {{ number }}</h1>
  <h1>array: {{ array }}</h1>
  <h1>find: {{ find }}</h1>
</template>
