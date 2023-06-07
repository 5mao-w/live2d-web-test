import { createRouter, createWebHistory } from "vue-router";
import Live2d from "@/views/Live2dView.vue";

const routes = [
  {
    path: "/",
    name: "live2d",
    component: Live2d,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
  // 默认的404路由
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: function () {
      return import(
        /* webpackChunkName: "notfound" */ "../components/NotFound.vue"
      );
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
