<template lang="html">
    <div>
        <v-header :url="url"></v-header>
        <div class="m20">
            {{url}}
        </div>
        <v-footer :url="url"></v-footer>
    </div>
</template>

<script>
  import vFooter from '../component/footer.vue'
  import vHeader from '../component/header.vue'
  export default {
    beforeRouteEnter (to, from, next) {
      to.params.url = 'M E'
      next()
    },
    data () {
      return {
        url: this.$route.params.url
      }
    },
    components: {
      vFooter,
      vHeader
    }
  }
</script>
