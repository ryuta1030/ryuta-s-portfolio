$(function(){
  

$('#top-btn').click(function(){
  
  $('html,body').animate({
    'scrollTop':0
},500);

});

$(window).scroll(function(){
  var scrollTop=$(this).scrollTop();
  var $top =$('.top-btn');
  
  if(scrollTop>200){
    $top.show();
  }else{
    $top.hide();
  }
  });

  $('header a').click(function(){

    var id=$(this).attr('href');
    var position=$(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);

  });

  $('#toi').click(function(){

    var id=$(this).attr('href');
    var position=$(id).offset().top;
    $('html,body').animate({
      'scrollTop':position
    },500);

  });

  $('#menu').click(function(){
    if($('.header-wrapper').hasClass('open')){
      $('.header-wrapper').removeClass('open');
      $('.header-list').slideUp();
    }else{
      $('.header-wrapper').addClass('open');
      $('.header-list').slideDown();
    }
  });



});