!function(s){s.fn.cutomAccordion=function(a){function e(a,e,i){var t=s.cookie(a);if(null!=t){var l=t.split(",");s.each(l,function(a,t){var l=s("li:eq("+t+")",e);s("> a",l).addClass(i);var n=l.parents("li");s("> a",n).addClass(i)})}}function i(a,e,i){var t=[];s("li a."+i,e).each(function(){var a=s(this).parent("li"),i=s("li",e).index(a);t.push(i)}),s.cookie(a,t,{path:"/"})}var t={classParent:"cutom-parent",classActive:"active",classArrow:"dcjq-icon",classCount:"dcjq-count",classExpand:"dcjq-current-parent",classDisable:"",eventType:"click",hoverDelay:300,menuClose:!0,autoClose:!0,autoExpand:!1,speed:"fast",saveState:!0,disableLink:!0,showCount:!1,cookie:"dcjq-accordion"},a=s.extend(t,a);this.each(function(){function a(){$arrow='<span class="'+t.classArrow+'"></span>';var a=t.classParent+"-li";$objSub.show(),s("li",u).each(function(){s("> ul",this).length>0&&(s(this).addClass(a),s("> a",this).addClass(t.classParent).append($arrow))}),$objSub.hide(),t.classDisable&&s("li."+t.classDisable+" > ul").show(),1==t.showCount&&s("li."+a,u).each(function(){if(1==t.disableLink)var a=parseInt(s("ul a:not(."+t.classParent+")",this).length);else var a=parseInt(s("ul a",this).length);s("> a",this).append(' <span class="'+t.classCount+'">('+a+")</span>")})}function l(){$activeLi=s(this).parent("li"),$parentsLi=$activeLi.parents("li"),$parentsUl=$activeLi.parents("ul"),1==t.autoClose&&v($parentsLi,$parentsUl),s("> ul",$activeLi).is(":visible")?(s("ul",$activeLi).slideUp(t.speed),s("a",$activeLi).removeClass(classActive)):(s(this).siblings("ul").slideToggle(t.speed),s("> a",$activeLi).addClass(classActive)),1==t.saveState&&i(t.cookie,u,classActive)}function n(){}function c(){}function o(){1==t.menuClose&&($objSub.slideUp(t.speed),s("a",u).removeClass(classActive),i(t.cookie,u,classActive))}function v(a,e){s("ul",u).not(e).slideUp(t.speed),s("a",u).removeClass(classActive),s("> a",a).addClass(classActive)}function r(){$objSub.hide();var a=s("a."+classActive,u).parents("li");s("> a",a).addClass(classActive),$allActiveLi=s("a."+classActive,u),s($allActiveLi).siblings("ul").show()}var u=this;if($objLinks=s("li > span",u),$objSub=s("li > ul",u),t.classDisable&&($objLinks=s("li:not(."+t.classDisable+") > a",u),$objSub=s("li:not(."+t.classDisable+") > ul",u)),classActive=t.classActive,a(),1==t.saveState&&e(t.cookie,u,classActive),1==t.autoExpand&&s("li."+t.classExpand+" > a").addClass(classActive),r(),"hover"==t.eventType){var p={sensitivity:2,interval:t.hoverDelay,over:l,timeout:t.hoverDelay,out:n};$objLinks.hoverIntent(p);var d={sensitivity:2,interval:1e3,over:c,timeout:1e3,out:o};s(u).hoverIntent(d),1==t.disableLink&&$objLinks.click(function(a){s(this).siblings("ul").length>0&&a.preventDefault()})}else $objLinks.click(function(a){$activeLi=s(this).parent("li"),$parentsLi=$activeLi.parents("li"),$parentsUl=$activeLi.parents("ul"),1==t.disableLink&&s(this).siblings("ul").length>0&&a.preventDefault(),1==t.autoClose&&v($parentsLi,$parentsUl),s("> ul",$activeLi).is(":visible")?(s("ul",$activeLi).slideUp(t.speed),s("a",$activeLi).removeClass(classActive)):(s(this).siblings("ul").slideToggle(t.speed),s("> a",$activeLi).addClass(classActive)),1==t.saveState&&i(t.cookie,u,classActive)})})}}(jQuery);


function callCategory(){

    $(document).ready(function(){
        $('#cat_accordion').cutomAccordion({
            classExpand : 'custom_id18',
            menuClose: false,
            autoClose: true,
            saveState: false,
            disableLink: false,		
            autoExpand: true
          });
//-------------------------------------------------------------

        $(document).on('click', '#grid-view', function(e){
              $('#content .product-layout').attr('class', 'product-layout product-grid col-lg-3 col-md-3 col-sm-4 col-xs-6');
            
        $screensize = $(window).width();
            if ($screensize > 1199) {
            $(".products-category > .clearfix").remove();
                $('.product-grid:nth-child(4n)').after('<span class="clearfix visible-lg-block"></span>');
            }
            if ($screensize < 1199) {
            $(".products-category > .clearfix").remove();
                $('.product-grid:nth-child(4n)').after('<span class="clearfix visible-lg-block visible-md-block"></span>');
            }
          if ($screensize < 991) {
            $(".products-category > .clearfix").remove();
                $('.product-grid:nth-child(3n)').after('<span class="clearfix visible-lg-block visible-sm-block"></span>');
            }
          if ($screensize < 767) {
                $(".products-category > .clearfix").remove();
            $('.product-grid:nth-child(2n)').after('<span class="clearfix visible-lg-block visible-xs-block"></span>');
            }
            
        $(window).resize(function() {
            $screensize = $(window).width();
            if ($screensize > 1199) {
                $(".products-category > .clearfix").remove();
                $('.product-grid:nth-child(4n)').after('<span class="clearfix visible-lg-block"></span>');
            } 
            if ($screensize < 1199) {
                $(".products-category > .clearfix").remove();
                $('.product-grid:nth-child(4n)').after('<span class="clearfix visible-lg-block visible-md-block"></span>');
            }
          if ($screensize < 991) {
                $(".products-category > .clearfix").remove();
                $('.product-grid:nth-child(3n)').after('<span class="clearfix visible-lg-block visible-sm-block"></span>');
            }
          if ($screensize < 767) {
                $(".products-category > .clearfix").remove();
            $('.product-grid:nth-child(2n)').after('<span class="clearfix visible-lg-block visible-xs-block"></span>');
            }
        });
        localStorage.setItem('display', 'grid');
        $('.btn-group').find('#grid-view').addClass('selected');
        $('.btn-group').find('#list-view').removeClass('selected');
          });   
        if (localStorage.getItem('display') == 'list') {
            $('#list-view').trigger('click');
          } else {
            $('#grid-view').trigger('click');
          }
        });
}
callCategory();