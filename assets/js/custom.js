jQuery( document ).ready(function( $ ) {
	"use strict";
    
    hljs.highlightAll();

    // Page loading animation

    $("#preloader").animate({
        'opacity': '0'
    }, 600, function(){
        setTimeout(function(){
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
        
});
