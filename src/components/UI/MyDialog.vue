<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div class="modal-content" @click.stop>
      <my-button
        class="close-button"
        @click="hideModal"
      >
        <img src="@/assets/delete_icon.svg" alt="delete_icon"/>
      </my-button>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import MyButton from './MyButton.vue';

export default {
  components: { MyButton },
  props: {
    show: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false);
    },
  },
};
</script>

<style scoped>
.modal {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
}
.modal-content {
  padding: 25px;
  margin: auto;
  background-color: antiquewhite;
  border-radius: 10px;
  min-height: 100px;
  max-height: 1000px;
  min-width: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
}
</style>
