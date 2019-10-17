<template>
    <div class="content container clearfloat">
        <div class="con-left">
            <div class="category">
                <a href="#" class="active">注册公司</a>
                <a href="#">代理记账</a>
                <a href="#">商标代理</a>
                <a href="#">工商百科</a>
            </div>
            <p class="line"><span class="colorLine"></span></p>
            <ul>
                <li v-for="item in news" :key="item.id">
                    <div class="text">
                        <h3>
                            <a :href="item.url">{{ item.title }}</a>
                        </h3>
                        <p class="info">
                            <a :href="item.url">{{ item.info }}</a>
                        </p>
                        <p class="date">
                            <span class="glyphicon glyphicon-time"></span>
                            <span>{{ item.date }}</span>
                            <span class="reading">{{ item.reding }}阅读</span>
                        </p>
                    </div>
                    <div class="img">
                        <a :href="item.url">
                            <img :src="item.imgSrc" alt="">
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="con-right">
            <p class="right-title">周热榜</p>
            <p class="line"></p>
            <ul class="list-a">
                <li v-for="item in hotList" :key="item.id">
                    <a :href="item.url">{{ item.title }}</a>
                </li>
            </ul>
            <p class="right-title">最新干货</p>
            <p class="line"></p>
            <ul class="list-b">
                <li v-for="item in newList" :key="item.id">
                    <a :href="item.url">{{ item.title }}</a>
                    <span>{{ item.date }}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            hotList: [
                {
                    id: 11,
                    url: '#',
                    title: '太好了！今天起这两个申报正式合并！税局新政策！财务工作大大减轻！',
                },
                {
                    id: 12,
                    url: '#',
                    title: '太好了！今天起这两个申报正式合并！税局新政策！财务工作大大减轻！',
                },
                {id: 13,
                    url: '#',
                    title: '太好了！今天起这两个申报正式合并！税局新政策！财务工作大大减轻！',
                },
                {
                    id: 14,
                    url: '#',
                    title: '太好了！今天起这两个申报正式合并！税局新政策！财务工作大大减轻！',
                },
                {
                    id: 15,
                    url: '#',
                    title: '太好了！今天起这两个申报正式合并！税局新政策！财务工作大大减轻！',
                }
            ],
            newList: [
                {
                    id: 21,
                    url: '#',
                    title: '太好了！今天起这两个申报正式合并！税局新政策！财务工作大大减轻！',
                    date: '2019-08-02',
                },
                {
                    id: 22,
                    url: '#',
                    title: '太好了！今天起这两个申报正式合并！税局新政策！财务工作大大减轻！',
                    date: '2019-08-02',
                },
                {
                    id: 23,
                    url: '#',
                    title: '太好了！今天起这两个申报正式合并！税局新政策！财务工作大大减轻！',
                    date: '2019-08-02',
                },
                {
                    id: 24,
                    url: '#',
                    title: '太好了！今天起这两个申报正式合并！税局新政策！财务工作大大减轻！',
                    date: '2019-08-02',
                },
                {
                    id: 25,
                    url: '#',
                    title: '太好了！今天起这两个申报正式合并！税局新政策！财务工作大大减轻！',
                    date: '2019-08-02',
                },
            ],
            news: [
                {
                    id: 111,
                    url: "#",
                    imgSrc: require('@/assets/img/news_1.jpg'),
                    title: '餐饮发票入账该如何v该如何该如何该如何？据说80%的财务都没搞懂',
                    info: '餐饮增值税发票=税发票=业务招待费税发票=业务招待费税发票=业务招待费税发票=业务招待费业税发票=业务招待费务招待费？这一论断并不新奇，很久以来就有；令人惊讶的是，直到今天还有不少会计这样处理！',
                    date: '2019-10-17',
                    reding: '1400'
                },
                {
                    id: 112,
                    url: "#",
                    imgSrc: require('@/assets/img/news_1.jpg'),
                    title: '餐饮发票入账该如何v该如何该如何该如何？据说80%的财务都没搞懂',
                    info: '餐饮增值税发票=税发票=业务招待费税发票=业务招待费税发票=业务招待费税发票=业务招待费业税发票=业务招待费务招待费？这一论断并不新奇，很久以来就有；令人惊讶的是，直到今天还有不少会计这样处理！',
                    date: '2019-10-17',
                    reding: '1400'
                },
                {
                    id: 113,
                    url: "#",
                    imgSrc: require('@/assets/img/news_1.jpg'),
                    title: '餐饮发票入账该如何v该如何该如何该如何？据说80%的财务都没搞懂',
                    info: '餐饮增值税发票=税发票=业务招待费税发票=业务招待费税发票=业务招待费税发票=业务招待费业税发票=业务招待费务招待费？这一论断并不新奇，很久以来就有；令人惊讶的是，直到今天还有不少会计这样处理！',
                    date: '2019-10-17',
                    reding: '1400'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    @import '@/assets/style/news/content';
</style>