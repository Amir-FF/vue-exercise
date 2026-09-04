<script setup>
  const props = defineProps(["name", "age"]);

  const emit = defineEmits(["emit-profile"]);

  const emitProfile = () => {
    emit("emit-profile", "Amir", 18);
  };
</script>

<template>
  <h1>user profile</h1>
  <p>name: {{ props.name }}</p>
  <p>age: {{ props.age }}</p>
  <button @click="emitProfile" type="button" class="btn btn-outline-success">
    Success
  </button>
</template>
