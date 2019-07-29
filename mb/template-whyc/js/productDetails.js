

// getProductListData();
pageInit(productListData);


// function getProductListData() {

//     $.ajax({
//         url: "http://demo.cwgszc.com/template/moke/product.json",
//         type: "get",
//         dataType: 'json',
//         success: function(res) {
//             // renderProductList(res.gszc);
//             pageInit(res)
//         },
//         error: function(err) {
//             console.log(err)
//         }

//     })
// }


function pageInit(data) {

    var informationText = location.search;
    var arr = informationText.slice(1).split(';');
    var information = [];

    arr.forEach(function(ele, index) {
        var timpArr = ele.split('=');
        information.push(timpArr[1]);
    })



    var id = information[0];
    var index = parseInt(information[1]);
    var nowData = data[id][index];
    var title = nowData.title;
    var info = nowData.info;

    $('.nowTitle').text(title);
    $('.nowInfo').text(info);
}