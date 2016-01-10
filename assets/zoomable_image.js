(function() {
  $(function() {
    return $(".full.zoomable img").click(function() {
      return $(this).toggleClass("zoom");
    });
  });

}).call(this);
