'use strict'
import axios from 'axios'

const state = {
    mail: null,
    name: null,
    password: null,
    token: null,
}

const compURL = (api) => {
    return `http://localhost/api/.../${api}`
}

const actions = {
  registMail: ({dispatch, commit, getters, rootGetters}) => {
    const url = compURL('');
    param = new URLSearchParams()
    param.append('')
    axios.post()
    .then()
    .catch()
    .finally(
        commit('globals/loading', null, {root: true})
    )
  }
}

const mutations = {}

export default {
    state,
    actions,
    mutations,
}