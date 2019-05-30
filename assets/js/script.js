$(document).ready(function() {

$("#myButton").click(function() {
    $("html, body").animate({
        scrollTop: $("#aboutMe").offset().top
    }, 2000);
});

$('.ml6 .letters').each(function(){
    $(this).html($(this).text().replace(/[-A-Za-z0-9!$#%^&*@()_+|~=`{}\[\]:";'<>?,.\/]/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: false})
    .add({
      targets: '.ml6  .letter',
      translateY: ["1.1em", 0],
      translateZ: 0,
      duration: 750,
      delay: function(el, i) {
        return 50 * i;
      }
    });

});