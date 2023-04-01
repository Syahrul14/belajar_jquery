$(document).ready(function () {
  // efect hide
  $("#hide").click(function () {
    $("#kotak").hide(1000);
  });
  // efect show
  $("#show").click(function () {
    $("#kotak").show(1000);
  });
  // efect FadeOut
  $("#fadeOut").click(function () {
    $(".box1").fadeOut();
    $(".box2").fadeOut(1000);
    $(".box3").fadeOut(3000);
  });
  // efect fadeIn
  $("#fadeIn").click(function () {
    $(".box1").fadeIn();
    $(".box2").fadeIn(2000);
    $(".box3").fadeIn(4000);
  });
  // efect fade Toggle
  $("#fadeToggle").click(function () {
    $(".box1").fadeToggle();
    $(".box2").fadeToggle(2000);
    $(".box3").fadeToggle(4000);
  });
  // efect fade To
  $("#fadeTo").click(function () {
    $(".box1").fadeTo("slow", 0.2);
    $(".box2").fadeTo("slow", 0.3);
    $(".box3").fadeTo("slow", 0.4);
  });
  // efect slide up
  $("#slideUp").click(function () {
    $("#slide").slideUp("slow");
  });
  //efect slide down
  $("#slideDown").click(function () {
    $("#slide").slideDown("slow");
  });
  // efect slide toggle
  $("#slideToggle").click(function () {
    $("#slide").slideToggle("slow");
  });
  // efect animate
  $("#kiri").click(function () {
    $("#animate-box").animate({ left: "-=50" }, "slow");
  });
  $("#kanan").click(function () {
    $("#animate-box").animate({ right: "-=50" }, "slow");
  });
  // efect clear queue
  $("#start").click(function () {
    $("#clearQueue").animate({ left: "+=500" }, 5000);
    $("#clearQueue").queue(function () {});
  });
  $("#stop").click(function () {
    $("#clearQueue").clearQueue();
    $("#clearQueue").stop();
  });
  // efect delay
  $("#delay").click(function () {
    $("#kotak-satu").slideUp(2000).delay(3000).fadeIn(2000);
    $("#kotak-dua").slideUp(2000).fadeIn(2000);
  });
});
