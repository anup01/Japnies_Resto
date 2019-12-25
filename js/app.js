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

// $(document).ready(function() {

// })

function myFunction(x) {
    if (x.matches) { // If media query matches
        const parentImg1 = document.getElementById('move-1');
        const parentText1 = document.getElementById('move-2');
        
        // const allImag = document.querySelectorAll(".imgSuffel-1, .imgSuffel-2, .imgSuffel-3, .imgSuffel-4, .imgSuffel-5");
        // console.log(allImag);
        // const allText = document.querySelectorAll(".textShuffel-1, .textShuffel-2, .textShuffel-3, .textShuffel-4, .textShuffel-5");
        // console.log(allText);        
        const clone1 = parentImg1.cloneNode(true);
        const clone2 = parentText1.cloneNode(true);
        parentImg1.replaceWith(clone2);
        parentText1.replaceWith(clone1);    
        } 
        setTimeout(myFunction, 100);
    }   
  var x = window.matchMedia("(max-width: 767px)");
  myFunction(x); // Call listener function at run time
  x.addListener(myFunction); // Attach listener function on state changes