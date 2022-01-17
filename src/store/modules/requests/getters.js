export default {
  getRequests(state, _, _2, rootGetters) {
    const coachId = rootGetters.userIdI;
    return state.requests.filter((req) => req.coachId === coachId);
  },
  hasRequests(state, getters) {
    return getters.requests && getters.requests.length > 0;
  },
};
