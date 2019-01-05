$(document).ready(function() {

$("#myButton").click(function() {
    $("html, body").animate({
        scrollTop: $("#aboutMe").offset().top
    }, 2000);
});

});