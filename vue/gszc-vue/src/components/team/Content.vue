<template>
    <div class="content-wrapper">
        <div class="content container">
            <ul class="team-list clearfloat">
                <li v-for="item in teamList" :key="item.id">
                    <img :src="item.src" alt="">
                    <h3>{{ item.name }}</h3>
                    <p>{{ item.introduce }}</p>
                    <p class="team-btn">立即咨询</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            teamList: [
                {
                    id: 1,
                    src: require('@/assets/img/team_im.png'),
                    name: '李某某',
                    introduce: '咨询顾问，30年工作经验'
                },
                {
                    id: 2,
                    src: require('@/assets/img/team_im.png'),
                    name: '李某某',
                    introduce: '咨询顾问，30年工作经验'
                },
                {
                    id: 3,
                    src: require('@/assets/img/team_im.png'),
                    name: '李某某',
                    introduce: '咨询顾问，30年工作经验'
                },
                {
                    id: 4,
                    src: require('@/assets/img/team_im.png'),
                    name: '李某某',
                    introduce: '咨询顾问，30年工作经验'
                },
                {
                    id: 5,
                    src: require('@/assets/img/team_im.png'),
                    name: '李某某',
                    introduce: '咨询顾问，30年工作经验'
                },
                {
                    id: 6,
                    src: require('@/assets/img/team_im.png'),
                    name: '李某某',
                    introduce: '咨询顾问，30年工作经验'
                },
                {
                    id: 7,
                    src: require('@/assets/img/team_im.png'),
                    name: '李某某',
                    introduce: '咨询顾问，30年工作经验'
                },
                {
                    id: 8,
                    src: require('@/assets/img/team_im.png'),
                    name: '李某某',
                    introduce: '咨询顾问，30年工作经验'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/team/content';
</style>