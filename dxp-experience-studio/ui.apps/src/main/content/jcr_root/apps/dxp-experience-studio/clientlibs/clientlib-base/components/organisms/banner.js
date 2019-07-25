var banner = Vue.component('banner', {
  template: ` <div class>
  <div class="container-fluid fpbanner" ref="container" :style="{height:height + 'px'}" @mouseover="changeKeyFrames()">
    <div class="imgcontainer">
      <img
        :src="getImage(dataref.backgroundimage)"
        alt="banner"
        class="fpbanner__img"
        ref="fpbannerimg"
        :style="{height:height + 'px'}"
      />
    </div>
    <div class="row fpbanner__row">
      <div class="col-md-12" :class="dataref.textalign">
        <div class="fpbanner__container pos--rel">
          <h3 class="fpbanner--header f-3rem fromtopanim">
            <span class="fpbanner--text m10">{{dataref.headertext}}</span>
          </h3>
          <h2 class="fpbanner__subheader f-2rem frombottomanim">
            <span class="fpbanner__subheader--text m10">{{dataref.subheadertext}}</span>
          </h2>
        </div>
      </div>
    </div>
  </div>
</div>`,
  data() {
    return {
      height: window.innerHeight
    };
  },
  props: {
    dataref: {
      type: Object,
      required: true
    }
  },
  mounted() {
    //this.changeKeyFrames();
    this.zoomInOut(true, 500);
    //this.startTiltEffect();
  },
  methods: {
    getImage(img) {
      return img;
    },
    startTiltEffect() {
      var counter = 10;
      var timer = setInterval(() => {
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
          clearInterval(timer);
          inner = this.$refs.fpbannerimg;
          toggleSwitch = true;
          inner.style.transition = '';
          inner.style.transform = '';
          inner.style.webkitTransform = '';
          inner.style.mozTranform = '';
          inner.style.msTransform = '';
          inner.style.oTransform = '';
        }
      }, 40);
    },
    infiniteTilt(x, y) {
      var container = this.$refs.container,
        inner = this.$refs.fpbannerimg;

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
        inner.style.transition = "transform .5s";
      };
      onMouseEnterHandler();
    },
    changeKeyFrames() {
      // Init
      var container = this.$refs.container,
        inner = this.$refs.fpbannerimg;

      // Mouse
      var mouse = {
        _x: 0,
        _y: 0,
        x: 0,
        y: 0,
        updatePosition: function (event) {
          var e = event || window.event;
          this.x = e.clientX - this._x;
          this.y = (e.clientY - this._y) * -1;
        },
        setOrigin: function (e) {
          this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
          this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
        },
        show: function () {
          return "(" + this.x + ", " + this.y + ")";
        }
      };

      // Track the mouse position relative to the center of the container.
      mouse.setOrigin(container);

      //----------------------------------------------------

      var counter = 0;
      var refreshRate = 10;
      var isTimeToUpdate = function () {
        return counter++ % refreshRate === 0;
      };

      //----------------------------------------------------

      var onMouseEnterHandler = function (event) {
        update(event);
      };

      var onMouseLeaveHandler = function () {
        //inner.style = "";
      };

      var onMouseMoveHandler = function (event) {
        if (isTimeToUpdate()) {
          update(event);
        }
      };

      //----------------------------------------------------

      var update = function (event) {
        mouse.updatePosition(event);
        updateTransformStyle(
          (mouse.y / inner.offsetHeight / 2).toFixed(2),
          (mouse.x / inner.offsetWidth / 2).toFixed(2)
        );
      };

      var updateTransformStyle = function (x, y) {
        var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
        inner.style.transform = style;
        inner.style.webkitTransform = style;
        inner.style.mozTranform = style;
        inner.style.msTransform = style;
        inner.style.oTransform = style;
        inner.style.webkitTransition = "-webkit-transform .5s !important";
        inner.style.transition = "-webkit-transform .5s !important";
        inner.style.transition = "transform .5s !important";
        inner.style.transition = "transform .5s,-webkit-transform .5s !important";
      };

      //--------------------------------------------------------
      if (this.dataref.istilt) {
        container.onmousemove = onMouseMoveHandler;
        container.onmouseleave = onMouseLeaveHandler;
        container.onmouseenter = onMouseEnterHandler;
      } else {
        container.onmousemove = "";
        container.onmouseleave = "";
        container.onmouseenter = "";
      }
    },
    zoomSpeedChange() {
      if (this.dataref.iszoompanorama) {
        var zoomS = "zoom-speed-one";
        if (this.dataref.zoomspeed == 2) {
          zoomS = "zoom-speed-two";
        } else if (this.dataref.zoomspeed == 3) {
          zoomS = "zoom-speed-three";
        } else if (this.dataref.zoomspeed == 4) {
          zoomS = "zoom-speed-four";
        } else if (this.dataref.zoomspeed == 5) {
          zoomS = "zoom-speed-five";
        }
        this.zoomInOut();
        this.$refs.fpbannerimg.classList.remove("zoom-speed-one");
        this.$refs.fpbannerimg.classList.remove("zoom-speed-two");
        this.$refs.fpbannerimg.classList.remove("zoom-speed-three");
        this.$refs.fpbannerimg.classList.remove("zoom-speed-four");
        this.$refs.fpbannerimg.classList.remove("zoom-speed-five");
        this.$refs.fpbannerimg.classList.add(zoomS);
      }
    },
    zoomInOut(isFirst) {
      inner = this.$refs.fpbannerimg;
      var toggleSwitch = false;
      // if (this.dataref.istilt) {
      //   toggleSwitch = true;
      //   inner.style.transition = '';
      //   inner.style.transform = '';
      //   inner.style.webkitTransform = '';
      //   inner.style.mozTranform = '';
      //   inner.style.msTransform = '';
      //   inner.style.oTransform = '';
      //   this.dataref.istilt = false;
      //   this.startTiltEffect();
      // }
      if (this.dataref.iszoompanorama) {
        var zoom = "zoom-effect";
        // if (this.dataref.zoomrange == 1.2) {
        //   zoom = "zoom-effect";
        // } else if (this.dataref.zoomrange == 1.4) {
        //   zoom = "zoom-effect_steptwo";
        // } else if (this.dataref.zoomrange == 1.6) {
        //   zoom = "zoom-effect_stepthree";
        // }
        this.$refs.fpbannerimg.classList.remove("zoom-outeffect");
        this.$refs.fpbannerimg.classList.remove("zoom-effect");
        this.$refs.fpbannerimg.classList.remove("zoom-effect_steptwo");
        this.$refs.fpbannerimg.classList.remove("zoom-effect_stepthree");
        setTimeout(() => {
          this.$refs.fpbannerimg.classList.add(zoom);
        }, 500);
        setTimeout(() => {
          this.$refs.fpbannerimg.classList.add("zoom-outeffect");
          this.$refs.fpbannerimg.classList.remove(zoom);
          setTimeout(() => {
            if (toggleSwitch) {
              this.dataref.istilt = true;
              //this.startTiltEffect();
            }
          }, 1000);
        }, 11000);
        setTimeout(() => {
          this.$refs.fpbannerimg.classList.remove("zoom-outeffect");

        }, 18000);
        // setTimeout(() => {
        //   this.$refs.fpbannerimg.classList.remove("zoom-outeffect");
        // }, this.dataref.zoomspeed * this.dataref.zoomrange * 5000);
      }

      setTimeout(() => {
        if (isFirst && !this.dataref.iszoompanorama) {
          if (true) {
            this.setIntervalAnimationZero(-25, false, true, 30);
          }
          setTimeout(() => {
            //this.startTiltEffect();
          }, this.dataref.panoramaspeed * 2);
        }
      }, 500);
    },
    setIntervalAnimationZero(count, isFirstInt, isSecondInt, speed) {
      if (!this.dataref.iszoompanorama) {
        var counter = count;
        var timer = "";
        var timer = setInterval(() => {
          var tiltbanner = this.$refs.fpbannerimg;
          counter = counter - 0.04;
          if (Math.round(counter) == -49) {
            // counter--;
            // if (counter == -49) {
            clearInterval(timer);
            if (isSecondInt) {
              this.setIntervalAnimation(counter, false, true, speed);
            }
          }
          tiltbanner.style.left = counter + "%";
        }, speed);
      }
    },
    setIntervalAnimation(count, isFirstInt, isSecondInt, speed) {
      var counter = count;
      var timer = "";
      var timer = setInterval(() => {
        var tiltbanner = this.$refs.fpbannerimg;
        counter = counter + 0.04;
        if (Math.round(counter) == -25) {
          // counter++;
          // if (counter == -25) {
          clearInterval(timer);
          if (isFirstInt) {
            this.setIntervalAnimationZero(counter, false, false, speed);
          }
        }
        tiltbanner.style.left = counter + "%";
      }, speed);
    }
  }
});







