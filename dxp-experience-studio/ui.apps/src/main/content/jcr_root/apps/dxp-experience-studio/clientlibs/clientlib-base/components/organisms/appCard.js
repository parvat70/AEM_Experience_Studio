var AppCard = Vue.component('app-card', {
    template: `<div class=" card_carousel_voice">
    <cardWithSlider :dataref="dataref" v-if="isSlider"/>
    <cardWithoutSlider :dataref="dataref" v-else/>
    </div>`,
    data() {
        return {
            isSlider: window.innerWidth >= 540 ? this.dataref.type < this.dataref.cards.length : this.dataref.cards.length > 2 
        }
    },
    name: "AppCard",
    props: {
        dataref: {
            type: Object,
            required: true
        }
    },
    components: {
        cardWithSlider,
        cardWithoutSlider
    }
});
