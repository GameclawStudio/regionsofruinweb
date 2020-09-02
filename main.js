$(function() {


//Mobile friendly width change
function checkWidth() {
    var windowsize = $window.width();
    if (windowsize < 800) {
        $('.title-div').css('position', 'relative');
        //$('.do-block').css('width', '100%');
            //$('.opt-frm').css('width', '350px');
            //$('.nav').css('top', '10px');
            //$('.logo').css('margin', 'auto');
            //$('.hd-img').css('height', '300px');
            //$('.opt').css('min-width', '160px');
    }
    else {
        //$('.cont-block').css('width', '50%');
        //$('.do-block').css('width', '50%');
            //$('.opt-frm').css('width', '800px');
            //$('.nav').css('top', '225px');
            //$('.logo').css('margin', '-50px auto');
            //$('.hd-img').css('height', '550px');
            //$('.opt').css('min-width', '100px');

    }
}

//navbar slow scroll and image resize
  $(window).scroll(function(){
    var fromTop = $(window).scrollTop();
    $(".title-div").css('margin', '-' + 0.75*fromTop + 'px 0 0 0');
  });

  var $window = $(window);

// Execute on load
    checkWidth();
// Bind event listener
    $(window).resize(checkWidth);
});
