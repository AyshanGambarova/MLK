(function($) {
	'use strict';
     var de_nav_style = 1; 
     var de_nav_color = 1;
     var de_nav_color_scroll = 1;
     var mobile_menu_show = 0;
     var v_count = '0';
     var mb;
     var instances = [];
     var $window = $(window);
     var $tmp_h = '90';
	 var $op_header_autoshow = 0;
	 var grid_size = 10;
	 var skills_show = 0;
	 var pf_open = 0;
	 
	
     function header_styles() {
         if (de_nav_style == 2) {
             $('header').addClass('transparent')
         }
         $('#mainmenu').addClass('no-separator');
         if (de_nav_color == 2) {
             $('header').addClass('header-light');
         }
         if (de_nav_color_scroll == 2) {
             $('header').addClass('scroll-light');
         }
     }
     function header_sticky() {
         jQuery("header").addClass("clone", 1000, "easeOutBounce");
         var $document = $(document);
         var vscroll = 0;
		 var header = jQuery("header.autoshow");
         if ($document.scrollTop() >= 50 && vscroll == 0) {
             header.removeClass("scrollOff");
             header.addClass("scrollOn");
             header.css("height", "auto");
             vscroll = 1;
         } else {
             header.removeClass("scrollOn");
             header.addClass("scrollOff");
             vscroll = 0;
         }
     }
    
     function init_resize() {
         enquire.register("screen and (min-width: 993px)", {
             match: function() {
                 mobile_menu_show = 1;
             },
             unmatch: function() {
                 mobile_menu_show = 0;
                 jQuery("#toggle-button").show();
             }
         });
         enquire.register("screen and (max-width: 993px)", {
             match: function() {
                 $('header').addClass("header-sm");
				 var body = jQuery('body');
                 if (body.hasClass('side-content')) {
                     body.removeClass('side-layout');
                 }
             },
             unmatch: function() {
                 $('header').removeClass("header-sm");
                 jQuery('header').css("height", $tmp_h);
				 var body = jQuery('body');
                 if (body.hasClass('side-content')) {
                     body.addClass('side-layout');
                 }
             }
         });
         init();
		 
		 var header = $('header');
         header.removeClass('smaller');
         header.removeClass('logo-smaller');
         header.removeClass('clone');

         var mx = window.matchMedia("(max-width: 992px)");
		 var osw = jQuery('.owl-slide-wrapper');
         if (mx.matches) {			 
             osw.find("img").css("height", $(window).innerHeight());
             osw.find("img").css("width", "auto");
			 if($op_header_autoshow==1){
				 header.removeClass('autoshow');
			 }
			 
         } else {
             osw.find("img").css("width", "100%");
             osw.find("img").css("height", "auto");
			 if($op_header_autoshow==1){
				 header.addClass('autoshow');
			 }
         }

     };

 
     ! function(a) {
         a.fn.fitVids = function(b) {
             var c = {
                     customSelector: null
                 },
                 d = document.createElement("div"),
                 e = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0];
             return d.className = "fit-vids-style", d.innerHTML = "&shy;<style> .fluid-width-video-wrapper { width: 100%; position: relative; padding: 0; } .fluid-width-video-wrapper iframe, .fluid-width-video-wrapper object, .fluid-width-video-wrapper embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; } </style>", e.parentNode.insertBefore(d, e), b && a.extend(c, b), this.each(function() {
                 var b = ["iframe[src*='player.vimeo.com']", "iframe[src*='www.youtube.com']", "iframe[src*='www.kickstarter.com']", "object", "embed"];
                 c.customSelector && b.push(c.customSelector);
                 var d = a(this).find(b.join(","));
                 d.each(function() {
                     var b = a(this);
                     if (!("embed" == this.tagName.toLowerCase() && b.parent("object").length || b.parent(".fluid-width-video-wrapper").length)) {
                         var c = "object" == this.tagName.toLowerCase() || b.attr("height") ? b.attr("height") : b.height(),
                             d = b.attr("width") ? b.attr("width") : b.width(),
                             e = c / d;
                         if (!b.attr("id")) {
                             var f = "fitvid" + Math.floor(999999 * Math.random());
                             b.attr("id", f)
                         }
                         b.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * e + "%"), b.removeAttr("height").removeAttr("width")
                     }
                 })
             })
         }
     }(jQuery);
     var scrollTrigger = 500; // px
     var t = 0;

     function backToTop() {
         var scrollTop = $(window).scrollTop();
         if (scrollTop > scrollTrigger) {
             $('#back-to-top').addClass('show');
             $('#back-to-top').removeClass('hide');
             t = 1;
         }

         if (scrollTop < scrollTrigger && t == 1) {
             $('#back-to-top').addClass('hide');
         }

         $('#back-to-top').on('click', function(e) {
             e.preventDefault();
             $('html,body').stop(true).animate({
                 scrollTop: 0
             }, 700);
         });
     };
     $.scrollTo = $.fn.scrollTo = function(x, y, options) {
         if (!(this instanceof $)) return $.fn.scrollTo.apply($('html, body'), arguments);

         options = $.extend({}, {
             gap: {
                 x: 0,
                 y: 0
             },
             animation: {
                 easing: 'easeInOutExpo',
                 duration: 1200,
                 complete: $.noop,
                 step: $.noop
             }
         }, options);

         return this.each(function() {

             if (!jQuery('body').hasClass('side-layout')) {
                 var h = 69;
             } else {
                 var h = 0;
             }

         });
     };
     
    
     function custom_bg() {
         $("body,div,section,span").css('background-color', function() {
             return jQuery(this).data('bgcolor');
         });
         $("body,div,section").css('background', function() {
             return jQuery(this).data('bgimage');
         });
         $("body,div,section").css('background-size', function() {
             return 'cover';
         });
     }
   

     function center_xy() {
         jQuery('.center-xy').each(function() {
             jQuery(this).parent().find("img").on('load', function() {
                 var w = parseInt(jQuery(this).parent().find(".center-xy").css("width"), 10);
                 var h = parseInt(jQuery(this).parent().find(".center-xy").css("height"), 10);
                 var pic_w = jQuery(this).css("width");
                 var pic_h = jQuery(this).css("height");
				 var tp = jQuery(this).parent();
                 tp.find(".center-xy").css("left", parseInt(pic_w, 10) / 2 - w / 2);
                 tp.find(".center-xy").css("top", parseInt(pic_h, 10) / 2 - h / 2);
                 tp.find(".bg-overlay").css("width", pic_w);
                 tp.find(".bg-overlay").css("height", pic_h);
             }).each(function() {
                 if (this.complete) $(this).load();
             });
         });
     }
     function menu_arrow() {
         jQuery('#mainmenu li a').each(function() {
             if ($(this).next("ul").length > 0) {
                 $("<span></span>").insertAfter($(this));
             }
         });
         jQuery("#mainmenu > li > span").on("click", function() {
             
             var iteration = $(this).data('iteration') || 1;
             switch (iteration) {
                 case 1:
                     $(this).addClass("active");
                     $(this).parent().find("ul:first").css("height", "auto");
                     var curHeight = $(this).parent().find("ul:first").height();
                     $(this).parent().find("ul:first").css("height", "0");
                     $(this).parent().find("ul:first").animate({
                         'height': curHeight
                     }, 300, 'easeOutQuint');
					 $('header').css("height", $('#mainmenu')[0].scrollHeight+curHeight+(parseInt($tmp_h)*2));
                     break;
                 case 2:
					var curHeight = $(this).parent().find("ul:first").height();
                     $(this).removeClass("active");
                     $(this).parent().find("ul:first").animate({
                         'height': "0"
                     }, 300, 'easeOutQuint');
					 $('header').css("height", $('#mainmenu')[0].scrollHeight-curHeight+(parseInt($tmp_h)*2));
                     break;
             }
             iteration++;
             if (iteration > 2) iteration = 1;
             $(this).data('iteration', iteration);
         });
         jQuery("#mainmenu > li > ul > li > span").on("click", function() {
             var iteration = $(this).data('iteration') || 1;
             switch (iteration) {
                 case 1:
                     $(this).addClass("active");
                     $(this).parent().find("ul:first").css("height", "auto");
                     $(this).parent().parent().parent().find("ul:first").css("height", "auto");
                     var curHeight = $(this).parent().find("ul:first").height();
                     $(this).parent().find("ul:first").css("height", "0");
                     $(this).parent().find("ul:first").animate({
                         'height': curHeight
                     }, 400, 'easeInOutQuint');
                     break;
                 case 2:
                     $(this).removeClass("active");
                     $(this).parent().find("ul:first").animate({
                         'height': "0"
                     }, 400, 'easeInOutQuint');
                     break;
             }
             iteration++;
             if (iteration > 2) iteration = 1;
             $(this).data('iteration', iteration);
         });
     }
     function sequence() {
         var sq = jQuery(".sequence .pf_item");
         var count = sq.length;
         sq.addClass("fadeInUp");
         for (var i = 0; i <= count; i++) {
             var sqx = jQuery(".sequence > .gallery-item:eq(" + i + ") .pf_item");
             sqx.attr('data-wow-delay', (i / 6) + 's');
         }
     }
     function sequence_a() {
         var sq = jQuery(".sequence").find(".sq-item");
         var count = sq.length;
         sq.addClass("scaleOutFade");
         for (var i = 0; i <= count; i++) {
             var sqx = jQuery(".sequence").find(".sq-item:eq(" + i + ")");
             sqx.attr('data-wow-delay', (i / 8) + 's');
			 sqx.attr('data-wow-speed', '1s');
         }
     }
     $.fn.moveIt = function() {
         $(this).each(function() {
             instances.push(new moveItItem($(this)));
         });
     }

     function moveItItemNow() {
         var scrollTop = $window.scrollTop();
         instances.forEach(function(inst) {
             inst.update(scrollTop);
         });
     }

     function moveItItem(el) {
         this.el = $(el);
         this.speed = parseInt(this.el.attr('data-scroll-speed'));
     };
     moveItItem.prototype.update = function(scrollTop) {
         var pos = scrollTop / this.speed;
         this.el.css('transform', 'translateY(' + pos + 'px)');
     };
     $(function() {
         $('[data-scroll-speed]').moveIt();
     });
     function init() {
         var sh = jQuery('#de-sidebar').css("height");
         var dh = jQuery(window).innerHeight();
         var h = parseInt(sh) - parseInt(dh);

         function scrolling() {
             var mq = window.matchMedia("(min-width: 993px)");
             var ms = window.matchMedia("(min-width: 768px)");
             if (mq.matches) {
                 var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                     shrinkOn = 0,
                     header = jQuery("header");
                 if (distanceY > shrinkOn) {
                     header.addClass("smaller");
                 } else {
                     if (header.hasClass('smaller')) {
                         header.removeClass('smaller');
                     }
                 }
             }
             if (mq.matches) {
                 if (jQuery("header").hasClass("side-header")) {
                     if (jQuery(document).scrollTop() >= h) {
                         jQuery('#de-sidebar').css("position", "fixed");
                         if (parseInt(sh) > parseInt(dh)) {
                             jQuery('#de-sidebar').css("top", -h);
                         }
                         jQuery('#main').addClass("col-md-offset-3");
                         jQuery('h1#logo img').css("padding-left", "7px");
                         jQuery('header .h-content').css("padding-left", "7px");
                         jQuery('#mainmenu li').css("width", "103%");
                     } else {
                         jQuery('#de-sidebar').css("position", "relative");
                         if (parseInt(sh) > parseInt(dh)) {
                             jQuery('#de-sidebar').css("top", 0);
                         }
                         jQuery('#main').removeClass("col-md-offset-3");
                         jQuery('h1#logo img').css("padding-left", "0px");
                         jQuery('header .h-content').css("padding-left", "0px");
                         jQuery('#mainmenu li').css("width", "100%");
                     }
                 }

             }
         }
         scrolling();
   

         jQuery(".btn-close").on("click", function() {
             var iteration = $(this).data('iteration') || 1;
             switch (iteration) {
                 case 1:
                     jQuery('#popup-box').addClass('popup-hide');
                     jQuery('#popup-box').removeClass('popup-show');
                     break;
                 case 2:

                     break;
             }
             iteration++;
             if (iteration > 2) iteration = 1;
             $(this).data('iteration', iteration);
         });
		 
		 jQuery("#btn-show-skills").on("click", function() {
			  if (skills_show == 0) {
                jQuery('#skills').addClass("show");
				skills_show = 1;
             }
         });
		 
		 $("#sw-1").click(function() {
			if($(this).is(":checked")){
				$('.opt-1').css('display','none');
				$('.opt-2').css('display','inline-block');
			}else{
				$('.opt-2').css('display','none');
				$('.opt-1').css('display','inline-block');
			}
		});
     }
   

	 
	 
	 
     function centerY() {
         jQuery('.full-height').each(function() {
             var dh = jQuery(window).innerHeight();
             jQuery(this).css("min-height", dh);
         });
     }
  
  
     jQuery(document).ready(function() {
         'use strict';
         $("body").show();
         menu_click(window.location.hash);
         header_styles();
         center_xy();
         init_resize();
       
         var $doc_height = jQuery(window).innerHeight();
         jQuery('#homepage #content.content-overlay').css("margin-top", $doc_height);
		 if(jQuery('header').hasClass("autoshow")){
			 $op_header_autoshow = 1;
		 }
         centerY();
         
         if ($('#back-to-top').length) {
             backToTop();
         }
         jQuery(".nav-exit").on("click", function() {
             $.magnificPopup.close();
         });
         jQuery('#toggle-button').on("click", function() {

            var h = jQuery('header')[0].scrollHeight;
			
             if (mobile_menu_show == 0) {
                 jQuery('header.header-sm').stop(true).animate({
                     'height': h
                 }, 200, 'easeOutCubic');
                 jQuery('header').addClass('hm-open');
                 mobile_menu_show = 1;
             } else {
                 jQuery('header.header-sm').stop(true).animate({
                     'height': $tmp_h
                 }, 200, 'easeOutCubic');
                 jQuery('header').removeClass('hm-open');
                 mobile_menu_show = 0;
             }
         })
         
         jQuery("a.btn").on("click", function(evn) {
             if (this.href.indexOf('#') != -1) {
                 evn.preventDefault();
                 jQuery('html,body').scrollTo(this.hash, this.hash);
             }
         });
     
         custom_bg();
         menu_arrow();
         init();
          jQuery('#main').show();
         jQuery('section').each(function() {
            var h = jQuery(this).css('height');
            jQuery(this).attr('data-height',h);
         });

          var v_delay;
          function doTimer(n){
            v_delay = setTimeout(
                  function() 
                  {
                    jQuery('section').hide();
                    jQuery('header').hide();
                    jQuery('#exit-button').addClass("clicked");
                    jQuery(n).css("display","flex");
                  }, 400);
          }

          var c_delay;
          function doTimer_2(n){
            c_delay = setTimeout(
                  function() 
                  {
                    jQuery('section').hide();
                    jQuery('header').show();
                    jQuery(n).css("display","flex");

                  }, 450);
          }

          function menu_click(n){
            clearTimeout(v_delay);
            jQuery('html,body').scrollTo(n, n);
            if (n.charAt(0) == '#') {
                jQuery('.transition').css('left','100%');
                doTimer(n);
            }
          }

         jQuery(".scrollnav a, .scroll-to").on("click", function(n) {
            var url = jQuery(this).attr('href');
            menu_click(url);
            jQuery(url).css('height',jQuery(url).attr('data-height'));
         });

         jQuery("#exit-button").on("click", function(evn) {
            clearTimeout(c_delay);
            jQuery('#exit-button').removeClass("clicked");
            jQuery('.transition').css('left','-100%');
            doTimer_2('#main');
                
         });

         sequence();
         sequence_a();
	
         $(window).resize(function() {
             init_resize();
             centerY();
             jQuery('section').each(function() {
                var h = jQuery(this).css('height');
                jQuery(this).attr('data-height',h);
             });
         });
         jQuery(window).on("scroll", function() {
             header_sticky();
             init();
             backToTop();
             moveItItemNow();
             
             var target = $('.fadeScroll');
             var targetHeight = target.outerHeight();
             var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
             if (scrollPercent >= 0) {
                 target.css('opacity', scrollPercent);
             } else {
                 target.css('opacity', 0);
             }
             jQuery('.side-bg').each(function() {
                 jQuery(this).find(".image-container").css("height", jQuery(this).find(".image-container").parent().css("height"));
             });
           
			 $('.toggle').click(function(e) {
				e.preventDefault();
				var $this = $(this);
				if ($this.next().hasClass('show')) {
					$this.next().removeClass('show');
					$this.next().slideUp(350);
				} else {
					$this.parent().parent().find('li .inner').removeClass('show');
					$this.parent().parent().find('li .inner').slideUp(350);
					$this.next().toggleClass('show');
					$this.next().slideToggle(350);
				}
			});
         });
	
		 
         $(function() {
             "use strict";
             var x = 0;
             setInterval(function() {
                 x -= 1;
                 $('.bg-loop').css('background-position', x + 'px 0');
             }, 50);
         })
		 
		$(window).load(function() {
		new WOW().init();
		window.dispatchEvent(new Event('resize'));
		
		$('.grid').isotope({
			itemSelector: '.grid-item'
        });
        jQuery('section').height('auto');
        jQuery('section:not(#main)').hide();
         });
         $("a#single_image").fancybox();
     });
 })(jQuery);