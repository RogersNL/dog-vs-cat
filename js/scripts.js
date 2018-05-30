$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul#boolean").append("<li>Woof Woof!</li>");
    $("ul#buster").append("<li>Meow what do you want?</li>");
  });

  $("button#cat").click(function() {
    $("ul#buster").append("<li>Meow</li>");
    $("ul#boolean").append("<li>Woof, I said boo LEEEN!</li>");
  });

  $("button#mystery").click(function() {
    $("ul#buster").append("<li>Trump s0n</li>");
    $("ul#boolean").append("<li>'Merica</li>");
  });
});
