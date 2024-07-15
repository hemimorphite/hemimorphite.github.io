/**
* Highlight.js
*/
document.addEventListener("DOMContentLoaded", (event) => {
    var pres = document.querySelectorAll("pre>code");
    for (var i = 0; i < pres.length; i++) {
        hljs.highlightElement(pres[i]);
    }

    /* double click */
    for (var pres = document.querySelectorAll("pre,code,kbd,blockquote,td"), i = 0; i < pres.length; i++) pres[i].addEventListener("dblclick", function() {
        var e = getSelection(),
            t = document.createRange();
        t.selectNodeContents(this), e.removeAllRanges(), e.addRange(t)
    }, !1);

    if(pres.length > 0) {
        var options = {
            contentSelector: ".post-content",
            loadDelay:0,
            copyIconClass: "code-badge-copy-icon",
            checkIconClass: "code-badge-check-icon",
            onBeforeTextCopied: function(text, codeElement) {
                return text;   
            }
        };
        window.highlightJsBadge(options);
    }
    
});

/*jQuery( document ).ready(function( $ ) {
	"use strict";

    // Page loading animation

    $("#preloader").animate({
        'opacity': '0'
    }, 600, function(){
        setTimeout(function(){
            $("#preloader").css("visibility", "hidden").fadeOut();
        }, 300);
    });
        
});*/
