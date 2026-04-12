const moreBtn = document.getElementById("more-btn");

if (moreBtn) {
  moreBtn.addEventListener("click", function () {
    const hiddenItems = document.querySelectorAll(".works-item.is-hidden");
    const nextItems = Array.from(hiddenItems).slice(0, 4);
    nextItems.forEach((item) => {
      item.classList.remove("is-hidden");
      item.classList.add("is-show");
    });
    if (hiddenItems.length <= 4) {
      moreBtn.style.display = "none";
    }
  });
}

// ここから下に、元からあった filters などのコード
const filters = document.querySelectorAll(".filter button");
const items = document.querySelectorAll(".works-item");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const selected = filter.textContent.toLowerCase();

    filters.forEach(f => f.classList.remove("active"));
    filter.classList.add("active");

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

  var currentIndex = 0;
  var items = [];

  $(".works-item").on("click", function () {
    items = $(".works-item").toArray();
    currentIndex = items.indexOf(this);
    showModal(currentIndex);
    modal.open();
  });

  function showModal(index) {
    var item = $(items[index]);
    $("#remodal-img").attr("src", item.data("img"));
    $("#remodal-title").text(item.data("title"));
    $("#remodal-client").text(item.data("client"));
    $("#remodal-tool").text(item.data("tool"));
    $("#remodal-size").text(item.data("size"));
    $("#remodal-purpose").text(item.data("purpose"));
    $("#remodal-concept").text(item.data("concept"));
    $("#remodal-points").text(item.data("points"));
    $("#remodal-target").text(item.data("target"));
    $("#remodal-media").text(item.data("media"));
  }

  $(".remodal-prev").on("click", function () {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    showModal(currentIndex);
  });

  $(".remodal-next").on("click", function () {
    currentIndex = (currentIndex + 1) % items.length;
    showModal(currentIndex);
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
    var moreNum = 5;

    $(".list-item:nth-child(n + " + (moreNum + 1) + ")").addClass("is-hidden");

    $(".list-btn").on("click", function () {
      $(".list-item.is-hidden").slice(0, moreNum).removeClass("is-hidden");
      if ($(".list-item.is-hidden").length == 0) {
        $(".list-btn").fadeOut();
      }
    });

    $(function () {
      var list = $(".list li").length;
      if (list < moreNum) {
        $(".list-btn").addClass("is-btn-hidden");
      }
    });
  });
});
