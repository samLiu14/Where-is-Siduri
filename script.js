$("h1").click(function() {
    $(".question").show();
});

$(".good").click(function() {
    $(".ana").show();
    $("img").show();
    $(".question").hide();
});

$(".blush-anaIMG").click(function(){
    $(".blush-anaIMG").show();
    $(".blush-anaIMG").attr("src","https://static.zerochan.net/Fate.Grand.Order%3A.Zettai.Majuu.Sensen.Babylonia.full.2734269.png");
    $(".ana").hide();
    $(".wake").show();
});

$(".bad").click(function() {
    $(".bad-news").show();
    $(".question").hide();
});

$(".wake").click(function() {
    $(".Thank-you").show();
    $(".blush-ana").hide();
    $(".blush-anaIMG").hide();
    $(".wake").hide();
});

$(".bad-news").click(function() {
   $(".NOPE").show(); 
   $(".bad-news").hide();
   $("body").css("background-color","#A81414");
});

$(".NOPE").click(function() {
   $(".Thank-you").show();
   $(".NOPE").hide(); 
});
    