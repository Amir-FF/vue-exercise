<script setup>
  import { ref } from "vue";
  import "./css/main.css";
  import "./sass/main.scss";

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

  <h1 class="border">hello would</h1>

  <h1 class="border-sass">hello would</h1>

  <h1 class="border-scoped-sass">hello would</h1>

  <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>

<style lang="scss" scoped>
  $border-scoped: 2px #f00 solid;

  .border-scoped-sass {
    border: $border-scoped;
  }

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
