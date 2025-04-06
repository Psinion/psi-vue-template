import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import "@/assets/styles/index.scss";
import { MainConfigPlugin } from "@/main.config.ts";

const app = createApp(App);

app.use(MainConfigPlugin);
app.use(createPinia());
app.use(router);

app.mount("#app");
