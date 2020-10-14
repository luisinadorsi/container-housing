$(document).ready (function name(params) {


    var fixedHeader = $('#fixedHeader');

    $(window).on('scroll',function name(params) {

        var proyectosOffsetTop =$('#proyectos').offset().top;
    
        if ($(window).scrollTop() >= proyectosOffsetTop){
    
            fixedHeader.css ('margin-top',0);
    
        } else if ($(window).scrollTop() <= proyectosOffsetTop/2){
    
            fixedHeader.css ('margin-top','-68px');
        }
    
    })
    
});