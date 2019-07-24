<template>
  <div class="sliderBanner">
    <table>
      <thead>
        <tr>
          <th colspan="3" class="herotitle">Hero Banner</th>
        </tr>
        <tr>
          <th>Zoom</th>
          <th>
            <input type="range" name="points" min="1" max="10" v-model="animationTime" />
          </th>
          <th>{{animationTime}}</th>
        </tr>
        <tr>
          <th>Angle Tilt:</th>
          <th>
            <input
              type="range"
              name="points"
              min="0"
              max="50"
              v-model="angle"
              @change="changeKeyFrames()"
            />
          </th>
          <th>{{angle}}</th>
        </tr>
      </thead>
    </table>
    <b-carousel
      class="sliderBanner__carousel"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      no-animation
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide class="sliderBanner__carousel--item">
        <img src="../../assets/slides/slider_1.gif" slot="img" class="d-block img-fluid w-100" />
      </b-carousel-slide>

      <b-carousel-slide class="sliderBanner__carousel--item">
        <img src="../../assets/slides/slider_2.webp" slot="img" class="d-block img-fluid w-100" />
      </b-carousel-slide>

      <b-carousel-slide class="sliderBanner__carousel--item">
        <img src="../../assets/slides/slider_3.jpeg" slot="img" class="d-block img-fluid w-100" />
      </b-carousel-slide>

      <b-carousel-slide class="sliderBanner__carousel--item">
        <img src="../../assets/slides/slider_4.jpg" slot="img" class="d-block img-fluid w-100" />
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      currentSlide: 0,
      sliderTimer: undefined,
      angle: 20,
      animationTime: 3
    };
  },
  mounted() {
    this.resetSlider();
  },
  methods: {
    makeSlideAnimation(isNext) {
      if (isNext) {
        var cSlide = document.querySelectorAll(
          ".sliderBanner__carousel--item.active"
        )[0];

        cSlide.classList.add("zoomout--right");

        if (cSlide.nextSibling !== null) {
          cSlide.nextSibling.classList.add("zoomin--right");
        } else {
          document
            .querySelectorAll(".sliderBanner__carousel--item")[0]
            .classList.add("zoomin--right");
        }
      } else {
        var cSlide = document.querySelectorAll(
          ".sliderBanner__carousel--item.active"
        )[0];

        cSlide.classList.add("zoomout--left");

        if (cSlide.previousSibling !== null) {
          cSlide.previousSibling.classList.add("zoomin--left");
        } else {
          var domElements = document.querySelectorAll(
            ".sliderBanner__carousel--item"
          );
          domElements[domElements.length - 1].classList.add("zoomin--left");
        }
      }
    },
    onSlideStart(slide) {
      let clsObj = this;
      if (this.sliderTimer !== undefined) {
        clearTimeout(this.sliderTimer);
        clsObj.resetSlider();
      }
      var totalSlide = document.querySelectorAll(
        ".sliderBanner__carousel--item"
      ).length;
      this.sliding = true;
      var isNextBtn = true;

      if (totalSlide === this.currentSlide + 1 && slide === 0) {
        isNextBtn = true;
      } else if (this.currentSlide === 0 && slide === totalSlide - 1) {
        isNextBtn = false;
      } else if (slide >= this.currentSlide) {
        isNextBtn = true;
      } else {
        isNextBtn = false;
      }
      if (isNextBtn) {
        this.makeSlideAnimation(true);
      } else {
        this.makeSlideAnimation(false);
      }
      this.currentSlide = slide;
      this.zoomInOut(true);
      setTimeout(() => {
        this.zoomInOut(false);
      }, this.animationTime * 1000);
    },
    onSlideEnd(slide) {
      this.sliding = false;
      this.resetClassNames("tilteffectY");
      var cObj = this;

      this.sliderTimer = setTimeout(function() {
        cObj.resetSlider();
      }, 3000);
      this.zoomInOut(true);
      setTimeout(() => {
        this.zoomInOut(false);
      }, this.animationTime * 1000);
    },
    resetSlider() {
      var cObj = this;
      var cSlide = document
        .querySelectorAll(".sliderBanner__carousel--item.active")[0]
        .classList.add("tilteffectY");
      cObj.resetClassNames("zoomin--right");
      cObj.resetClassNames("zoomout--right");
      cObj.resetClassNames("zoomin--left");
      cObj.resetClassNames("zoomout--left");
    },
    resetClassNames(clsName) {
      var cls = document.querySelectorAll("." + clsName);
      if (cls !== null && cls.length !== 0) {
        for (var i = 0; i < cls.length; i++) {
          var dom = cls[i].classList.remove(clsName);
        }
      }
    },
    zoomInOut(flag) {
      console.log(flag);
      for (var i = 0; i < 4; i++) {
        document.querySelectorAll(".sliderBanner__carousel--item")[
          i
        ].style.animationDuration = flag == true ? this.animationTime : 3 + "s";
      }
    },
    changeKeyFrames() {
      var ss = document.styleSheets;
      for (var i = 0; i < ss.length; ++i) {
        for (var j = 0; j < ss[i].cssRules.length; ++j) {
          if (
            (ss[i].cssRules[j].type === window.CSSRule.KEYFRAMES_RULE ||
              ss[i].cssRules[j].type ===
                window.CSSRule.WEBKIT_KEYFRAMES_RULE) &&
            ss[i].cssRules[j].name == "tilteffectsanim"
          ) {
            var keyframes = ss[i].cssRules[j];
            keyframes.deleteRule("25%");
            keyframes.deleteRule("75%");
            keyframes.appendRule(
              "25% { -moz-transform: perspective(1200px) rotateY(" +
                this.angle +
                "deg); -webkit-transform: perspective(1200px) rotateY(" +
                this.angle +
                "deg); }"
            );
            keyframes.appendRule(
              "75% { -moz-transform:perspective(1200px) rotateY(-" +
                this.angle +
                "deg); -webkit-transform: perspective(1200px) rotateY(-" +
                this.angle +
                "deg); }"
            );
          }
        }
      }
    }
  }
};
</script>
