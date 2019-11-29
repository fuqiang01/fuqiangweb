
	// 
	$("#formCityMock4").click(function() {
		$(".banner-city-img").css({"transform": "rotate(180deg)","transition": "all 0.2s ease-in-out",});
	});
    $("#formCityMock3").click(function() {
        $(".banner-city-img").css({"transform": "rotate(180deg)","transition": "all 0.2s ease-in-out",});
    });
    $("#formCityMock2").click(function() {
        $(".banner-city-img").css({"transform": "rotate(180deg)","transition": "all 0.2s ease-in-out",});
    });
    $("#formCityMock1").click(function() {
        $(".banner-city-img").css({"transform": "rotate(180deg)","transition": "all 0.2s ease-in-out",});
    });
	 $(document).click(function(){
    	$(".banner-city-img").css({"transform": "rotate(0deg)","transition": "all 0.2s ease-in-out","-webkit-transform": "rotate(0deg)","-moz-transform": "rotate(0deg)","-o-transform": "rotate(0deg)","-ms-transform": "rotate(0deg)" });
    });
	 // jquery监听div内容变化具体实现思路
	$("#formCityMock4").bind('DOMNodeInserted', function(e) {
		$(".banner-city-img").css({"transform": "rotate(0deg)","transition": "all 0.2s ease-in-out","-webkit-transform": "rotate(0deg)","-moz-transform": "rotate(0deg)","-o-transform": "rotate(0deg)","-ms-transform": "rotate(0deg)" });
	});
    $("#formCityMock3").bind('DOMNodeInserted', function(e) {
        $(".banner-city-img").css({"transform": "rotate(0deg)","transition": "all 0.2s ease-in-out","-webkit-transform": "rotate(0deg)","-moz-transform": "rotate(0deg)","-o-transform": "rotate(0deg)","-ms-transform": "rotate(0deg)" });
    });
    $("#formCityMock2").bind('DOMNodeInserted', function(e) {
        $(".banner-city-img").css({"transform": "rotate(0deg)","transition": "all 0.2s ease-in-out","-webkit-transform": "rotate(0deg)","-moz-transform": "rotate(0deg)","-o-transform": "rotate(0deg)","-ms-transform": "rotate(0deg)" });
    });
    $("#formCityMock1").bind('DOMNodeInserted', function(e) {
        $(".banner-city-img").css({"transform": "rotate(0deg)","transition": "all 0.2s ease-in-out","-webkit-transform": "rotate(0deg)","-moz-transform": "rotate(0deg)","-o-transform": "rotate(0deg)","-ms-transform": "rotate(0deg)" });
    });
	$(".banner-trade-input").on("focus", function(){
		$(".banner-trade-img").css({"transform": "rotate(180deg)","transition": "all 0.2s ease-in-out","-webkit-transform": "rotate(180deg)","-moz-transform": "rotate(180deg)","-o-transform": "rotate(180deg)","-ms-transform": "rotate(180deg)" });
		$(".banner-trade-select").css({"display":"block"});
	}).on("blur", function() {
		$(".banner-trade-img").css({"transform": "rotate(0deg)","transition": "all 0.2s ease-in-out","-webkit-transform": "rotate(0deg)","-moz-transform": "rotate(0deg)","-o-transform": "rotate(0deg)","-ms-transform": "rotate(0deg)" });
		$(".banner-trade-select").css({"display":"none"});
	});
	$(".banner-trade-select .lists li a").mousedown(function(){
		$(".banner-trade-input").val($(this).html());
		
	});
	
	$(".banner-suffix-input").on("focus", function(){
		$(".banner-suffix-img").css({"transform": "rotate(180deg)","transition": "all 0.2s ease-in-out","-webkit-transform": "rotate(180deg)","-moz-transform": "rotate(180deg)","-o-transform": "rotate(180deg)","-ms-transform": "rotate(180deg)" });
		$(".banner-suffix-select").css({"display":"block"});
	}).on("blur", function() {
		$(".banner-suffix-img").css({"transform": "rotate(0deg)","transition": "all 0.2s ease-in-out","-webkit-transform": "rotate(0deg)","-moz-transform": "rotate(0deg)","-o-transform": "rotate(0deg)","-ms-transform": "rotate(0deg)" });
		$(".banner-suffix-select").css({"display":"none"});
	});
	$(".banner-suffix-select li").hover(function(){
		$(".banner-suffix-select li").removeClass("suffix-actived");
		$(this).addClass("suffix-actived");
	}).mousedown(function(){
		$(".banner-suffix-input").val($(this).html());
	});

/**
 * @title 简洁实用的城市选择插件
 * @author IIInsomnia
 *
 * var cityPicker = new IIInsomniaCityPicker({
 *      data: cityData,                城市数据
 *      target: '#targetID',           目标元素ID（如：文本框，该值为城市名称）
 *      valType: 'k-v',                隐藏域的值类型（取值有：'k' => 只存ID，'k-v' => 存ID和名称，格式为：id-name）
 *      hideCityInput: '#hideID'       城市隐藏域ID
 *      hideProvinceInput: '#hideID'   省份隐藏域ID（如果不需要存省份，此项可以省略）
 *      callback: function(city_id){   回调函数，选择城市后调用，city_id为选择的城市的ID
 *          alert(city_id);
 *      }
 * });
 *
 * cityPicker.init();
 */


var IIInsomniaCityPickerForm3 = function(options){
    this.template = $('<div class="IIInsomnia-city-picker2" id="IIInsomnia_city_picker"><div class="IIInsomnia-hot-wrap"><p>热门城市</p><ul id="IIInsomnia_hot_city"></ul></div><div class="line"></div><div class="IIInsomnia-wrap"><p>选择省份</p><ul class="IIInsomnia-province-wrap" id="IIInsomnia_province_wrap"></ul></div></div>');
    this.hot_city = $('#IIInsomnia_hot_city', this.template);
    this.province_wrap = $('#IIInsomnia_province_wrap', this.template);
    this.settings = {
        "data": options.data,
        "target": $(options.target),
        "valType": options.valType || 'k',
        "multiple": options.multiple || false,
        "hideProvinceInput": options.hideProvinceInput ? $(options.hideProvinceInput) : false,
        "hideCityInput": options.hideCityInput ? $(options.hideCityInput) : false,
        "callback": options.callback || '',
    };
};

IIInsomniaCityPickerForm3.prototype = {
    init: function(){
        var that = this;

        $(window).click(function(event) {
            /* Act on the event */
            that.template.remove();
        });

        that.settings.target.attr('readonly', true);

        that.targetEvent();
    },

    buildCityPicker: function(){
        var that = this;

        that.buildHotCityTpl();
        that.buildProvinceTpl();
        that.provinceEvent();
        that.cityEvent();
        that.cleanBtnEvent();
    },

    buildHotCityTpl: function(){
        var that = this;

        var hot_city = that.settings.data.hot;
        var hot_city_html = '';

        for(var i = 0, len = hot_city.length; i < len; i++){
            hot_city_html += '<li class="IIInsomnia-hot-city" data-id="' + hot_city[i]['id'] + '" data-name="' + hot_city[i]['name'] + '" data-pid="' + hot_city[i]['pid'] + '" data-pname="' + hot_city[i]['pname'] + '">' + hot_city[i]['name'] + '</li>';
        }

        that.hot_city.html(hot_city_html);
    },

    buildProvinceTpl: function(){
        var that = this;

        var province = that.settings.data.province;
        var province_html = '';
        for(var i = 0, len = province.length; i < len; i++){
            province_html += '<li class="IIInsomnia-province" data-id="' + province[i]['id'] + '" data-name="' + province[i]['name'] + '"><ul class="IIInsomnia-city-wrap"></ul><div class="IIInsomnia-province-name">' + province[i]['name'] + '</div></li>';
        }

       // province_html += '<li class="IIInsomnia-clean"><input type="button" class="IIInsomnia-clean-btn" id="IIInsomnia_clean_btn" value="清 空"></li>'

        that.province_wrap.html(province_html);
    },

    buildCityTpl: function(cur_province){
        var that = this;

        var pid = cur_province.data('id');
        var poi = cur_province.position();
        var province = that.settings.data.province;
        var city;
        var city_html = '';

        for(var i = 0, plen = province.length; i < plen; i++){
            if(province[i]['id'] == parseInt(pid)){
                city = province[i]['city'];
                break;
            }
        }
        for(var j = 0, clen = city.length; j < clen; j++){
            city_html += '<li class="IIInsomnia-city" data-id="' + city[j]['id'] + '" data-name="' + city[j]['name'] + '" title="' + city[j]['name'] + '">' + city[j]['name'] + '</li>';
        }

        cur_province.find('.IIInsomnia-city-wrap').html(city_html).css('left', '-' + (poi.left - 9) + 'px').show();
    },

    provinceEvent: function(){
        var that = this;

        that.province_wrap.on('click', '.IIInsomnia-province', function(event){
            event.preventDefault();
            event.stopPropagation();
            /* Act on the event */
            var _this = $(this);

            if(!_this.hasClass('active')){
                that.province_wrap.find('.IIInsomnia-province').removeClass('active');
                that.province_wrap.find('.IIInsomnia-province-name').removeClass('active');
                that.province_wrap.find('.IIInsomnia-city-wrap').hide().children().remove();

                _this.addClass('active');
                _this.find('.IIInsomnia-province-name').addClass('active');

                that.buildCityTpl(_this);
            }else{
                _this.removeClass('active');
                _this.find('.IIInsomnia-province-name').removeClass('active');

                _this.find('.IIInsomnia-city-wrap').hide().children().remove();
            }

            return false;
        });
    },

    cityEvent: function(){
        var that = this;

        that.hot_city.on('click', '.IIInsomnia-hot-city', function(event) {
            event.preventDefault();
            event.stopPropagation();
            /* Act on the event */
            var _this = $(this);

            var cid = "";
            var cname = _this.data('name');

            if(that.settings.hideCityInput){
                if(that.settings.valType == 'k-v'){
                    that.settings.hideCityInput.val(cid + '-' + cname);
                }else{
                    that.settings.hideCityInput.val(cid);
                }
            }

            if(that.settings.hideProvinceInput){
                var pid = _this.data('pid');
                var pname = _this.data('pname');
                if(that.settings.valType == 'k-v'){
                    that.settings.hideProvinceInput.val(pid + '-' + pname);
                }else{
                    that.settings.hideProvinceInput.val(pid);
                }
            }

            that.template.remove();

            if(that.settings.callback) that.settings.callback(cname);

            return false;
        });

        that.province_wrap.on('click', '.IIInsomnia-city', function(event) {
            event.preventDefault();
            event.stopPropagation();
            /* Act on the event */
            var _this = $(this);

            var cid = "";
            var cname = _this.data('name');

            if(that.settings.hideCityInput){
                if(that.settings.valType == 'k-v'){
                    that.settings.hideCityInput.val(cid + '-' + cname);
                }else{
                    that.settings.hideCityInput.val(cid);
                }
            }

            if(that.settings.hideProvinceInput){
                var pele = _this.parent().parent();
                var pid = pele.data('id');
                var pname = pele.data('name');
                if(that.settings.valType == 'k-v'){
                    that.settings.hideProvinceInput.val(pid + '-' + pname);
                }else{
                    that.settings.hideProvinceInput.val(pid);
                }
            }

            that.template.remove();

            if(that.settings.callback) that.settings.callback(cname);

            return false;
        });
    },

    cleanBtnEvent: function(){
        var that = this;

        that.province_wrap.on('click', '#IIInsomnia_clean_btn', function(event){
            event.preventDefault();
            event.stopPropagation();
            /* Act on the event */
            that.settings.target.val('');

            if(that.settings.hideProvinceInput){
                that.settings.hideProvinceInput.val('');
            }

            if(that.settings.hideCityInput){
                that.settings.hideCityInput.val('');
            }

            that.template.remove();

            if(that.settings.callback) that.settings.callback(0);

            return false;
        });
    },

    targetEvent: function(){
        var that = this;

        that.settings.target.click(function(event){
            event.stopPropagation();
            /* Act on the event */
            var _this = $(this);

            that.buildCityPicker();

            var offset = _this.offset();
            var top = offset.top + _this.outerHeight() + 15;
            var left = offset.left + _this.outerWidth() -150;

            that.template.css({
                'left': left,
                'top': top
            });
            $('body').append(that.template);

            return false;
        });
    }
};

function formCityMock4(){
    //城市校验
    // var cityID = document.getElementById('cityID').value;
    //if(cityID==null||cityID=="undefined"||cityID==""){
    var cid="";
    var city="";
    var cityPicker = new IIInsomniaCityPickerForm3({
        data: cityData,
        target: '#formCityMock4',
        valType: 'k-v',
        hideCityInput: '#formcity',
        hideProvinceInput: '#formprovince',
        callback: function(cname){
        	city = cname;
            setCookie("city",city);
            $("#jmsIN").attr("href","/dailijizh/"+cityJC[''+city+'']+".html");
            $("#jmsIN").text("查看"+city+"服务商");
            $("#formCityMock").text(city);
            $("#formCityMock1").text(city);
            $("#formCityMock4").text(city);
            $("#citySpan").text(city);
            $("#export-city-mock").text(city);
            //弹出选择的城市名称
            //alert(cname);
            //发送ajax模糊查询数据库中的市，返回市的对应的ID值，将此ID值赋值给下拉框
            $.ajax({
                url:"/getCityByIP.jspx",
                type:"post",
                data:{cityName:cname},
                success:function(result){
                    cid=result;
                    city=getCookie("city");
                    $("#cityID").html('<option value="'+result+'">'+city+'</option>');
                    $("#cityID1").text(city).attr("value",result);
					if(result.substring(2,6)=="0000"){
						setCookie("jms-province-id",result);

						baseProvinceSync("","","",result)
						baseProvinceSync("11","11","11",result)
						baseProvinceSync("22","22","22",result)
						baseProvinceSync("33","33","33",result)
						baseProvinceSync("44","44","44",result)
						baseProvinceSync("55","55","55",result)
						baseProvinceSync("66","66","66",result)
					}else{
						if(result.substring(4,6)=="00"){
							setCookie("jms-city-id",result);

							baseCitySync("","","",result);
							baseCitySync("11","11","11",result);
							baseCitySync("22","22","22",result);
							baseCitySync("33","33","33",result);
							baseCitySync("44","44","44",result);
							baseCitySync("55","55","55",result);
							baseCitySync("66","66","66",result);
						}else{
							setCookie("jms-area-id",result);

							baseAreaSync("","","",result);
							baseAreaSync("11","11","11",result);
							baseAreaSync("22","22","22",result);
							baseAreaSync("33","33","33",result);
							baseAreaSync("44","44","44",result);
							baseAreaSync("55","55","55",result);
							baseAreaSync("66","66","66",result);
						}
					}
				    $("#formCityMock1_1").text($("#province option:selected").text());
				    $("#formCityMock1_2").text($("#city option:selected").text());
				    $("#formCityMock1_3").text($("#area option:selected").text());
				    $("#formCityMock2_1").text($("#province22 option:selected").text());
				    $("#formCityMock2_2").text($("#city22 option:selected").text());
				    $("#formCityMock2_3").text($("#area22 option:selected").text());
				    $("#formCityMock3_1").text($("#province33 option:selected").text());
				    $("#formCityMock3_2").text($("#city33 option:selected").text());
				    $("#formCityMock3_3").text($("#area33 option:selected").text());
				    $("#formCityMock4_1").text($("#province44 option:selected").text());
				    $("#formCityMock4_2").text($("#city44 option:selected").text());
				    $("#formCityMock4_3").text($("#area44 option:selected").text());
				    $("#formCityMock5_1").text($("#province55 option:selected").text());
				    $("#formCityMock5_2").text($("#city55 option:selected").text());
				    $("#formCityMock5_3").text($("#area55 option:selected").text());
				    $("#formCityMock6_1").text($("#province66 option:selected").text());
				    $("#formCityMock6_2").text($("#city66 option:selected").text());
				    $("#formCityMock6_3").text($("#area66 option:selected").text());
                }
            });
        }
    });
    cityPicker.init();
}
formCityMock4();

/*判断是否是移动端，是的话就自动跳转移动端*/
var mobileAgent = new Array("iphone", "ipod", "ipad", "android", "mobile", "blackberry", "webos", "incognito", "webmate", "bada", "nokia", "lg", "ucweb", "skyfire");
var browser = navigator.userAgent.toLowerCase(); 
var isMobile = false; 
for (var i=0; i<mobileAgent.length; i++){ 
	if (browser.indexOf(mobileAgent[i])!=-1){ 
		isMobile = true; 
		break; 
	}
} 
if(isMobile){
	location.href = 'https://m.123.com/';
}