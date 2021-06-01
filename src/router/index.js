import VueRouter from "vue-router";

import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Contact from "../pages/Contact.vue";
import Location from "../pages/Location.vue";
import Menu from "../pages/Menu.vue";

import Appetizers from "../pages/submenus/Appetizers.vue";
import Entrees from "../pages/submenus/Entrees.vue";
import Sides from "../pages/submenus/Sides.vue";
import Specials from "../pages/submenus/Specials.vue";
import Sushi from "../pages/submenus/Sushi.vue";

const routes = [
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/location",
    component: Location,
  },
  {
    path: "/menu",
    component: Menu,
    children: [
      {
        path: "appetizers",
        component: Appetizers,
      },
      {
        path: "entrees",
        component: Entrees,
      },
      {
        path: "sides",
        component: Sides,
      },
      {
        path: "specials",
        component: Specials,
      },
      {
        path: "sushi",
        component: Sushi,
      },
      {
        path: "",
        redirect: "entrees",
      }
    ]
  },
  {
    path: "/",
    component: Home,
  },
];

const router = new VueRouter({ 
  routes,
  mode: "history",
});

export default router;
