import { createRouter, createWebHashHistory } from "vue-router";
import ProductApplication from "product-mfe/App";
import AboutApplication from "about-mfe/App";

const routes = [
  {
    path: "/",
    children: [
      {
        path: "product",
        component: ProductApplication,
      },
      {
        path: "about",
        component: AboutApplication,
      },
      {
        path: "cart",
        component: () => import("cart-mfe/App"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
