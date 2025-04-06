import { createRouter, createWebHistory } from "vue-router";
import { publicMainRoutes } from "../modules/main/routes.ts";
import { errorRoutes } from "@/modules/errors/routes.ts";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: "/",
    children: [
      ...publicMainRoutes
    ]
  },
  ...errorRoutes,
  {
    path: "/:catchAll(.*)",
    redirect: "/error/404"
  }
  ]
});

export default router;
