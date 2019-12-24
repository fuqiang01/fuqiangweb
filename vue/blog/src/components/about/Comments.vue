<template>
    <div :class="['comments',aboutBgWhite && 'bg-white']">
        <CommentBox @release="onRelease"/>
        <CommentItem :commentsData="commentsData" />
    </div>
</template>

<script>
import CommentBox from "./CommentBox";
import CommentItem from "./CommentItem";
import { mapState } from "vuex";
import Api from "@/api";
export default {
    props: ["id"],
    components: {
        CommentItem,
        CommentBox
    },
    data() {
        return {
            commentsData: []
        };
    },
    computed: {
        ...mapState(["aboutBgWhite"])
    },
    methods: {
        queryComments() {
            Api.getComments().then(res => {
                this.commentsData = res.data.data;
            });
        },
        onRelease(){
            this.queryComments();
        }
    },
    mounted() {
        this.queryComments();
    }
};
</script>

<style lang="scss">
.comments {
    color: #fff;
    padding: 30px;
    border-radius: 5px;
    &.bg-white {
        background: #fff;
    }
}
</style>