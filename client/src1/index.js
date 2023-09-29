import { createApp } from 'vue';
import store from 'src1/store';
import App from '@/App.vue';
import '@/assets/styles/main.scss';

const app = createApp(App);
app.use(store);

app.mount('#app');
