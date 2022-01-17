import mutations from './mutations';
import actions from './actions';
import getters from './getters';
export default {
  namespaced: true,
  state() {
    return {
      coaches: [
        {
          id: 'c1',
          firstName: 'Maximilian',
          lastName: 'Schwarzmüller',
          areas: ['frontend', 'backend', 'career'],
          description:
            "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
          hourlyRate: 30,
        },
        {
          id: 'c2',
          firstName: 'Julie',
          lastName: 'Jones',
          areas: ['frontend', 'career'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 32,
        },
        {
          id: 'c3',
          firstName: 'Gzim',
          lastName: 'Asani',
          areas: ['frontend', 'backend'],
          description:
            'I am Gzim and as a junior developer in a medium-sized tech company, I can help you get your first job or progress in your current role.',
          hourlyRate: 36,
        },
        {
          id: 'c4',
          firstName: 'Blin',
          lastName: 'Nagavci',
          areas: ['frontend'],
          description:
            'I am Julie and as a senior developer in a big tech company, I can help you build good websites.',
          hourlyRate: 21,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
