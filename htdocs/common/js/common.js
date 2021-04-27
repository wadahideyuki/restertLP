$(document).ready(function(){
//ユーザーエージェントによる振分
var userAgent = window.navigator.userAgent.toLowerCase();
var appVersion = window.navigator.appVersion.toLowerCase();
if(userAgent.indexOf("msie") > -1){}
if(userAgent.indexOf("firefox") > -1){}
if(userAgent.indexOf("chrome") > -1){}
if(userAgent.indexOf("iphone") > -1){}
if(userAgent.indexOf("android") > -1){}
if(appVersion.indexOf("msie 7.") != -1){}
var ipad = userAgent.indexOf('ipad') > -1 || userAgent.indexOf('macintosh') > -1 && 'ontouchend' in document;
if(ipad == true){
  //viewportの設定
  $('meta[name="viewport"]').attr("content", "width=1200px");
}

//SPのみ
var ua = navigator.userAgent;
if (ua.indexOf('iPhone') > 0 ||ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) || ua.indexOf('Windows Phone') > 0) {
}


//クリックスクロール
function clkScrl(btn, pos) {
  btn.click(function () {
    var speed = 400; // ミリ秒
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({
      scrollTop: position + pos
    }, speed, "swing");
    return false;
  });
}
clkScrl($("a.clkScrl"), 0);


/*--------------------
  フォームパーツ
--------------------*/
//selectのplaceholder
$(".u-selectWrap select").change(function(){
  if($(this).prop("selectedIndex") == 0){
    $(this).addClass("ph");
  }else{
    $(this).removeClass("ph");
  }
});


$(".slkSld ul").slick({
	arrows: true,
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  centerMode: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
				arrows: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
});


//scrolladClass
var scrollAnimationClass = 'set-anime';
var triggerMarginDefault = 50;
var num = 0;

var scrollAnimationElm = document.querySelectorAll('.set-anime');
var scrollAnimationFunc = function () {
  var dataMargin = scrollAnimationClass + '_margin';
  var dataTrigger = scrollAnimationClass + '_trigger';
  var dataDelay = scrollAnimationClass + '_delay';
  for (var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = triggerMarginDefault;
    var elm = scrollAnimationElm[i];
    var showPos = 0;
    if (elm.dataset[dataMargin] != null) {
      triggerMargin = parseInt(elm.dataset[dataMargin]);
    }
    if (elm.dataset[dataTrigger]) {
      showPos = document.querySelector(elm.dataset[dataTrigger]).getBoundingClientRect().top + triggerMargin;
    } else {
      showPos = elm.getBoundingClientRect().top + triggerMargin;
    }
    if (window.innerHeight > showPos) {
      var delay = (elm.dataset[dataDelay]) ? elm.dataset[dataDelay] : 0;
      setTimeout(function (index) {
        scrollAnimationElm[index].classList.add('show-anime');
        var sclNum = $(".show-anime").length;
        $("body").addClass("scl" + sclNum)
      }.bind(null, i), delay);
    }
  }
}
//window.addEventListener('load', scrollAnimationFunc);
$(function () {
  scrollAnimationFunc();
})
window.addEventListener('scroll', scrollAnimationFunc);
window.addEventListener('load', scrollAnimationFunc);


});//DocRdyFncEnd