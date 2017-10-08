<template lang="html">
    <div class="headerDiv" v-if="url!=='detail'">
        <el-row>{{url}}</el-row>
    </div>
    <div class="headerDiv" v-else>
        <i class="el-icon-arrow-left a_back"></i>
        <el-row class="detail">详 情</el-row>
    </div>
</template>

<script>
  export default{
    props: ['url']
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
    .a_back{
        position: absolute;
        left: 10px;
        line-height: 100px;
    }
</style>