var multivideo = Vue.component('multivideo', {
  template: `
  <div class="video-carousel video_carousel_voice">
    
    <div class="single-video-container">
      <img
        id="play-icon-full-video-slick"
        ref="play-icon-full-video-slick"
        class="play-icon"
        @click="playVideoOnClick()"
        src="/apps/dxp-experience-studio/clientlibs/clientlib-base/resources/img/play.png"
      />
      <video
        class="single-video"
        id="full-video-slick"
        ref="full-video-slick"
        width="100%"
        @click="!paused ? playVideoOnClick() : null"
        loop
      >
        <source :src="dataref[0].src + '#t=1'" type="video/mp4" />
      </video>
      <div ref="full-video-bg-gradient-slick" class="full-video-bg-gradient"></div>
      <div ref="caption-slick" :class="'caption ' + dataref[0].textalign" id="caption-slick">
        <h1>{{dataref[0].title}}</h1>
        <p>{{dataref[0].description}}</p>
      </div>
    </div>

    <div class="carousel-thumbs-slick">
      <div class="carousel-thumb-slick" v-for="(item, index) in dataref" :key="index"
      :data-src="item.src"
      :data-title="item.title"
      :data-description="item.description"
      onmouseover="thumbSnippet(this.getAttribute('data-slick-index'), true)"
      onmouseleave="thumbSnippet(this.getAttribute('data-slick-index'), false)"
      onclick="playInMainVideo(this.getAttribute('data-src'), this.getAttribute('data-title'), this.getAttribute('data-description'))"
      >
        <video class="single-video" :id="'slick-video-thumb-' + index" loop muted>
          <source :src="item.src + '#t=1'" type="video/mp4" />
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
      infinite: true,
      variableWidth: true,
      swipeToSlide: true,
    });

    document.querySelector('.slick-next').addEventListener('click', autoPlayOnSlide);
    document.querySelector('.slick-prev').addEventListener('click', autoPlayOnSlide);
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
    }
  }
});

function autoPlayOnSlide() {
  var currentActive = document.querySelector('.slick-current');
  playInMainVideo(currentActive.getAttribute('data-src'), currentActive.getAttribute('data-title'), currentActive.getAttribute('data-description'));
}

function playInMainVideo(src, title, description) {
  var video = document.getElementById('full-video-slick');
  var isVideoPaused = video.paused;

  var sources = video.getElementsByTagName('source');

  sources[0].src = src;
  video.load();

  var caption = document.querySelector("#caption-slick h1");
  caption.innerHTML = title;

  var desc = document.querySelector("#caption-slick p");
  desc.innerHTML = description;

  if (isVideoPaused) {
    video.onloadeddata = function () {
      document.getElementById('play-icon-full-video-slick').click();
    };
  } else {
    video.onloadeddata = function () {
      video.play();
    }
  }
}

function thumbSnippet(index, play) {
  var video = document.querySelector('[data-slick-index="' + index + '"] video');
  if (play) {
    video.play();
  } else {
    video.pause();
  }
}