<template lang="html">
    <div>
        <div>
           {{detail}}
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  export default {
    beforeRouteEnter (to, from, next) {
      function getDetail () {
        return axios.get('api/index.php', {
          params: {
            r: 'port/index',
            appkey: 'kavfg0c3q2',
            v: '2',
            id: to.query.Id
          }
        })
      }
      axios.all([getDetail()])
        .then(axios.spread((getDetail) => {
          to.params.detail = getDetail.data.result
          next()
        }))
        .catch(err => {
          console.error(err);
        })
    },
    data () {
      return {
        detail: this.$route.params.detail
      }
    }
  }
</script>

<style>

</style>