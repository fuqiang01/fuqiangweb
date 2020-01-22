<template>
    <div :class="['comments',aboutBgWhite && 'bg-white']">
        <CommentBox />
        <CommentItem :commentsData="commentsData" />
    </div>
</template>

<script>
import CommentBox from "./CommentBox";
import CommentItem from "./CommentItem";
import { mapState, mapActions } from "vuex";
export default {
    components: {
        CommentItem,
        CommentBox
    },
    computed: {
        ...mapState(["aboutBgWhite", "commentsData"])
    },
    methods: {
        ...mapActions(['queryComments'])
    },
    mounted() {
        this.queryComments(this.$route.params.id);
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