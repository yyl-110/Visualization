const getters = {
  sidebar: (state) => state.app.sidebar,
  device: (state) => state.app.device,
  token: (state) => state.user.token,
  avatar: (state) => state.user.avatar,
  name: (state) => state.user.name,
  queryYear: (state) => state.product.queryYear,
  queryTime: (state) => state.product.queryTime,
  queryType: (state) => state.product.queryType,
};
export default getters;
