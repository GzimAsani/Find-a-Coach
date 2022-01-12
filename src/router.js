import { createRouter, createWebHistory } from 'vue-router';

import CoachDetails from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';

import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestRecieved from './pages/requests/RequestRecieved.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/coaches' },
    { path: '/coaches', component: CoachList },
    {
      path: '/coaches/:id',
      component: CoachDetails,
      children: [
        { path: 'contact', component: ContactCoach }, // '/coaches/someId/contact'
      ],
    },
    { path: '/register', component: CoachRegistration },
    { path: '/requests', component: RequestRecieved },
    { path: '/:notFound(.*)', component: NotFound },
  ],
});

export default router;
