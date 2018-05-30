$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul#boolean").prepend("<li>Hello!</li>");
  });

  $("button#cat").click(function() {
    $("ul#buster").prepend("<li>Goodbye!</li>");
  });

  $("button#mystery").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");
  });
});
