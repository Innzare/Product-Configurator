import { createStore } from 'vuex';
import { LocalStorage } from '@/helpers/storage';

export default createStore({
  state() {
    const configurations = LocalStorage.get('configurations');

    return {
      configurations
    };
  },
  mutations: {
    addConfiguration(state, data) {
      state.configurations.push(data);
    },
    removeConfiguration(state, data) {
      const configurationsFiltered = state.configurations.filter((item) => item.id !== data.id);
      LocalStorage.set('configurations', configurationsFiltered);

      state.configurations = configurationsFiltered;
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
