<script setup>
  import { computed, ref } from "vue";

  const name = ref("ali");
  const num = ref(0);
  const firstName = ref("amir");
  const lastName = ref("shamiri");

  const handleEvent = (event) => {
    console.log(event.target.value);

    name.value = event.target.value;
  };

  const getFullName = computed((prev) => {
    console.log("prev value, ", prev);
    console.log("getFullName was called");
    return firstName.value + " " + lastName.value;
  });
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>

  <div class="m-3 w-25">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input
      v-model="name"
      type="text"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
    />
    <div id="emailHelp" class="form-text">
      We'll never share your email with anyone else.
    </div>
  </div>

  <br />

  <p class="m-3">{{ name }}</p>

  <div
    class="btn-group m-3"
    role="group"
    aria-label="Basic mixed styles example"
  >
    <button type="button" class="btn btn-danger" @click="num--">-</button>
    <button type="button" class="btn btn-success" @click="num++">+</button>
  </div>
  <p class="m-3">{{ num }}</p>

  <p>{{ getFullName }}</p>
  <input class="form-control" type="text" v-model="firstName" />
</template>

<style>
  * {
    margin: 5px;
  }
</style>
