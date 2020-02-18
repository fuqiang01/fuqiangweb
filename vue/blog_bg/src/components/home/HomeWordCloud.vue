<template>
    <div class="home-word-cloud">
        <p class="home-word-cloud-title">各关键词发布量</p>
        <div id="word-cloud"></div>
    </div>
</template>

<script>
import G2 from "@antv/g2";
import { DataSet } from "@antv/data-set";
import Api from "@/api";
export default {
    methods: {
        createWordCloud() {
            function getTextAttrs(cfg) {
                return {
                    ...cfg.style,
                    fillOpacity: cfg.opacity,
                    fontSize: cfg.origin._origin.size,
                    rotate: cfg.origin._origin.rotate,
                    text: cfg.origin._origin.text,
                    textAlign: "center",
                    fontFamily: cfg.origin._origin.font,
                    fill: cfg.color,
                    textBaseline: "Alphabetic"
                };
            }
            // 给point注册一个词云的shape
            G2.Shape.registerShape("point", "cloud", {
                drawShape(cfg, container) {
                    const attrs = getTextAttrs(cfg);
                    return container.addShape("text", {
                        attrs: {
                            ...attrs,
                            x: cfg.x,
                            y: cfg.y
                        }
                    });
                }
            });
            Api.getWordCloud().then(({ data }) => {
                console.log(data)
                const dv = new DataSet.View().source(data);
                const range = dv.range("value");
                const min = range[0];
                const max = range[1];
                const imageMask = new Image();
                imageMask.crossOrigin = "";
                imageMask.src = "http://cos.fqiang.co/blog/word_cloud.jpg";
                imageMask.onload = () => {
                    dv.transform({
                        type: "tag-cloud",
                        fields: ["name", "value"],
                        imageMask,
                        font: "Verdana",
                        size: [400, 300], // 宽高设置最好根据 imageMask 做调整
                        padding: 0,
                        timeInterval: 5000, // max execute time
                        rotate() {
                            let random = ~~(Math.random() * 4) % 4;
                            if (random === 2) {
                                random = 0;
                            }
                            return random * 90; // 0, 90, 270
                        },
                        fontSize(d) {
                            return (
                                ((d.value - min) / (max - min)) * (32 - 8) + 8
                            );
                        }
                    });
                    const chart = new G2.Chart({
                        container: "word-cloud",
                        forceFit: true,
                        height: 300,
                        padding: 0
                    });
                    chart.source(dv, {
                        x: { nice: false },
                        y: { nice: false }
                    });
                    chart.legend(false);
                    chart.axis(false);
                    chart.tooltip({
                        showTitle: false
                    });
                    chart.coord().reflect();
                    chart
                        .point()
                        .position("x*y")
                        .color("text")
                        .shape("cloud")
                        .tooltip('name*value');
                    chart.render();
                };
            });
        }
    },
    mounted() {
        this.createWordCloud();
    }
};
</script>

<style lang="scss">
.home-word-cloud {
    background: #fff;
    .home-word-cloud-title {
        line-height: 50px;
        font-size: 16px;
        padding-left: 20px;
        border-bottom: 1px solid #e8e8e8;
    }
}
</style>