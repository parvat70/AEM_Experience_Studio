var gridvideo = Vue.component('gridvideo', {
  template: ` <div class="grid-video-container" @click="playVideoOnClick()">
  <div class="video-wrapper">
<img ref="play-icon-full-video"
  class="play-icon"
  @click="playVideoOnClick()"
  src="./img/play.png"
/>
<video
  id="full-video"
  ref="full-video"
  width="100%"
  @click="!paused ? playVideoOnClick() : null"
  loop
>
  <source :src="dataref.src" type="video/mp4" />
</video>
</div>
<div class="full-video-bg-gradient"></div>
<div  :class="'caption ' + dataref.textalign">
  <h1>{{dataref.title}}</h1>
  <p>{{dataref.description}}</p>
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
    // hideVideoIcon() {
    //   var image = this.$refs["play-icon-full-video"];
    //   image.style.display = "none";
    // },
    // showVideoIcon() {
    //   var image = this.$refs["play-icon-full-video"];
    //   image.style.display = "block";
    // },
    playVideoOnClick() {
      var video = this.$refs["full-video"];
      var image = this.$refs["play-icon-full-video"];
      var bgGradient = document.querySelector(".full-video-bg-gradient");
      var caption = document.querySelector(".caption");
      if (this.paused) {
        video.play();
        video.controls = true;
        //image.style = bgGradient.style = caption.style = "opacity: 0;";
        setTimeout(() => {
          //bgGradient.style.display = "none";
        }, 300);
      } else {
        video.pause();
        video.controls = false;
        //image.style = bgGradient.style = caption.style = "opacity: 1;";
        setTimeout(() => {
          //bgGradient.style.display = "block";
        }, 300);
      }
      this.paused = !this.paused;
    }

  }
});







