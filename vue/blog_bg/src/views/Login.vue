<template>
    <div class="login">
        <a-form
            id="components-form-demo-normal-login"
            :form="form"
            class="login-form"
            @submit="handleSubmit"
        >
            <a-form-item>
                <a-input
                    v-decorator="['userName',{ rules: [{ required: true, message: 'Please input your username!' }] },]"
                    placeholder="Username"
                >
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                    v-decorator="['password', { rules: [{ required: true, message: 'Please input your Password!' }] },]"
                    type="password"
                    placeholder="Password"
                >
                    <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-button type="primary" html-type="submit" style="width: 100%">登录</a-button>
            </a-form-item>
        </a-form>
    </div>
</template>

<script>
import Api from "@/api";
import { mapMutations } from "vuex";
export default {
    beforeCreate() {
        this.form = this.$form.createForm(this, { name: "normal_login" });
    },
    methods: {
        ...mapMutations(["setUserInfo"]),
        handleSubmit(e) {
            e.preventDefault();
            this.form.validateFields((err, values) => {
                if (!err) {
                    Api.login(values).then(res => {
                        if (res.data === "ok") {
                            this.setUserInfo({user:values.userName}); // 将用户名存起来
                            this.$router.push("/");
                        }
                        else{
                            this.$message.error('账号或密码错误！');
                        }
                    });
                }
            });
        }
    }
};
</script>

<style>
.login {
    width: 400px;
    margin: 200px auto;
}
</style>