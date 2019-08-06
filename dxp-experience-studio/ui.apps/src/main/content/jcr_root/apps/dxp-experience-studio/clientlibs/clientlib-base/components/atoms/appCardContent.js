var AppCardContent = Vue.component('app-card-content', {
    template: `<p :class="color + ' card__content'">{{ content }}</p>`,
    name: "AppCardContent",
    data() {
        return {}
    },
    props: {
        content:{
            type: String,
            default: ''
        },
        color:{
            type: String,
            default: 'white'
        }
    }
});
