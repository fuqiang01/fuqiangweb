<template>
    <div class="home-articles-sum">
        <p class="home-articles-sum-title">各类文章数量</p>
        <div id="radar-map"></div>
    </div>
</template>

<script>
import G2 from "@antv/g2";
import { DataView } from "@antv/data-set";
import Api from '@/api'
export default {
    methods: {
        updataBlogTypeViewsData(data){
            const dataArr = [];
            data.forEach(ele => {
                const obj = { 
                    blogType: ele.blogType,
                    "发布数量": ele.release, 
                    "浏览数量": ele. browse
                }
                dataArr.push(obj);
            });
            return dataArr;
        },
        createRadarMap(data) {
            const dv = new DataView().source(data);
            dv.transform({
                type: "fold",
                fields: ["发布数量", "浏览数量"], // 展开字段集
                key: "user", // key字段
                value: "score" // value字段
            });
            const chart = new G2.Chart({
                container: "radar-map",
                forceFit: true,
                height: 500,
                padding: [20, 20, 95, 20]
            });
            chart.source(dv, {
                score: {
                    min: 0
                }
            });
            chart.coord("polar", {
                radius: 0.8
            });
            chart.axis("item", {
                line: null,
                tickLine: null,
                grid: {
                    lineStyle: {
                        lineDash: null
                    },
                    hideFirstLine: false
                }
            });
            chart.axis("score", {
                line: null,
                tickLine: null,
                grid: {
                    type: "polygon",
                    lineStyle: {
                        lineDash: null
                    },
                    alternateColor: "rgba(0, 0, 0, 0.04)"
                }
            });
            chart.legend("user", {
                marker: "circle",
                offset: 30
            });
            chart
                .line()
                .position("blogType*score")
                .color("user")
                .size(2);
            chart
                .point()
                .position("blogType*score")
                .color("user")
                .shape("circle")
                .size(4)
                .style({
                    stroke: "#fff",
                    lineWidth: 1,
                    fillOpacity: 1
                });
            chart.render();
        },
        queryBlogTypeViewsData(){
            Api.getBlogTypeViews()
                .then(res => {
                    const data = this.updataBlogTypeViewsData(res.data);
                    this.createRadarMap(data);
                })
        }
    },
    mounted() {
        this.queryBlogTypeViewsData();
    }
};
</script>

<style lang="scss">
.home-articles-sum {
    width: 100%;
    background: #fff;
    margin-bottom: 20px;
    .home-articles-sum-title {
        line-height: 50px;
        font-size: 16px;
        padding-left: 20px;
        border-bottom: 1px solid #e8e8e8;
    }
}
</style>