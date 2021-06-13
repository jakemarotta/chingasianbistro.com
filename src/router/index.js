import VueRouter from "vue-router";

import Appetizers from "../pages/submenus/Appetizers.vue";
import Entrees from "../pages/submenus/Entrees.vue";
import Sides from "../pages/submenus/Sides.vue";
import Specials from "../pages/submenus/Specials.vue";
import Sushi from "../pages/submenus/Sushi.vue";

const routes = [
  {
    path: "/menu/appetizers",
    component: Appetizers,
  },
  {
    path: "/menu/entrees",
    component: Entrees,
  },
  {
    path: "/menu/sides",
    component: Sides,
  },
  {
    path: "/menu/specials",
    component: Specials,
  },
  {
    path: "/menu/sushi",
    component: Sushi,
  },
  {
    path: "/menu",
    redirect: "/menu/entrees",
  }
];

const router = new VueRouter({ 
  routes,
  mode: "history",
});

export default router;
