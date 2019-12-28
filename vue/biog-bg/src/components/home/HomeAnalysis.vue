<template>
    <div class="home-analysis">
        <p class="home-analysis-title">访问量</p>
        <div id="analysis-container"></div>
    </div>
</template>

<script>
import G2 from "@antv/g2";
export default {
    methods: {
        createAnalysis() {
            const data = [
                { name: "London", 月份: "一", 月均降雨量: 18.9 },
                { name: "London", 月份: "二", 月均降雨量: 28.8 },
                { name: "London", 月份: "三", 月均降雨量: 39.3 },
                { name: "London", 月份: "四", 月均降雨量: 181.4 },
                { name: "London", 月份: "五", 月均降雨量: 47 },
                { name: "London", 月份: "六", 月均降雨量: 20.3 },
                { name: "London", 月份: "七", 月均降雨量: 24 },

                { name: "Berlin", 月份: "一", 月均降雨量: 12.4 },
                { name: "Berlin", 月份: "二", 月均降雨量: 23.2 },
                { name: "Berlin", 月份: "三", 月均降雨量: 34.5 },
                { name: "Berlin", 月份: "四", 月均降雨量: 99.7 },
                { name: "Berlin", 月份: "五", 月均降雨量: 52.6 },
                { name: "Berlin", 月份: "六", 月均降雨量: 35.5 },
                { name: "Berlin", 月份: "七", 月均降雨量: 37.4 },

                { name: "a", 月份: "一", 月均降雨量: 12.4 },
                { name: "a", 月份: "二", 月均降雨量: 23.2 },
                { name: "a", 月份: "三", 月均降雨量: 34.5 },
                { name: "a", 月份: "四", 月均降雨量: 99.7 },
                { name: "a", 月份: "五", 月均降雨量: 52.6 },
                { name: "a", 月份: "六", 月均降雨量: 35.5 },
                { name: "a", 月份: "七", 月均降雨量: 37.4 }
            ];

            const chart = new G2.Chart({
                container: "analysis-container",
                forceFit: true,
                height: 500
            });
            chart.source(data);
            chart
                .interval()
                .position("月份*月均降雨量")
                .color("name")
                .adjust([
                    {
                        type: "dodge",
                        marginRatio: 0
                    }
                ]);
            chart.render();
        }
    },
    mounted() {
        this.createAnalysis();
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