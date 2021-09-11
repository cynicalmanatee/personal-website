$("document").ready(function () {
  $(function () {
    $("#home-content").load("../html/home.html");
    $("#projects-content").load("../html/projects.html");
    $("#about-me-content").load("../html/about-me.html");
    $("#contact-content").load("./html/contact.html");
  });
  $("#home").click(function () {
    changePage("home");
  });
  $("#projects").click(function () {
    changePage("projects");
  });
  $("#about-me").click(function () {
    changePage("about-me");
  });
  $("#contact").click(function () {
    changePage("contact");
  });
  $("#inside-hamburger").click(() => {
    hideHamburger();
  });

  $("#outside-hamburger").click(() => {
    showHamburger();
  });

  function changePage(page) {
    $("#home-section").css("display", "none");
    $("#projects-section").css("display", "none");
    $("#about-me-section").css("display", "none");
    $("#contact-section").css("display", "none");
    switch (page) {
      case "home":
        $("#home-section").css("display", "flex");
        hideHamburger();
        console.log("home clicked");
        break;
      case "projects":
        $("#projects-section").css("display", "block");
        hideHamburger();
        console.log("projects clicked");
        break;
      case "about-me":
        $("#about-me-section").css("display", "block");
        hideHamburger();
        console.log("about me clicked");
        break;
      case "contact":
        $("#contact-section").css("display", "block");
        hideHamburger();
        console.log("contact clicked");
        break;
    }
  }
  function showHamburger() {
    if ($(window).width() <= 860) {
      $("#navbar-navigation-buttons").css("display", "grid");
      $("#outside-hamburger").css("display", "none");
    }
  }
  function hideHamburger() {
    if ($(window).width() <= 860) {
      $("#navbar-navigation-buttons").css("display", "none");

      $("#outside-hamburger").css("display", "block");
    }
  }
  hideHamburger();
});
