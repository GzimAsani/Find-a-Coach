import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index';
import requestsModule from './modules/requests/index';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule,
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
