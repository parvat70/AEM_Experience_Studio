const AppInput = Vue.component("app-input", {
    name: 'AppInput',
    template: `<input :type="typeText" :class="input_shape" :placeholder="placeholder" :value="textValue">`,
    props: {
        typeText: {
            type: String,
            default: 'text'
        },
        input_shape: String,
        placeholder: String,
        textValue: String
    }
});