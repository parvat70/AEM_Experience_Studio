var cardWithSlider = Vue.component('cardWithSlider', {
    template: `<div :class="'slider ' + dataref.variation">
        <swiper ref="awesomeSwiper" :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(card, index) of dataref.cards" :key="'slider'+index">
            <div :class="'mycard ' + dataref.variation">
                <img class="card__image" :src="getImage(card.image)" alt="Card Image">
                <div class="card__overlay">
                    <div class="card__container">
                        <AppCardTitle :title="card.title" />
                        <AppCardContent :content="card.description"/>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
    </div>`,
    name: "cardWithSlider",
    data() {
        return {
        };
    },
    props: {
        dataref: {
            type: Object,
            required: true
        }
    },
    components: {
        AppCardTitle,
        AppCardContent
    },
    computed: {
        swiperOption() {
            return {
                slidesPerView: window.innerWidth >= 540 ? this.dataref.type : 2,
                spaceBetween: window.innerWidth >= 540 ? this.dataref.type == 2 ? 50 : 0 : 15,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            }
        }
    },
    methods: {
        getImage(img) {
            return img;
        }
    }
});
