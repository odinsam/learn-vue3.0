//引入的不在是vue的构造函数，而是一个名为createApp的工厂函数
import { createApp } from 'vue';
import App from './App.vue';

//createApp(app)创建应用实例对象app，类似vue2中的vm，但比vm更轻
createApp(App).mount('#app');
