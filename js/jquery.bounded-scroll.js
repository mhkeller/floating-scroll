(function () {

  $.fn.boundedScroll = function($bounder){
    var $that     = this;
    $bounder.addClass('bounded-scroll-bounding-box');

    return this.each(function(){
      function relocate(pixel_depth) {
        $that.addClass('bounded-scroll-sticky');
        var above_bounding = $bounder.offset().top,
            height_bounding = $bounder.height(),
            height_content = $that.height();

        if (pixel_depth > above_bounding) {
            $that.addClass('bounded-scroll-stick');
        } else {
            $that.removeClass('bounded-scroll-stick');
        };
        if (pixel_depth > above_bounding + height_bounding - height_content) {
            $that.addClass('bounded-scroll-stuck');
        } else {
            $that.removeClass('bounded-scroll-stuck');
        };
      };

      $(window).scroll(function () {
        var pixel_depth = $(window).scrollTop();
        relocate(pixel_depth);
      });
      
    });
  };

}).call(this);