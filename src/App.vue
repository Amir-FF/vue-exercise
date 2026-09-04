<script setup>
  import { reactive, ref } from "vue";
  import UserProfile from "./Components/UserProfile.vue";

  const users = reactive([
    {
      name: "ali",
      age: 15,
    },
  ]);

  const parentEditProfile = (nameEmit, ageEmit) => {
    users[0].name = nameEmit;
    users[0].age = ageEmit;
  };
</script>

<template>
  <div v-for="(user, index) in users" :id="index" :key="index">
    <userProfile
      @emit-profile="parentEditProfile"
      :name="user.name"
      :age="user.age"
    />
  </div>
</template>

<style>
  * {
    margin: 5px;
  }
</style>
