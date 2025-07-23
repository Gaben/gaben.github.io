function newTyped() {}
$(function () {
  $("typed").typed({
    strings: [
      "Product Manager",
      "Scrum Master",
      "Product Analyst",
      "Project Manager",
    ],

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
