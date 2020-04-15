

import './layout.css';
import '../dist/v-tooltip.css';

import Vue from 'vue';
import App from './app.vue';
import Tooltip from '../dist';

Vue.use(Tooltip);

new Vue({
  el: '#app', 
 
  render: h => h(App)
})
