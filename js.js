const headerHeight = (() => {
  return $(".navbar").outerHeight();  
})();

const scrollToSection = (elementId) => {
  const offset = $(`#${elementId}`).offset().top;
  $("html, body").animate({
    scrollTop: offset - headerHeight
  })
}

const scrollToTop = () => {
  $("html, body").animate({
    scrollTop: 0
  })
}

$(".js-scrollToSection").on("click", function () {
  // $(".nav li").removeClass("active");
  // $(this).closest("li").addClass("active");

  const sectionId = $(this).attr("data-section-id");
  scrollToSection(sectionId);
});
$(".js-scrollTop").on("click", scrollToTop);

$('body').scrollspy({ target: ".navbar-fixed-top",  offset: headerHeight + 50 });

