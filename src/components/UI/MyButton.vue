<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style scoped>
.button {
  max-width: 150px;
  padding: 15px;
  font-size: 18px;
  background: none;
  border-radius: 10px;
  border: 3px solid white;
  color: darkslategray;
  cursor: pointer;
}
.button:hover {
  background-color: rgba(255, 255, 255, 0.4);
}
.button:active {
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
