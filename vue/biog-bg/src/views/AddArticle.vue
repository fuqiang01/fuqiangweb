<template>
    <div class="add-article" @keyup.enter="keyEnter">
        <!-- <RichText /> -->
        <a-form id="components-form-demo-normal-login" class="add-form" @submit="handleSubmit" :form="form">
            <AddArticleTitle />
            <TypeSelection />
            <Tags />
            <RichText v-if="showRichText" />
            <a-form-item>
                <a-button type="primary" html-type="submit" class="add-form-button">确认提交</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import AddArticleTitle from "@/components/addArticle/AddArticleTitle";
import RichText from "@/components/addArticle/RichText";
import Tags from "@/components/addArticle/Tags";
import TypeSelection from "@/components/addArticle/TypeSelection";
export default {
    components: {
        AddArticleTitle,
        RichText,
        Tags,
        TypeSelection
    },
    computed: {
        showRichText() {
            const arr = ["talk", "music"];
            return !arr.includes(this.$route.params.type);
        }
    },
    methods: {
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    console.log("Received values of form: ", values);
                }
            });
        },
        keyEnter(e) {
            if (!e.ctrlKey) return;
            console.log("ctrl + Enter 可以提交了");
        }
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: "normal_login" });
    },
    mounted() {}
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