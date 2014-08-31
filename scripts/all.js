jQuery(document).ready(function($) {

  $(".home").click(function() {
    $(".content").css("color", "black")
    $(this).addClass("active activehover");
    $(".vita").removeClass("active");
    $(".skills").removeClass("active");
    $(".contact").removeClass("active");
    $(".imprint").removeClass("active");
  });

  $(".vita").click(function() {
    $(".content").css("color", "yellow")
    $(".home").removeClass("active");
    $(this).addClass("active activehover");
    $(".skills").removeClass("active");
    $(".contact").removeClass("active");
    $(".imprint").removeClass("active");
  });

  $(".skills").click(function() {
    $(".content").css("color", "green")
    $(".home").removeClass("active");
    $(".vita").removeClass("active");
    $(this).addClass("active activehover");
    $(".contact").removeClass("active");
    $(".imprint").removeClass("active");
  });

  $(".contact").click(function() {
    $(".content").css("color", "blue")
    $(".home").removeClass("active");
    $(".vita").removeClass("active");
    $(".skills").removeClass("active");
    $(this).addClass("active activehover");
    $(".imprint").removeClass("active");
  });

  $(".imprint").click(function() {
    $(".content").css("color", "red")
    $(".home").removeClass("active");
    $(".vita").removeClass("active");
    $(".skills").removeClass("active");
    $(".contact").removeClass("active");
    $(this).addClass("active activehover");
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