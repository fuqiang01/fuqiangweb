<template>
    <transition name="fade">
        <div class="cover-layer" @click="wrapTap" v-if="isShow">
            <div class="cover-content" @click="contentTap">
                <slot />
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: ["isShow"],
    methods: {
        wrapTap() {
            this.$emit("close");
            // e.stopPropagation();
        },
        contentTap(e) {
            e.stopPropagation();
        }
    }
};
</script>

<style lang="scss">
.cover-layer {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    .cover-content {
        color: #fff;
    }
}
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}
.fade-leave,.fade-enter-to{
    opacity: 1;
}
</style>