$(function () {
  $(".nav-toggle").on("click", function () {
    $(this).toggleClass("active");
    $(".nav-mobile").toggleClass("active");
  });
});
