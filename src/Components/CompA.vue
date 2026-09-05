<script setup>
  import { reactive, ref } from "vue";
  import CompB from "./CompB.vue";
</script>

<template>
  <h1>Componet A</h1>

  <div>
    <slot name="header"></slot>
    <slot name="default"></slot>
    <slot name="footer"></slot>
  </div>

  <br />

  <CompB />
</template>
