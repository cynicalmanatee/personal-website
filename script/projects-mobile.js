var flippedState = [false, false, false];

$("#projects-mobile-card-1-title").click(() => {
  flipCard(1);
});
$("#projects-mobile-card-1-return").click(() => {
  flipCard(1);
});
$("#projects-mobile-card-2-title").click(() => {
  flipCard(2);
});
$("#projects-mobile-card-2-return").click(() => {
  flipCard(2);
});
$("#projects-mobile-card-3-title").click(() => {
  flipCard(3);
});
$("#projects-mobile-card-3-return").click(() => {
  flipCard(3);
});

$(".projects-mobile-icons").click(function () {
  target = this.id;
  target = target.substring(target.length - 4, target.length);
  changePage(target);
});

function flipCard(card) {
  let on, off;
  if (flippedState[card - 1]) {
    on = "front";
    off = "back";
  } else {
    on = "back";
    off = "front";
  }

  let id = "#projects-mobile-card-" + card + "-";

  $(id + on).css("display", "grid");
  $(id + off).css("display", "none");

  flippedState[card - 1] = !flippedState[card - 1];
}

function changePage(page) {
  let card = page.substring(0, 2);
  $("#projects-mobile" + card + "-1").css("display", "none");
  $("#projects-mobile" + card + "-2").css("display", "none");
  $("#projects-mobile" + card + "-3").css("display", "none");
  if (page.substring(page.length - 1, page.length) == 1) {
    $("#projects-mobile" + page).css("display", "block");
  } else {
    $("#projects-mobile" + page).css("display", "grid");
  }
}

$("#projects-mobile-1-1").css("display", "block");
$("#projects-mobile-2-1").css("display", "block");
$("#projects-mobile-3-1").css("display", "block");
