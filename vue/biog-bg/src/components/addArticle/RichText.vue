<template>
    <a-form-item class="edit_container" v-if="showFromItemObj.richText">
        <quill-editor
            v-model="richText"
            ref="myQuillEditor"
            :options="editorOption"
        ></quill-editor>
    </a-form-item>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import hljs from "highlight.js"; //导入代码高亮文件
import "highlight.js/styles/monokai-sublime.css"; //导入代码高亮样式
import {mapState, mapMutations} from 'vuex'
export default {
    components: {
        quillEditor
    },
    data() {
        return {
            editorOption: {
                modules: {
                    toolbar: [
                        ["bold", "italic", "underline", "strike"],
                        ["blockquote", "code-block"],
                        [{ header: 1 }, { header: 2 }],
                        [{ list: "ordered" }, { list: "bullet" }],
                        [{ script: "sub" }, { script: "super" }],
                        [{ indent: "-1" }, { indent: "+1" }],
                        [{ direction: "rtl" }],
                        [{ size: ["small", false, "large", "huge"] }],
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        [{ font: [] }],
                        [{ color: [] }, { background: [] }],
                        [{ align: [] }],
                        ["clean"],
                        ["link", "image", "video"]
                    ],
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