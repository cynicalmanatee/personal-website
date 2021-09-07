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

  $("#BCIT").click(() => {
    changeEducationinfo("bcit");
  });
  $("#UBC").click(() => {
    changeEducationinfo("ubc");
  });
  $("#BNSS").click(() => {
    changeEducationinfo("bnss");
  });

  $("#weshar").click(() => {
    changeWorkinfo("weshar");
  });
  $("#tutor").click(() => {
    changeWorkinfo("tutor");
  });

  function changeWorkinfo(page) {
    $("#about-me-weshar").css("display", "none");
    $("#about-me-tutor").css("display", "none");
    switch (page) {
      case "weshar":
        $("#about-me-weshar").css("display", "grid");
        $("#about-me-weshar").fadeOut(0);
        $("#about-me-weshar").fadeIn(500);
        break;
      case "tutor":
        $("#about-me-tutor").css("display", "grid");
        $("#about-me-tutor").fadeOut(0);
        $("#about-me-tutor").fadeIn(500);
        break;
    }
  }
  function changeEducationinfo(page) {
    $("#about-me-bcit").css("display", "none");
    $("#about-me-ubc").css("display", "none");
    $("#about-me-bnss").css("display", "none");
    switch (page) {
      case "bcit":
        $("#about-me-bcit").css("display", "grid");
        $("#about-me-bcit").fadeOut(0);
        $("#about-me-bcit").fadeIn(500);
        break;
      case "ubc":
        $("#about-me-ubc").css("display", "grid");
        $("#about-me-ubc").fadeOut(0);
        $("#about-me-ubc").fadeIn(500);
        break;
      case "bnss":
        $("#about-me-bnss").css("display", "grid");
        $("#about-me-bnss").fadeOut(0);
        $("#about-me-bnss").fadeIn(500);
        break;
    }
  }

  function chageAboutPage(page) {
    $("#about-me-section-skill").css("display", "none");
    $("#about-me-section-education").css("display", "none");
    $("#about-me-section-workexp").css("display", "none");
    $("#about-me-section-interest").css("display", "none");
    switch (page) {
      case "skill":
        $("#about-me-section-skill").css("display", "grid");
        $("#about-me-tabs").css("grid-template-columns", "2fr 1fr 1fr 1fr");
        $("#about-me-section-skill").fadeOut(0);
        $("#about-me-section-skill").fadeIn(500);
        console.log("skills clicked");
        break;
      case "education":
        $("#about-me-section-education").css("display", "grid");
        $("#about-me-tabs").css("grid-template-columns", "1fr 2fr 1fr 1fr");
        $("#about-me-section-education").fadeOut(0);
        $("#about-me-section-education").fadeIn(500);
        console.log("education clicked");
        break;
      case "workexp":
        $("#about-me-section-workexp").css("display", "grid");
        $("#about-me-tabs").css("grid-template-columns", "1fr 1fr 2fr 1fr");
        $("#about-me-section-workexp").fadeOut(0);
        $("#about-me-section-workexp").fadeIn(500);
        console.log("work experience clicked");
        break;
      case "interest":
        $("#about-me-section-interest").css("display", "grid");
        $("#about-me-tabs").css("grid-template-columns", "1fr 1fr 1fr 2fr");
        $("#about-me-section-interest").fadeOut(0);
        $("#about-me-section-interest").fadeIn(500);
        console.log("interest clicked");
        break;
    }
  }

  chageAboutPage("skill");
  changeEducationinfo("bcit");
  changeWorkinfo("weshar");
});
