import Vue from "vue";
import Router from "vue-router";
import Profile from "./views/Profile";
import Gallery from "./views/Gallery";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Profile
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile
    },
    {
      path: "/gallery",
      name: "gallery",
      component: Gallery
    }
  ]
});
