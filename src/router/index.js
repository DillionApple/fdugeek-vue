import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/Layout'
import Login from '@/components/account/Login'
import Register from '@/components/account/Register'
import NewTask from '@/components/task/NewTask'
import TaskDetail from '@/components/task/TaskDetail'
import Application from '@/components/task/Application'
import TaskMainLayout from '@/components/task/TaskMainLayout'
import Main from '@/components/Main'
import AccountMainLayout from '@/components/account/AccountMainLayout'
import AccountDetail from '@/components/account/AccountDetail'
import AppliedTaskList from '@/components/account/AppliedTaskList'
import PublishedTaskList from '@/components/account/PublishedTaskList'
import AccountPassword from '@/components/account/AccountPassword'
import ConfirmRegister from '@/components/account/ConfirmRegister'
import Feedback from '@/components/Feedback'

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
          path: 'test',
          name: 'test',
          component: ConfirmRegister
        },
        {
          path: 'main',
          name: 'main',
          component: Main
        },
        {
          path: 'feedback',
          name: 'feedback',
          component: Feedback
        },
        {
          path: 'task-list',
          name: 'task-list',
          component: TaskMainLayout,
        },
        {
          path: 'new-task',
          name: 'new-task',
          component: NewTask
        },
        {
          path: 'modify-task/:task_id',
          name: 'modify-task',
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
          path: 'login',
          name: 'login',
          component: Login
        },
        {
          path: 'register',
          name: 'register',
          component: Register
        },
        {
          path: 'confirm_register/:username/:confirm_code',
          name: 'confirm_register',
          component: ConfirmRegister
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
            }, {
              path: 'password',
              name: 'account-password',
              component: AccountPassword
            },
            {
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
