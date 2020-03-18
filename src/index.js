import Vue from "vue";
import App from "./App";
import router from "./router/router";

new Vue({
  el: "#app",
  router,
  template: "<App/>",
  render: h => h(App)
});
if (module.hot) {
  module.hot.accept();
}
