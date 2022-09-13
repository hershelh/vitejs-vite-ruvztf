import { createApp } from 'vue';
import App from './App.vue';
import { Form, Field, CellGroup } from 'vant';
import './style.css';

const app = createApp(App);
app.use(Form);
app.use(Field);
app.use(CellGroup);
app.mount('#app');
