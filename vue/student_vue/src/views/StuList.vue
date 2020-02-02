<template>
    <div class="right">
        <div class="search">
            <input type="text" placeholder="请输入搜索关键字" v-model="searchText">
            <span @click="onSearch">搜索</span>
        </div>
        <table>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>邮箱</th>
                <th>年龄</th>
                <th>手机号</th>
                <th>住址</th>
                <th>操作</th>
            </tr>
            <tr v-for="(item,index) in stuList" :key="index">
                <td>{{ item.sNo }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.sex === 0? "男" : "女" }}</td>
                <td>{{ item.email }}</td>
                <td>{{ new Date().getFullYear() - item.birth }}</td>
                <td>{{ item.phone }}</td>
                <td>{{ item.address }}</td>
                <td>
                    <span class="modify" @click="onModify(item)">修改</span>
                    <span class="del" @click="onDel(item.sNo, index)">删除</span>
                </td>
            </tr>
        </table>
        <From></From>
        <ChangePage></ChangePage>
    </div>
</template>

<script>
import api from "../api";
import From from "../components/From";
import ChangePage from "../components/ChangePage";
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
    components: {
        From,
        ChangePage
    },
    methods: {
        ...mapActions(['getStuList']),
        ...mapMutations(['setModifyingStu', 'setShowFrom', 'setStuList', 'setSearchText','setNowPage']),
        onModify(stuData) {
            this.setModifyingStu(stuData);
            this.setShowFrom(true);
        },
        onDel( sNo, index) {
            if ( this.stuList.length === 1 && this.nowPage !== 1) {
                this.setNowPage( this.nowPage - 1)
            }
            api.delBySno( sNo)
                .then( res => {
                    alert(res.data.msg);
                })
                .catch( err => {
                    alert(err.data.msg);
                })
            this.getStuList();
        },
        onSearch() {
            this.setSearchText(this.searchText);
            this.setNowPage(1);
            this.getStuList();
        }
    },
    created() {
        this.getStuList();
    },
    data() {
        return{
            searchText: ''
        }
    },
    computed: {
        ...mapState(['stuList','nowPage'])
    },
}
</script>



<style lang="less" scoped>
    .right{
        box-sizing: border-box;
        .search{
            margin: 20px;
            display: inline-block;
            border: 1px solid #a4a4a4;
            input{
                vertical-align: middle;
                line-height: 30px;
                width: 200px;
                border: none;
                outline: none;
                padding-left: 20px;
            }
            span{
                line-height: 35px;
                background: #a4a4a4;
                display: inline-block;
                vertical-align: middle;
                text-align: center;
                padding: 0 25px;
                cursor: pointer;
            }
        }
        table{
            width: 100%;
            tr{
                line-height: 40px;
                th{
                    background: #e3e8ee;
                    color: #b3bcc5;
                    min-width: 80px;
                }
                td{
                    min-width: 80px;
                    background: #fff;
                    text-align: center;
                    span{
                        padding: 5px 15px;
                        margin: 0 5px;
                        border-radius: 5px;
                        font-size: 14px;
                        color: #fff;
                        &.modify{
                            background: green;
                            cursor: pointer;
                        }
                        &.del{
                            background: red;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>