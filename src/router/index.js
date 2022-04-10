import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/opinions",
    name: "opinions",
    component: () =>
      import(/* webpackChunkName: "opiniones" */ "../views/OpinionsView.vue"),
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "administracion" */ "../views/AdminView.vue"),
  },
  {
    path: "/edit-opinion",
    name: "edit-opinion",
    component: () => import("../views/EditOpinionView.vue"),
    children: [
      {
        path: ":identifier",
        name: "opinion",
        component: () => import("../views/OpinionView.vue"),
      },
    ],
  },
  {
    path: "/*",
    name: "error_page",
    component: () => import("../views/ErrorPageView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
