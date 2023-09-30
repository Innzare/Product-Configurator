import { createApp } from 'vue';
import Notifications from '@kyvg/vue3-notification';
import App from '@/App.vue';
import store from '@/store';
import router from '@/routes';
import '@/assets/styles/main.scss';

const app = createApp(App);
app.use(Notifications);
app.use(store);
app.use(router);

app.mount('#app');
