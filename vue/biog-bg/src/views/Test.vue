<template>
    <div class="quill-wrap">
        <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption"></quill-editor>
    </div>
</template>
<script>
import { quillEditor, Quill } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { container, ImageExtend, QuillWatch } from "quill-image-extend-module";

Quill.register("modules/ImageExtend", ImageExtend);
export default {
    components: { quillEditor },
    data() {
        return {
            content: "",
            // 富文本框参数设置
            editorOption: {
                modules: {
                    ImageExtend: {
                        loading: true,
                        name: "img",
                        action:
                            "https://www.mocky.io/v2/5cc8019d300000980a055e76",
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
                    }
                }
            }
        };
    }
};
</script>