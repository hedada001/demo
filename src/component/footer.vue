<template lang="html">
    <div class="footerDiv">
        <el-row>
            <el-col :span="8" class="footerCol">
                <span>
                     <router-link to="/" :class="url==='N E W'?'red':''">N E W</router-link>
                </span>
            </el-col>
            <el-col :span="8" class="footerCol">
                <span>
                    <router-link to="hot" :class="url==='H O T'?'red':''">H O T</router-link>
                </span>
            </el-col>
            <el-col :span="8" class="footerCol">
                <span>
                    <router-link to="me" :class="url==='M E'?'red':''">M E</router-link>
                </span>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default{
    data () {
      return {
//        isFooter: 'N E W'
      }
    },
    methods:{
//      getClass (e) {
//        if (e === this.isFooter) {
//          return 'red'
//        }
//      }
    },
    props: ['url']
  }
</script>
<style>
    .footerDiv{
        width: 100%;position: fixed;bottom: 0;border-top: 1px solid #D3DCE6;background-color: #fff;font-size: 20px;
    }
    .footerCol{
        text-align: center;
        line-height: 100px;
    }
    .red{
        color: red !important;
    }
</style>