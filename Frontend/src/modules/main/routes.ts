import { RouteRecordRaw } from "vue-router";
import { RouteNames } from "@/router/routeNames.ts";
import IndexPage from "@/modules/main/pages/IndexPage/IndexPage.vue";

export const publicMainRoutes: RouteRecordRaw[] = [
  {
    path: "",
    name: RouteNames.Index,
    component: IndexPage,
    meta: {
      titleCode: "Index"
    }
  }];
