$("document").ready(function () {
  $(function () {
    $("#home-content").load("../html/home.html");

    if ($(window).width() <= 860) {
      $("#projects-content").load("../html/projects-mobile.html");
    } else {
      $("#projects-content").load("../html/projects.html");
    }
    if ($(window).width() <= 860) {
      $("#about-me-content").load("../html/about-me-mobile.html");
    } else {
      $("#about-me-content").load("../html/about-me.html");
    }
    if ($(window).width() <= 860) {
      $("#contact-content").load("./html/contact-mobile.html");
    } else {
      $("#contact-content").load("./html/contact.html");
    }
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
  changePage("projects");
  function showHamburger() {
    if ($(window).width() <= 860) {
      $("#navbar-navigation-buttons").css("display", "grid");
      $("#outside-hamburger").css("display", "none");
      $("#index-screen").css("display", "block");
      $("#index-screen").css("filter", "opacity(0.6)");
    }
  }
  function hideHamburger() {
    if ($(window).width() <= 860) {
      $("#outside-hamburger").css("display", "block");
      $("#navbar-navigation-buttons").css("display", "none");
      $("#index-screen").css("display", "none");
      $("#index-screen").css("filter", "opacity(0)");
    }
  }
  hideHamburger();
});
