


const AppLink = Vue.component('app-link', {
    template: `<a
    v-if="isNewWindow"
    class="app-link"
    :href="path"
    target="_blank"
  >
    {{ label }}
  </a>
  <router-link
    v-else
    class="app-link"
    :to="path"
  >
    {{ label }}
  </router-link>`,
    name: "AppLink",
    data() {
        return {}
    },
    props: {
        label: String,
        path: String,
        isNewWindow: {
            type: Boolean,
            default: false
        }
    }
});