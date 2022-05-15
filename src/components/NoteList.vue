<template>
  <div>
    <note-item v-for="note in notes" :key=note.id :note="note" />
  </div>
</template>

<script>
import NoteItem from '@/components/NoteItem.vue';

export default {
  components: { NoteItem },
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
};
</script>
