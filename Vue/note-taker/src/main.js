import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";

import App from "./App.vue";
import router from "@/router";

import "./assets/main.css";

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

createApp(App).use(autoAnimatePlugin).use(pinia).use(router).mount("#app");
