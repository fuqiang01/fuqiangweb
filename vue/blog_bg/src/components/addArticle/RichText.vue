<template>
    <a-form-item class="edit_container" v-if="showFromItemObj.richText">
        <quill-editor
            v-model="richText"
            ref="myQuillEditor"
            :options="editorOption"
        ></quill-editor>
        <!-- <div class="quill-controller" @mousedown="QCDown"></div> -->
    </a-form-item>
</template>

<script>
import { quillEditor, Quill } from "vue-quill-editor";
import { container, ImageExtend, QuillWatch } from "quill-image-extend-module";
// 这里使用了cdn的话，可以注释掉
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import hljs from "highlight.js"; //导入代码高亮文件
import "highlight.js/styles/vs2015.css"; //导入代码高亮样式
import { mapState, mapMutations } from "vuex";
import Urls from "@/api/urls";

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
                        name: "file",
                        action: Urls.baseURL + Urls.setFileToCos,
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
            },
            // quillHeight: 400,
            // listPoint: 0
        };
    },
    computed: {
        ...mapState(["fromData", "showFromItemObj"]),
        editor() {
            return this.$refs.myQuillEditor.quill;
        },
        richText: {
            get() {
                return this.fromData.richText;
            },
            set(value) {
                this.setFromData({ richText: value });
            }
        }
    },
    methods: {
        ...mapMutations(["setFromData"]),
        // QCDown(e) {
        //     this.listPoint = e.clientY;
        //     this.canMove = true;
        //     document.onmousemove = e => {
        //         const nowPoint = e.clientY;
        //         this.quillHeight = this.quillHeight + nowPoint - this.listPoint;
        //         this.listPoint = nowPoint;
        //     }
        //     document.onmouseup = () => {
        //         document.onmousemove = document.onmouseup = null;
        //     }
        // }
    }
};
</script>

<style lang="scss">
// .quill-controller {
//     height: 10px;
//     margin-top: -5px;
//     position: relative;
//     cursor: pointer;
// }
.ql-editor {
    height: 500px;
    padding-bottom: 200px;
    overflow-y: auto;
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