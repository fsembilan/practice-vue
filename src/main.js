import { createApp } from "vue";
import App from "@/App.vue";
import Home from "@/pages/Home.vue";
import InputHandler from "@/pages/InputHandler.vue";
import Binding from "@/pages/Binding.vue";
import SimpleCalculation from "@/pages/SimpleCalculation.vue";
import "./index.css";

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/handler",
      name: "handler",
      component: InputHandler,
    },
    {
      path: "/binding",
      name: "binding",
      component: Binding,
    },
    {
      path: "/simple-calculation",
      name: "simple-calculation",
      component: SimpleCalculation,
    },
  ],
});

createApp(App).use(router).mount("#app");
