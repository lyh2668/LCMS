<template>
  <div class="tinymce-textarea" id="tinymceEditer"></div>
</template>

<script>
// import tinymce from 'tinymce'

export default {
  name: 'LTinymce',
  data () {
    return {
      /* global tinymce */
      tinymce: tinymce
    }
  },
  methods: {
    init () {
      this.$nextTick(() => {
        // let height = window.document.body.offsetHeight - 300
        let height = 400
        console.log(height)
        this.tinymce.init({
          selector: '#tinymceEditer',
          branding: false,
          elementpath: false,
          height: height,
          language: 'zh_CN.GB2312',
          menubar: 'edit insert view format table tools',
          plugins: [
            'advlist autolink lists link image charmap print preview hr anchor pagebreak imagetools',
            'searchreplace visualblocks visualchars code fullpage',
            'insertdatetime media nonbreaking save table contextmenu directionality',
            'emoticons paste textcolor colorpicker textpattern imagetools codesample'
          ],
          toolbar1: ' newnote print preview | undo redo | insert | styleselect | forecolor backcolor bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image emoticons media codesample',
          autosave_interval: '20s',
          image_advtab: true,
          table_default_styles: {
            width: '100%',
            borderCollapse: 'collapse'
          },
          setup: function (editor) {
            editor.on('init', function (e) {
              if (localStorage.editorContent) {
                this.tinymce.get('tinymceEditer').setContent(localStorage.editorContent)
              }
            })
            editor.on('keydown', function (e) {
              localStorage.editorContent = this.tinymce.get('tinymceEditer').getContent()
            })
          }
        })
      })
    }
  },
  created () {
    this.init()
  },
  destroyed () {
    this.tinymce.get('tinymceEditer').destroy()
  }
}
</script>

<style lang="scss">

</style>
