$(document).ready(function () {
  // event click
  $("#click").click(function () {
    alert("Saya Sedang Belajar JQuery");
  });
  // event double click
  $("#dblclick").dblclick(function () {
    $(this).css("background-color", "red");
  });

  $(".mouse").mouseleave(function () {
    $(this).css("background-color", "skyblue");
  });

  // event mouse enter
  $(".mouse").mouseenter(function () {
    $(this).css("background-color", "lime");
  });
  // event keydown
  $("#keydown").keydown(function () {
    $("#pesan_keydown").text($(this).val());
  });
  // event key up
  $("#keyup").keyup(function () {
    $("#pesan_keyup").text($(this).val());
  });
});
