<template lang="html">
    <div class="headerDiv">
        <el-row>{{url}}</el-row>
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
</style>