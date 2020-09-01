import workers from '../../database/workers.json';

// initial state
const state = () => ({
  all: null
})

// getters
const getters = {}

// actions
const actions = {
  getAllIssues ({commit}) {
    commit('setIssues', workers)
  }
}

// mutations
const mutations = {
  setIssues (state, issues) {
    state.all = issues
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}