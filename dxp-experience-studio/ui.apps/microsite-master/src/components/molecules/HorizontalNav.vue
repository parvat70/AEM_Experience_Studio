<script>
import AppLogo from '../atoms/AppLogo.vue'
import AppLink from '../atoms/AppLink.vue'
export default {
    name: "HorizontalNav",
    props:{
        links: Array
    },
    render: function (createElement) {
           if (this.links.length) {
               return createElement('ul', this.links.map(function (links) {
                    return createElement('li', links.label)
                }))
           }
    }
}
</script>

