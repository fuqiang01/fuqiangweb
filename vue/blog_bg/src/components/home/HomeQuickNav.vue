<template>
    <div class="home-quick-nav">
        <p class="home-quick-nav-title">快速开始 / 便捷导航</p>
        <div class="operation-wrap">
            <router-link
                v-for="(item,index) in userInfo.quickNav"
                :to="item.navUrl"
                :key="index"
            >{{ item.navText }}</router-link>
            <a-button icon="plus" ghost size="small" type="primary" @click="showConfirm">添加</a-button>
            <a-modal
                title="在下方编写快捷跳转的详情"
                :visible="modalVisible"
                @ok="handleOk"
                :confirmLoading="confirmLoading"
                @cancel="handleCancel"
                okText="确认创建"
                cancelText="取消"
            >
                <a-input placeholder="快捷导航名称" v-model="navText" style="margin-bottom: 20px">
                    <a-icon slot="prefix" type="tags" />
                </a-input>
                <a-input placeholder="快捷导航URL" v-model="navUrl">
                    <a-icon slot="prefix" type="paper-clip" />
                </a-input>
            </a-modal>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Api from "@/api";
export default {
    data() {
        return {
            modalVisible: false,
            confirmLoading: false,
            navText: "",
            navUrl: ""
        };
    },
    computed: {
        ...mapState(["userInfo"])
    },
    methods: {
        ...mapActions(["queryUserInfo"]),
        showConfirm() {
            this.modalVisible = true;
        },
        handleOk() {
            // 校验内容
            if (!this.handleNav(this.navText, this.navUrl)) return;
            //校验成功
            this.confirmLoading = true;
            const data = {
                user: this.userInfo.user,
                navText: this.navText,
                navUrl: this.navUrl
            };
            //发送添加请求
            Api.addUserQuickNav(data).then(() => {
                this.queryUserInfo();
                this.modalVisible = false;
                this.confirmLoading = false;
                this.navText = "";
                this.navUrl = "";
            });
        },
        handleCancel() {
            // 关闭弹窗清空输入框数据
            this.modalVisible = false;
            this.navText = "";
            this.navUrl = "";
        },
        // 校验函数
        handleNav(navText, navUrl) {
            let state = true;
            if (navText === "" || navUrl === "") {
                this.$message.warning("快捷导航名称和地址不可为空！");
                state = false;
            }
            // 因为后台是这样拼接的 navText~navUrl; 所以文字中不能有这两个符号
            const reg = /[~;]/g;
            if (reg.test(navText) || reg.test(navUrl)) {
                this.$message.warning(
                    '快捷导航名称和地址不可包含" ~ "符号和" ; "符号！'
                );
                state = false;
            }
            return state;
        }
    }
};
</script>

<style lang="scss">
.home-quick-nav {
    width: 100%;
    background: #fff;
    margin-bottom: 20px;
    .home-quick-nav-title {
        line-height: 50px;
        font-size: 16px;
        padding-left: 20px;
        border-bottom: 1px solid #e8e8e8;
        margin-bottom: 0;
    }
    .operation-wrap {
        padding: 15px 5px;
        a {
            color: #666;
            display: inline-block;
            line-height: 32px;
            padding: 0 15px;
        }
    }
}
</style>