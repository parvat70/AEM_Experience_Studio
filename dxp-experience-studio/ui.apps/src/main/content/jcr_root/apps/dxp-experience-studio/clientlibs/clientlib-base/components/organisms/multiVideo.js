 Vue.use(window.VueAwesomeSwiper);
var multivideo = Vue.component("multivideo", {
    template: `<div class="multi-video-container">
    <!-- swiper Main -->
    <swiper :options="swiperOptionTop" class="gallery-top" ref="swiperTop">
      <swiper-slide v-for="(item, index) in dataref" :key="index">
        <img
          :id="'play-icon-' + index"
          class="play-icon"
          @click="playVideoOnClick(index)"
          src="/apps/dxp-experience-studio/clientlibs/clientlib-base/img/play.svg"
        />
        <video
          :id="'video-fluid-' + index"
          class="video-fluid fullVideo"
          width="100%"
          @click="!paused ? playVideoOnClick(index) : null"
          loop
        >
          <source :src="item.src" type="video/mp4" />
        </video>
        <div class="bg-gradient">
            <div :class="'caption ' + item.textalign">
                <h1>{{item.title}}</h1>
                <p>{{item.description}}</p>
            </div>
        </div>
      </swiper-slide>
    </swiper>

    <!-- swiper Thumbs -->
    <swiper :options="swiperOptionThumbs" class="gallery-thumbs" ref="swiperThumbs">
      <swiper-slide v-for="(item, index) in dataref" v-bind:key="index">
        <video :id="'video-thumb-' + index" class="video-fluid" loop muted>
          <source :src="item.src + '#t=0,5'" type="video/mp4" />
        </video>
        <div :id="'bg-gradient-' + index" class="bg-gradient" @mouseover="playSnippetOnOver(index, true)" @mouseleave="playSnippetOnOver(index, false)">
            <div class="caption">
                <h1 class="heading">{{item.title}}</h1>
                <p>{{item.description}}</p>
            </div>
        </div>
      </swiper-slide>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
    </swiper>
  </div>`,
    props: {
        dataref: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            swiperOptionTop: {
                spaceBetween: 0,
                loop: false,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                },
                on: {
                    slideChangeTransitionStart() {
                        var video = document.getElementById(
                            "video-fluid-" + (this.previousIndex ? this.previousIndex : 0)
                        );
                        const isVideoPlaying = video =>
                            !!(
                                video.currentTime > 0 &&
                                !video.paused &&
                                !video.ended &&
                                video.readyState > 2
                            );
                        if (isVideoPlaying) {
                            video.click();
                        }
                    }
                }
            },
            swiperOptionThumbs: {
                spaceBetween: 6,
                slidesPerView: 6,
                touchRatio: 0.2,
                loop: false,
                slideToClickedSlide: true,
                centeredSlides: true,
                breakpointsInverse: true,
                breakpoints: {
                    414: {
                        slidesPerView: 2
                    },
                    768: {
                        slidesPerView: 3
                    },
                    1200: {
                        slidesPerView: 6
                    }
                },
                on: {
                    slideChangeTransitionStart() {
                        var video = document.getElementById(
                            "video-fluid-" + (this.previousIndex ? this.previousIndex : 0)
                        );
                        const isVideoPlaying = video =>
                            !!(
                                video.currentTime > 0 &&
                                !video.paused &&
                                !video.ended &&
                                video.readyState > 2
                            );
                        if (isVideoPlaying) {
                            video.click();
                        }
                    }
                }
            },
            paused: true,
            lastIndex: -1,
            picked: "left"
        };
    },
    mounted() {
        this.$nextTick(() => {
            var galleryTop = new Swiper(".gallery-top", this.swiperOptionTop);
            var galleryThumbs = new Swiper(
                ".gallery-thumbs",
                this.swiperOptionThumbs
            );
            galleryTop.controller.control = galleryThumbs;
            galleryThumbs.controller.control = galleryTop;
        });
    },
    methods: {
        playVideoOnClick(index) {
            var video, image, gradient;
            var thumbsGallery = document.querySelector(".gallery-thumbs");
            if (this.lastIndex > -1 && this.lastIndex !== index) {
                video = document.getElementById("video-fluid-" + this.lastIndex);
                image = document.getElementById("play-icon-" + this.lastIndex);
                gradient = document.querySelectorAll(".bg-gradient")[this.lastIndex];
                this.pause(video, image, thumbsGallery, gradient);
            }
            this.lastIndex = index;
            video = document.getElementById("video-fluid-" + index);
            image = document.getElementById("play-icon-" + index);
            gradient = document.querySelectorAll(".bg-gradient")[index];
            if (this.paused) {
                this.play(video, image, thumbsGallery, gradient);
            } else {
                this.pause(video, image, thumbsGallery, gradient);
            }
        },
        playSnippetOnOver(index, play) {
            var video = document.getElementById("video-thumb-" + index);
            var gradient = document.getElementById("bg-gradient-" + index);
            if (play) {
                video.play();
                gradient.style.opacity = '0';
            } else {
                video.pause();
                gradient.style.opacity = '1';
            }
        },
        play(video, image, thumbsGallery, gradient) {
            video.play();
            image.style = thumbsGallery.style = gradient.style = 'opacity: 0';
            setTimeout(() => {
                image.style.display = thumbsGallery.style.display = gradient.style.display = 'none';
                video.controls = true;
            }, 500);
            this.paused = false;
        },
        pause(video, image, thumbsGallery, gradient) {
            video.pause();
            video.controls = false;
            image.style = thumbsGallery.style = gradient.style = 'opacity: 1';
            setTimeout(() => {
                image.style.display = thumbsGallery.style.display = gradient.style.display = 'block';
            }, 500);
            this.paused = true;
        }
    }
});