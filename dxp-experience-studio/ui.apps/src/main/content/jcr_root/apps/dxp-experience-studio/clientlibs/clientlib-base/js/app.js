// Atoms
var atomsBasicPath = "/apps/dxp-experience-studio/clientlibs/clientlib-base/components/atoms/";
var atomsComponents = [
  "appCardContent.js",
  "appCardTitle.js",
  "slide3d.js",
  "controls.js",
  "appButton.js",
  "appInput.js",
  "appLink.js",
  "appImage.js",
  "appcomponentheading.js"
];
for (var i = 0; i < atomsComponents.length; i++) {
  var script = document.createElement("script");
  script.src = atomsBasicPath + atomsComponents[i];
  script.async = false;
  document.head.append(script);
}

// molecules
var moleculesBasicPath = "/apps/dxp-experience-studio/clientlibs/clientlib-base/components/molecules/";
var moleculesComponents = [
  "partners.js",
  "carousel3d.js",
  "cardWithSlider.js",
  "cardWithoutSlider.js",
  "flickity.js",
  "voiceCommands.js"
];
for (var j = 0; j < moleculesComponents.length; j++) {
  var script = document.createElement("script");
  script.src = moleculesBasicPath + moleculesComponents[j];
  script.async = false;
  document.head.append(script);
}

// organisms
var organismsBasicPath = "/apps/dxp-experience-studio/clientlibs/clientlib-base/components/organisms/";
var organismsComponents = [
  "banner.js",
  "image.js",
  "carousel.js",
  "singlevideo.js",
  "multiVideo.js",
  "navigation.js",
  "threeDslider.js",
  "appCard.js",
  "gridvideo.js",
  "footer.js",
  "team.js",
  "performancenumberone.js",
  "performancenumberthree.js",
  "videoWithAgenda.js"
];
for (var k = 0; k < organismsComponents.length; k++) {
  var script = document.createElement("script");
  script.src = organismsBasicPath + organismsComponents[k];
  script.async = false;
  document.head.append(script);
}

//Return Visible Element in Page Fold
function returnVisibleEleInPageFold(arr) {
  var ele = null;
  arr.forEach(function(element) {
      if ((element.offsetTop <= (window.scrollY + window.innerHeight - 200)) &&
          (element.offsetHeight + element.offsetTop - 200) >= window.scrollY && !ele) {
          ele = element;
      }
  });

  return ele;
}

function getFirstCardInPageFold() {
  var sortObj = {}
  var card3d = returnVisibleEleInPageFold(document.querySelectorAll('.card_3d_voice')) ?
      returnVisibleEleInPageFold(document.querySelectorAll('.card_3d_voice')).offsetTop :
      Infinity;
  card3d !== Infinity ? sortObj[card3d] = 'card3d' : '';
  
  var cardCarousel = returnVisibleEleInPageFold(document.querySelectorAll('.card_carousel_voice')) ?
      returnVisibleEleInPageFold(document.querySelectorAll('.card_carousel_voice')).offsetTop :
      Infinity;
  cardCarousel !== Infinity ? sortObj[cardCarousel] = 'cardCarousel' : '';

  return sortObj[Math.min(card3d, cardCarousel)];

}

function changeCardSlide(index) {
  var ele;
  var firstCardVisible = getFirstCardInPageFold();
  if (returnVisibleEleInPageFold(document.querySelectorAll('.card_3d_voice')) && firstCardVisible === 'card3d') {
      ele = returnVisibleEleInPageFold(document.querySelectorAll('.card_3d_voice'));
      ele = ele.childNodes[0].childNodes[2].childNodes;
      ele.forEach(function(elem, i) {
          if (elem.childNodes[0].className.indexOf('active') !== -1 && (i + index) <= (ele.length - 1) && (i + index) >= 0) {
              ele[i + index].childNodes[0].click();
          }
      })
  } else if (returnVisibleEleInPageFold(document.querySelectorAll('.card_carousel_voice')) && firstCardVisible === 'cardCarousel') {
      ele = returnVisibleEleInPageFold(document.querySelectorAll('.card_carousel_voice'));
      ele = ele.childNodes[0].childNodes[0].childNodes[3].childNodes;
      for (let j = 0; j < ele.length; j++) {
          let elem = ele[j];
          if (elem.className.indexOf('swiper-pagination-bullet-active') !== -1 && (j + index) <= (ele.length - 1) && (j + index) >= 0) {
              ele[j + index].click();
              break;
          }                
      }            
  } 
}

$( document ).ready(function() {
  console.log( "ready!" );
  document.onkeyup = function (event) {
    if (event.which == 37 || event.keyCode == 37) {
      changeCardSlide(-1);
    }
    else if (event.which == 39 || event.keyCode == 39) {
      changeCardSlide(1);
    }
  };
});
