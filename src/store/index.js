import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
  },
  data() {
    return {
      userId: 'c5',
    };
  },
  getters: {
    userId(state) {
     return state.userId;
    },
  },
});

export default store;
