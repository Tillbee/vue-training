
// initial state
const state = () => ({
  highLight: null,
  lowLight: null,
  errors: []
})

// getters
const getters = {
  highLightHasError: state => {
    return state.errors.filter( error => {
      return error.id === "highLight"
    }).length > 0
  },
  lowLightHasError: state => {
    return state.errors.filter( error => {
      return error.id === "lowLight"
    }).length > 0
  },
}

// actions
const actions = {
  updateHighLight ({commit}, highLight) {
    commit('setHighLight', highLight)
  },
  updateLowLight ({commit}, lowLight) {
    commit('setLowLight', lowLight)
  },
  addError ({commit}, error) {
    commit('addError', error)
  },
  cleanErrors ({commit}) {
    commit('cleanErrors')
  },
  resetFeebacks ({commit}) {
    commit('resetFeebacks')
  },
}

// mutations
const mutations = {
  setHighLight (state, highLight) {
    state.highLight = highLight
  },
  setLowLight (state, lowLight) {
    state.lowLight = lowLight
  },
  addError (state, error) {
    state.errors.push(error)
  },
  cleanErrors (state) {
    state.errors = []
  },
  resetFeebacks (state) {
    state.highLight = null
    state.lowLight = null
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}