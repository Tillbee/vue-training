import issues from '@/database/issues';

// initial state
const state = () => ({
  all: null,
  selectedIssues: [],
  customIssues: [],
  baseHref: 'https://jira.criteois.com/browse/',
})

// getters
const getters = {
  getIssuesByUserId: (state) => (id) => {
    return state.all.filter(issue => issue.assignee === id)
  },
  getSelectedIssueByKey: (state) => (key) => {
    return state.selectedIssues.filter(issue => issue.key === key)
  },
  getCustomIssues: (state) => {
    return state.selectedIssues.filter(issue => issue.isCustom)
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
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}