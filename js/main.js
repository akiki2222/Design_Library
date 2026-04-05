const filters = document.querySelectorAll(".filter button");
const items = document.querySelectorAll(".works-item");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.textContent.toLowerCase();

    items.forEach((item) => {
      if (selected === "all" || item.dataset.category === selected) {
        item.classList.remove("inactive");
      } else {
        item.classList.add("inactive");
      }
    });
  });
});

$(document).ready(function () {
  var modal = $('[data-remodal-id="works-modal"]').remodal();

  $(".works-item").on("click", function () {
    $("#remodal-img").attr("src", $(this).data("img"));
    $("#remodal-title").text($(this).data("title"));
    $("#remodal-client").text($(this).data("client"));
    $("#remodal-tool").text($(this).data(""));
    $("#remodal-size").text($(this).data("size"));
    $("#remodal-purpose").text($(this).data("purpose"));
    $("#remodal-concept").text($(this).data("concept"));
    $("#remodal-points").text($(this).data("points"));
    $("#remodal-target").text($(this).data("target"));
    $("#remodal-media").text($(this).data("media"));
    modal.open();
  });
  // ハンバーガーメニュー
  const hamburger = document.getElementById("hamburger");
  const spNav = document.getElementById("sp_nav");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    spNav.classList.toggle("open");
  });

  spNav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      hamburger.classList.remove("open");
      spNav.classList.remove("open");
    });
  });
});
