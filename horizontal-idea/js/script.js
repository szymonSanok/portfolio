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
    var _opacity = (_scale * _scale).toFixed(2);

    if (_scale < .30) {
        _scale = .30;
    }

    $('#logo').css({
        "transform": "scale(" + _scale + ") translate(-50%, 0)"
    });
    $('#arrow-down').css({
        "opacity": _opacity
    });

    console.log(_scale)
    console.log(_scale * _scale)
});
