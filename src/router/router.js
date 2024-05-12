import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/pay",
    name: "pay",
    component: () => import("../components/payment/v-pay"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/",
    name: "main",
    component: () => import("../components/v-main"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 300);
    },
  },
  {
    path: "/payForm",
    name: "payForm",
    component: () => import("../components/payment/v-payForm"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 300);
    },
  },
  {
    path: "/aboutCollege",
    name: "aboutCollege",
    component: () => import("../components/college/v-aboutCollege"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/aboutGrants",
    name: "aboutGrants",
    component: () => import("../components/grants/v-aboutGrants"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/accomondation",
    name: "accomondation",
    component: () => import("../components/v-accomondation"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/consultation",
    name: "consultation",
    component: () => import("../components/v-consultation"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/aboutPrice",
    name: "aboutPrice",
    component: () => import("../components/v-aboutPrice"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/softWare",
    name: "softWare",
    component: () => import("../components/faculties/v-softWare"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/veterinary",
    name: "veterinary",
    component: () => import("../components/faculties/v-veterinary"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/landManagment",
    name: "landManagment",
    component: () => import("../components/faculties/v-landManagment"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/audit",
    name: "audit",
    component: () => import("../components/faculties/v-audit"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/insurance",
    name: "insurance",
    component: () => import("../components/faculties/v-insurance"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/agronomy",
    name: "agronomy",
    component: () => import("../components/faculties/v-agronomy"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/forestly",
    name: "forestly",
    component: () => import("../components/faculties/v-forestly"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/electrical",
    name: "electrical",
    component: () => import("../components/faculties/v-electrical"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/logistic",
    name: "logistic",
    component: () => import("../components/faculties/v-logistic"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/hunting",
    name: "hunting",
    component: () => import("../components/faculties/v-hunting"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/applyForm",
    name: "applyForm",
    component: () => import("../components/faculties/v-applyForm"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/auth/v-login"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/adminProfile",
    name: "adminProfile",
    component: () => import("../components/auth/v-adminProfile"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 1500);
    },
  },
  {
    path: "/adminProfileApply",
    name: "adminProfileApply",
    component: () => import("../components/auth/v-adminProfileApply"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 300);
    },
  },
  {
    path: "/adminProfilePay",
    name: "adminProfilePay",
    component: () => import("../components/auth/v-adminProfilePay"),
    beforeEnter: (to, from, next) => {
      store.commit("set_has_loading", true);
      next();
      setTimeout(() => {
        store.commit("set_has_loading", false);
      }, 300);
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
