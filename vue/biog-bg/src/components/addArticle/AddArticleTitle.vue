<template>
    <div class="add-article-title">
        <a-form-item v-if=" this.$route.params.type !== 'music' ">
            <a-input
                v-decorator="[
                    'title',
                    { rules: [{ required: true, message: '标题不能为空!' }] },
                ]"
                placeholder="标题">
                <a-icon slot="prefix" type="font-size" style="color: rgba(0,0,0,.25)" />
            </a-input>
        </a-form-item>
        <div class="add-article-title-music" v-else>
            <a-form-item>
                <a-input
                    v-decorator="[
                        'songName',
                        { rules: [{ required: true, message: '歌名不能为空！' }] },
                    ]"
                    placeholder="歌名"
                    style="width: 300px; marginRight: 10px;">
                    <a-icon slot="prefix" type="star" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item>
                <a-input
                    v-decorator="[
                        'singer',
                        { rules: [{ required: true, message: '歌手不能为空!' }] },
                    ]"
                    placeholder="歌手"
                    style="width: 245px"
                >
                    <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
            <a-form-item style="width: 100%;marginLeft: 10px;">
                <a-input
                    v-decorator="['buzz']"
                    placeholder="热评">
                    <a-icon slot="prefix" type="fire" style="color: rgba(0,0,0,.25)" />
                </a-input>
            </a-form-item>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
.add-article-title-music{
    display: flex;
}
</style>