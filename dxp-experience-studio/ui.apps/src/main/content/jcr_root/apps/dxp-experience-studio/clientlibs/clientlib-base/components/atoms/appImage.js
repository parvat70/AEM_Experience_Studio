const AppImage = Vue.component("app-image", {
    name: 'AppImage',
    template: `<img :src="src" :class="className" v-if="src" :alt="altText" :id="imgId"/>`,
    data() {
        return {};
    },
    props: {
        src: String,
        className: String,
        altText: String,
        imgId: String
    }
});