<template lang="html">
    <div class="headerDiv" v-if="url!=='detail'">
        <el-row>{{url}}</el-row>
    </div>
    <div class="headerDiv" v-else>
        <el-row>
            <el-col :span="1" style="text-align: left;">
                <i class="el-icon-arrow-left" @click="go_back()"></i>
            </el-col>
            <el-col :span="100">详 情</el-col>
        </el-row>
    </div>
</template>

<script>
  export default{
    props: ['url'],
    methods: {
      go_back () {
        window.history.go(-1)
      }
    }
  }
</script>
<style>
    .headerDiv{
        width: 100%;
        position: fixed;
        top:0;
        background-color: #fff;
        line-height: 100px;
        border-bottom: 1px solid #D3DCE6;
        text-align: center;
        font-size: 40px;
        z-index: 1;
    }
    .el-icon-arrow-left{
        line-height: 100px
    }
</style>