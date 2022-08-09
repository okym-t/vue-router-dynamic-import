import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FooView from "../views/FooView.vue";
import AboutView from "../views/AboutView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // component: AboutView,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    children: [
      {
        path: "/about/foo",
        name: "foo",
        component: FooView,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
