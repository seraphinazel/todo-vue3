<template>
  <div class="home">
    <my-button @click="$router.push('/notes/new')">Create note</my-button>
    <div v-if="isLoading">Loading...</div>
    <note-list :notes="notes"/>
  </div>
</template>

<script>
import axios from 'axios';
import MyButton from '@/components/UI/MyButton.vue';
import NoteList from '@/components/NoteList.vue';
import { API_BASE_URL } from '@/config';

export default {
  components: { MyButton, NoteList },
  data() {
    return {
      notes: [],
      isLoading: false,
      isLoadingFailed: false,
    };
  },
  methods: {
    loadNotes() {
      this.isLoading = true;
      axios
        .get(`${API_BASE_URL}/notes`)
        .then((response) => {
          this.notes = response.data;
          this.$store.commit('updateNotes', response.data);
        })
        .catch(() => { this.issLoadingFailed = true; })
        .then(() => { this.isLoading = false; });
    },
  },
  created() {
    this.loadNotes();
  },
};
</script>
