<template>
  <div class="note-page">
    <router-link to="/">Home</router-link>
    <div class="note-title">
      <p> Id: {{note.id}} </p>
      <p> Note title: {{note.title}} </p>
    </div>
    <div class="note-todo">
      <div v-for="item in note.todo" :key="item.id">
        <input type="checkbox" :id="item.id" v-model="item.checked">
        <label :for="item.id">{{item.content}}</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      note: {},
    };
  },
  methods: {
    getNote() {
      this.note = this.$store.state.notes.find((element) => element.id === +this.$route.params.id);
    },
  },
  created() {
    this.getNote();
  },
};
</script>
