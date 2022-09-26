jQuery.noConflict();
(function ($) {
  $(function () {
    var shrinkHeader = 500;
    $(window).scroll(function () {
      var scroll = getCurrentScroll();
      if (scroll >= shrinkHeader) {
        $("#header").addClass("fix-area");
        // $("#logo").find("img").attr("src", "files/ecc-logo-einzeilig.png");
      } else {
        $("#header").removeClass("fix-area");
        // $("#logo").find("img").attr("src", "files/Eisenschmidt_Consulting_Crew.png");
      }
    });

    function getCurrentScroll() {
      return window.pageYOffset || document.documentElement.scrollTop;
    }
  });
  // smooth scrolling with anchor links, mi:
  $("a[href^=#]").click(function (e) {
    e.preventDefault();
    var dest = $(this).attr("href");
    $("html,body").animate({ scrollTop: $(dest).offset().top }, "slow");
  });

  var $supportForm = $("#supportForm");
  var $sendButton = $("#sendMessage");

  $sendButton.click(function (event) {
    event.preventDefault();
    console.log(event);
    $sendButton.val("Senden ...");

    $.ajax({
      type: "POST",
      url: "https://formcarry.com/s/0At7hPg5V",
      data: $supportForm.serialize(),
      dataType: "json",
      // encode:   true,
      beforeSend: function () {
        $sendButton.prop("disabled", true);
        $supportForm.append(
          '<div class="alert alert--loading">Senden...</div>'
        );
      },
      success: function (data) {
        $supportForm.find(".alert--loading").hide();
        $supportForm.trigger("reset");
        $sendButton.removeProp("disabled");
        $sendButton.val("Senden");
        $supportForm.append(
          '<div class="alert alert--success">Nachricht gesendet!</div>'
        );
      },
      error: function (err) {
        $supportForm.find(".alert--loading").hide();
        $supportForm.append(
          '<div class="alert alert--error">Ein Fehler ist aufgetreten. Bitte versuchen Sie es noch einmal!</div>'
        );
      },
    });
  });
})(jQuery);
