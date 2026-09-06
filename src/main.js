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
import NotFound from "./page/not-found/NotFound.vue";

const routes = [
  { path: "/", component: HomePage, name: "home" },
  {
    path: "/about",
    component: AboutPage,
    children: [
      { path: "/about/:id", component: AboutShowPage, name: "about-show" },
      {
        path: "/about/create",
        component: AboutCreatePage,
        name: "about-create",
      },
      {
        path: "/about/edit/:id",
        component: AboutEditPage,
        name: "about-edit",
      },
    ],
    name: "about",
    // beforeEnter: (to, from) => {
    //   console.log(to.name);
    //   if (to.name === "about") {
    //     return { name: "home" };
    //   }
    // },
  },
  { path: "/:pathMatch(.*)*", component: NotFound, name: "not-found" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (to.name === "about") {
    // return "/";
    return { name: "home" };
  }
});

const app = createApp(App);
app.use(router);
app.mount("#app");
