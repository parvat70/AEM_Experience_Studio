const performancenumberone = Vue.component("performancenumberone", {
  template: ` <div class="container-fluid p-0 position-relative text-center">
  <div class="performancebg" >
  </div>

  <div class="performanceNumberone">
  <div>
  <h2 class="performanceNumberone__title">{{dataref.title}}</h2>
  <p v-html="dataref.description" class="performanceNumberone__desc"></p>
  </div>
  <div class="row performanceNumberone__cardlist" ref="performanceNumber">
  <div class="cards"  v-for="item in dataref.data">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 map">
          <img :src="item.primaryimg" class="map-icon" />
        </div>
      </div>

      <div class="container">
        <div class="text-container">
        <h4>{{item.text1}}</h4>
        <span class="uparrow-icon" v-if="item.secondaryimg" v-bind:style="{ color: item.color}"><img class="arrowimg" :src="item.secondaryimg"/></span>
          
        </div>
        <div class="row txt-center">
        <div class="subtext-container txt-center col-md-12">
        <h5>{{item.text2}}</h5>
          
        </div>
          
          
        </div>
      </div>
    </div>
  </div>
  </div>
  </div>`,

  data() {
    return {
      height: 0
    };
  },
  props: {
    dataref: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.calculateHeight();
    window.addEventListener("resize", () => {
      this.calculateHeight();
    });
  },
  methods: {
    calculateHeight() {
      this.height = this.$refs.performanceNumber.clientHeight + 210;
      if (window.innerWidth < 539.98) {
        this.height = this.$refs.performanceNumber.clientHeight + 180;
      }
    }
  }
});
