$(window).scroll(function () {
    if ($(this).scrollTop() >= 600)
        $("#navBar").addClass("noTransparrent");
    else
        $("#navBar").removeClass("noTransparrent");
});

$(document).ready(function () {
    $("a.scroll").on('click', function (event) {
        var hash = this.hash;
        $('html,body').animate({ scrollTop: $(hash).offset().top - 110 }, 800, function () { });
    });

    $(function () {
        $("#commentform").validate();

    });
});
