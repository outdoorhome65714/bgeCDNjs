$(window).width()>940&&function(t){var e={topSpacing:0,bottomSpacing:0,className:"is-sticky",wrapperClassName:"sticky-wrapper",center:!1,getWidthFrom:""},i=t(window),n=t(document),o=[],s=i.height(),a=function(){for(var e=i.scrollTop(),a=n.height(),r=a-s,c=e>r?r-e:0,p=0;p<o.length;p++){var l=o[p];if(e<=l.stickyWrapper.offset().top-l.topSpacing-c+50)null!==l.currentTop&&(l.stickyElement.css("position","").css("top",""),l.stickyElement.parent().removeClass(l.className),l.currentTop=null);else{var d=a-l.stickyElement.outerHeight()-l.topSpacing-l.bottomSpacing-e-c;d<0?d+=l.topSpacing:d=l.topSpacing,l.currentTop!=d&&(l.stickyElement.css("position","fixed").css("top",d),void 0!==l.getWidthFrom&&l.stickyElement.css("width",t(l.getWidthFrom).width()),l.stickyElement.parent().addClass(l.className),l.currentTop=d)}}},r=function(){s=i.height()},c={init:function(i){var n=t.extend(e,i);return this.each(function(){var e=t(this),i=e.attr("id"),s=t("<div></div>").attr("id",i+"-sticky-wrapper").addClass(n.wrapperClassName);e.wrapAll(s),n.center&&e.parent().css({width:e.outerWidth(),marginLeft:"auto",marginRight:"auto"}),"right"==e.css("float")&&e.css({float:"none"}).parent().css({float:"right"});var a=e.parent();a.css("height",e.outerHeight()),o.push({topSpacing:n.topSpacing,bottomSpacing:n.bottomSpacing,stickyElement:e,currentTop:null,stickyWrapper:a,className:n.className,getWidthFrom:n.getWidthFrom})})},update:a};window.addEventListener?(window.addEventListener("scroll",a,!1),window.addEventListener("resize",r,!1)):window.attachEvent&&(window.attachEvent("onscroll",a),window.attachEvent("onresize",r)),t.fn.sticky=function(e){return c[e]?c[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void t.error("Method "+e+" does not exist on jQuery.sticky"):c.init.apply(this,arguments)},t(function(){setTimeout(a,0)})}(jQuery);