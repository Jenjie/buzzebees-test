import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import BootstrapVue from "bootstrap-vue";
import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
import "./assets/css/style.css";
Vue.use(BootstrapVue);
Vue.component("i", FontAwesomeIcon);
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
