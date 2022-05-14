<template>
  <div class="home">
    <my-button>Create note</my-button>
    <note-list :notes="notes"/>
  </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue';
import NoteList from '../components/NoteList.vue';

export default {
  components: { MyButton, NoteList },
  data() {
    return {
      notes: [],
    };
  },
  created() {
    this.notes = this.$store.state.notes;
  },
};
</script>

<style>

</style>
