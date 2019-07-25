const AppButton = Vue.component("app-button", {
    name: 'AppButton',
    template: `<button :class="shape">
    {{label}}</button>`,
    props: {
        label: String,
        shape: {
            type: String,
            default: 'square'
        }
    }
});

