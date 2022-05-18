import { createStore } from 'vuex';

export default createStore({
  state: {
    notes: [],
  },
  mutations: {
    updateNotes(state, notes) {
      state.notes = notes;
    },
  },
});
