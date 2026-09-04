<script setup>
  import { inject } from "vue";

  const user = inject("userData");

  const updateUsername = inject("updateUsername");
</script>

<template>
  <h1>Componet B</h1>
  <p>{{ user.name }} - {{ user.age }}</p>
  <button
    @click="updateUsername('hossein')"
    type="button"
    class="btn btn-outline-success"
  >
    Success
  </button>
</template>
