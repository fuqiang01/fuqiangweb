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
import { mapState, mapMutations } from "vuex";
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
        ...mapMutations(["setFromData","setShowFromItemObj"]),
        checkFromData() {
            let bool = true;
            const canBeNull = ["buzz", "originUrl"];
            for (const key in this.showFromItemObj) {
                if (this.showFromItemObj.hasOwnProperty(key)) {
                    if (this.showFromItemObj[key] && !canBeNull.includes(key)) {
                        const val = this.fromData[key];
                        if (val === "") {
                            bool = false;
                            this.$message.warning(`${key}值不能为空！`);
                        }
                    }
                    if( !this.showFromItemObj[key] ){
                        this.setFromData({ [key]: '' })
                    }
                }
            }
            return bool;
        },
        handleSubmit() {
            if (!this.checkFromData()) return;
            let myForm = new FormData();
            for (const key in this.fromData) {
                if (this.fromData.hasOwnProperty(key)) {
                    const element = this.fromData[key];
                    myForm.append( key, element )
                }
            }
            console.log(myForm);
        },
        keyEnter(e) {
            if (!e.ctrlKey) return;
            console.log("ctrl + Enter 可以提交了");
        },
        initShowFromItemObj() {
            const obj = {};
            const { origin = false, originUrl = false } = this.showFromItemObj;
            for (let prev in this.fromData) {
                obj[prev] = false;
            }
            Object.assign(obj, { origin, originUrl });
            this.setShowFromItemObj(obj);
        },
        changeShowFromItemObjByType(type) {
            this.initShowFromItemObj();
            let defaultObj = {
                title: true,
                type: true,
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