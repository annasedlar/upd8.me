function scroll(){
    window.addEventListener('scroll', function(){
        var verticalOffset = window.scrollY;  
        var shrink = 200;
        var header = $('head');
        if(verticalOffset > shrink){
            $('.head').addClass("small").text("New Header!!!!");
            $('.head').removeClass("large");
        } else if(shrink > verticalOffset){
            $('.head').removeClass("small");
            $('.head').addClass("large").text("Back to the old");
        }
    });
};

window.onload = scroll();