<script setup>
  import { reactive, ref } from "vue";

  // v-html
  const h1 = ref("<h1>hello would</h1>");

  // v-text
  const msg = ref("number: 2");

  // v-once
  const vOnce = ref(2);

  //
  const imgSrc = ref("./img.jpg");
  const imgAlt = ref("error");
  const link = ref("https://webprog.io/");

  const upadateNubmber = () => {
    setTimeout(() => {
      vOnce.value = 4;
    }, 3000);
  };
  upadateNubmber();
</script>

<template>
  <div v-html="h1"></div>
  <div v-text="msg"></div>
  <div v-once>Unchanged number: {{ vOnce }}</div>
  <div>The number changes.: {{ vOnce }}</div>

  <br /><br />
  <img v-bind:src="imgSrc" v-bind:alt="imgAlt" />
  <br /><br />

  <a :href="link">webprog.ir</a>
</template>
