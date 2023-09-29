import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      configurations: []
    };
  },
  mutations: {
    addConfiguration(state, data) {
      state.configurations.push(data);
    },
    removeConfiguration(state, data) {
      state.configurations = state.configurations.filter((item) => item.id !== data.id);
    }
  },
  actions: {
    addConfiguration(context, configuration) {
      context.commit('addConfiguration', configuration);
    },
    removeConfigurationDispatch(context, configuration) {
      context.commit('removeConfiguration', configuration);
    }
  }
});
