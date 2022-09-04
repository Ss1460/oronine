'use strict'

const state = {
    loading: false,
}

const actions = {
  loading: ({commit,}) => {
    commit('loading', null, {root: true})
  }
}

const mutations = {
  loading: function(state) {
    state.loading = !state.loading
    console.log(state.loading)
  }  
}

export default {
    state,
    actions,
    mutations,
}