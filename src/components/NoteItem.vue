<template>
  <div class="note-item">
    <my-dialog v-model:show="isModalShown">
      Do you want to delete note ID:{{note.id}}?
      <br>
      <br>
      <my-button @click="deleteNote(note.id)">
        Confirm
      </my-button>
    </my-dialog>
    <div class="note-item-title">
      {{note.id}}. {{note.title}}
      <div class="buttons-wrapper">
        <my-button
          class="action-buttons"
          @click="$router.push(`/notes/${note.id}`)"
        >
          <img src="@/assets/edit_icon.svg" alt="edit_icon"/>
        </my-button>
        <my-button class="action-buttons" @click="isModalShown = true">
          <img src="@/assets/delete_icon.svg" alt="delete_icon"/>
        </my-button>
      </div>
    </div>
    <div class="note-item-todolist"></div>
    <div v-for="(item, index) in note.todo" :key="item.id">
      <div class="todo-item" v-if="index < 3">
        {{item.content}}
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
import MyDialog from '@/components/UI/MyDialog.vue';

export default {
  data() {
    return {
      isModalShown: false,
    };
  },
  components: { MyButton, MyDialog },
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deleteNote(id) {
      this.$store.commit('deleteNote', id);
    },
  },
};
</script>

<style scoped>
.note-item,
.note-item-title {
  margin: 10px 0;
}
.note-item {
  border: 2px solid white;
  border-radius: 10px;
  padding: 15px;
}
.note-item-title {
  display: flex;
  justify-content: space-between;
}
.todo-item {
  margin: 10px 0 0 10px;
}
.action-buttons {
  width: 50px;
  height: 50px;
  padding: 0;
  margin: 0 5px;
  line-height: 50px;
}
</style>
