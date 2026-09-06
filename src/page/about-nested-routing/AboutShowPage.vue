<script setup>
  import { useRoute, useRouter } from "vue-router";

  const route = useRoute();

  const router = useRouter();

  const goToHomePage = () => {
    router.push("/");
  };
  const goToAboutPage = () => {
    router.push("/about");
  };

  const goToPageVue = () => {
    window.location.href = "https://router.vuejs.org/";
  };
</script>

<template>
  <h1>about Show page - {{ route.params.id }}</h1>
  <p>{{ route.query.name }} - {{ route.query.age }}</p>

  <button
    @click="goToPageVue"
    type="button"
    class="btn btn-outline-danger me-3"
  >
    vue js
  </button>
  <button @click="goToHomePage" type="button" class="btn btn-outline-info me-3">
    Home
  </button>
  <button @click="goToAboutPage" type="button" class="btn btn-outline-success">
    about
  </button>
</template>
