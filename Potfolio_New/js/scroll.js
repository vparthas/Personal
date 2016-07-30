$(document).ready(function(){

    $(window).on('resize', function()
    {
        if($('#aboutDiv').height() < $(window).height())
        {
            $('#aboutDiv').height($(window).height()) - $('#navBar').height()
            $('#contentDiv').css("padding-bottom", "0");
        }

    }).trigger('resize');

    $('#projectsLink').click(function()
    {
        $('html, body').animate({
            scrollTop: $("#projectsDiv").offset().top - $('#navBar').height()// - $('.splash-container').height()
        }, 1000);
    });

    $('#aboutLink').click(function()
    {
        $('html, body').animate({
            scrollTop: $("#aboutDiv").offset().top - $('#navBar').height()// - $('.splash-container').height()
        }, 1000);
    });

    $(window).scroll(function()
    {
        var scrollTop = $(window).scrollTop();
        var max = $('#contentTop').offset().top - $('#navBar').height();

        if ( scrollTop >  max)
        {
            $("#navBar").css("background-color", "#437c90");
        }
        else
        {
            $("#navBar").css("background-color", "transparent");
        }
    });

});
