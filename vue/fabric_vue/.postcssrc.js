module.exports = ({ file}) => {
    let remUnit; // 判断条件 请自行调整 我使用的是 mand-mobile ui 没有对vant引入进行测试 
    if (file && file.dirname && file.dirname.indexOf("vant") > -1) {
        remUnit = 100;
    } else {
        remUnit = 200;
    }
    return {
        plugins: {
            'postcss-pxtorem': {
                rootValue: remUnit,
                propList: ['*'],
            },
        }
    }
}