<script setup></script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-link to="/about/4?name=ali&age=15">About Show</router-link>

  <h1>app page</h1>

  <div>
    <router-view></router-view>
  </div>
</template>

<style>
  * {
    margin: 5px;
  }

  a {
    text-decoration: none !important;
  }

  .router-link-active {
    color: red;
  }

  .router-link-exact-active {
    color: green;
  }
</style>
