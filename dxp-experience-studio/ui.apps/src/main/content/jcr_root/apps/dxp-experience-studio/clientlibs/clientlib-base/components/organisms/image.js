const staticimage = Vue.component("staticimage", {
  template: ` <div>
    <div class="fpbanner image__section" ref="container" :style="{height:height + 'px'}" @mouseover="showOverLay()" @mouseleave="hideOverLay()" >
    <div class="imgcontainer">
      <img
        :src="getImage(dataref.backgroundimage)"
        ref="fpbannerimg"
        class="imagebanner"
        :style="{height:height + 'px'}"
       
      />
    </div>
    <div class="row fpbanner__row image_banner m-0" ref="overLay">
    <div class="col-md-12 p-0" :class="dataref.textalign">
      <div class="fpbanner__container pos--rel"  >
      <div class="fpbanner__layer" >
        <h3 class="fpbanner--header f-3rem fromtopanim">
          <span class="fpbanner--text">{{dataref.headertext}}</span>
        </h3>
        <h2 class="fpbanner__subheader f-2rem frombottomanim">
          <span class="fpbanner__subheader--text">{{dataref.subheadertext}}</span>
        </h2>
        </div>
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
  methods: {
    getImage(img) {
      // console.log(this.height);
      return img;
    },
    showOverLay() {
      var overLay = this.$refs["overLay"];
      overLay.classList.add("overlay");
    },
    hideOverLay() {
      var overLay = this.$refs["overLay"];
      overLay.classList.remove("overlay");
    }
  }
});