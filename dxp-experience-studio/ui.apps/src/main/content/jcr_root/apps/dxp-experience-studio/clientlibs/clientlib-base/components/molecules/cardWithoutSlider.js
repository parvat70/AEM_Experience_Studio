var cardWithoutSlider = Vue.component('cardWithoutSlider', {
    template: `<div :class="'appcard ' + dataref.variation">
    <div :class="'mycard ' + dataref.variation" v-for="(value, index) of dataref.cards">
                    <img class="card__image" :src="getImage(value.image)" alt="Card Image">
                    <div class="card__overlay">
                        <div class="card__container">
                            <AppCardTitle :title="value.title" />
                            <AppCardContent :content="value.description"/>
                        </div>
                    </div>
                </div>
                </div>`,
    name: "cardWithoutSlider",
    data() {
        return {};
    },
    props: {
        dataref: {
            type: Object,
            required: true
        }
    },
    components: {
        AppCardTitle,
        AppCardContent
    },
    methods: {
        getImage(img) {
            return img;
        }
    }
});
