$(".hamburger-btn").click(function () {
  $(this).toggleClass("active");
  $(".main-nav-links").toggleClass("open");
  $(".main-nav-links li").each(function () {
    $(this).toggleClass("listfade");
  });
});
