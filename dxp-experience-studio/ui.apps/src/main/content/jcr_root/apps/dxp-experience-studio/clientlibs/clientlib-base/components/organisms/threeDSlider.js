var threeDSlider = Vue.component('threeDSlider', {
    template: `<div :class="'threedslider card_3d_voice ' + dataref.type">
        <carousel-3d :height="height" :count="dataref.cards.length" :width="width" :display="display" @before-slide-change="onBeforeSlideChange" :perspective="perspective" :inverse-scaling="0" :space="space">
        <!-- slides -->
        <slide v-for="(card, index) of dataref.cards" :key="'slider'+index" :index="index">
            <div :class="'mycard ' + dataref.variation">
                <img class="card__image" :src="getImage(card.image)" alt="Card Image">
                <div class="card__overlay">
                    <div class="card__container">
                        <AppCardTitle :title="card.title" />
                        <AppCardContent :content="card.description"/>
                    </div>
                </div>
            </div>
        </slide>
    </carousel-3d>
    </div>`,
    name: "threeDSlider",
    data() {
        return {
            width: 870,
            perspective: 0,
            currentIndexDot: 1
        };
    },
    props: {
        dataref: {
            type: Object,
            required: true
        }
    },
    watch: {
    },
    components: {
        'carousel-3d': carousel3d,
        'slide': slide3d,
        AppCardTitle,
        AppCardContent
    },
    computed: {
        height() {
            return window.innerWidth >= 767 ? 660 : 200;
        },
        space() {
            return window.innerWidth >= 767 ? 100 : 40;
        },
        display() {
            return window.innerWidth >= 767 ? 5 : 3;
        }
    },
    methods: {
        getImage(img) {
            return img;
        },
        onBeforeSlideChange(index) {
            this.currentIndexDot = index;
        }
    }
});
