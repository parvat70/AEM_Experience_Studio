var carousel = Vue.component("carousel", {
  template: `<div class="hsbanner" :class="'hsbanner'+dataref.textalign" ref="hsslidercontainer" @mouseover="showOverLay()" @mouseleave="hideOverLay()">
<b-carousel
  ref="hsbannersliderouter"
  class="hsbanner__carousel pos--rel"   
  :interval="0"
  controls
  indicators
  @sliding-start="onSlideStart"
  @sliding-end="onSlideEnd"
>
  <b-carousel-slide
    ref="hsbannercarousel"
    class="hsbanner--carousel--item h-100"
    v-for="sItem in dataref.sliders"
    
    :key="sItem.src"
    
  >
    <img :src="getImage(sItem.src)" slot="img" class="hsbanner__carouselimage d-block" ref="hsbannerimg" />
    <div class="hsbanner__carouselcontent" :class="dataref.textalign">
     
    <div class="col-md-12 ">
    <div class="hsbanner__container pos--rel">
    <div class="hsbanner__layer">
    <h3 class="hsbanner--header f-3rem">
    <span class="hsbanner--text m10">{{sItem.headertext!==undefined?sItem.headertext:""}}</span>
    </h3> 
    <h2 class="hsbanner__subheader f-2rem">
    <span class="hsbanner__subheader--text m10">
    {{sItem.subheadertext!==undefined?sItem.subheadertext:""}}
    </span>
    </h2>
    </div>
    </div>
    </div>
     
    </div>
  </b-carousel-slide>
</b-carousel>
</div>`,
  props: {
    dataref: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      timerInterval: undefined,
      timerTimeout: [],
      height: window.innerHeight,
      sliders: [{
          src: "img/slider_1.538aa6f7.gif",
          headertext: "Lorum",
          subheadertext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          src: "img/slider_2.99f0c13e.webp",
          headertext: "Lorum",
          subheadertext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          src: "img/slider_3.6b892c6d.jpeg",
          headertext: "Lorum",
          subheadertext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
          src: "img/slider_4.765bd3e5.jpg",
          headertext: "Lorum",
          subheadertext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }
      ],
    };
  },
  mounted() {
    var nextBtn = document.querySelectorAll(".hsbanner .carousel-control-next-icon")[0];
    nextBtn.classList.add("swiper-button-next");
    nextBtn.classList.add("swiper-button-white");
    var prevBtn = document.querySelectorAll(".hsbanner .carousel-control-prev-icon")[0];
    prevBtn.classList.add("swiper-button-prev");
    prevBtn.classList.add("swiper-button-white");
    this.setAlignText();

    this.zoomInOut();
    this.startTiltEffect();
  },

  methods: {

    setAlignText() {
      // console.log(document.querySelectorAll(".hsbanner__carousel .carousel-caption")[0]);
      // document.querySelectorAll(".hsbanner__carousel .carousel-caption")[0].classList.add(this.dataref.textalign);
    },
    showOverLay() {
      var overLay = document.querySelectorAll(".hsbanner__carousel .active .carousel-caption")[0];
      overLay.classList.add("overlay");
    },
    hideOverLay() {
      var overLay = document.querySelectorAll(".hsbanner__carousel .active .carousel-caption")[0];

      overLay.classList.remove("overlay");
    },
    onSlideStart() {
      this.setAlignText();
      var cSlide = this.getActiveSlide();
      cSlide.children[0].classList.remove("zoom-effect");
      cSlide.children[0].classList.remove("zoom-outeffect");
      if (this.timerInterval !== undefined) {
        window.clearInterval(this.timerInterval);
      }
    },
    onSlideEnd() {
      this.setAlignText();
      setTimeout(() => {
        this.zoomInOut();
        this.startTiltEffect();
      }, 500);
    },
    zoomInOut() {
      var zoom = "zoom-effect-one";
      if (this.dataref.zoomrange == 1.2) {
        zoom = "zoom-effect";
      } else if (this.dataref.zoomrange == 1.4) {
        zoom = "zoom-effect_steptwo";
      } else if (this.dataref.zoomrange == 1.6) {
        zoom = "zoom-effect_stepthree";
      }
      var cSlide = this.getActiveSlide().children[0];
      cSlide.classList.remove("zoom-outeffect");
      cSlide.classList.remove("zoom-effect");
      cSlide.classList.remove("zoom-effect_steptwo");
      cSlide.classList.remove("zoom-effect_stepthree");
      cSlide.classList.add(zoom);
      setTimeout(() => {
        cSlide.classList.add("zoom-outeffect");
        cSlide.classList.remove(zoom);
      }, this.dataref.zoomspeed * 1000);
      setTimeout(() => {
        cSlide.classList.remove("zoom-outeffect");
      }, 5000);
    },
    zoomSpeedChange() {
      var zoomS = "zoom-speed-five";
      if (this.zoomspeed == 4) {
        zoomS = "zoom-speed-two";
      } else if (this.dataref.zoomspeed == 3) {
        zoomS = "zoom-speed-three";
      } else if (this.dataref.zoomspeed == 2) {
        zoomS = "zoom-speed-four";
      } else if (this.dataref.zoomspeed == 5) {
        zoomS = "zoom-speed-one";
      }
      this.zoomInOut();
      var cSlide = this.getActiveSlide().children[0];
      cSlide.classList.remove("zoom-speed-one");
      cSlide.classList.remove("zoom-speed-two");
      cSlide.classList.remove("zoom-speed-three");
      cSlide.classList.remove("zoom-speed-four");
      cSlide.classList.remove("zoom-speed-five");
      cSlide.classList.add(zoomS);
    },
    infiniteTilt(x, y) {
      var container = this.$refs.hsslidercontainer,
        inner = this.getActiveSlide();
      var onMouseEnterHandler = function (event) {
        update(event);
      };
      var update = function () {
        updateTransformStyle(x, y);
      };
      var updateTransformStyle = function (x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTranform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
      };
      onMouseEnterHandler();
    },

    startTiltEffect() {
      var counter = 10;
      this.timerInterval = setInterval(() => {
        if (this.dataref.istilt) {
          counter++;
          if (counter == 20) {
            this.infiniteTilt(0.018, -0.17);
          } else if (counter == 40) {
            this.infiniteTilt(0.75, 0.17);
          } else if (counter == 60) {
            this.infiniteTilt(0.36, 0.16);
          } else if (counter == 80) {
            this.infiniteTilt(0.35, -0.17);
            counter = 20;
          }
        } else {
          window.clearInterval(this.timerInterval);
        }
      }, 40);
    },
    getActiveSlide() {
      var cSlide;
      for (var i in this.$refs.hsbannercarousel) {
        var cElements = this.$refs.hsbannercarousel[i].$el;
        if (cElements.classList.contains("active")) {
          cSlide = cElements;
          break;
        }
      }
      return cSlide;
    },
    getImage(img) {
      return img;
    }
  }
});