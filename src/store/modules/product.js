const state = {
  queryYear: new Date().getFullYear(), //年 默认当前年
  queryTime: `${new Date().getMonth() + 1}月`, //月 季度 半年 默认当前月
  queryType: 1, // 0 全部 1 月度 2 季度 3 半年度 4 全年
};

const mutations = {
  QUERY_TIME: (state, {key, value}) => {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value;
    }
  },
};

const actions = {
  changeTime({commit}, data) {
    commit('QUERY_TIME', data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
