import issues from '@/database/issues';

// initial state
const state = () => ({
  all: null,
  selectedIssues: [],
  customIssues: [],
  baseHref: 'https://jira.criteois.com/browse/'
})

// getters
const getters = {
  getIssuesByUserId: (state) => (id) => {
    return state.all.filter(issue => issue.assignee === id)
  },
  getSelectedIssueByKey: (state) => (key) => {
    return state.selectedIssues.filter(issue => issue.key === key)
  },
}

// actions
const actions = {
  getAllIssues ({commit}) {
    commit('setIssues', issues)
  },
  toggleSelectedIssue ({commit, state, getters}, issue) {
    let wasSelected = getters.getSelectedIssueByKey(issue.key).length > 0
    !wasSelected ? commit('addSelectedIssue', issue) : commit('removeSelectedIssue', issue)
    return wasSelected
  },
  addCustomIssue ({commit, state}, customIssue) {
    if(!state.customIssues.includes(customIssue)){
      commit('addCustomIssue', customIssue)
    }
  },
  removeCustomIssue ({commit}, customIssue) {
    commit('removeCustomIssue', customIssue)
  },
  removeAllCustomIssue ({commit}) {
    commit('removeAllCustomIssue')
  },
}

// mutations
const mutations = {
  setIssues (state, issues) {
    state.all = issues
  },
  addSelectedIssue (state, issue) {
    state.selectedIssues.push(issue)
  },
  removeSelectedIssue (state, issue) {
    let selectedIssueIndex = state.selectedIssues.indexOf(issue);
    state.selectedIssues.splice(selectedIssueIndex, 1);
  },
  addCustomIssue (state, customIssue) {
    state.customIssues.push(customIssue)
  },
  removeCustomIssue (state, customIssue) {
    let customIssueIndex = state.customIssues.indexOf(customIssue);
    state.customIssues.splice(customIssueIndex, 1);
  },
  removeAllCustomIssue (state) {
    state.customIssues = []
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}