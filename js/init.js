$(document).ready(function() {
   
    $('#fullpage').fullpage({
        anchors:['home', 'about', 'services', 'clients', 'map'],
        
         onLeave: function(){
            var leavingSection = $(this);
             hidePopup();
             resetScrollPosition();
             $('.menu-sheet').hide(200);
            },
         
         css3: true,
         scrollOverflow: true,
         touchSensitivity: 15,
         normalScrollElementTouchThreshold: 10,
         fitToSection: true,
         fixedElements: '.wrapper-popup',
    });

    bindEvents();

    
    var carouselCount = 0;
    $(".owl-slider").each(function () {
        $(this).attr("id", "owl-slider" + carouselCount);
        $('#owl-slider' + carouselCount).owlCarousel({
           loop:false,
           navText:"",
           nav:true,
           merge:true,
           center:true,
           items : 1
         });

        carouselCount ++;
//        console.log(carouselCount);
        });

    });

function bindEvents(){
    $('.main-menu').on('click', function(){
     $('.menu-sheet').show(600);   
    });  
    
    $('.services-pict').on('click', function(){
//        console.log("touch start");
        $('.services-pict').removeClass('touch');
        $(this).addClass('touch');  
    });
    
    $('.close-btn').on('click', function(){
        event.stopPropagation();
        $('.menu-sheet').hide(200);   
    })
    
    $('.clients-row-item').on('click', function(){
     
        $ids =  $(this).attr('id');
        if ($('.wrapper-popup').hasClass(''+$ids+'')){
            $('.'+$ids+'').css('visibility', 'visible').animate({opacity: 1.0}, 1000);
            $('.page-header').hide();
//            console.log($ids);
        }
    });
    
    $('.close-popup').on('click', function(){
        hidePopup();
    });
    
    

};

function hidePopup(){
  $('.wrapper-popup').css({opacity: 0.0, visibility: "hidden"}).animate({opacity: 0}, 300);
  $('.page-header').show();
//  console.log('leave slide'); 
}

function resetScrollPosition(){
    $('.fp-scroller').css({
    "-webkit-transform":"translate(0px,0px)",
    "-ms-transform":"translate(0px,0px)",
    "transform":"translate(0px,0px)"
  });
}



