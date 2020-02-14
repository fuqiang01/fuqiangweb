<template>
    <div class="home-analysis">
        <p class="home-analysis-title">访问量</p>
        <div id="analysis-container"></div>
    </div>
</template>

<script>
import G2 from "@antv/g2";
import Api from '@/api'
export default {
    methods: {
        createAnalysis(data) {
            const chart = new G2.Chart({
                container: "analysis-container",
                forceFit: true,
                height: 500
            });
            chart.source(data);
            chart
                .interval()
                .position("tag*views")
                .color("name")
                .adjust([
                    {
                        type: "dodge",
                        marginRatio: 0
                    }
                ]);
            chart.render();
        },
        queryTagViewsData(num){
            Api.getTagViews(num)
                .then(res => { 
                    // 柱形图只显示10组
                    this.createAnalysis(res.data.slice(0, 3 * 10));
                })
        }
    },
    mounted() {
        this.queryTagViewsData();
    }
};
</script>

<style lang="scss">
.home-analysis {
    background: #fff;
    margin-bottom: 20px;
    .home-analysis-title{
        line-height: 50px;
        font-size: 16px;
        padding-left: 30px;
        border-bottom: 1px solid #e8e8e8;
    }
    #analysis-container{
        overflow-x: auto;
        &::-webkit-scrollbar {
            height: 5px;
            width: 5px;
        }
        &::-webkit-scrollbar-track {
            background: #f8f8f8;
            border-radius: 2px;
        }
        &::-webkit-scrollbar-thumb {
            background: #eee;
            border-radius: 10px;
        }
        &::-webkit-scrollbar-thumb:hover {
            background: #999;
        }
    }
}
</style>