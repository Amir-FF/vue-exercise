<script setup>
  import { ref } from "vue";

  const sayHello = (name, family, event) => {
    console.log("say hello", name, family, event);
  };

  const keyHello = () => {
    console.log("say hello");
  };
</script>

<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>

  <button
    v-on:click.once="sayHello('Amir', 'Shamiri', $event)"
    type="button"
    class="btn btn-success m-2"
  >
    Success
  </button>

  <button
    @click.stop="sayHello('Amir', 'Shamiri', $event)"
    type="button"
    class="btn btn-outline-warning"
  >
    Warning
  </button>

  <a @click.prevent href="#">
    <button type="button" class="btn btn-danger ms-2">Danger</button>
  </a>

  <form class="w-50 m-2">
    <div>
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        @keyup.alt.enter="keyHello"
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" class="form-text">
        We'll never share your email with anyone else.
      </div>
    </div>
  </form>
</template>
