$(document).ready(function () {
  var modal = $('[data-remodal-id="works-modal"]').remodal();

  $(".filter button").on("click", function () {
    var selected = $(this).text().toLowerCase();

    $(".works-item").each(function () {
      if (selected === "all" || $(this).data("category") === selected) {
        $(this).removeClass("inactive");
      } else {
        $(this).addClass("inactive");
      }
    });
  });

  $(".works-item").on("click", function () {
    $("#remodal-img").attr("src", $(this).data("img"));
    $("#remodal-title").text($(this).data("title"));
    $("#remodal-client").text($(this).data("client"));
    $("#remodal-tool").text($(this).data("tool"));
    $("#remodal-size").text($(this).data("size"));
    $("#remodal-purpose").text($(this).data("purpose"));
    $("#remodal-concept").text($(this).data("concept"));
    $("#remodal-points").text($(this).data("points"));
    $("#remodal-target").text($(this).data("target"));
    $("#remodal-media").text($(this).data("media"));
    modal.open();
  });
});
$('form').on('submit', function(e){
  e.preventDefault();  // ← 通常の送信をいったん止める
  var form = this;
  setTimeout(function(){
    form.submit();  // ← フォームを送信
    window.location.href = 'thanks.html';  // ← ページ遷移
  }, 100);
});
