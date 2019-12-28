<template>
    <div class="add-article">
        <!-- <RichText /> -->
        <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
        >
            <a-form-item>
                <a-input
                    v-decorator="['userName',{ rules: [{ required: true, message: '标题不可为空！' }] },]"
                    placeholder="标题"
                >
                    <a-icon slot="prefix" type="edit" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <TypeSelection />
            </a-form-item>
            <a-form-item>
                <ArticleOrigin />
            </a-form-item>
            <a-form-item>
                <Tags />
            </a-form-item>
            <a-form-item>
                <RichText />
            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit" class="login-form-button">Log in</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import RichText from "@/components/addArticle/RichText";
import Tags from "@/components/addArticle/Tags";
import ArticleOrigin from "@/components/addArticle/ArticleOrigin";
import TypeSelection from "@/components/addArticle/TypeSelection";
export default {
    components: {
        RichText,
        Tags,
        ArticleOrigin,
        TypeSelection
    },
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: "normal_login" });
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
        
    },
    mounted(){
        
    }
};
</script>

<style lang="scss">
.add-article {
    background: #fff;
    margin: 20px;
    padding: 20px;
    #components-form-demo-normal-login .login-form {
        max-width: 300px;
    }
    #components-form-demo-normal-login .login-form-button {
        width: 100%;
    }
}
</style>