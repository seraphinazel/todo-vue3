<template>
  <div class="note-page">
    <router-link to="/">Home</router-link>
    <h3 v-if="note.id">Edit note id: {{note.id}}</h3>
    <h3 v-else>Create new note</h3>
    <div class="note-title">
      <input class="input" type="text" placeholder="Note title" v-model="noteTitle">
    </div>
    <div class="note-todo">
      <div>
        <input class="input" type="text" placeholder="Note todo" v-model="todoContent">
        <my-button @click="addTodo">Add todo</my-button>
      </div>
      <div v-for="(item, index) in noteTodo" :key="item.id" class="new-note-list">
        <div>
          <input type="checkbox" :id="item.id" v-model="item.checked">
          <label :for="item.id">
            <input class="input" type="text" placeholder="Note todo" v-model="item.content">
          </label>
        </div>
        <my-button @click="deleteTodo(index)" style="border:none;">
          <img src="@/assets/delete_icon.svg" alt="delete_icon"/>
        </my-button>
      </div>
    </div>
    <my-button
      v-if="note.id"
      style="align-self: flex-end;"
      @click="saveNote(note.id)"
    >
      Save
    </my-button>
    <my-button
      v-else
      style="align-self: flex-end;"
      @click="saveNewNote"
    >
      Save
    </my-button>
  </div>
</template>

<script>
import axios from 'axios';
import MyButton from '@/components/UI/MyButton.vue';
import { API_BASE_URL } from '@/config';

export default {
  components: { MyButton },
  data() {
    return {
      note: {},
      isDialogShown: false,
      noteTitle: '',
      noteTodo: [],
      todoContent: '',
      isLoading: false,
      isLoadingFailed: false,
    };
  },
  methods: {
    getNote() {
      if (this.$route.params.id !== 'new') {
        this.note = this.$store.state.notes.find((element) => element.id === +this.$route.params.id);
        this.noteTitle = this.note.title;
        this.noteTodo = this.note.todo;
      }
    },
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
    saveNewNote() {
      this.isLoading = true;
      if (this.noteTitle !== '' && this.noteTodo.length > 0) {
        const newNote = {
          id: Date.now(),
          title: this.noteTitle,
          todo: this.noteTodo,
        };
        axios
          .post(`${API_BASE_URL}/notes`, newNote)
          .then(() => {
            this.noteTitle = '';
            this.noteTodo = [];
            this.isLoading = false;
            this.$router.push('/');
          })
          .catch(() => { this.isLoadingFailed = true; });
      }
    },
    saveNote(id) {
      this.isLoading = true;
      if (this.noteTitle !== '' && this.noteTodo.length > 0) {
        axios
          .put(`${API_BASE_URL}/notes/${id}`, {
            title: this.noteTitle,
            todo: this.noteTodo,
          })
          .then(() => {
            this.noteTitle = '';
            this.noteTodo = [];
            this.isLoading = false;
            this.$router.push('/');
          })
          .catch(() => { this.isLoadingFailed = true; });
      }
    },
  },
  created() {
    this.getNote();
  },
  // добавить отклик на пустое поле
  // после добавления пункта списка курсор чтобы оказывался снова в поле
};
</script>

<style scoped>
.note-page {
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
