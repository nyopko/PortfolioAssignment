$(document).ready(function () {

    // auto scroll animation title screen

    $("#myButton").click(function () {
        $("html, body").animate({
            scrollTop: $("#aboutMe").offset().top
        }, 2000);
    });

     // text animations title screen


    $('.ml6 .letters').each(function () {
        $(this).html($(this).text().replace(/[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g, "<span class='letter'>$&</span>"));
    });
    
    anime.timeline({ loop: false })
        .add({
            targets: '.ml6  .letter',
            translateY: ["1.1em", 0],
            translateZ: 0,
            duration: 750,
            delay: function (el, i) {
                return 50 * i;
            }
        });

    // AOS scroll animations init

    AOS.init({
        duration: 1200,
    });

    // Making Nav Bar close on click for mobile
    if($(window).width() < 500){
        $('.navbar-collapse a').click(function (e) {
            $('.navbar-collapse').collapse('toggle');
        });
        
        $('#contactLink').click(function (e) {
            $('#contactLink').attr("href", "#contactMe");
        });
    }

});