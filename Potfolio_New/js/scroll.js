$(document).ready(function(){
    $('#aboutLink').click(function()
    {
        $('html, body').animate({
            scrollTop: $("#aboutDiv").offset().top// - $('.splash-container').height()
        }, 1000);
    });
});
