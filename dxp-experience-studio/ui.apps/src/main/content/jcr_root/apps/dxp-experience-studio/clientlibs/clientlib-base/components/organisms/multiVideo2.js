const multivideo2 = Vue.component('multivideo2', {
  template: `
  <div class="video-carousel">
    
    <div class="single-video-container">
      <img
        id="play-icon-full-video-slick"
        ref="play-icon-full-video-slick"
        class="play-icon"
        @click="playVideoOnClick()"
        src="./img/play.svg"
      />
      <video
        id="full-video-slick"
        ref="full-video-slick"
        width="100%"
        @click="!paused ? playVideoOnClick() : null"
        loop
      >
        <source :src="dataref[0].src" type="video/mp4" />
      </video>
      <div ref="full-video-bg-gradient-slick" class="full-video-bg-gradient"></div>
      <div ref="caption-slick" :class="'caption ' + dataref[0].textalign">
        <h1>{{dataref[0].title}}</h1>
        <p>{{dataref[0].description}}</p>
      </div>
    </div>

    <div class="carousel-thumbs-slick">
      <div class="carousel-thumb-slick" v-for="(item, index) in dataref" :key="index"
      @mouseover="thumbSnippet(index, true)"
      @mouseleave="thumbSnippet(index, false)"
      @click="playInMainVideo(index)"
      >
        <video :id="'slick-video-thumb-' + index" loop muted>
          <source :src="item.src + '#t=0,5'" type="video/mp4" />
        </video>
        <div class="thumb-bg-gradient">
          <div class="thumb-caption">
            <h1 class="heading">{{item.title}}</h1>
            <p>{{item.description}}</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  `,

  data() {
    return {
      paused: true
    };
  },
  props: {
    dataref: {
      type: Array,
      required: true
    }
  },
  mounted() {
    $(".carousel-thumbs-slick").slick({
      arrows: true,
      infinite: false,
      variableWidth: true,
      speed: 500
    });
  },
  methods: {
    getImage(img) {
      return img;
    },
    playVideoOnClick() {
      var video = this.$refs["full-video-slick"];
      var image = this.$refs["play-icon-full-video-slick"];
      
      var bgGradient = this.$refs["full-video-bg-gradient-slick"];
      var caption = this.$refs["caption-slick"];
      // var caption = document.querySelector(".caption");
      if (this.paused) {
        video.play();
        video.controls = true;
        image.style = bgGradient.style = caption.style = "opacity: 0;";
        setTimeout(() => {
          bgGradient.style.display = "none";
        }, 300);
      } else {
        video.pause();
        video.controls = false;
        image.style = bgGradient.style = caption.style = "opacity: 1;";
        setTimeout(() => {
          bgGradient.style.display = "block";
        }, 300);
      }
      this.paused = !this.paused;
    },
    thumbSnippet(index, play) {
      var video = document.getElementById("slick-video-thumb-" + index);
      if (play) {
          video.play();
      } else {
          video.pause();
      }
    },
    playInMainVideo(index) {
      var video = document.getElementById('full-video-slick');
      var isVideoPaused = video.paused;

      var sources = video.getElementsByTagName('source');

      sources[0].src = "http://techslides.com/demos/sample-videos/small.mp4"
      video.load();

      if( isVideoPaused ) {
        video.onloadeddata = function() {
          document.getElementById('play-icon-full-video-slick').click();
        };
      } else {
        video.onloadeddata = function() {
          video.play();
        }
      }
    }
  }
});

