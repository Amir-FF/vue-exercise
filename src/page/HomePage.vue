<script setup>
  import { useRouter } from "vue-router";

  const router = useRouter();
  const goToAboutPage = () => {
    router.push("/about");
  };

  const goToAboutShowPage = () => {
    router.push("/about/4?name=ali&age=15");
  };

  const goToPageVue = () => {
    window.location.href = "https://router.vuejs.org/";
  };
</script>

<template>
  <h1>home page</h1>
  <button
    @click="goToPageVue"
    type="button"
    class="btn btn-outline-danger me-3"
  >
    vue js
  </button>
  <button
    @click="goToAboutPage"
    type="button"
    class="btn btn-outline-info me-3"
  >
    about
  </button>
  <button
    @click="goToAboutShowPage"
    type="button"
    class="btn btn-outline-success"
  >
    about show
  </button>
</template>
