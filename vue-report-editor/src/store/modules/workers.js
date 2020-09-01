import workers from '../../database/workers.json';

// initial state
const state = () => ({
  all: null,
  selected: null
})

// getters
const getters = {}

// actions
const actions = {
  getAllWorkers ({commit}) {
    commit('setWorkers', workers)
  },
  selectWorker ({commit}, worker) {
    commit('setSelected', worker)
    this.dispatch('global/setActiveComponent', 'Transition')
    setTimeout(() => {
        this.dispatch('global/setActiveComponent', 'Form')
    }, 1500)
  }
}

// mutations
const mutations = {
  setWorkers (state, workers) {
    state.all = workers
  },
  setSelected (state, worker) {
    state.selected = worker
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}