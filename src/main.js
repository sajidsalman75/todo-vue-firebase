import "./firebase";
import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import {rtdbPlugin} from "vuefire";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap-vue";
import "@/assets/css/modal.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(rtdbPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
