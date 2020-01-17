$(document).ready(function () {
    $(".hide").hide();
    $("#vcomment").hide();
    $("#wechat").hide();

    $(".hide").click(function () {
        $("#vcomment").hide();
        $(".show").show();
        $(".hide").hide();
    });

    $(".show").click(function () {
        $("#vcomment").show();
        $(".hide").show();
        $(".show").hide();
    });


    // 图片显示控制
    function controlSiderPic() {
        $("#wechat").toggle();
        $("#tui").toggle();
    }

    var interval;
    show_date_time();
    clearInterval(interval);
    interval = setInterval(controlSiderPic, 3000);

});