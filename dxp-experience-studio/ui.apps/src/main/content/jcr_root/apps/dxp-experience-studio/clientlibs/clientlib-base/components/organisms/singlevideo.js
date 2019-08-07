var singlevideo = Vue.component('singlevideo', {
  template: ` <div class="single-video-container single_video_voice">
    <img
      id="play-icon-full-video"
      ref="play-icon-full-video"
      class="play-icon"
      @click="playVideoOnClick()"
      src="/apps/dxp-experience-studio/clientlibs/clientlib-base/resources/img/play.png"
    />
    <video
      class="single-video"
      id="full-video"
      ref="full-video"
      width="100%"
      @click="!paused ? playVideoOnClick() : null"
      loop
    controls
    >
      <source :src="dataref.src + '#t=1'" type="video/mp4" />
    </video>
    <div class="full-video-bg-gradient">
      <div  :class="'caption ' + dataref.textalign">
        <h1>{{dataref.title}}</h1>
        <p>{{dataref.description}}</p>
      </div>
    </div>
  </div>`,

  data() {
    return {
      paused: true
    };
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
    },
    playVideoOnClick() {
      var video = this.$refs["full-video"];
      var image = this.$refs["play-icon-full-video"];
      var bgGradient = document.querySelector(".full-video-bg-gradient");
      if (this.paused) {
        video.play();
        image.style = bgGradient.style = "opacity: 0;";
        setTimeout(() => {
          image.style.display = bgGradient.style.display = "none";
          video.controls = true;
        }, 300);
      } else {
        video.pause();
        video.controls = false;
        image.style = bgGradient.style = "opacity: 1;";
        setTimeout(() => {
          image.style.display = bgGradient.style.display = "block";
        }, 300);
      }
      this.paused = !this.paused;
    }

  }
});