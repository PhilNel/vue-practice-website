import "./style.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import { useAnalytics } from "./composables/useAnalytics";

const app = createApp(App);

const { initialize } = useAnalytics();
initialize();

app.use(createPinia());
app.use(router);

app.mount('#app');
