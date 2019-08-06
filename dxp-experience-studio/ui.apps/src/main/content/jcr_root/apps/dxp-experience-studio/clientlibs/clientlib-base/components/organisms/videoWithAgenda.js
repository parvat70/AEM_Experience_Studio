var videowithagenda = Vue.component('videowithagenda', {
  template: `<div class="nextSection">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-7 col-md-12">
          <div class="nextSection__Video">
            <div
              class="nextSection__thumbnail"
              id="video__overlay"
              onclick="playVideo(true)" >
              <img
                src="https://angry-pare-61a76e.netlify.com/img/playIcon.b17f7f02.png"
                class="nextSection__playimage" />
            </div>
            <video
              preload="auto"
              onclick="playVideo(false)"
              onended="playVideo(false)"
              id="video__content" >
              <source
                src="https://mdbootstrap.com/img/video/Agua-natural.mp4"
                type="video/mp4" />
            </video>
          </div>
        </div>
        <div class="col-xl-5 col-md-12 nextSection__Content">
          <h1 class="square">Next Steps</h1>
          <h5 class="square">HOW TO GET STARTED</h5>
          <div>
            <div class="chevron-hover chevron-hover--white">
              <p class="underline">
                <a
                  href="javascript:void(0);"
                  id="deployment-guide">
                  <span>Deployment guide</span>
                </a>
                <span class="chevron right"></span>
              </p>
            </div>
            <div class="chevron-hover chevron-hover--white">
              <p>
                <a href="javascript:void(0);" id="cta:next-steps-articles" >
                  <span>Articles</span>
                </a>
                <span class="chevron right"></span>
              </p>
            </div>
          </div>
          <h3 class="square">FastTrack</h3>
          <h5 class="square">GET STARTED NOW</h5>
          <div class="nextSection__learnmore nextSection__learnmore-flex">
            <div class="chevron-hover chevron-hover--white">
              <span class="pad--learn">Learn more: </span>
              <a href="javascript:void(0);" id="cta:next-steps-azure-read">
                <span>azure.com/azuread</span>
              </a>
              <span class="chevron right"></span>
            </div>
          </div>
          <div class="nextSection__learnmore">
            <div class="chevron-hover chevron-hover--white">
              <span class="pad--learn">Try for free: </span>
              <a href="javascript:void(0);" id="cta:EMS-90-day-trial">
                <span>EMS 90-day trial</span>
              </a>
              <span class="chevron right"></span>
              <span class="pad--2-4"> or </span>
              <a href="javascript:void(0);" id="cta:azure-ad-premium-30-day-trial">
                <span>Azure AD Premium 30-day trial</span>
              </a>
              <span class="chevron right"></span>
            </div>
          </div>
          <div class="chevron-hover chevron-hover--white">
            <a href="javascript:void(0);" id="cta:download-the-crash-course-in-azure-active-directory-e-book" class="chevron-hover">
              <span>Download the Crash Course in Azure Active Directory e-book</span>
            </a>
            <span class="chevron right"></span>
            <a href="javascript:void(0);" id="cta:sign_up_for_trial" class="btn">
              <span>Sign up for Trial </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`
});

function playVideo(play) {
  var videoOverlay = document.getElementById("video__overlay");
  var video = document.getElementById("video__content");
  if (play) {
    video.play();
    videoOverlay.style.display = "none";
  } else {
    video.pause();
    videoOverlay.style.display = "block";
  }
}