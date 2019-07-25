const partners = Vue.component('partners', {
    template: `<div class="row m-0">
    <div class="col-12 col-md-12 col-lg-4 side-banner " >
        <img :src="getImage(dataref.backgroundImage)" class="img-responsive d-none d-lg-block " alt="">        
        <div class="content">
            <h1>{{dataref.title}}</h1>
            <p>{{dataref.content}}</p>
        </div>            
    </div>
    <div class="col-12 col-md-12 col-lg-8">
        <div class="row ">
            <div class="col-6 col-sm-6 col-md-4 partner-logo " v-for="(value, index) of dataref.partners">
                <img :src="getImage(value.image)" :alt="value.name">
            </div>
        </div>
    </div>
</div>`,
    name: "partners",
    data() {
        return {};
    },
    props: {
        dataref: {
            type: Object,
            required: true
        }
    },
    methods: {
        getImage(img) {
            return img;
        }
    }
});
