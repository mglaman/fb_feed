(function($) {
//Responsive Facebook Like Box courtest of - https://gist.github.com/dineshcooper/2111366
Drupal.behaviors.fbFeedResponsive = {
  attach: function (context, settings) {
    $(window).bind("load resize", function(){
      var container_width = $('#fb-feed-container').width();
      var pageURL = Drupal.settings.fb_feed.fb_feed_page_url;
      var boxHeight = Drupal.settings.fb_feed.fb_feed_height;
      var showFaces = Drupal.settings.fb_feed.fb_feed_faces;
      var showStream = Drupal.settings.fb_feed.fb_feed_stream;
      var showHeader = Drupal.settings.fb_feed.fb_feed_header;
      var showBorder = Drupal.settings.fb_feed.fb_feed_border;
      var colorScheme = Drupal.settings.fb_feed.fb_feed_color_scheme;

        $('#fb-feed-container').html('<div class="fb-like-box" ' +
        'data-href="'+ pageURL +'"' +
        ' data-width="' + container_width +'" '+ boxHeight +' data-show-faces="'+ showFaces +'" data-stream="'+ showStream +'" data-header="'+ showHeader +
        ' data-colorscheme="'+ colorScheme +'" data-show-border="'+ showBorder +'""></div>');
        FB.XFBML.parse( );
    });
  }
};
})(jQuery);
