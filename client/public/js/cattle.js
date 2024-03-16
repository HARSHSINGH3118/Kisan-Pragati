$(".owl-theme").owlCarousel({
    items: 3, // Display 3 items at a time
    loop: true,
    nav: false,
    dots: false,
    margin:150,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  
  const sr = ScrollReveal({
    origin: "top",
    distance: "40px",
    duration: 2500,
    delay: 400,
  });
  
  sr.reveal(".third_section.footer_section");
  sr.reveal(".footer_section, .flip_flop, .small_sec, .owl-theme, .card_attach", {
    delay: 700,
    origin: "bottom",
  });
  sr.reveal(
    ".logos__img, .head_flop, .small_head, .section_head, .pure_section",
    {
      interval: 100,
    }
  );
  