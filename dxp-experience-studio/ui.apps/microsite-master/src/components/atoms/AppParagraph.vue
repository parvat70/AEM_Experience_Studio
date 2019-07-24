<template>
  <p
    :class="align"
  >
    {{ content }}
  </p>
</template>

<script>
export default {
  name: 'AppParagraph',
  data () {
    return {}
  },
  props: {
    content: String,
    align: {
      type: String,
      default: 'center'
    }
  }
}
</script>

