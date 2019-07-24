<template>
  <video controls autoplay loop width="100%" muted>
    <source :src="getVideo(src)" type="video/webm" :class="className" />

    <source :src="getVideo(src)" type="video/mp4" />Sorry, your browser doesn't support embedded videos.
  </video>
</template>

<script>
export default {
  name: "AppVideo",
  props: {
    src: String,
    className: String
  },
  data() {
    return {};
  },
  methods: {
    getVideo(video) {
      // explanation: https://stackoverflow.com/a/40493036/1824444
      return require("@/assets/" + video);
    }
  }
};
</script>

<style>
video::-webkit-media-controls {
  display: none !important;
}
</style>