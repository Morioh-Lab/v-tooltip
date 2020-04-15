# Tooltip directive for Vue.js (without jQuery or Javascript Framework min 7 Kb)

☞ [What's new in Bootstrap 5](https://morioh.com/p/46e9af3b9b04)

☞ [Vue.JS Tutorial: Learn Vue.js from Scratch](https://morioh.com/list/5dd27fc107964607af718993)

☞ [Javascript Tutorial for Absolute Beginners](https://morioh.com/list/5dcd0341203e265d661aa028)


### Demo

☞ [v-tooltip demo](https://morioh-lab.github.io/v-tooltip/dist/www/)


### Install

```
npm install @morioh/v-tooltip
```

```js
import '@morioh/v-tooltip/dist/v-tooltip.css';

import Vue from 'vue'
import Tooltip from '@morioh/v-tooltip'

// global register
Vue.use(Tooltip);

```

```html
<h5>Hover</h5>

<div class="form-group">

    <button type="button" class="btn btn-primary"
        v-tooltip="{ when:'hover', placement: 'top', content: 'Html content'}">Top</button>


    <button type="button" class="btn btn-primary"
        v-tooltip="{ when:'hover', placement: 'bottom', content: 'Html content'}">Bottom</button>

    <button type="button" class="btn btn-primary"
        v-tooltip="{ when:'hover', placement: 'left', content: 'Html content'}">Left</button>

    <button type="button" class="btn btn-primary"
        v-tooltip="{ when:'hover', placement: 'right', content: 'Html content'}">Right</button>

</div>

<h5>Click</h5>

<div class="form-group">

    <button type="button" class="btn btn-primary"
        v-tooltip="{ when: 'click', placement: 'top', content: 'Html content'}">Top</button>


    <button type="button" class="btn btn-primary"
        v-tooltip="{ when: 'click', placement: 'bottom', content: 'Html content'}">Bottom</button>

    <button type="button" class="btn btn-primary"
        v-tooltip="{ when: 'click', placement: 'left', content: 'Html content'}">Left</button>

    <button type="button" class="btn btn-primary"
        v-tooltip="{ when: 'click', placement: 'right', content: 'Html content'}">Right</button>

</div>

<h5>Focus</h5>

<div class="row">
    <div class="col-3">
        <div class="form-group">
            <input type="text" id="i-top" class="form-control"
                v-tooltip="{ when: 'focus', placement: 'top', content: 'Html content top'}">
        </div>
    </div>

    <div class="col-3">
        <div class="form-group">
            <input type="text" id="i-bottom" class="form-control"
                v-tooltip="{ when: 'focus', placement: 'bottom', content: 'Html content bottom'}">
        </div>
    </div>
    <div class="col-3">
        <div class="form-group">
            <input type="text" id="i-left" class="form-control"
                v-tooltip="{ when: 'focus', placement: 'left', content: 'Html content left'}">
        </div>
    </div>

    <div class="col-3">
        <div class="form-group">
            <input type="text" id="i-right" class="form-control"
                v-tooltip="{ when: 'focus', placement: 'right', content: 'Html content right'}">
        </div>
    </div>
</div>
```

