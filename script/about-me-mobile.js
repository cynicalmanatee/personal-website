var tabState = [false, false, false, false];
var arrows = ["&#8690;", "&#8689;"];
var lookup = ["skill", "education", "workexp", "hobby"];

$(".about-me-mobile-button").click(function () {
  let notice = this.id;
  let target = $("#" + notice)
    .parent()
    .attr("id");

  changeSize(target);
});

function changeSize(target) {
  let index = target.charAt(target.length - 1);
  if (tabState[index]) {
    $("#" + target).css("height", "6vh");
    $("#about-me-tab-arrow-" + index).html(arrows[0]);
    $("#about-me-mobile-" + lookup[index]).css(
      "border-bottom-left-radius",
      "20px"
    );
    $("#about-me-mobile-content-" + index).css("display", "none");
  } else {
    $("#" + target).css("height", "40vh");
    $("#about-me-tab-arrow-" + index).html(arrows[1]);
    $("#about-me-mobile-" + lookup[index]).css(
      "border-bottom-left-radius",
      "0px"
    );
    $("#about-me-mobile-content-" + index).css("display", "grid");
  }
  tabState[index] = !tabState[index];
  console.log(tabState[index]);
}
