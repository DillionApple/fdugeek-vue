import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/components/Login'
import TaskList from '@/components/task/TaskList'
import NewTask from '@/components/task/NewTask'
import TaskDetail from '@/components/task/TaskDetail'
import Application from '@/components/task/Application'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      redirect: '/main',
      children: [
        {
          path: 'main',
          name: 'main',
          component: TaskList
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'new-task',
          name: 'new-task',
          component: NewTask
        },
        {
          path: 'task-detail/:task_id',
          name: 'task-detail',
          component: TaskDetail
        },
        {
          path: 'application/:task_id',
          name: 'application',
          component: Application
        },
        {
          path: 'account',
          name: 'account',
          component: Account,
        }
      ]
    },
  ]
})
