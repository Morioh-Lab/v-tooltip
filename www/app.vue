<template>
    <div>
        <div class="container">

            <header>
                <h1>v-tooltip</h1>
                <h4>Tooltip directive for Vue.js</h4>
            </header>

            <div class="form-group">
                <button type="button" class="btn btn-primary btn-block"
                v-tooltip="{ when:'hover', placement: 'top', content: 'Html content'}">Top</button>
            </div>

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

            <div class="form-group">
                <input type="text" id="i-top" class="form-control"
                    v-tooltip="{ when: 'focus', placement: 'top', content: 'Html content top'}">
            </div>

            <div class="form-group">
                <input type="text" id="i-bottom" class="form-control"
                    v-tooltip="{ when: 'focus', placement: 'bottom', content: 'Html content bottom'}">
            </div>

            <div class="form-group">
                <input type="text" id="i-left" class="form-control"
                    v-tooltip="{ when: 'focus', placement: 'left', content: 'Html content left'}">
            </div>

            <div class="form-group">
                <input type="text" id="i-right" class="form-control"
                    v-tooltip="{ when: 'focus', placement: 'right', content: 'Html content right'}">
            </div>




        </div>


        <footer>

            <p>
                <a class="social-icon" href="https://github.com/nasa8x/v-tooltip" target="_blank">
                    <i class="fa-3x fab fa-github-square"></i>
                </a>

            </p>

            <p>Themed by <a href="http://on.morioh.net/96d5d36367" target="_blank">Morioh Theme</a><br>
                Made Love by <a href="https://morioh.com/@5c22e47440738156a7078a19">Nasa8x</a>

            </p>


        </footer>

    </div>
</template>


<script>

    export default {
        data() {
            return {
                option: {
                    content: 'Markdown Editor component for Vue.js',
                    placement: 'right'
                },
            }
        },

        methods: {
            val() {
                this.value = "jjkjlkjljlkjlkjlkjlkj"
            },

            change() {
                this.option.content = "Other content";
            },

            replace() {
                this.$refs.md.editor.replaceSelection("Handle editor");
            }
        },


        created() {
            this.$root.$on('tooltip:upload', function (md) {
                md.drawImage({ url: 'https://i.imgur.com/CbCXhBe.png', title: 'this image title' });
            });

        }


    }

</script>