const performancenumberthree = Vue.component("performancenumberthree", {
  template: `  <div class="container-fluid">
  
  
  <div class="performancenumberthree row">
  <div class="performancenumberthree__container">
  <h2 class="performancenumberthree__title">{{dataref.title}}</h2>
  <p v-html="dataref.description" class="performanceNumberthree__desc"></p>
  </div>
  <div class="cardsnumber"  v-for="item in dataref.data">
      <div class="row row-map">
        <div class="col-md-12 col-sm-12 col-xs-12 col-lg-12 map">
          <img :src="item.primaryimg" class="map-icon2" />
        </div>
      </div>
      
      <div class="container">
      <div class="performancethreebg">
     
        <div class="text-container">
        
        <h4 class="fsize">{{item.text1}}</h4>
        <span class="pnuparrow-icon" >
        <img :src="item.secondaryimg"/></span>
        </div>
        </div>
        <div class="row txt-center">
        <div class="subtext txt-center col-md-12">
        <h5 class="fh5">{{item.text2}}</h5>
          
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
  }
});
