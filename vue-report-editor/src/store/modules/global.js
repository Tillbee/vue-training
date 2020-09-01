
// initial state
const state = () => ({
  activeComponent: "WorkerSelection"
})

// getters
const getters = {}

// actions
const actions = {
  getActiveComponent ({commit}) {
    commit('setActiveComponent', componentName)
  },
  setActiveComponent ({commit}, componentName) {
    commit('setActiveComponent', componentName)
  }
}

// mutations
const mutations = {
  setActiveComponent (state, componentName) {
    state.activeComponent = componentName
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}