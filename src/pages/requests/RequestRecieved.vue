<template>
  <section>
    <base-card>
      <header>
        <h2>Request Recieved</h2>
      </header>
      <ul v-if="hasRequests">
        <request-item
          v-for="requests in requestRecieved"
          :key="requests.id"
          :email="requests.email"
          :message="requests.message"
        ></request-item>
      </ul>
      <h3 v-else>You haven't recieved any request yet!</h3>
    </base-card>
  </section>
</template>
<script>
import RequestItem from '../../components/requests/requestItem.vue';
export default {
  components: { RequestItem },
  computed: {
    requestRecieved() {
      return this.$store.getters['requests/getRequests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    },
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
