<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
    body {
        margin: 0px;
        padding: 0px;
        /*background-color: #1F2D3D;*/
        font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
    }

    #app {
        position: absolute;
        top: 0px;
        bottom: 0px;
        width: 100%;
    }
    a:-webkit-any-link {
        text-decoration:none !important;
        color: #000;
    }
</style>
