// AOS.init({
//   mirror: true,
//   offset: 180,
// });

function init() {
  new fullpage("#fullpage", {
    autoScrolling: true,
    navigation: true,
    onLeave: (origin, destination, direction) => {
      const section = destination.item;
      const title = section.querySelector("article");
      const tl = new TimelineMax({ delay: 0.8 });
      tl.fromTo(title, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
    },

    lockAnchors: false,
    anchors: [
      "home",
      "immerse",
      "architecture",
      "carousel1",
      "interiors",
      "carousel2",
      "location",
      "carousel3",
      "resort-style",
      "carousel4",
      "lifestyle",
      "carousel5",
      "project-team",
      "contact",
    ],
    navigationPosition: "right",
    navigationTooltips: [
      "home",
      "assana",
      "architecture",
      // "Lobby",
      "interiors",
      // "features",
      "location",
      "gold-coast",
      "resort",
      "facilities",
      "lifestyle",
      "local",
      "team",
      "contact",
    ],
    showActiveTooltip: true,
    slidesNavigation: false,
    slidesNavPosition: "bottom",

    //Scrolling
    css3: true,
    // autoScrolling: true,
    fitToSection: false,
    // fitToSectionDelay: 1000,
    scrollBar: false,
    easing: "easeInOutCubic",
    easingcss3: "ease",
    loopBottom: false,
    loopTop: true,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: true,
    normalScrollElements: "#element1, .element2",
    scrollOverflow: true,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: true,
    verticalCentered: true,
    sectionsColor: ["#ccc", "#fff"],
    // paddingTop: "3em",
    // paddingBottom: "10px",
    fixedElements: "#header, .footer",
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: { type: "reveal", percentage: 62, property: "translate" },
    dropEffect: true,
    dropEffectOptions: { speed: 2300, color: "#F82F4D", zIndex: 9999 },
    cards: false,
    cardsOptions: { perspective: 100, fadeContent: true, fadeBackground: true },

    //Custom selectors
    sectionSelector: ".section",
    slideSelector: ".slide",

    lazyLoading: true,
  });
}

// function doSomething() {
//   // Do something with the scroll position
//   console.log("scrolled man");
// }

// window.addEventListener("scroll", function (e) {
//   doSomething();
// });

init();

// function myFunction() {
//   const w = window.innerWidth;
//   if (w > 400) {
//     init();
//   } else {
//     return;
//   }
//   console.log(w);
// }
