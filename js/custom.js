$(document).ready(function () {
    // Provide JavaScript functionality for project tile rollover
    $('.overlay-image .hover').each(function () {
        $(this).on({
            mouseenter: function () {
                $(this).stop().animate({ opacity: 1 });
            }, // End mouseenter
            mouseleave: function () {
                $(this).stop().animate({ opacity: 0 });
            }, // End mouseleave
        }); // End on
    }); // End each

    // $('.overlay-image .hover').each(function () {
    //     $(this).hover(
    //         function () {
    //             $(this).stop().animate({ opacity: 1 });
    //         },
    //         function () {
    //             $(this).stop().animate({ opacity: 0 });
    //         }
    //     ); // End hover
    // }); // End each

}); // End jQuery