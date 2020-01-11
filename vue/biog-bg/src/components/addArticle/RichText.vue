<template>
    <a-form-item class="edit_container" v-if="showFromItemObj.richText">
        <quill-editor v-model="richText" ref="myQuillEditor" :options="editorOption"></quill-editor>
    </a-form-item>
</template>

<script>

import { quillEditor, Quill } from "vue-quill-editor";
import { container, ImageExtend, QuillWatch } from "quill-image-extend-module";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import hljs from "highlight.js"; //导入代码高亮文件
import "highlight.js/styles/monokai-sublime.css"; //导入代码高亮样式
import {mapState, mapMutations} from 'vuex'

Quill.register("modules/ImageExtend", ImageExtend);
export default {
    components: {
        quillEditor
    },
    data() {
        return {
            editorOption: {
                modules: {
                    ImageExtend: {
                        loading: true,
                        name: "img",
                        action:
                            "http://127.0.0.1:12306/getImg",
                        response: res => {
                            return res.url;
                        }
                    },
                    toolbar: {
                        container: container,
                        handlers: {
                            image: function() {
                                QuillWatch.emit(this.quill.id);
                            }
                        }
                    },
                    syntax: {
                        highlight: text => hljs.highlightAuto(text).value
                    }
                }
            }
        };
    },
    computed: {
        ...mapState(['fromData', 'showFromItemObj']),
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
        richText: {
            get(){
                return this.fromData.richText;
            },
            set(value){
                console.log(value)
                this.setFromData({richText: value})
            }
        }
    },
    methods: {
        ...mapMutations(['setFromData'])
    }
};
</script>

<style lang="scss">
.ql-editor {
    min-height: 400px;
    font-size: 14px;
}
.ql-snow {
    .ql-picker-label::before {
        position: absolute;
    }
    .ql-color-picker .ql-picker-label svg,
    .ql-icon-picker .ql-picker-label svg {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
}
</style>