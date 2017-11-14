<template lang="html">
  <div class="l-forms">
    <el-form ref="form" :rules="rules" :model="formDatas" label-width="80px" class="form">
      <el-form-item
        v-for="item in formFields"
        :key="item.prop"
        :label="item.label"
        :prop="item.prop"
        class="form-item">
        <el-input
          v-model="formDatas[item.prop]"
          :placeholder="placeholder(item.label)"
          v-if="isType(item, 'input')"></el-input>
        <el-input
          type="textarea"
          :row="item.row || 2"
          v-model="formDatas[item.prop]"
          :placeholder="placeholder(item.label)"
          v-if="isType(item, 'textarea')"></el-input>
        <el-select
          v-model="formDatas[item.prop]"
          :placeholder="placeholder(item.label)"
          v-if="isType(item, 'select')"></el-select>
        <el-switch
          v-model="formDatas[item.prop]"
          :on-text="item.onText || ''"
          :off-text="item.offText || ''"
          v-if="isType(item, 'switch')"
        ></el-switch>
        <el-upload
          class="upload-files"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-success="handleUploadFilesSuccess"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="formDatas[item.prop]"
          :drag="item.drag"
          v-if="isType(item, 'upload-files')">
          <el-button size="small" type="primary" v-if="!item.drag">点击上传</el-button>
          <i class="el-icon-upload" v-if="item.drag"></i>
          <div class="el-upload__text" v-if="item.drag">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
        <el-upload
          class="upload-avatar"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleUploadAvatarSuccess"
          :before-upload="beforeUpload"
          v-if="isType(item, 'upload-avatar')">
          <img v-if="formDatas[item.prop].url" :src="formDatas[item.prop].url" class="avatar">
          <i v-else class="el-icon-plus avatar-icon"></i>
        </el-upload>
        <l-tinymce
          v-if="isType(item, 'richText')"></l-tinymce>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from 'vuex'
import rulesUtil from '@/utils/rules'
import LTinymce from 'components/common/tinymce'

export default {
  name: 'LForms',
  components: {
    LTinymce
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    datas: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters([
      // 'formDatas',
      'formFields'
    ])
  },
  data () {
    return {
      rules: {},
      editor: null,
      uploadFiles: [],
      formDatas: {}
    }
  },
  mounted () {

  },
  created () {
    this.formDatas = this.datas
    this.$store.dispatch('getFormFields', Object.keys(this.formDatas))
    this.rules = this.configRules(this.formDatas)

    this.$nextTick(function () {
      this.$refs['form'].resetFields()
    })

    console.log('forms: ', this.formDatas, this.formFields)
  },
  destroyed () {

  },
  methods: {
    isType: function (item, type) {
      return item.type === type
    },
    configRules: function (datas) {
      let obj = {}
      Object.keys(datas).forEach((val) => {
        obj[val] = rulesUtil[val]
      })

      return obj
    },
    placeholder: function (str) {
      return '请输入' + str
    },
    resetFields: function () {
      this.$store.dispatch('resetForm')
      this.$refs['form'].resetFields()
    },
    getUEContent: function () {
      return this.editor.getContent()
    },
    handlePreview: function (file) {
      console.log('handlePreview: ', file)
      window.open(file.url)
    },
    handleRemove: function (file, fileList) {
      console.log('handleRemove: ', file, fileList)
      this.formDatas.attachment = fileList
    },
    handleUploadFilesSuccess: function (res, file) {
      console.log('handleUploadSuccess: ', res, file)
      this.formDatas.attachment.push(file)
      console.log('this.formData: ', this.formDatas)
    },
    handleUploadAvatarSuccess: function (res, file) {
      console.log('handleUploadSuccess: ', res, file)
      this.formDatas.avatar = file
    },
    beforeUpload: function () {

    }
  }
}
</script>

<style lang="scss">
.l-forms {
  height: 100%;
  // overflow: hidden;
  padding: 20px 80px 50px 10px;
  .form {
    .upload-avatar {
      .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        &:hover {
          border-color: #20a0ff;
        }

        .avatar {
          width: 178px;
          height: 178px;
          display: block;
        }

        .avatar-icon {
          font-size: 28px;
          color: #8c939d;
          width: 178px;
          height: 178px;
          line-height: 178px;
          text-align: center;
        }
      }
    }
  }
}
</style>
