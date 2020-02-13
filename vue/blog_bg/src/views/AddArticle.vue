<template>
    <div class="add-article" @keyup.enter="keyEnter">
        <a-form id="components-form-demo-normal-login" class="add-form" :form="form">
            <AddArticleTitle />
            <TypeSelection />
            <Tags />
            <RichText />
            <a-form-item>
                <a-button type="primary" @click="handleSubmit" class="add-form-button">确认提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import AddArticleTitle from "@/components/addArticle/AddArticleTitle";
import RichText from "@/components/addArticle/RichText";
import Tags from "@/components/addArticle/Tags";
import TypeSelection from "@/components/addArticle/TypeSelection";
import { mapState, mapMutations, mapActions } from "vuex";
import Api from "@/api";
export default {
    components: {
        AddArticleTitle,
        RichText,
        Tags,
        TypeSelection
    },
    computed: {
        ...mapState(["fromData", "showFromItemObj"])
    },
    methods: {
        ...mapMutations(["setFromData", "setShowFromItemObj"]),
        ...mapActions(["queryHotTags"]),
        // 校验数据
        checkFromData() {
            let bool = true;
            // 可以为空的数据
            const canBeNull = ["id", "buzz", "originUrl"];
            for (const key in this.showFromItemObj) {
                if (this.showFromItemObj.hasOwnProperty(key)) {
                    if (this.showFromItemObj[key] && !canBeNull.includes(key)) {
                        const val = this.fromData[key];
                        if (val === "") {
                            bool = false;
                            this.$message.warning(`${key}值不能为空！`);
                        }
                    }
                    // 把不需要显示出来的数据对应的值改为空
                    if (!this.showFromItemObj[key]) {
                        this.setFromData({ [key]: "" });
                    }
                }
            }
            return bool;
        },
        // 返回创建请求，或者修改请求
        getRequestMethod(formData) {
            // 判断是否是修改博客，有id值代表是修改博客
            if (this.fromData.id) {
                // 修改博客
                return Api.editorBlog(formData);
            }
            // 创建博客
            return Api.addBlog(formData);
        },
        //数据提交函数
        handleSubmit() {
            // 校验数据
            if (!this.checkFromData()) return;
            // 校验成功
            const submiting = this.$message.loading("上传中...", 0);
            // 创建form数据
            let myForm = new FormData();
            for (const key in this.fromData) {
                if (this.fromData.hasOwnProperty(key)) {
                    const element = this.fromData[key];
                    myForm.append(key, element);
                }
            }
            this.getRequestMethod(myForm)
                .then(res => {
                    submiting();
                    if (res.data === "ok") {
                        this.$message.success("提交成功！");
                        // 将表单数据置空
                        this.setFromData({
                            id: "",
                            title: "",
                            songName: "",
                            singer: "",
                            buzz: "",
                            weight: 1,
                            imgFileData: "",
                            musicVideoData: "",
                            origin: "",
                            originUrl: "",
                            tags: "",
                            richText: ""
                        });
                        // 热门标签重新加载
                        this.queryHotTags();
                        this.$router.push('/list');
                    }
                    else{
                        this.$message.error("提交失败！服务器错误！");
                    }
                    console.log(res);
                })
                .catch(err => {
                    submiting();
                    this.$message.error("提交失败！");
                    console.log(err);
                });
        },
        keyEnter(e) {
            // 点击 ctrl + Enter 提交数据
            if (!e.ctrlKey) return;
            // this.handleSubmit();
        },
        // 初始化哪些表单显示与不显示
        initShowFromItemObj() {
            const obj = {};
            const { origin = false, originUrl = false } = this.showFromItemObj;
            for (let prev in this.fromData) {
                obj[prev] = false;
            }
            Object.assign(obj, { origin, originUrl });
            this.setShowFromItemObj(obj);
        },
        // 根据文章类型来改变每种表单的显示与不显示
        changeShowFromItemObjByType(type) {
            this.setFromData({ styleType: type });
            this.initShowFromItemObj();
            let defaultObj = {
                id: true, // 虽然id没有显示项，但是为了避免设置为空串，还是设置为true
                title: true,
                blogType: true,
                styleType: true,
                weight: true,
                tags: true,
                richText: true
            };
            switch (type) {
                case "bigImg":
                case "smallImg":
                    defaultObj.imgFileData = true;
                    break;
                case "music":
                    Object.assign(defaultObj, {
                        title: false,
                        songName: true,
                        singer: true,
                        buzz: true,
                        richText: false,
                        musicVideoData: true,
                        imgFileData: true
                    });
                    break;
                case "video":
                    defaultObj.musicVideoData = true;
                    break;
                case "talk":
                    defaultObj.richText = false;
            }
            this.setShowFromItemObj(defaultObj);
        }
    },
    beforeRouteUpdate(to, from, next) {
        const type = to.params.type;
        this.changeShowFromItemObjByType(type);
        next();
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: "normal_login" });
    },
    mounted() {
        this.changeShowFromItemObjByType(this.$route.params.type);
    }
};
</script>

<style lang="scss">
.add-article {
    background: #fff;
    margin: 20px;
    padding: 20px;
    #components-form-demo-normal-login .add-form {
        max-width: 300px;
    }
    #components-form-demo-normal-login .add-form-button {
        width: 100%;
        height: 40px;
        line-height: 40px;
    }
}
</style>