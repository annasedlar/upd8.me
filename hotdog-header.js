function scroll(){
    window.addEventListener('scroll', function(){
        var verticalOffset = window.scrollY;  
        var shrink = 250;
        var header = $('head');
        if(verticalOffset > shrink){
            $('.head').addClass("small").text("we scour the web so you don't have to");
            $('.head').removeClass("large");
        } else if(shrink > verticalOffset){
            $('.head').removeClass("small");
            $('.head').addClass("large").text("Upd8d: We scour the web so you don't have to");
        }
    });
};

window.onload = scroll();