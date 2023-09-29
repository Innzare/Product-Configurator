import { createStore } from 'vuex';

export default createStore({
  state() {
    return {
      selectedEmployee: null
    };
  },
  mutations: {
    setEmployee(state, data) {
      state.selectedEmployee = data;
    },
    removeEmployee(state) {
      state.selectedEmployee = null;
    }
  },
  actions: {
    setEmployee(context, employee) {
      context.commit('setEmployee', employee);
    },
    removeEmployee(context) {
      context.commit('removeEmployee');
    }
  }
});
