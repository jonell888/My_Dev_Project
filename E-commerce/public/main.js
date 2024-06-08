$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });

  // navbar 
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });
  
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
    $('#nav-toggle').removeClass('is-active');
    $('ul.nav').removeClass('show');
  });