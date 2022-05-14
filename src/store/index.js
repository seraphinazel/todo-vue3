import { createStore } from 'vuex';

export default createStore({
  state: {
    notes: [
      {
        id: 1,
        title: 'Note1',
        todo: [
          {
            id: 1,
            content: '1 issue1',
            checked: false,
          },
          {
            id: 2,
            content: '1 issue2',
            checked: true,
          },
          {
            id: 3,
            content: '1 issue3',
            checked: true,
          },
          {
            id: 4,
            content: '1 issue4',
            checked: false,
          },
        ],
      },
      {
        id: 2,
        title: 'Note2',
        todo: [
          {
            id: 1,
            content: '2 issue1',
            checked: false,
          },
          {
            id: 2,
            content: '2 issue2',
            checked: true,
          },
          {
            id: 3,
            content: '2 issue3',
            checked: false,
          },
        ],
      },
    ],
  },
  mutations: {
    deleteNote(state, id) {
      const index = state.notes.indexOf(state.notes.find((elem) => elem.id === id));
      state.notes.splice(index, 1);
    },
  },
  actions: {
  },
  modules: {
  },
});
