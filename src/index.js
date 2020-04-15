

import './tooltip.css';
import Tooltip from './tooltip.js';

var __install = function (Vue) {
    Vue.directive('tooltip', {
        bind(el, binding, vnode) {
            if (!el.$tooltip) {
                el.$tooltip = new Tooltip(el, binding.value || {});
            }
        },
        unbind(el) {
            if (el.$tooltip) {
                el.$tooltip.dispose();
                delete el.$tooltip;
            }
        }
    });
}


if (typeof window !== 'undefined' && window.Vue) {
    Vue.use(__install);
}

Tooltip.install = __install;

export default Tooltip;