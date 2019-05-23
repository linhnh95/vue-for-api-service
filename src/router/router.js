import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/auth/Login';
import Chart from '../views/chart/Chart';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
      {
          path: "/",
          redirect:
          {
              name: "loginForm",
          }
      },
      {
          name: "loginForm",
          path: "/login",
          component: Login,
          meta : {
              title : "Login"
          }
      },
      {
          name: "listChart",
          path: "/charts",
          component: Chart,
          meta : {
              title : "Charts"
          }
      },
  ]
})
