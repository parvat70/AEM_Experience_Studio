var navigation = Vue.component('navigation', {
  template: ` <div id="sticky_header" class="container-fluid stickytop navbar--horizontal navbar_voice">
    <div class="row m-0">
      <div class="col-12">
        <div class="container-inside">
          <div class="row m-0">
            <div id="header_voice"
              class="col-12 topnav stickytop__titlewrapper titlewrapper--toggle"
              v-bind:class="{ 'responsive-nav': isResponsiveNav }"
            >
              <a
                v-for="(section, index) in dataref.selectedMenu"
                data-bi-area="top-nav-menu"
                :index="index"
                :key="index"
                @click="toggleNav()"
                :href="'#' + section.id"
                class="nav-item"
              >{{ section.name }}</a>
              <img src="/apps/dxp-experience-studio/clientlibs/clientlib-base/resources/img/homePageLogo.png" class="title-logo title-logo--desktop">
            </div>
            <div class="carrot-container">
              <a
                class="icon-ham"
                v-bind:class="{ 'open': isResponsiveNav }"
                @click="toggleNav()"
                id="navigation:hamburger-menu-toggle"
                data-bi-id="navigation:hamburger-menu-toggle"
                data-bi-area="mobile-home-page-navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </a>
              <img src="/apps/dxp-experience-studio/clientlibs/clientlib-base/resources/img/homePageLogo.png" class="title-logo title-logo--mobile ">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
  data() {
    return {
      isResponsiveNav: false
    };
  },
  props: {
    dataref: {
      type: Object,
      required: true
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.resizeHeader);
  },
  destroyed() {
    delete window.sticky;
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.resizeHeader);
  },
  mounted() {
    this.highlightNavItem();
  },
  methods: {
    getImage(img) {
      return img;
    },
    toggleNav: function () {
      if (window.outerWidth < 1084) {
        this.isResponsiveNav = !this.isResponsiveNav;
      }
    },
    handleScroll() {
      // Followin code is used to add sticky navigation bar in IE. As position sticky does not work in IE we have to do it in javascript
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf("MSIE ");
      // If Internet Explorer, return version number
      var header = document.getElementById("sticky_header");
      // I am commenting below line because this is causing sticky issue in IE.
      if (!window.sticky) {
        window.sticky = header.offsetTop;
      }
      if (window.pageYOffset > sticky) {
        header.style.position = "fixed";
        header.style.width = "81.14%";
        header.style.top = "0px";
      } else {
        header.style.width = "100%";
        header.style.top = "0px";

        if (
          window.pageYOffset < sticky &&
          header.style.position != "static"
        ) {
          header.style.position = "static";
        }
      }

      this.highlightNavItem();
      // End of Sticky navbar code for IE
    },
    highlightNavItem() {
      var elem = this.elementsInView();
      if (elem > -1) {
        var topnav = document.querySelector(".topnav");
        var navlist = topnav.querySelectorAll("a.nav-item");
        for (var nav of navlist) {
          nav.classList.remove('active');
        }
        if (window.innerWidth > 1084) {
          // element is in view, add class
          navlist[elem].classList.add('active');
        } else {
          for (var i = 0; i <= elem; i++) {
            // elements is in view, add class
            navlist[i].classList.add('active');
          }
        }
      }
    },
    elementsInView() {
      var elementPosition;
      var selectedindex = -1;
      var windowHeight = window.innerHeight;
      var scrollY = window.scrollY || window.pageYOffset;

      // get current scroll position (distance from the top of the page to the bottom of the current viewport)
      var scrollPosition = scrollY + windowHeight;
      // get element position (distance from the top of the page to the bottom of the element)
      for (var i = 0; i < this.dataref.selectedMenu.length; i++) {
        var element = document.getElementById(this.dataref.selectedMenu[i].id);
        if (element) {
          elementPosition = element.getBoundingClientRect().top + scrollY + element.clientHeight - 150;
          // console.log(elementPosition);
          // is scroll position greater than element position? (is element in view?)
          if (scrollPosition > elementPosition) {
            selectedindex = i;
          }
        }
      }

      if (selectedindex >= 0) {
        return selectedindex;
      }

      return -1;
    }
  }
});