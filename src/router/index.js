import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home";
import Detail from "../views/Detail";

Vue.use(VueRouter);

const routes = [
  /* Main route */
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  /* Detail route */
  {
    path: "/coin/:id",
    name: "Detail",
    component: Detail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
