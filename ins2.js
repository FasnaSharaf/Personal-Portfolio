function redirect(URL){
    window.open(URL);
    return false;
 }
 
 $( document ).ready(function() {
     function resizing () {
 
         var winH = $( window ).height(); 
         var headerHeight = $("#header .nav-height").height();
         var footerHeight = $("#footer.landing-page").height();
         var spfooterHeight = $("#sponsored_footer").height();
         var brandHeight = $("#header .nav").height();
         var windowHeight = $(window).height();
         var calculateOne = ((windowHeight - (headerHeight + footerHeight) - 46));
         var calculateNew = (windowHeight - spfooterHeight);
 
         $("#header.landing-page").css({"padding-bottom": calculateOne});
         if ($("#sponsored_footer").is(':visible')){
                     if ($(window).width() < 760) {
 
                     }
                     else {
                         $("#header").css({"height": calculateNew});
                           $("#header").css({"padding-bottom": 70});
                           $("#header nav").css({"margin-bottom": 70});
                     }
               
             }
             $("#content.inner").css({"margin-bottom": 100});
         // $("#header").css({"min-height": winH})
 
         if ($(window).width() < 760) {
             // $("#header.inner").css({"min-height": (winH/2)})
             // $("#content.inner").css({"height": (winH/2)})
             // $("#footer.inner").css({"bottom": (winH/2)})
         }
         else {
             // $("#content.inner").css({"padding-top": brandHeight + 20})
             // $("#header.inner").css({"min-height": winH})
             $("#content.inner").css({"height": "100%"})
             $("#footer.inner").css({"bottom": 60})
         }
 
 
     }
     resizing();
     $(window).resize(resizing);
 
     $(".focus-team-social-links").each(function(){
         var TeamSocialWidth = ($(this).find("li").length * 52);
         $(this).css({"width": TeamSocialWidth})
     })
 
 
     $("#response_msg").fadeOut(5000);
 
     
     $("#header ul.dropdown-menu").hide()
     $("#header li.root>a").click(function(e){
         e.preventDefault()
         $(this).next().toggle();
         var subMenu = $(this).siblings("ul");
           if(subMenu.is(':visible')) {
               $(this).click(function(e){
               window.open(this.href, '_self');
             })
           }
      });
     
     jQuery('body > #content').on('touchend click', function() { if ( jQuery('.navbar-collapse.collapse.in').length > 0 ) {jQuery('.navbar-toggle').click();} })
 
   if (!(BM.Editor && BM.Editor.Core)) {
     $("nav.navbar-collapse li:not(.root) > a").on("click touchend", function(e) {
       var el = $(this);
       var link = el.attr("href");
       var blank = el.attr("target");
       if (blank) {
         window.open(link, blank);
       } else {
         window.location = link;
       }
     });
   }
 
 
 });