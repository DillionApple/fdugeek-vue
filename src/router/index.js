import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/components/Login'
import NewTask from '@/components/task/NewTask'
import TaskDetail from '@/components/task/TaskDetail'
import Application from '@/components/task/Application'
import TaskMainLayout from '@/components/task/TaskMainLayout'
import Main from '@/components/Main'
import AccountMainLayout from '@/components/account/AccountMainLayout'
import AccountDetail from '@/components/account/AccountDetail'
import AppliedTaskList from '@/components/account/AppliedTaskList'
import PublishedTaskList from '@/components/account/PublishedTaskList'

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
          component: Main
        },
        {
          path: 'task-list',
          name: 'task-list',
          component: TaskMainLayout,
        },
        {
          path: 'login',
          name: 'login',
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
          component: AccountMainLayout,
          redirect: '/account/detail',
          children: [
            {
              path: 'detail',
              name: 'account-detail',
              component: AccountDetail
            },{
              path: 'applied-task',
              name: 'applied-task',
              component: AppliedTaskList,
            }, {
              path: 'published-task',
              name: 'published-task',
              component: PublishedTaskList,
            }
          ]
        }
      ]
    },
  ]
})
