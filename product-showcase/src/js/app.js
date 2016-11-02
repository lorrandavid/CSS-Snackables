$(document).ready(function() {
  $(".navfooter__link").click(function() {
    var current = $(this).attr('id');

    if($('.content__'+current).hasClass('content__product--hidden')) {
      $(".content__product").addClass('content__product--hidden')
      $('.navfooter__link').removeClass('navfooter__link--active');
      $('.content__'+current).removeClass('content__product--hidden');
      $('#'+current).toggleClass('navfooter__link--active');
    }
  });
});
