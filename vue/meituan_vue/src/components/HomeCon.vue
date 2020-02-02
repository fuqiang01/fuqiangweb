<template>
    <div class="content">
        <div class="container">
            <el-row>
                <el-col :span="5">
                    <ServerList />
                </el-col>
                <el-col :span="19">
                    <BannerCon />
                </el-col>
            </el-row>
        </div>
        <Server />
    </div>
</template>

<script>
import ServerList from './ServerList'
import BannerCon from './BannerCon'
import Server from './Server'
export default {
    components: {
        ServerList,
        BannerCon,
        Server
    }
}
</script>

<style lang="scss" scoped>
.content{
    background: #f8f8f8;
}
</style>