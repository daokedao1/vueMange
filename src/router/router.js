import Vue from "vue";
import Router from "vue-router";
import Home from "../page/Home.vue";
// import Cookies from "js-cookie";
// import store from "../store/store";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: []
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面meta */
//   if (to.meta.content) {
//     let head = document.getElementsByTagName("head");
//     let meta = document.createElement("meta");
//     meta.content = to.meta.content;
//     head[0].appendChild(meta);
//   }
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title;
//   }
//   // let user = Cookies.get("userInfo") || store.state.userInfo;
//   // let userInfo = store.state.roleId;
//   // if (userInfo) {
//   //   next();
//   // } else {
//   //   if (/list/.test(to.path)) {
//   //     next({
//   //       name: "login"
//   //     });
//   //   } else {
//   //     next();
//   //   }
//   // }
// });
export default router;
