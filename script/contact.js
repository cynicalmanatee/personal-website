$("document").ready(function () {
  let info = [
    "Click Icon to Download",
    "harry.he.zz@gmail.com",
    "https://github.com/cynicalmanatee",
    "https://devpost.com/cynicalmanatee",
    "https://www.linkedin.com/in/harry-ze-zhong-he/",
  ];
  console.log(info[2]);

  $("#contact-resume").mouseenter(() => {
    console.log("mouse hovered over resume");
    showInfo(0);
  });
  $("#contact-email").mouseenter(() => {
    console.log("mouse hovered over email");
    showInfo(1);
  });
  $("#contact-github").mouseenter(() => {
    console.log("mouse hovered over github");
    showInfo(2);
  });
  $("#contact-devpost").mouseenter(() => {
    console.log("mouse hovered over devpost");
    showInfo(3);
  });
  $("#contact-linkedin").mouseenter(() => {
    console.log("mouse hovered over linkedin");
    showInfo(4);
  });

  function showInfo(index) {
    $("#contact-url-text").val(info[index]);
  }

  $("#contact-information-icon").click(() => {
    copy();
  });

  function copy() {
    var copyButton = document.getElementById("contact-url-text");
    copyButton.select();
    copyButton.setSelectionRange(0, 99999);
    document.execCommand("copy");
    let tempString = copyButton.value;
    textBoxTransition("Copied!", 400);
    setTimeout(() => {
      textBoxTransition(tempString, 400);
    }, 1500);
  }

  function textBoxTransition(text1, delay) {
    $("#contact-url-text").animate(
      {
        color: "white",
      },
      delay
    );
    setTimeout(() => {
      $("#contact-url-text").val(text1);
    }, delay);
    $("#contact-url-text").animate(
      {
        color: "black",
      },
      delay
    );
  }

  $("#contact-email").on("click", function () {
    window.location.href =
      "mailto:harry.he.zz@gmail.com?subject=Subject&body=message%20goes%20here";
  });
});
