<template lang="html">
    <div>
        <v-header :url="url"></v-header>
        <div class="m20">
        <el-row>
            <el-col :span="12" v-for="(item, index) in list" :key="'1'">
                <router-link :to="'detail?Id='+item.ID">

                <el-card :body-style="{ padding: '1px' }" class="homeCard">
                    <img :src="item.Pic" class="image">
                    <div style="padding: 14px;">
                        <el-row>标题：{{item.Title}}</el-row>
                        <el-row>券后价：<span style="color: red">¥ </span> {{item.Price}}</el-row>
                        <el-row class="miaoshu">描述：{{item.Introduce}}</el-row>
                        <div class="bottom clearfix">
                            <time class="time">{{ currentDate }}</time>
                        </div>
                    </div>
                </el-card>
                </router-link>
            </el-col>
        </el-row>
        </div>
        <v-footer :url="url"></v-footer>
    </div>
</template>

<script>
  import vFooter from '../component/footer.vue'
  import vHeader from '../component/header.vue'
  import axios from 'axios'
  import $ from 'jquery'
  export default {
    beforeRouteEnter (to, from, next) {
      function getList () {
//        return axios.get('api/index.php?r=Port/index&type=top100&appkey=kavfg0c3q2&v=2&page=10')
        return axios.get('api/index.php', {
          params: {
            r: 'Port/index',
            type: 'paoliang',
            appkey: 'kavfg0c3q2',
            v: '2'
          }
        })
      }
      axios.all([getList()])
        .then(axios.spread((List) => {
          to.params.List = List.data.result;
          to.params.url = 'N E W'
          next()
        }))
        .catch(err => {
          console.error(err);
        })
    },
    data () {
      return {
        url: this.$route.params.url,
        currentDate: new Date(),
        list: this.$route.params.List
      }
    },
    components: {
      vFooter,
      vHeader
    },
    mounted () {
      let arr = []
      $(this.list).each(function (k, v) {
        if (v.Jihua_link) {
          let Jihua_link = v.Jihua_link.split('&userNumberId=')[1]
          if (Jihua_link){
            arr.push({
              D_title: v.D_title,
              id: Jihua_link.split('&tab')[0]
            })
          }
        }
      })
      console.warn(arr)
    }
  }
</script>

<style>
    .time {
        font-size: 13px;
        color: #999;
    }
    .m20 {
        margin: 114px 0 100px 0;
        background-color: #fff;
    }
    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .image {
        width: 100%;
        display: block;
    }
    .homeCard{
        width: 90%;margin-left: 5%;margin-bottom: 20px
    }
    .miaoshu{
        height: 80px;
        overflow: hidden;
    }
</style>