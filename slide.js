(function($) {

    $.fn.animateImage = function(atime) {

$(window).load(function(){

owi = $('img').width();


ohi = $('img').height();

	function slias(){
$('img').width('100px');


$('img').height('100px');


var len = $("div#animImg > img").length;

var animtime = atime;

totani = animtime* len;



$("div#animImg > img").each(function(){


$(this).animate({width:owi+'px',height:ohi+'px'},animtime,"linear").css("position","absolute");

$(this).siblings().animate({width:'100px',height:'100px'},animtime,"linear");


});
}
slias();
setInterval(function(){slias()},totani);


});



}

}(jQuery));