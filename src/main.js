import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";
import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./page/HomePage.vue";
import AboutPage from "./page/AboutPage.vue";
import AboutShowPage from "./page/about-nested-routing/AboutShowPage.vue";
import AboutEditPage from "./page/about-nested-routing/AboutEditPage.vue";
import AboutCreatePage from "./page/about-nested-routing/AboutCreatePage.vue";

const routes = [
  { path: "/", component: HomePage },
  {
    path: "/about",
    component: AboutPage,
    children: [
      { path: "/about/:id", component: AboutShowPage },
      { path: "/about/create", component: AboutCreatePage },
      { path: "/about/edit/:id", component: AboutEditPage },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount("#app");
