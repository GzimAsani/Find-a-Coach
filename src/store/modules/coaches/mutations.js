export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },

  setCoaches(state, payload) {
    state.coaches = payload;
  },
  setLastTimeChecked(state) {
    state.lastFetch = new Date().getTime();
  },
};
