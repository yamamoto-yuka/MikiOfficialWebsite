$(".categoty-wrapper span").click(function () {
  let value = $(this).attr("data-category");
  if (value === "all") {
    $(".news-wrapper").show("1000");
  } else {
    $(".news-wrapper")
      .not("." + value)
      .hide("1000");
    $(".news-wrapper")
      .filter("." + value)
      .show("1000");
  }
});
