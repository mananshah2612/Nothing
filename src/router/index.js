import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Ridam from "../views/ridam.vue";
import PrimaryDataManagement from "../views/primary-data-management.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
  },
  {
    path: "/ridam",
    name: "Ridam",
    component: Ridam,
  },
  {
    path: "/primary-data-management",
    name: "pdm",
    component: PrimaryDataManagement,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
