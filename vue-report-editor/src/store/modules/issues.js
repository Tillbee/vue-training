import issues from '@/database/issues';

// initial state
const state = () => ({
  all: null
})

// getters
const getters = {
  getIssuesByUserId: (state) => (id) => {
    return state.all.filter(issue => issue.assignee === id)
  }
}

// actions
const actions = {
  getAllIssues ({commit}) {
    commit('setIssues', issues)
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