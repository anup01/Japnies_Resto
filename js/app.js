// Smooth Scrolling
$(function() {
    $("a.smooth-scroll").click(function(ev){
         ev.preventDefault();
         //get section id #about, #services etc..
         var section_id = $(this).attr("href");
         $("html, body").animate({
             scrollTop: $(section_id).offset().top - 60
         }, 1300);
    })    
});

// navigation bar show and hide white navbar
$(function() {
    showHideNav(); // show hide nav on page load
    $(window).scroll(function() {
        showHideNav(); // show hide nav on window's scroll
    });

    function showHideNav(){
        // alert('you just scrolled');
        if($(window).scrollTop() > 100 ){
            //show white navbar
            $("nav").addClass("white-nav-top");
            // show dark logo
            // $(".navbar-brand img").attr("src", "img/logo-dark.png");
            //show back to top button
            $("#back-to-top").fadeIn();
        }
        else{
            // hide white navbar
            $("nav").removeClass("white-nav-top");
            // $(".navbar-brand img").attr("src", "img/logo.png");
            // hide back to top button
            $("#back-to-top").fadeOut();

        }
    }
});


//need to work on it read more option
$(document).ready(function () {
    $(".read-more-hide").hide();
    $(".read-more").on("click", function () {
        // var txt = $(".read-more-hide").is(':visible') ? 'Read More' : 'Read Less';
        // $(".show_hide").text(txt);
        // $(".read-more-hide").toggle();
        $(this).prev('.read-more-hide').slideToggle(500);
        $(this).text(' Read less');
    });
});