$(document).ready(function () {
  // 팝업
  $(".modal, .modalBg").show();
  $(".closeBtn").click(function (e){
    e.preventDefault();
    $(".modal, .modalBg").fadeOut();
  });
  $("header h1").click(function (){
    $(".modal, .modalBg").fadeIn();
  });

  // 메뉴
  $(".mNav > ul > li").hover(
    function () {
      $(this).find("a:first").css({ "color": "#fff", "background": "#3399cc" });
      $(this).find(".sub").stop().slideDown(300);
    },
    function () {
      $(this).find("a:first").css({ "color": "#6a6a6a", "background": "#fff" });
      $(this).find(".sub").stop().slideUp(300);
    }
  );

  $(".sub li").hover(
    function () {
      $(this).css("background", "#267aa5").css("color", "#fff");
    },
    function () {
      $(this).css("background", "").css("color", "");
    }
  );

  // 슬라이드
  let current = 0;
  const $slides = $("#main ul li");
  const max = $slides.length;

  $slides.hide().eq(0).show();

  setInterval(function () {
    $slides.eq(current).fadeOut();
    current = (current + 1) % max;
    $slides.eq(current).fadeIn();
  }, 3000);

  // 아코디언
  $(".accordion-header").click(function () {
    const $header = $(this);
    const $content = $header.next(".accordion-content");
    const $arrow = $header.find(".arrow");

    if ($content.is(":visible")) {
      $content.slideUp();
      $arrow.text("▼");
    } else {
      $(".accordion-content").slideUp();
      $(".accordion-header .arrow").text("▼");
      $content.slideDown();
      $arrow.text("▲");
    }
  });
});
