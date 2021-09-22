$(function () {
  var className = $("body").attr("class");

  $(".nav-link--" + className).addClass("active");

  $(".nav-toggle").on("click", function () {
    $(this).toggleClass("active");
    $(".nav-mobile").toggleClass("active");
  });
});
