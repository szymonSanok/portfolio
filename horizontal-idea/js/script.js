// (function ($) {
//     $.jInvertScroll(['.scroll'],        // an array containing the selector(s) for the elements you want to animate
//         {
//             height: 6000,                   // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
//             onScroll: function (percent) {   //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
//                 console.log(percent);
//             }
//         });
// }(jQuery));

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    var height = $(window).height();
    var _scale = (1 - (scroll / height)).toFixed(2);
    var _percent = 50;

    if (_scale < .30) {
        _scale = .30;
    }

    $('#logo').css({
        "transform": "scale(" + _scale + ") translate(-50%, 0)"
    });

    if (scroll > 0) {
        $('#arrow-href').attr("href","#first-section");
        $('#arrow').css({
            transition: "1s",
            transform: "rotate(180deg)"
        });
        $('#arrow-down').addClass("right-bottom");
    } else {
        $('#arrow-href').attr("href","#second-section");
        $('#arrow').css({
            transition: "1s",
            transform: "rotate(0deg)"
        });
        $('#arrow-down').removeClass("right-bottom");
    }

    if(scroll>=height){
        $('.website-element').each(function () {
            console.log("add to element")
            $(this).addClass('slide-in-left')
        })
    }
});
