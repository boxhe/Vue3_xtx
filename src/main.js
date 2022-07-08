import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//自定义的ui组件库
import ui from './components/library'

//1.重置样式的库
import 'normalize.css';
//2.自己项目设置的样式和公用样式
import '@/assets/styles/common.less';

createApp(App).use(store).use(router).use(ui).mount('#app')