var controls = Vue.component('controls', {
    name: 'controls',
    template: `<div class="carousel-3d-controls">
        <a href="#" class="prev" @click.prevent="parent.goPrev()"
           :class="{ disabled: !parent.isPrevPossible }"
           :style="width: {{width}}px; height: {{height}}px; line-height: {{height}}px;">
            <span v-html="prevHtml"></span>
        </a>
        <a href="#" class="next" @click.prevent="parent.goNext()"
           :class="{ disabled: !parent.isNextPossible }"
           :style="width: {{width}}px; height: {{height}}px; line-height: {{height}}px;">
            <span v-html="nextHtml"></span>
        </a>
    </div>`,
    props: {
        /**
         * Width in pixels of the navigation buttons
         */
        width: {
            type: [String, Number],
            default: 50
        },
        /**
         * Height in pixels of the navigation buttons
         */
        height: {
            type: [String, Number],
            default: 60
        },
        /**
         * Text content of the navigation prev button
         */
        prevHtml: {
            type: String,
            default: '&lsaquo;'
        },
        /**
         * Text content of the navigation next button
         */
        nextHtml: {
            type: String,
            default: '&rsaquo;'
        }
    },
    data() {
        return {
            parent: this.$parent
        }
    }
})

