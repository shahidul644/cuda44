$(document).ready(function(){
    // Header Menu
    $('.menu-area ul li a').hover(function(){
        $('.menu-area ul li a').removeClass('active');
        $(this).addClass('active');
    });
    
    // Filter Munu
    $('.filter-menu ul li button').click(function(){
        $('.filter-menu ul li button').removeClass('bColor');
        $(this).addClass('bColor');
    });
    
    //Waypoint
    $('.sticky-js-section').waypoint(function(direction){
        if (direction == "down"){
            $('.header-sticky').addClass('sticky')
           } else {
            $('.header-sticky').removeClass('sticky')
           }
    });
    
    //MixItUp
    jQuery(".content").mixItUp();
    
    //Brouser Compatibility for ie/edge/safari 
    $('a').on('click', function(event){
        if (this.hash !== ""){
            event.preventDefault();
            
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});

function openNav(){
    document.querySelector("#myNav").style.width = "100%";
}
function closeNav(){
    document.querySelector("#myNav").style.width = "0%";
}