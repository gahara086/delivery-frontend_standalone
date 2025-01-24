import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import DeliveryList from "../views/DeliveryList.vue";
import DeliveryPage from "../views/DeliveryPage.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/deliveries",
    name: "DeliveryList",
    component: DeliveryList,
  },
  {
    path: "/deliveries/:id",
    name: "DeliveryPage",
    component: DeliveryPage,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/",
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
