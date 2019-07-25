const AppCard = Vue.component('app-card', {
    template: `<div>
    <cardWithSlider :dataref="dataref" v-if="dataref.type !=dataref.cards.length"/>
    <cardWithoutSlider :dataref="dataref" v-else/>
    </div>`,
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
