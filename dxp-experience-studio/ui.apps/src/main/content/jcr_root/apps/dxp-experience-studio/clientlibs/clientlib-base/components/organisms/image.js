const staticimage = Vue.component('staticimage', {
  template: ` <div>
    <div class="fpbanner" ref="container" :style="{height:height + 'px'}" @mouseover="showOverLay()" @mouseleave="hideOverLay()" >
    <div class="imgcontainer"  >
      <img
        :src="getImage(dataref.backgroundimage)"
        ref="fpbannerimg"
        class="imagebanner"
        :style="{height:height + 'px'}"
       
      />
    </div>
    <div class="row fpbanner__row" >
    <div class="col-md-12" :class="dataref.textalign">
      <div class="fpbanner__container pos--rel" >
      <div class="fpbanner__layer" ref="overLay">
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
      console.log(this.height);
      return img;
    },
    showOverLay() {
      var overLay = this.$refs['overLay'];
      overLay.style.background = 'rgba(0, 0, 0, 0.5)';
    },
    hideOverLay() {
      var overLay = this.$refs['overLay'];
      overLay.style.background = 'none';
    }
  }




});

