$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".blue-box").slideUp(2000).slideDown(1000);

  // $("p").hide().slideDown(1000).slideToggle(500);

  $(".blue-box")
  .animate({
    "margin-left": "+=200px"
  }, 1000, "linear")
  .animate({
    "margin-left": "-=200px"
  }, 500);

  $("p").animate({
    fontSize: "50px"
  }, 1000, message);

  function message() {
    alert("The paragraphs are huge!");
  }
});


