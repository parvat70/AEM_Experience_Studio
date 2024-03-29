var AppCardTitle = Vue.component('app-card-title', {
    template: `<h1 :class="color + ' card__title'">{{ title }}</h1>`,
    name: "AppCardTitle",
    data() {
        return {}
    },
    props: {
        title:{
            type: String,
            default: ''
        },
        color:{
            type: String,
            default: 'white'
        }
    }
});
