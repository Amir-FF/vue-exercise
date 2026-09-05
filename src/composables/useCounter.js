import { ref } from "vue";

export function useCounter() {
  const counter = ref(0);

  const plus = () => counter.value++;
  const minus = () => counter.value--;

  return {
    counter,
    plus,
    minus,
  };
}
