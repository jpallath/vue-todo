import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '@/components/TodoList';
import TodoListItem from '@/components/TodoListItem';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList,
    },
  ],
});
