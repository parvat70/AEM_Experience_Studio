var footercomponent = Vue.component("footercomponent", {
  template: `
    <footer class="footer page-footer font-small blue pt-4">
    <div class="container-fluid text-center text-md-left footer--inner">
      <div class="row bottom-left">
        <div class="col-xl-2 col-lg-2 col-md-12 col-xs-12  col-sm-12 footer__shareicon">
          <ul class="list-unstyled">
            <li v-for="socialmedia of dataref.socialicons">
              <a :href="socialmedia.path" target="_blank" :class="socialmedia.icon"></a>
            </li>
          </ul>
        </div>

        <div class="col-xl-8 col-lg-8 col-md-12 col-xs-12 col-sm-12 footer__contacticons">
          <div class="row">
            <div v-for="contact of dataref.contactinfo"
              class="col-md-3 col-xs-6 col-sm-6 footer__contacticons__block"
            >
              <p class="footer__contacticons__name">
                <img :src="contact.image" /><span class="footer__contacticons__fullname">{{contact.fullname}}</span>
              </p>
              <span class="footer__contacticons__shortname">{{contact.shortname}}</span>
              <div class="footer__contacticons__phone text-center">
                <span>{{contact.phone}}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-2 col-lg-2 col-md-12 col-xs-12 col-sm-12 footer__logo">
          <div class="disflex col-xl-12 col-lg-12 col-md-3 col-xs-6 col-sm-6">
          <img v-if="dataref.copyright" :src="dataref.copyright" class="footer__logo--copyrights" />

          <a v-if="dataref.footerlogo" href="#" class="footer__logo--img"
            ><img :src="dataref.footerlogo" />
          </a>
          </div>
        </div>
      </div>
    </div>
  </footer>`,
  props: {
    dataref: Object
  },
});