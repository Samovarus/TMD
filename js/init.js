$(document).ready(function() {
   
    $('#fullpage').fullpage({
        anchors:['home', 'about', 'services', 'clients', 'map'],
        
         onLeave: function(){
            var leavingSection = $(this);
            hidePopup();
//             resetScrollPosition();
             $('.menu-sheet').hide(200);
            },
         
         css3: true,
         autoScrolling: true,
         scrollOverflow: true,
         touchSensitivity: 15,
         normalScrollElementTouchThreshold: 10,
         fitToSection: true,
         fixedElements: '.wrapper-popup'


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
        });

        initGMap();
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
};

var map;



function initGMap() {
    // Create an array of styles.
  var styles = [{"stylers":[{"saturation":-100},{"gamma":0.8},{"lightness":4},{"visibility":"on"}]},{"featureType":"landscape.natural","stylers":[{"visibility":"on"},{"color":"#5dff00"},{"gamma":4.97},{"lightness":-5},{"saturation":100}]}];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

   var myPlacemark = {lat: 55.7885499, lng: 37.72956881};

    var image = 'img/marker.png';

    var marker = new google.maps.Marker({
    position: myPlacemark,
    title:"TotalMarketing:Digital",
    icon: image
    });



  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(55.78869686104115, 37.72956881),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    }
  };
  var map = new google.maps.Map(document.getElementById('gmap'),
    mapOptions);

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');

  // To add the marker to the map, call setMap();
  marker.setMap(map);
};



