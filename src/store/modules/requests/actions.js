export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: new Date().toISOString(),
      coachId: payload.coachId,
      message: payload.message,
      email: payload.email,
    };
    context.commit('addRequest', newRequest); //addRequest is the mutation name
  },
};
