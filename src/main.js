import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

Vue.config.productionTip = false;

// Initialize Netlify Identity
netlifyIdentityWidget.init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

// Initialize GoTrue JS for Netlify
export const auth = new GoTrue({
  APIUrl: "https://vue-dashboard-concept.netlify.app/.netlify/identity",
  setCookie: true
})


