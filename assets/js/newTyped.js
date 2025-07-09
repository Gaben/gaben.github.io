function newTyped() {}
$(function () {
  $("typed").typed({
    strings: ["Software Engineer", "Frontend Developer"],

    typeSpeed: 90,
    backDelay: 700,
    contentType: "html",
    loop: !0,
    resetCallback: function () {
      newTyped();
    },
  }),
    $(".reset").click(function () {
      $("typed").typed("reset");
    });
});
