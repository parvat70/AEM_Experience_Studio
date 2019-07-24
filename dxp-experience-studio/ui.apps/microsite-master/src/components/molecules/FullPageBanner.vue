<template>
  <div class="fullpagebanner">
    <br />
    <table>
      <thead>
        <tr>
          <th colspan="3" class="herotitle">Hero Banner</th>
        </tr>
        <tr>
          <th>Zoom</th>
          <th>
            <input
              type="range"
              name="points"
              min="3.5"
              max="5.5"
              step="0.1"
              v-model="textscale"
              @change="zoomInOut()"
            />
          </th>
          <th>{{textscale}}</th>
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
        <tr>
          <th>Title and description:</th>
          <th colspan="2">
            <label>
              Left Text
              <input type="radio" id="one" value="aligncontentleft" v-model="picked" />
            </label>&nbsp;
            <label>
              right Text
              <input type="radio" id="two" value="aligncontentright" v-model="picked" />
            </label>
          </th>
        </tr>
      </thead>
    </table>
    <div class="container-fluid fpbanner">
      <div class="row">
        <div class="col-md-12 fpbanner__text" :class="picked">
          <div class="fpbanner__text--para pos--rel">
            <h3 class="fpbanner__heading f-3rem fromTopanim">
              <span class="fpbanner__heading--ptext paddLR5 m10">
                Lorem Ipsum
              </span>
            </h3>

            <h2 class="fpbanner__fpl2 f-2rem fromBottomanim">
              <span class="fpbanner__fpl2--fpl2text paddTB20 m10">
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      picked: "aligncontentleft",
      angle: 10,
      textscale: 3.5
    };
  },
  mounted() {
    this.changeKeyFrames();
  },
  methods: {
    changeKeyFrames() {
      var ss = document.styleSheets;
      for (var i = 0; i < ss.length; ++i) {
        for (var j = 0; j < ss[i].cssRules.length; ++j) {
          if (
            (ss[i].cssRules[j].type === window.CSSRule.KEYFRAMES_RULE ||
              ss[i].cssRules[j].type ===
                window.CSSRule.WEBKIT_KEYFRAMES_RULE) &&
            ss[i].cssRules[j].name == "fpBanner"
          ) {
            var keyframes = ss[i].cssRules[j];
            keyframes.deleteRule("50%");
            keyframes.deleteRule("75%");
            keyframes.appendRule(
              "50% { -moz-transform: perspective(1200px) rotateY(10deg); -webkit-transform: perspective(1200px) rotateY(" +
                this.angle +
                "deg); }"
            );
            keyframes.appendRule(
              "75% { -moz-transform:perspective(1200px) rotateY(10deg); -webkit-transform: perspective(1200px) rotateY(-" +
                this.angle +
                "deg); }"
            );
          }
        }
      }
    },
    zoomInOut() {
      document.querySelectorAll(".fpbanner__heading--ptext")[0].style.fontSize =
        this.textscale + "rem";
    }
  }
};
</script>






