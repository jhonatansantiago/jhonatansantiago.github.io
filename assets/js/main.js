!function(e){"use strict";e(".dark-version").parent("body").addClass("black-bg"),e(".mainmenu li a").on("click",function(a){var o=e(".navbar-collapse ul");e(a.target).is("a")&&(o.parent().removeClass("in"),t.removeClass("replace"))});var t=e(".navbar-header button");t.on("click",function(e){t.toggleClass("replace")});var a=e("#active-sticky");e(window).on("scroll",function(){var t=e(window).scrollTop(),o=a;t<80?o.removeClass("is-sticky"):o.addClass("is-sticky")}),e(".rt-animate:not(.rt-animate-show)").each(function(){var t=e(this);t.waypoint(function(){t.addClass("rt-animate-show")},{offset:t.data("rt-offset")})});var o=e(".expand-icon"),n=e(".exapnd-sidebar");o.on("click",function(e){n.toggleClass("slide_right"),o.toggleClass("close_icon"),e.stopPropagation()}),e(document).on("click",function(t){var a=e(".exapnd-sidebar,.expand-icon");a.is(t.target)||0!==a.has(t.target).length||(n.removeClass("slide_right"),o.removeClass("close_icon"))});var r=e(".mainmenu nav"),i=e("header").height();r.onePageNav({currentClass:"active",scrollThreshold:.2,scrollSpeed:1e3,scrollOffset:i-20});var s=e(".smooth-scroll a");s.length>0&&s.on("click",function(){return e.smoothScroll({offset:-60,scrollTarget:this.hash,speed:1e3}),!1});var l=e(".skill-progress");l.length>0&&l.waypoint(function(){jQuery(".skill-bar").each(function(){jQuery(this).find(".progress-content").animate({width:jQuery(this).attr("data-percentage")},2e3),jQuery(this).find(".progress-mark").animate({left:jQuery(this).attr("data-percentage")},{duration:2150,step:function(e,t){var a=Math.round(e);jQuery(this).find(".percent").html(a+"%")}})})},{offset:"90%"}),e(".counter").counterUp({delay:50,time:3e3});var c=e(".portfolio-menu li");c.length&&c.on("click",function(){var t=e(".portfolio-grid");c.removeClass("active"),e(this).addClass("active");var a=e(this).attr("data-filter");t.isotope({filter:a,animationOptions:{duration:750,easing:"linear",queue:!1}})}),e(".venobox").venobox();var u=e("#one-item");u.length&&u.slick({dots:!0,arrows:!1});var d=e("#contact_form");if(e("#contact_form").length&&d.validate({onfocusout:!1,onkeyup:!1,rules:{name:"required",email:{required:!0,email:!0}},errorPlacement:function(e,t){e.insertBefore(t)},messages:{name:"Qual o seu nome?",email:{required:"Qual o seu email?",email:"Por favor, use um email válido!"}},highlight:function(t){e(t).text("").addClass("error")},success:function(e){e.text("").addClass("valid")}}),e("#contact_submit").length){var m=e("#contact_submit");d.submit(function(){if(e(this).valid()){m.button("loading");var t=e(this).attr("action");e.ajax({url:t,type:"POST",data:{contactname:e("#contact_name").val(),contactemail:e("#contact_email").val(),contactmessage:e("#contact_message").val()},success:function(){m.button("reset"),m.button("complete")},error:function(){m.button("reset"),m.button("error")}})}else m.button("reset");return!1})}e.scrollUp({scrollText:'<i class="ion-ios-home"></i>',easingType:"linear",scrollSpeed:900,animation:"fade"}),jQuery(window).on("load",function(){e("#loading-wrap").fadeOut(1e3);var t=e(".fitRows-grid");t.length&&t.isotope({itemSelector:".grid-item",layoutMode:"fitRows"});var a=e(".masonry-grid");a.length&&a.isotope({itemSelector:".grid-item",layoutMode:"masonry",masonryHorizontal:{rowHeight:100}})})}(jQuery);