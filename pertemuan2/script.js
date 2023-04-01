$(document).ready(function () {
  // Memanggil selector tag
  $("h1").css("color", "red");
  $("p").css("color", "blue");

  // Selector class
  $(".judul").css("background-color", "red");
  $(".paragraf").css("color", "salmon");

  // selector id
  $("#judul").css("border", "2px solid blue");
  $("#paragraf").css("border", "2px solid green");

  $("*").css("background-color", "skyblue");

  $("h4:eq(2)").css("background-color", "yellow");

  $("input:submit").css("background-color", "green");
  $("input:button").css("padding", "20px");
});
