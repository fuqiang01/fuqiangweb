<template>
    <div class="home-header">
        <div class="home-header-left">
            <div class="img">
                <img :src="userInfo.headerPhoto || 'http://cos.fqiang.co/blog/test1.jpg'"/>
            </div>
            <div class="text">
                <p class="p1">{{ userInfo.name }}</p>
                <p class="p2">{{ userInfo.signature }}</p>
            </div>
        </div>
        <ul class="home-header-right">
            <li>
                <p class="p1">今日上传文章数</p>
                <p class="p2">{{ numObj.todayRelease }}</p>
            </li>
            <li>
                <p class="p1">文章总数</p>
                <p class="p2">{{ numObj.allRelease || 0 }}</p>
            </li>
            <li>
                <p class="p1">今日浏览量</p>
                <p class="p2">{{ numObj.todayBrowse }}</p>
            </li>
            <li>
                <p class="p1">总浏览量</p>
                <p class="p2">{{ numObj.allBrowse || 0 }}</p>
            </li>
        </ul>
    </div>
</template>

<script>
import Api from '@/api';
import {mapState} from 'vuex'
export default {
    data(){
        return {
            numObj: {
                todayRelease: 0,
                todayBrowse: 0,
                allRelease: 0,
                allBrowse: 0
            }
        }
    },
    computed: {
        ...mapState(['userInfo'])
    },
    methods: {
        queryLogs(){
            Api.getLogs()
                .then(res => {
                    this.numObj = {
                        ...res.data
                    }
                })
        }
    },
    mounted(){
        this.queryLogs();
    }
};
</script>

<style lang="scss">
.home-header {
    margin: 3px;
    display: flex;
    justify-content: space-between;
    background: #fff;
    padding: 0 30px;
    height: 100px;
    .home-header-left {
        display: flex;
        align-items: center;
        .img {
            img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
        }
        .text {
            padding-left: 20px;
            .p1 {
                font-size: 16px;
                font-weight: bold;
                margin: 0;
            }
            .p2 {
                margin: 0;
                padding-top: 10px;
            }
        }
    }
    .home-header-right {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            position: relative;
            padding: 0 25px;
            &:not(:last-of-type) {
                &::after {
                    content: "";
                    display: block;
                    width: 1px;
                    height: 35px;
                    background: #e8e8e8;
                    position: absolute;
                    right: 0;
                }
            }
            p {
                margin: 0;
                &.p1 {
                    font-weight: bold;
                    color: #666;
                }
                &.p2 {
                    font-size: 20px;
                    font-weight: bold;
                    color: #777;
                    text-align: center;
                }
            }
        }
    }
}
</style>