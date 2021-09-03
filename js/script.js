 $(window).scroll(function(){

     if($(window).scrollTop()){
          $('nav').addClass('dark');
     }
     else{
        $('nav').removeClass('dark');     
    }
 });

 


 $('.owl-carousel').owlCarousel({
    loop:true,
    items:1,
    dots:false,
    nav:true,
    smartSpeed:700,
    responsiveClass:true,
    autoplay:true
    
  
});

function onclickmenu(){
    document.getElementById("menu").classList.toggle("icon");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("mobile-nav-overly").classList.toggle("dark");
  
}

 




 



