<template>
  <div>
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
              min="1"
              max="10"
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
      </thead>
    </table>

    <HomePageBanner />
  </div>
</template>

<script>
import HomePageBanner from "./HomePageBanner";
import AppInput from "../atoms/AppInput";
export default {
  components: {
    HomePageBanner,
    AppInput
  },
  data() {
    return {
      textscale: 0,
      angle: 10
    };
  },
  methods: {
    zoomInOut() {
      var zoomLevel;
      if (this.textscale >= 0 && this.textscale <= 9) {
        zoomLevel = "1." + this.textscale;
      } else if (this.textscale == 10) {
        zoomLevel = 2;
      } else {
        zoomLevel = -1;
      }
      if (zoomLevel < 0) {
        alert("invlaid");
      } else {
        document.querySelectorAll(".banner__dxp")[0].style.transform =
          "scale(" + zoomLevel + ")";
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
            ss[i].cssRules[j].name == "hpbanner"
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
    }
  }
};
</script>


