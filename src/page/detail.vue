<template lang="html">
    <div style="background-color: #fff">
        <div>
            <form method="post" name="info">
            <img :src="detail.Pic" class="image">
            <a :href="'https://item.taobao.com/item.htm?id='+detail.GoodsID">淘宝链接</a>
            <a :href="getUrl()">领券下单吧</a>
            </form>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import FormData from 'form-data'
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
          to.params.id = to.query.Id
          next()
        }))
        .catch(err => {
          console.error(err);
        })
    },
    data () {
      return {
        detail: this.$route.params.detail,
        id: this.$route.params.id
      }
    },
    methods: {
      getUrl () {
        axios({
          method: 'post',
          url: 'api/handle_popularize',
          params: {
            act: 'add_quan',
            id: +this.id
          },
          headers: {'Content-Type':'application/x-www-form-urlencoded'}
        })
//        axios.post('api/handle_popularize', {
//          act: add_quan,
//          id: +this.id
//        })
          .then(res => {
            console.warn(res)
          })
          .catch(err => {
            console.log(err);
          })
//        return e
      }
    }
  }
</script>

<style>
    .image{
        width: 100%;
    }
</style>