<template>
    <div class="type-selection">
        <a-select defaultValue="plainText" style="width: 300px" @change="handleChange">
            <a-select-option value="plainText">
                <a-icon type="login" class="type-selection-icon" />纯文本
            </a-select-option>
            <a-select-option value="smallImg">小图</a-select-option>
            <a-select-option value="bigImg">大图</a-select-option>
            <a-select-option value="music">音乐</a-select-option>
            <a-select-option value="video">视屏</a-select-option>
            <a-select-option value="talk">毒鸡汤</a-select-option>
        </a-select>
    </div>
</template>

<script>
export default {
    methods: {
      handleChange(value) {
        console.log(`selected ${value}`);
      },
    }
};
</script>

<style>
.type-selection-icon{
    color: rgba(0,0,0,.25);
    margin-right: 10px;
}
</style>