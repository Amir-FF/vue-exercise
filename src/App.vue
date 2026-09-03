<script setup>
  import { ref } from "vue";

  const age = 34;
  const isAge = 40 < age;

  const style = ref({
    color: isAge ? "red" : "blue",
  });

  const cla = ref({
    yellow: isAge,
    gray: true,
  });
</script>

<template>
  <h1 :style="style">hello would</h1>

  <h1 class="pink">hello would</h1>

  <h1 class="bg-black" :class="[isAge ? cla : 'green', 'font-size-20px']">
    hello would
  </h1>
</template>

<style>
  .pink {
    color: pink;
  }

  .yellow {
    color: yellow;
  }

  .gray {
    color: gray;
  }

  .green {
    color: green;
  }

  .bg-black {
    background-color: black;
  }

  .font-size-20px {
    font-size: 20px;
  }
</style>
