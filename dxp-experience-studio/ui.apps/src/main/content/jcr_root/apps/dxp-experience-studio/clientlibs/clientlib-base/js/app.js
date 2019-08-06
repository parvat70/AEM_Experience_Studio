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
