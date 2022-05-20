import App from "@/App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { createPinia } from "pinia";
import { createApp } from "vue";
import router from "./router";

createApp(App).use(createPinia()).use(router).mount("#app");
