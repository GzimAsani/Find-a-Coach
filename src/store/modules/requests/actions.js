export default {
  async contactCoach(context, payload) {
    const newRequest = {
      userEmail: payload.email,
      message: payload.message,
    };
    const response = await fetch(
      `https://vue-coach-app-13dd0-default-rtdb.europe-west1.firebasedatabase.app/requests/${payload.coachId}.json`,
      {
        method: 'POST',
        body: JSON.stringify(newRequest),
      }
    );
    const responseData = response.json();

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to send request');
      throw error;
    }

    newRequest.id = responseData.name;
    newRequest.coachId = payload.coachId;
    context.commit('addRequest', newRequest);
  },
  async fetchRequests(context) {
    const coachId = context.rootGetters.userId;
    const response = await fetch(
      `https://vue-coach-app-13dd0-default-rtdb.europe-west1.firebasedatabase.app/requests/${coachId}.json`
    );
    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(
        responseData.message || 'Failed to fetch request'
      );
      throw error;
    }
    const requests = [];
    for (const key in responseData) {
      const request = {
        userEmail: responseData[key].userEmail,
        message: responseData[key].message,
        id: key,
        coachId: coachId,
      };
      requests.push(request);
    }
    context.commit('setRequests', requests);
  },
};
