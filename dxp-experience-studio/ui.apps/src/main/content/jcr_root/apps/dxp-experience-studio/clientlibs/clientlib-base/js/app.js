// Atoms
var atomsBasicPath = '/apps/dxp-experience-studio/clientlibs/clientlib-base/components/atoms/';
var atomsComponents = ['appButton.js', 'appInput.js', 'appLink.js', 'appCardContent.js', 'appCardTitle.js', 'slide3d.js', 'controls.js'];
for (var i = 0; i < atomsComponents.length; i++) {
    var script = document.createElement('script');
    script.src = atomsBasicPath + atomsComponents[i];
    document.head.append(script);
}
// molecules
var moleculesBasicPath = '/apps/dxp-experience-studio/clientlibs/clientlib-base/components/molecules/';
var moleculesComponents = ['cardWithSlider.js', 'cardWithoutSlider.js', 'partners.js', 'carousel3d.js'];
for (var i = 0; i < moleculesComponents.length; i++) {
    var script = document.createElement('script');
    script.src = moleculesBasicPath + moleculesComponents[i];
    document.head.append(script);
}
// organisms
var organismsBasicPath = '/apps/dxp-experience-studio/clientlibs/clientlib-base/components/organisms/';
var organismsComponents = ['banner.js', 'image.js', 'carousel.js', 'singlevideo.js', 'multiVideo.js', 'multiVideo2.js', 'threeDSlider.js', 'appCard.js'];
for (var i = 0; i < organismsComponents.length; i++) {
    var script = document.createElement('script');
    script.src = organismsBasicPath + organismsComponents[i];
    document.head.append(script);
}
