<script setup>
  import { ref } from "vue";

  // v-show
  const isVisible = ref(true);

  // v-if v-else-if v-else
  const isAge = ref(21);

  // v-for key
  const array = ref([11, 12, 13, 14, 14]);
  const object = ref([
    { id: 1, name: "ali" },
    { id: 2, name: "hossein" },
  ]);
</script>

<template>
  <h1>hello would</h1>

  <!-- v-show -->
  <p v-show="isVisible">He/She is over 25 years old. (v-show)</p>

  <!-- v-if v-else-if v-else -->
  <p v-if="isAge === 20">He/She is over 20 years old. (v-if)</p>
  <p v-else-if="isAge === 21">He/She is over 21 years old. (v-else-if)</p>
  <p v-else>He/She is over 22 years old. (v-else)</p>

  <!-- v-for key -->
  <ul>
    <li v-for="(arr, index) in array" :key="index">
      {{ index }} - {{ arr }} (v-for key array)
    </li>
  </ul>

  <ul>
    <li v-for="obj in object" :key="object.id">
      {{ obj.id }} - {{ obj.name }} (v-for key object)
    </li>
  </ul>
</template>
