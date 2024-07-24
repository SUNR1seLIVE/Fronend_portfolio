import { createApp } from "vue";
import App from "./front/App.vue";
import { createPinia } from "pinia";
import router from "./front/router";
import PrimeVue from "primevue/config";
// import "primevue/resources/themes/lara-dark-pink/theme.css";
import "primevue/resources/themes/arya-purple/theme.css";
import "primevue/resources/primevue.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import Ripple from "primevue/ripple";
import StyleClass from "primevue/styleclass";
import BadgeDirective from "primevue/badgedirective";
import ToastService from "primevue/toastservice";
import Toast from "primevue/toast";
import ProgressSpinner from "primevue/progressspinner";
import Card from "primevue/card";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Menubar from "primevue/menubar";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Button from "primevue/button";
import SelectButton from "primevue/selectbutton";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import ContextMenu from "primevue/contextmenu";

const pinia = createPinia();
const app = createApp(App);
app
  .use(router)
  .use(pinia)
  .use(PrimeVue, { ripple: true })
  .use(ToastService)
  .directive("ripple", Ripple)
  .directive("styleclass", StyleClass)
  .directive("badge", BadgeDirective)
  .component("Toast", Toast)
  .component("ProgressSpinner", ProgressSpinner)
  .component("Card", Card)
  .component("Splitter", Splitter)
  .component("SplitterPanel", SplitterPanel)
  .component("Button", Button)
  .component("SelectButton", SelectButton)
  .component("Menubar", Menubar)
  .component("Avatar", Avatar)
  .component("Menu", Menu)
  .component("ContextMenu", ContextMenu)
  .component("TabView", TabView)
  .component("TabPanel", TabPanel)
  .mount("#app");
