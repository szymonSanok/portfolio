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
        $('#arrow-href').attr("href", "#first-section");
        $('#arrow-down').addClass("right-bottom");
        //    UP
        $('#arrow-href-up').attr("href", "#first-section");
        $('#arrow').css({
            transition: "1s",
            transform: "rotate(180deg)"
        });
        $('#arrow-up').addClass("right-bottom-up");
    } else {
        $('#arrow-href').attr("href", "#second-section");
        $('#arrow-down').removeClass("right-bottom");
        //    UP
        $('#arrow-href-up').attr("href", "#second-section");
        $('#arrow').css({
            transition: "1s",
            transform: "rotate(0deg)"
        });
        $('#arrow-up').removeClass("right-bottom-up");
    }

    if (scroll >= height) {
        $('.website-element').each(function () {
            console.log("add to element")
            $(this).addClass('slide-in-left')
        })
    }
});
$(document).ready(function () {
    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    })
});

function nextSection() {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('#') + 1);
    var sectionList = $("div[id$='-section']").map(function () {
        return this.id
    });
    sectionList = sectionList.toArray();
    var actualSectionId = sectionList.indexOf(id);
    if (actualSectionId === -1) {
        console.log(sectionList[0]);
        $("#arrow-href-up").attr("href", "#" + sectionList[1]);
        $("#arrow-href-down").attr("href", "#" + sectionList[1]);
    } else {
        console.log(sectionList[actualSectionId + 1]);
        $("#arrow-href-up").attr("href", "#" + sectionList[actualSectionId - 1]);
        $("#arrow-href-down").attr("href", "#" + sectionList[actualSectionId + 1]);
    }
}

function prevSection() {
    var url = window.location.href;
    var id = url.substring(url.lastIndexOf('#') + 1);
    var sectionList = $("div[id$='-section']").map(function () {
        return this.id
    });
    sectionList = sectionList.toArray();
    var actualSectionId = sectionList.indexOf(id);
    if (actualSectionId === -1) {
        console.log(sectionList[0]);
        $("#arrow-href-up").attr("href", "#" + sectionList[1]);
        $("#arrow-href-down").attr("href", "#" + sectionList[1]);
    } else {
        console.log(sectionList[actualSectionId + 1]);
        $("#arrow-href-up").attr("href", "#" + sectionList[actualSectionId - 1]);
        $("#arrow-href-down").attr("href", "#" + sectionList[actualSectionId + 1]);
    }
}

function openFullscreen(websiteId) {
    $('#one-site-display')
        .removeClass("visibility-none")
        .addClass("visibility-visible");
    $('.element-' + websiteId + '-big')
        .removeClass("display-none")
        .removeClass("visibility-none")
        .addClass("visibility-visible");
}

function closeFullscreen() {
    $('#one-site-display')
        .addClass("visibility-none")
        .removeClass("visibility-visible");
    $('.website-element-one')
        .addClass("display-none")
        .addClass("visibility-none")
        .removeClass("visibility-visible");
}

var logoId = 0;

function logoLightboxOpen(logoId) {
    this.logoId = logoId
    $('.logo-thumbnail-lightbox')
        .addClass("visibility-visible")
        .removeClass("visibility-none");
    $('.logo-thumbnail-big-' + logoId)
        .addClass("visibility-visible")
        .removeClass("display-none")
        .removeClass("visibility-none");
}


function logoLightboxClose() {
    $('.logo-thumbnail-lightbox')
        .addClass("visibility-none")
        .removeClass("visibility-visible");
    $('.logo-thumbnail-big')
        .addClass("visibility-none")
        .addClass("display-none")
        .removeClass("visibility-visible");
}

function logoLightboxNext() {
    $('.logo-thumbnail-big-' + this.logoId)
        .addClass("visibility-none")
        .addClass("display-none")
        .removeClass("visibility-visible");
    if (this.logoId >= $('.logo-thumbnail-big').length) {
        this.logoId = 1
    } else {
        this.logoId += 1;
    }
    $('.logo-thumbnail-big-' + this.logoId)
        .addClass("visibility-visible")
        .removeClass("display-none")
        .removeClass("visibility-none");
}

function logoLightboxPrev() {
    $('.logo-thumbnail-big-' + this.logoId)
        .addClass("visibility-none")
        .addClass("display-none")
        .removeClass("visibility-visible");
    if (this.logoId <= 1) {
        this.logoId = $('.logo-thumbnail-big').length
    } else {
        this.logoId -= 1;
    }
    $('.logo-thumbnail-big-' + this.logoId)
        .addClass("visibility-visible")
        .removeClass("display-none")
        .removeClass("visibility-none");
}
