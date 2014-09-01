jQuery(document).ready(function($) {

  $(".home").click(function() {
    $(".content").css("color", "black")
    $(this).addClass("active activehover");
    $(".vita").removeClass("active");
    $(".skills").removeClass("active");
    $(".contact").removeClass("active");
    $(".imprint").removeClass("active");
    $(".home-indicator").css("visibility", "visible")
    $(".vita-indicator").css("visibility", "hidden")
    $(".skills-indicator").css("visibility", "hidden")
    $(".contact-indicator").css("visibility", "hidden")
  });

  $(".vita").click(function() {
    $(".content").css("color", "yellow")
    $(".home").removeClass("active");
    $(this).addClass("active activehover");
    $(".skills").removeClass("active");
    $(".contact").removeClass("active");
    $(".imprint").removeClass("active");
    $(".home-indicator").css("visibility", "hidden")
    $(".vita-indicator").css("visibility", "visible")
    $(".skills-indicator").css("visibility", "hidden")
    $(".contact-indicator").css("visibility", "hidden")
  });

  $(".skills").click(function() {
    $(".content").css("color", "green")
    $(".home").removeClass("active");
    $(".vita").removeClass("active");
    $(this).addClass("active activehover");
    $(".contact").removeClass("active");
    $(".imprint").removeClass("active");
    $(".home-indicator").css("visibility", "hidden")
    $(".vita-indicator").css("visibility", "hidden")
    $(".skills-indicator").css("visibility", "visible")
    $(".contact-indicator").css("visibility", "hidden")
  });

  $(".contact").click(function() {
    $(".content").css("color", "blue")
    $(".home").removeClass("active");
    $(".vita").removeClass("active");
    $(".skills").removeClass("active");
    $(this).addClass("active activehover");
    $(".imprint").removeClass("active");
    $(".home-indicator").css("visibility", "hidden")
    $(".vita-indicator").css("visibility", "hidden")
    $(".skills-indicator").css("visibility", "hidden")
    $(".contact-indicator").css("visibility", "visible")
  });

  $(".imprint").click(function() {
    $(".content").css("color", "red")
    $(".home").removeClass("active");
    $(".vita").removeClass("active");
    $(".skills").removeClass("active");
    $(".contact").removeClass("active");
    $(this).addClass("active activehover");
    $(".home-indicator").css("visibility", "hidden")
    $(".vita-indicator").css("visibility", "hidden")
    $(".skills-indicator").css("visibility", "hidden")
    $(".contact-indicator").css("visibility", "hidden")
  });

  $( ".home" ).hover(
    function() {
      if($(this).hasClass('active')) {
        $(this).addClass("activehover");
      } else {
        $(this).addClass("hover");
      }
    }, 
    function() {
      $(this).removeClass("hover");
      $(this).removeClass("activehover");
    }
    );

  $( ".vita" ).hover(
    function() {
      if($(this).hasClass('active')) {
        $(this).addClass("activehover");
      } else {
        $(this).addClass("hover");
      }
    }, 
    function() {
      $(this).removeClass("hover");
      $(this).removeClass("activehover");
    }
    );

  $( ".skills" ).hover(
    function() {
      if($(this).hasClass('active')) {
        $(this).addClass("activehover");
      } else {
        $(this).addClass("hover");
      }
    }, 
    function() {
      $(this).removeClass("hover");
      $(this).removeClass("activehover");
    }
    );

  $( ".contact" ).hover(
    function() {
      if($(this).hasClass('active')) {
        $(this).addClass("activehover");
      } else {
        $(this).addClass("hover");
      }
    }, 
    function() {
      $(this).removeClass("hover");
      $(this).removeClass("activehover");
    }
    );

  $( ".imprint" ).hover(
    function() {
        $(this).addClass("hover");
    }, 
    function() {
      $(this).removeClass("hover");
    }
    );
});