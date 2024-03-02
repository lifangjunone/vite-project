import { createApp } from "vue";
import "./style.css";

import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";
import "./assets/fonts/iconfont.css"
import router from "./routers/router";
import { vuexStore } from "./storage/vuexs";

const app = createApp(App);

app.use(Antd);
app.use(router);
app.use(vuexStore);
app.mount("#app");
