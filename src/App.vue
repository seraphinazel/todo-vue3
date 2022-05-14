<template>
<div class="wrapper">
  <header>ToDo list</header>
  <router-view class="content"></router-view>
</div>
</template>

<script>
export default {
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.wrapper {
  max-width: 900px;
  min-width: 300px;
  margin: 15px auto;
}

header {
  font-size: 36px;
  font-weight: bold;
}

.content,
header {
  color: darkslategray;
  background-color: antiquewhite;
  padding: 15px;
  border-radius: 10px;
  margin: 15px 0;
}
</style>
