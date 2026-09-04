<script setup>
  import { computed, ref, watch } from "vue";

  const inputEl = ref(null);
  const focusInput = () => {
    inputEl.value.focus();
  };
</script>

<template>
  <div class="m-3 w-25">
    <input
      ref="inputEl"
      type="text"
      class="form-control"
      id="exampleInputEmail1"
    />
    <button @click="focusInput" type="button" class="btn btn-success">
      focus
    </button>
  </div>
</template>

<style>
  * {
    margin: 5px;
  }
</style>
