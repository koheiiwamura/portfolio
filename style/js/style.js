$(function(){
  var pageNum = 1
  var pageNumDict = {
    'profile-contents': 0,
    'work-contents': 1,
    'contact-contents': 2
  }

  var slideCurrent = 0;
  var slideWidth = $('.slide').outerWidth();
  var slideNum = $('.slide').length;
  var slideSetWidth = slideWidth * slideNum;

  $('.slide-set').css('width', slideSetWidth);

  var sliding = function(){
    $('.slide-set').animate({
      left: slideCurrent * -slideWidth
    });
  }

  $('a').each(function(){
    $(this).on('click', function(e){
      e.preventDefault();
      var id = $(this).children('.header-menu').attr('id').split('-link')[0];
      var page = id + '-contents';

      $('header').removeAttr('class');
      $('header').addClass(id);

      slideCurrent = pageNumDict[page]
      sliding()

    })
  })

})
