$("document").ready(function () {
  changeProject1("tech");
  changeProject2("tech");
  changeProject3("tech");

  $("#projects-1-1").click(() => {
    changeProject1("tech");
  });
  $("#projects-1-2").click(() => {
    changeProject1("about");
  });
  $("#projects-1-3").click(() => {
    changeProject1("contributors");
  });
  $("#projects-2-1").click(() => {
    changeProject2("tech");
  });
  $("#projects-2-2").click(() => {
    changeProject2("about");
  });
  $("#projects-2-3").click(() => {
    changeProject2("contributors");
  });
  $("#projects-3-1").click(() => {
    changeProject3("tech");
  });
  $("#projects-3-2").click(() => {
    changeProject3("about");
  });
  $("#projects-3-3").click(() => {
    changeProject3("contributors");
  });

  function changeProject3(page) {
    $("#projects-snaccbook-info-about").css("display", "none");
    $("#projects-snaccbook-info-tech").css("display", "none");
    $("#projects-snaccbook-info-contributors").css("display", "none");

    switch (page) {
      case "tech":
        $("#projects-snaccbook-info-tech").css("display", "block");
        $("#projects-card-navbar-3").css(
          "grid-template-columns",
          "2fr 1fr 1fr"
        );
        $("#projects-snaccbook-info-tech").fadeOut(0);
        $("#projects-snaccbook-info-tech").fadeIn(500);
        break;
      case "about":
        $("#projects-snaccbook-info-about").css("display", "block");
        $("#projects-card-navbar-3").css(
          "grid-template-columns",
          "1fr 2fr 1fr"
        );
        $("#projects-snaccbook-info-about").fadeOut(0);
        $("#projects-snaccbook-info-about").fadeIn(500);
        break;
      case "contributors":
        $("#projects-snaccbook-info-contributors").css("display", "block");
        $("#projects-card-navbar-3").css(
          "grid-template-columns",
          "1fr 1fr 2fr"
        );
        $("#projects-snaccbook-info-contributors").fadeOut(0);
        $("#projects-snaccbook-info-contributors").fadeIn(500);
        break;
    }
  }
  function changeProject2(page) {
    $("#projects-scoutninja-info-about").css("display", "none");
    $("#projects-scoutninja-info-tech").css("display", "none");
    $("#projects-scoutninja-info-contributors").css("display", "none");

    switch (page) {
      case "tech":
        $("#projects-scoutninja-info-tech").css("display", "block");
        $("#projects-card-navbar-2").css(
          "grid-template-columns",
          "2fr 1fr 1fr"
        );
        $("#projects-scoutninja-info-tech").fadeOut(0);
        $("#projects-scoutninja-info-tech").fadeIn(500);
        break;
      case "about":
        $("#projects-scoutninja-info-about").css("display", "block");
        $("#projects-card-navbar-2").css(
          "grid-template-columns",
          "1fr 2fr 1fr"
        );
        $("#projects-scoutninja-info-about").fadeOut(0);
        $("#projects-scoutninja-info-about").fadeIn(500);
        break;
      case "contributors":
        $("#projects-scoutninja-info-contributors").css("display", "block");
        $("#projects-card-navbar-2").css(
          "grid-template-columns",
          "1fr 1fr 2fr"
        );
        $("#projects-scoutninja-info-contributors").fadeOut(0);
        $("#projects-scoutninja-info-contributors").fadeIn(500);
        break;
    }
  }
  function changeProject1(page) {
    $("#projects-jobhuntsim-info-about").css("display", "none");
    $("#projects-jobhuntsim-info-tech").css("display", "none");
    $("#projects-jobhuntsim-info-contributors").css("display", "none");

    switch (page) {
      case "tech":
        $("#projects-jobhuntsim-info-tech").css("display", "block");
        $("#projects-card-navbar-1").css(
          "grid-template-columns",
          "2fr 1fr 1fr"
        );
        $("#projects-jobhuntsim-info-tech").fadeOut(0);
        $("#projects-jobhuntsim-info-tech").fadeIn(500);
        break;
      case "about":
        $("#projects-jobhuntsim-info-about").css("display", "block");
        $("#projects-card-navbar-1").css(
          "grid-template-columns",
          "1fr 2fr 1fr"
        );
        $("#projects-jobhuntsim-info-about").fadeOut(0);
        $("#projects-jobhuntsim-info-about").fadeIn(500);
        break;
      case "contributors":
        $("#projects-jobhuntsim-info-contributors").css("display", "block");
        $("#projects-card-navbar-1").css(
          "grid-template-columns",
          "1fr 1fr 2fr"
        );
        $("#projects-jobhuntsim-info-contributors").fadeOut(0);
        $("#projects-jobhuntsim-info-contributors").fadeIn(500);
        break;
    }
  }
});
