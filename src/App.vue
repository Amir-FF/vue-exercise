<script setup>
  import { ref } from "vue";

  const inputTextValue = ref("Amir");
  const inputPasswordValue = ref("");
  const checkboxValue = ref(["vue js"]);
  const radioValue = ref("male");
  const selectBoxValue = ref("2");
  const selectsBoxValue = ref(["1", "3"]);

  const submitForm = () => {
    console.log(
      "text: ",
      inputTextValue.value,
      "\n",
      "password: ",
      inputPasswordValue.value,
      "\n",
      checkboxValue.value,
      "\n",
      radioValue.value,
      "\n",
      selectBoxValue.value,
      "\n",
      selectsBoxValue.value,
    );
  };
</script>

<template>
  <form @submit.prevent="submitForm" class="w-25">
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        v-model.number="inputTextValue"
        type="text"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>

    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        v-model.trim="inputPasswordValue"
        type="password"
        class="form-control"
        id="exampleInputPassword1"
      />
    </div>

    <div class="mb-3 form-check">
      <input
        v-model="checkboxValue"
        type="checkbox"
        class="form-check-input"
        value="React js"
        id="exampleCheck1"
      />
      <label class="form-check-label" for="exampleCheck1">React js</label>
    </div>

    <div class="mb-3 form-check">
      <input
        v-model="checkboxValue"
        type="checkbox"
        class="form-check-input"
        value="vue js"
        id="exampleCheck1"
      />
      <label class="form-check-label" for="exampleCheck1">vue js</label>
    </div>

    <div class="form-check">
      <input
        v-model="radioValue"
        value="male"
        class="form-check-input"
        type="radio"
        name="radioDefault"
        id="radioDefault1"
      />
      <label class="form-check-label" for="radioDefault1"> male </label>
    </div>

    <div class="form-check">
      <input
        v-model="radioValue"
        value="female"
        class="form-check-input"
        type="radio"
        name="radioDefault"
        id="radioDefault2"
      />
      <label class="form-check-label" for="radioDefault2"> female </label>
    </div>

    <select
      v-model="selectBoxValue"
      class="form-select m-3"
      aria-label="Default select example"
    >
      <option disabled value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>

    <select
      v-model="selectsBoxValue"
      class="form-select m-3"
      multiple
      aria-label="Multiple select example"
    >
      <option disabled value="">Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>

    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</template>

<style>
  * {
    margin: 5px;
  }
</style>
