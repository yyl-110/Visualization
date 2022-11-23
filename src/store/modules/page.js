const state = {
  processType: '',
};

const mutations = {
  HANDEL_CHANGE: (state, {key, value}) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
};

const actions = {
  changeProcessType({commit}, data) {
    commit('HANDEL_CHANGE', data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
