
$( document ).ready(function() {
  
    //showcase slider
    $('.showcase-content').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        fade:true,
        cssEase: 'linear',
        speed:500,
        dots:true,
        autoplay:true,
        prevArrow:".arrow-left",
        nextArrow:".arrow-right",

      });

    //team-part slider
    $('.team-member').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows:false,
      dots:true,
      autoplay:true
    });

    // review part slider

    $('.review-content-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
     
      fade:false,
      asNavFor: '.review-img-slider'
    });

    $('.review-img-slider').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.review-content-slider',
      centerMode: true,
      centerPadding:'0px',
      arrows:true,
      prevArrow:'.review-left-arrow',
      nextArrow:'.review-right-arrow',
     autoplay:true,
      focusOnSelect: true
    });

      // venobox
      $('.venobox').venobox({
        framewidth : '800px',                            // default: ''
        frameheight: '500px',                            // default: ''
        border     : '1px',                             // default: '0'
        bgcolor    : '#DCA3F1',                          // default: '#fff'
        titleattr  : 'data-title',                       // default: 'title'
        numeratio  : true,                               // default: false
        infinigall : true,                               // default: false
        share      : ['facebook', 'twitter', 'download'] // default: []
      }); 


});