const team = Vue.component('team', {
    template: `<div class="teamlayout">
        <h1 class="teamlayout__heading">{{dataref.heading}}</h1>
        <p class="teamlayout__desc">{{dataref.description}}</p>
        <flickity ref="flickity" :options="dataref.flickityOptions">
            <div
                v-for="(slide, i) in dataref.slides"
                :index="i"
                :id="'slide'+i"
                :name="i"
                :key="i"
                style="background: none;"
                class="carousel-cell">
                <a role="link" class="img-container" :id="'navigation:' + slide.name">
                  <img
                    :src="slide.img"
                    class="carousel-img no-transition"
                  ></img>
                </a>
                <h2 class="teamlayout__name">{{slide.name}}</h2>
                <h3 class="teamlayout__designation">{{slide.designation}}</h3>
                <p class="teamlayout__dept">{{slide.department}}</p>
            </div>
        </flickity>
        <div class="navigate">
            <span class="no-sm prev" @click="previous()" id="navigation:carousel-previous">
                <AppImage src="/apps/dxp-experience-studio/clientlibs/clientlib-base/resources/img/left_arrow.svg"></AppImage>
            </span>
            <span class="no-sm next" @click="next()" id="navigation:carousel-next">
                <AppImage src="/apps/dxp-experience-studio/clientlibs/clientlib-base/resources/img/left_arrow.svg"></AppImage>
            </span>
        </div>
    </div>`,
    components: {
        'flickity' : FlickityComponent,
        AppImage
    },
    data() {
        return {
        };
    },
    props: {
        dataref: {
          type: Object,
          required: true
        }
    },
    methods: {
        next() {
            this.$refs.flickity.next();
        },
        previous() {
            this.$refs.flickity.previous();
        },
        exitAnimation(imageName) {
            // image expand
            const PAGE_TRANSITION_DURATION = 400;
            return new Promise((resolve, reject) => {
                const bound = this.$refs.flickity
                    .selectedElement()
                    .children[0].children[0].getBoundingClientRect();
                const overlay = document.querySelector(".home-overlay");
                const image = new Image();

                const viewWidth = Math.max(
                    document.documentElement.clientWidth,
                    window.innerWidth || 0
                );
                const viewHeight = Math.max(
                    document.documentElement.clientHeight,
                    window.innerHeight || 0
                );
                const isLandscape = viewWidth > viewHeight;
                const viewMax = isLandscape ? viewWidth : viewHeight;
            });
        },
        toSlide(event, i) {
            // go to slide or subpage
            if (event.target.classList.contains("carousel-img")) {
                if (i == this.$refs.flickity.selectedIndex()) {
                    this.exitAnimation(this.slides.images[i].heroimg).then(() => {
                        this.controller.destroy(true);
                        this.$router.push({
                            name: this.slides.images[i].name,
                            params: {
                                animate: true
                            }
                        });
                    });
                } else {
                    this.$refs.flickity.select(i);
                }
            }
        },
        slideFirst() {
            // runs once when page scrolled to carousel section
            if (this.dataref.isFirst) {
                this.$refs.flickity.next();
                this.dataref.isFirst = false;
            }
        },
        updateSlideTitle(targetIndex) {
            this.activeIndex = targetIndex;
            this.currSlide = this.dataref.slides[targetIndex].name;
            this.dispMessage = this.dataref.slides[targetIndex].dispMessage;
        },
        calculateY(pos, teamparam, id, slideLength) {
            // calculation of radial position by position
            // const r = 0.2 * (slideLength-1);
            const r = 0.8;
            if (pos >= 0.625) {
                pos = 1.25 - pos;
            }
            // if (pos >= (0.125*slideLength)) {
            //   pos = (0.25*slideLength) - pos;
            // }
            // if (pos >= parseFloat(((slideLength * slideLength * slideLength * slideLength)/1000).toFixed(3))) {
            //     pos = parseFloat(((slideLength * slideLength * slideLength)/100).toFixed(3)) - pos;
            // }
            // console.log('id', id);
            // console.log('pos', pos);
            var customMultiplier = 2.5;
            if (teamparam === 'name') {
                customMultiplier = 17;
            } else if (teamparam === 'designation') {
                customMultiplier = 29.5;
            } else if (teamparam === 'department') {
                customMultiplier = 24;
            }
            var d = 2.5 * (r - Math.sqrt(r * r - pos * pos)) + (pos * customMultiplier);
            // var d = 2.5 * (r - Math.sqrt(r * r - pos * pos));
            return d.toFixed(3);
        },
        normalisePos(pos, slideLength) {
            // keep position between 0 and 1.250
            let normalised = Number(pos);
            console.log(normalised);
            var percentageVal = parseFloat(((slideLength * slideLength * slideLength)/100).toFixed(2));
            if (normalised > 0) {
            //   normalised = normalised % (0.25*slideLength);
            //   normalised = normalised % percentageVal;
            normalised = normalised % 1.25;
            } else if (normalised < 0) {
            //   normalised = 1.25 + (Number(normalised) % percentageVal);
            //   normalised = 1.25 + (Number(normalised) % (0.25*slideLength));
              normalised = 1.25 + (Number(normalised) % 1.25);
            }
            console.log(normalised.toFixed(3))
            return normalised.toFixed(3);
        },
        getTranslateValue(pos, i, teamparam, slideLength) {
            // return carousel items translateY position by index & position
            pos = this.normalisePos(pos - (i/(slideLength-1)).toFixed(3), slideLength);
            return this.calculateY(pos, teamparam, i, slideLength) * 100;
        },
        setVertical(progress) {
            // set carousel items translateY by progress
            const pos = progress.toFixed(3);
            if (pos === this.dataref.carouselPos) {
                return;
            } else {
                this.dataref.carouselPos = pos;
                const slides = this.$refs.flickity.cells();
                slides.forEach((slide, i) => {
                    const el = slide.element;
                    const slideId = el.getAttribute("id");
                    const id = Number(slideId[slideId.length - 1]);
                    if (i == 0) {
                    }
                    el.children[0].children[0].style.transform = `translate3d(0, ${this.getTranslateValue(
                        pos,
                        id, 'img', slides.length
                    )}%, 0)`;
                    el.children[1].style.transform = `translate3d(0, ${this.getTranslateValue(
                        pos,
                        id, 'name', slides.length
                    )}%, 0)`;
                    el.children[2].style.transform = `translate3d(0, ${this.getTranslateValue(
                        pos,
                        id, 'designation', slides.length
                    )}%, 0)`;
                    el.children[3].style.transform = `translate3d(0, ${this.getTranslateValue(
                        pos,
                        id, 'department', slides.length
                    )}%, 0)`;
                });
            }
        }
    },
    mounted() {
        // .250 is the position of last carousel item
        this.setVertical(-0.25);

        // check if enter animation required & scroll carousel to target
        // if (typeof this.$route.params.pageIndex !== "undefined") {
        //     this.dataref.isFirst = false;
        //     this.enterAnimation();
        //     this.$refs.flickity.select(this.$route.params.pageIndex - 1, true, true);
        //     this.$refs.flickity.select(this.$route.params.pageIndex);
        //     this.updateSlideTitle(this.$route.params.pageIndex);
        // }

        // carousel events
        this.$refs.flickity.on("change", this.updateSlideTitle);
        this.$refs.flickity.on("scroll", progress => this.setVertical(progress));
        this.$refs.flickity.on(
            "staticClick",
            (event, pointer, cellElement, cellIndex) => {
                this.toSlide(event, cellIndex);
            }
        );

        // IE polyfill for element.remove()
        if (!("remove" in Element.prototype)) {
            Element.prototype.remove = function () {
                if (this.parentNode) {
                    this.parentNode.removeChild(this);
                }
            };
        }

        // set scroll trigger for firstSlide
        if (window.innerWidth > 1800 && window.innerWidth <= 2200) {
            this.scrollPosition = -300;
        } else if (window.innerWidth > 2200) {
            this.scrollPosition = -700;
        }
    }
});