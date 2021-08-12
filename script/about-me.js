$("document").ready(function () {
  $("#about-me-skill").click(function () {
    changePage("skill");
  });
  $("#about-me-education").click(function () {
    changePage("education");
  });
  $("#about-me-workexp").click(function () {
    changePage("workexp");
  });
  $("#about-me-interest").click(function () {
    changePage("interest");
  });

  function changePage(page) {
    $("#about-me-section-skill").css("display", "none");
    $("#about-me-section-education").css("display", "none");
    $("#about-me-section-workexp").css("display", "none");
    $("#about-me-section-interest").css("display", "none");
    switch (page) {
      case "skill":
        $("#about-me-section-skill").css("display", "block");
        $("#about-me-tabs").css("grid-template-columns", "2fr 1fr 1fr 1fr");
        console.log("skills clicked");
        break;
      case "education":
        $("#about-me-section-education").css("display", "block");
        $("#about-me-tabs").css("grid-template-columns", "1fr 2fr 1fr 1fr");
        console.log("education clicked");
        break;
      case "workexp":
        $("#about-me-section-workexp").css("display", "block");
        $("#about-me-tabs").css("grid-template-columns", "1fr 1fr 2fr 1fr");
        console.log("work experience clicked");
        break;
      case "interest":
        $("#about-me-section-interest").css("display", "block");
        $("#about-me-tabs").css("grid-template-columns", "1fr 1fr 1fr 2fr");
        console.log("interest clicked");
        break;
    }
  }

  changePage("skill");
});
