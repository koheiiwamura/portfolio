$(function(){
  var pageNum = 1
  var pageNumDict = {
    'profile-contents': 1,
    'work-contents': 2,
    'contact-contents': 3
  }

  $('a').each(function(){
    $(this).on('click', function(e){
      e.preventDefault();
      var id = $(this).children('.header-menu').attr('id').split('-link')[0];
      var page = id + '-contents';

      $('header').removeAttr('class');
      $('header').addClass(id);
    })
  })
})
