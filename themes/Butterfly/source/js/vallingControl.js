$(document).ready(function () {
    $(".hide").hide();
    $("#vcomment").hide();
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

    
});