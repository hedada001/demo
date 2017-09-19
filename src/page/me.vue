<template lang="html">
    <div>
        <v-header :url="url"></v-header>
        <div class="m20">
            <el-row class="row_avatar">
                <el-upload
                        class="avatar-uploader"
                        action="upload"
                        :show-file-list="false"
                        :before-upload="beforeAvatarUpload"
                        :on-success="success">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
            </el-row>
            <div class="me">
                <el-collapse accordion>
                    <el-collapse-item title="我的信息" name="1">
                        <div style="padding-left: 40px">我的信息我的信息我的信息我的信息<br>我的信息我的信息</div>
                    </el-collapse-item>
                    <el-collapse-item title="我的收藏" name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </el-collapse-item>
                    <el-collapse-item title="我的信息" name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </el-collapse-item>
                    <el-collapse-item title="我的收藏" name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
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
        url: this.$route.params.url,
        imageUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1326359821,2292208327&fm=27&gp=0.jpg'
      }
    },
    components: {
      vFooter,
      vHeader
    },
    methods: {
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG && !isPNG) {
          this.$message.error('上传图片只能是 JPG 或 PNG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传图片大小不能超过 500K!');
        }
        if ((isJPG || isPNG) && isLt2M) {
          this.$message.success('正在上传图片!')
        }
        return (isJPG || isPNG) && isLt2M
      },
      success (file) {
        console.log(file)
      }
    }
  }
</script>

<style>
    .m20 {
        margin: 114px 0 100px 0;
        background-color: #fff;
    }
    .avatar-uploader .el-upload {
        border: 1px solid #d9d9d9;
        border-radius: 50%;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
    .row_avatar{
        width: 100%;text-align: center;margin-top: 200px;
    }
    .me{
        margin-top: 140px;
    }
    .el-collapse-item__header{
        font-size: 2rem;
        height: 100px;
        line-height: 100px;
        padding-left: 25px;
    }
    .el-collapse-item__content{
        font-size: 1.8rem;
    }
</style>
