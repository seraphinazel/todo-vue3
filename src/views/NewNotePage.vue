<template>
  <div class="new-note">
    <h3>Creating new note</h3>
    <input class="input" type="text" placeholder="Note title" v-model="noteTitle">
    <input class="input" type="text" placeholder="Note todo" v-model="todoContent">
    <my-button
      style="align-self: flex-start;"
      @click="addTodo"
    >
      Add todo
    </my-button>
    <div v-for="(item, index) in noteTodo" :key="item.id" class="new-note-list">
      <div>{{item.content}}</div>
      <my-button @click="deleteTodo(index)" style="border:none;">
        <img src="@/assets/delete_icon.svg" alt="delete_icon"/>
      </my-button>
    </div>
    <my-button style="align-self: flex-end;" @click="saveNote">Save</my-button>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';

export default {
  components: { MyButton },
  data() {
    return {
      isDialogShown: false,
      noteTitle: '',
      noteTodo: [],
      todoContent: '',
    };
  },
  methods: {
    addTodo() {
      if (this.todoContent !== '') {
        const todoItem = {
          id: Date.now(),
          content: this.todoContent,
          checked: false,
        };
        this.noteTodo.push(todoItem);
        this.todoContent = '';
      }
    },
    deleteTodo(index) {
      this.noteTodo.splice(index, 1);
    },
    saveNote() {
      if (this.noteTitle !== '' && this.noteTodo.length > 0) {
        const newNote = {
          id: Date.now(),
          title: this.noteTitle,
          todo: this.noteTodo,
        };
        this.$store.commit('addNote', newNote);
        this.noteTitle = '';
        this.noteTodo = [];
        this.$router.push('/');
      }
    },
  },
  // добавить отклик на пустое поле
  // после добавления пункта списка курсор чтобы оказывался снова в поле
};
</script>

<style scoped>
.new-note {
  display: flex;
  flex-direction: column;
}
.input {
  min-width: 100px;
  min-height: 30px;
  padding: 10px;
  margin: 10px 0;
  font-size: 18px;
  border: 5px solid white;
  border-radius: 10px;
}
.new-note-list {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin: 10px 0;
  border: 3px solid white;
  border-radius: 10px;
}
</style>
