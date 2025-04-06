import { RouteRecordRaw } from "vue-router";
import { RouteNames } from "@/router/routeNames.ts";
import ErrorPage from "@/modules/errors/pages/ErrorPage/ErrorPage.vue";
import Error404Page from "@/modules/errors/pages/Error404Page/Error404Page.vue";

export const errorRoutes: RouteRecordRaw[] = [{
  path: "/error/",
  component: ErrorPage,
  redirect: "/error/404",
  children: [{
    path: "404",
    name: RouteNames.Error404,
    component: Error404Page,
    meta: {
      titleCode: "pages.error404"
    }
  }]
}];
