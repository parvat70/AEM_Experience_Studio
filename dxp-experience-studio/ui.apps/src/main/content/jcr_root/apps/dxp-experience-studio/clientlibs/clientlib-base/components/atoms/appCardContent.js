const AppCardContent = Vue.component('app-card-content', {
    template: `<p :class="color + ' card__content'">{{ content }}</p>`,
    name: "AppCardContent",
    data() {
        return {}
    },
    props: {
        content:{
            type: String,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        color:{
            type: String,
            default: 'white'
        }
    }
});
