import { createApp } from "vue";
import App from "./App.vue";
import VueToastfication from "./VueToastfication";

import "./assets/main.scss";

const app = createApp(App);
app.use(VueToastfication, {
  config: {
    timeStamp: 5000,
  },
});

app.mount("#app");
