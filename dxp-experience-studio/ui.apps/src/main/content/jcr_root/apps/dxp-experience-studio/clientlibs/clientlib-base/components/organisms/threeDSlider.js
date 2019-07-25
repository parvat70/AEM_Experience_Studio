const threeDSlider = Vue.component('threeDSlider', {
    template: `<div class="threedslider">
        <carousel-3d :height="height" :count="dataref.cards.length" :width="width" :display="5" @before-slide-change="onBeforeSlideChange" :perspective="perspective" :inverse-scaling="0" :space="100">
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
            return (this.dataref.cards.length * 30 / 2) + 535;
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
