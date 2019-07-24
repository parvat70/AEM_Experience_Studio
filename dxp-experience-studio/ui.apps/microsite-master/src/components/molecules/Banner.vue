<template>
  <section class="bannerSection">
    <AppVideo
      src="movie.mp4"
      controls
      autoplay
      loop
      type="video/mp4"
      :className="bannerSection__video"
    />
    <div class="bannerSection__animcontent">
      <div class="bannerSection__animcontent__left">
        <div class="bannerSection__animcontent__leftcontainer">
          <AppHeaderTag
            label="Lorem ipsum dolor <br/> sit amet, <br/> consectetur <br/> adipiscing elit"
            grade="h2"
            shape="bannerSection__animcontent__left-text"
          />
        </div>
      </div>
      <div class="bannerSection__animcontent__right">
        <div class="bannerSection__animcontent__rightcontainer">
          <AppHeaderTag
            label="Lorem ipsum dolor sit amet <br/> Consectetur adipiscing elit, sed 
            <br/> adipiscing elit <br/> do eiusmod tempor <br/> incididunt ut labore et dolore"
            grade="h3"
            shape="bannerSection__animcontent__right-text"
          />

          <AppLink
            :isNewWindow="true"
            href="#"
            label="Learn More"
            class="bannerSection__animcontent__right--applink"
          ></AppLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import AppVideo from "../atoms/AppVideo";
import AppParagraph from "@/components/atoms/AppParagraph";
import AppLink from "@/components/atoms/AppLink";
import AppHeaderTag from "@/components/atoms/AppHeaderTag";

export default {
  components: {
    AppVideo,
    AppParagraph,
    AppLink,
    AppHeaderTag
  }
};
</script>




