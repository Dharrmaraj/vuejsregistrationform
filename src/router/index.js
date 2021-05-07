import Vue from 'vue'
import Router from 'vue-router'
import Personal from '@/components/Personal'
import Company from '@/components/Company'
import EmailVerification from '@/components/EmailVerification'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'test',
      redirect: '/Personal'
    },
    {
      path: '/Personal',
      name: 'Personal',
      component: Personal
    },
    {
      path: '/Company',
      name: 'Company',
      component: Company
    },
    {
      path: '/EmailVerification',
      name: 'EmailVerification',
      component: EmailVerification
    }
  ]
})
