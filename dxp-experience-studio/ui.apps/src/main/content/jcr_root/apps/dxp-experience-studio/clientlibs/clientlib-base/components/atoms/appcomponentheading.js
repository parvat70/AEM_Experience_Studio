var appcomponentheading = Vue.component('appcomponentheading', {
    template: `<div class="app__heading"><span class="app__headingtitle">{{ title }}</span><span class="app__headingdesc">{{ desc }}</span></div>`,
    name: "appcomponentheading",
    data() {
        return {}
    },
    props: {
        title:{
            type: String,
            default: ''
        },
        desc:{
            type: String,
            default: ''
        }
    }
});
