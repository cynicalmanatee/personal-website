$("document").ready(function () {
  $("#about-me-skill").click(function () {
    chageAboutPage("skill");
  });
  $("#about-me-education").click(function () {
    chageAboutPage("education");
  });
  $("#about-me-workexp").click(function () {
    chageAboutPage("workexp");
  });
  $("#about-me-interest").click(function () {
    chageAboutPage("interest");
  });

  function chageAboutPage(page) {
    $("#about-me-section-skill").css("display", "none");
    $("#about-me-section-education").css("display", "none");
    $("#about-me-section-workexp").css("display", "none");
    $("#about-me-section-interest").css("display", "none");
    switch (page) {
      case "skill":
        $("#about-me-section-skill").css("display", "block");
        $("#about-me-tabs").css("grid-template-columns", "2fr 1fr 1fr 1fr");
        $("#about-me-section-skill").fadeOut(0);
        $("#about-me-section-skill").fadeIn(500);
        console.log("skills clicked");
        break;
      case "education":
        $("#about-me-section-education").css("display", "block");
        $("#about-me-tabs").css("grid-template-columns", "1fr 2fr 1fr 1fr");
        $("#about-me-section-education").fadeOut(0);
        $("#about-me-section-education").fadeIn(500);
        console.log("education clicked");
        break;
      case "workexp":
        $("#about-me-section-workexp").css("display", "block");
        $("#about-me-tabs").css("grid-template-columns", "1fr 1fr 2fr 1fr");
        $("#about-me-section-workexp").fadeOut(0);
        $("#about-me-section-workexp").fadeIn(500);
        console.log("work experience clicked");
        break;
      case "interest":
        $("#about-me-section-interest").css("display", "block");
        $("#about-me-tabs").css("grid-template-columns", "1fr 1fr 1fr 2fr");
        $("#about-me-section-interest").fadeOut(0);
        $("#about-me-section-interest").fadeIn(500);
        console.log("interest clicked");
        break;
    }
  }

  chageAboutPage("skill");
});
