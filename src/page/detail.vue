<template lang="html">
    <div style="background-color: #fff">
        <v-header :url="url"></v-header>
        <div style="margin-top: 100px">
            <img :src="detail.Pic" class="image">
        </div>
        <div class="footerDiv">
            <el-row>
                <el-col :span="12" class="footerCol">
                    <a :href="detail.Quan_link">领取优惠券</a>
                </el-col>
                <el-col :span="12" class="footerCol">
                    <a :href="'https://item.taobao.com/item.htm?id='+detail.GoodsID">淘宝链接</a>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
  import vHeader from '../component/header.vue'
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
          to.params.id = to.query.Id
          next()
        }))
        .catch(err => {
          console.error(err);
        })
    },
    components: {
      vHeader
    },
    data () {
      return {
        detail: this.$route.params.detail,
        id: this.$route.params.id,
        url: 'detail'
      }
    },
    methods: {
    }
  }
</script>

<style>
    .image{
        width: 100%;
    }
    .footerDiv{
        width: 100%;position: fixed;bottom: 0;border-top: 1px solid #D3DCE6;background-color: #fff;font-size: 20px;
    }
    .footerCol{
        text-align: center;
        line-height: 100px;
    }
</style>