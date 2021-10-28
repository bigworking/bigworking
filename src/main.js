import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Select } from 'element-ui';
import VueQuillEditor from 'vue-quill-editor'
import * as echarts from 'echarts'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import VeRing from 'v-charts/lib/ring.common'
// import axios from 'axios'
// import * as http from '@/utils/http.js'
// import * as api from '@/utils/api.js'
// import http from '@/utils/http.js'
// import api from '@/utils/api'
import ElementUI from 'element-ui'
// import axios from "axios";
// import VueResource from 'vue-resource'

// Vue.use(VueResource);
// import VueAxios from "vue-axios";
// Vue.use(VueAxios,axios)

// Vue.prototype.axios = axios;

// Vue.prototype.$http=http
// Vue.prototype.$api=api
Vue.component(VeRing.name, VeRing)
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts 

Vue.use(VueQuillEditor);

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);

Vue.config.productionTip = false

// axios.defaults.headers.common['Authorization'] = sessionStorage.getItem('Authorization')

new Vue({
  router,
  // store,
  render: h => h(App),
}).$mount('#app')
