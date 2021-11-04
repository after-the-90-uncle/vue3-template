import { createApp } from 'vue'
import store from './store'
import routes from "./routes";
import App from "./App";
import alertTips from "./plugins/alertTips";
import dialog from "./plugins/dialog";

const app = createApp(App).use(routes).use(store);

app.config.globalProperties.$zrzb = {
	alertTips,
	dialog
}

app.mount('#app')