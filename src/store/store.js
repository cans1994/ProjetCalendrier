import Vuex from "vuex";

// création d'une const store
const store = new Vuex.Store({
  state: {
    // gère l'état des données
    events: [], //tableau d'évènements
  },
  getters: {
    //permet de recevoir le store comme 1er argument
    EVENTS: (state) => state.events,
  },
  mutations: {}, // realise la modification (synchrone)
  actions: {}, // réalise l'action
});

export default store;
