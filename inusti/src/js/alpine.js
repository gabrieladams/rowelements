import Alpine from "alpinejs";

window.Alpine = Alpine;

// LOGO STORE
Alpine.store("logos", {
  logoLight: "./assets/logos/logo-light.png",
  logoDark: "./assets/logos/logo-dark.png",
});

// NAV-MENU STORE
Alpine.store("navMenu", [
  {
    name: "Home",
    route: "#",
    subMenu: [
      {
        name: "Home 1",
        route: "#",
      },
      {
        name: "Home 2",
        route: "#",
      },
      {
        name: "Home 3",
        route: "#",
      },
      {
        name: "Home 4",
        route: "#",
      },
      {
        name: "Our Locations",
        route: "#",
      },
    ],
  },

  {
    name: "Projects",
    route: "#",
    subMenu: [
      {
        name: "Projects I",
        route: "#",
      },
      {
        name: "Projects II",
        route: "#",
      },
      {
        name: "Projects III",
        route: "#",
      },
    ],
  },

  {
    name: "Services",
    route: "#",
    subMenu: [
      {
        name: "Services I",
        route: "#",
      },
      {
        name: "Services II",
        route: "#",
      },
      {
        name: "Single",
        route: "#",
      },
    ],
  },

  {
    name: "Pages",
    route: "#",
    subMenu: [
      {
        name: "Pages I",
        route: "#",
        subMenu: [
          {
            name: "About",
            route: "#",
          },
          {
            name: "Our History",
            route: "#",
          },
          {
            name: "Our Team",
            route: "#",
          },
          {
            name: "Our Awards",
            route: "#",
          },
        ],
      },

      {
        name: "Pages II",
        route: "#",
        subMenu: [
          {
            name: "Events List",
            route: "#",
          },
          {
            name: "Events Month",
            route: "#",
          },
          {
            name: "Our Partner",
            route: "#",
          },
          {
            name: "Careers",
            route: "#",
          },
        ],
      },

      {
        name: "Pages III",
        route: "#",
        subMenu: [
          {
            name: "Shop",
            route: "#",
          },
          {
            name: "Pricing",
            route: "#",
          },
          {
            name: "Gallery",
            route: "#",
          },
          {
            name: "Testimonials",
            route: "#",
          },
          {
            name: "404 Page",
            route: "#",
          },
        ],
      },
    ],
  },

  {
    name: "News",
    route: "#",
    subMenu: [
      {
        name: "News I",
        route: "#",
      },
      {
        name: "News II",
        route: "#",
      },
      {
        name: "News III",
        route: "#",
      },
    ],
  },

  {
    name: "Contact",
    route: "#",
  },
]);

// OPEN NAV-MENU STORE
Alpine.store("openNavMenu", {
  open: false,

  toggle() {
    this.open = !this.open;
  },
});

Alpine.store("toggleNavItemSubMenu", {
  clickedNavItemName: null,

  toggleStatus: {
    openHomeSubMenu: false,
    openProjectsSubMenu: false,
    openServicesSubMenu: false,
    openPagesSubMenu: false,
    openNewsSubMenu: false,
  },

  setClickedNavItemName(navItemName) {
    this.clickedNavItemName = navItemName;
  },

  setToggleStatus() {
    if (this.clickedNavItemName === "Home") {
      this.toggleStatus.openHomeSubMenu = !this.toggleStatus.openHomeSubMenu;
      this.toggleStatus.openProjectsSubMenu = false;
      this.toggleStatus.openServicesSubMenu = false;
      this.toggleStatus.openPagesSubMenu = false;
      this.toggleStatus.openNewsSubMenu = false;
    }

    if (this.clickedNavItemName === "Projects") {
      this.toggleStatus.openProjectsSubMenu =
        !this.toggleStatus.openProjectsSubMenu;
      this.toggleStatus.openHomeSubMenu = false;
      this.toggleStatus.openServicesSubMenu = false;
      this.toggleStatus.openPagesSubMenu = false;
      this.toggleStatus.openNewsSubMenu = false;
    }

    if (this.clickedNavItemName === "Services") {
      this.toggleStatus.openServicesSubMenu =
        !this.toggleStatus.openServicesSubMenu;
      this.toggleStatus.openHomeSubMenu = false;
      this.toggleStatus.openProjectsSubMenu = false;
      this.toggleStatus.openPagesSubMenu = false;
      this.toggleStatus.openNewsSubMenu = false;
    }

    if (this.clickedNavItemName === "Pages") {
      this.toggleStatus.openPagesSubMenu = !this.toggleStatus.openPagesSubMenu;
      this.toggleStatus.openHomeSubMenu = false;
      this.toggleStatus.openProjectsSubMenu = false;
      this.toggleStatus.openServicesSubMenu = false;
      this.toggleStatus.openNewsSubMenu = false;
    }

    if (this.clickedNavItemName === "News") {
      this.toggleStatus.openNewsSubMenu = !this.toggleStatus.openNewsSubMenu;
      this.toggleStatus.openHomeSubMenu = false;
      this.toggleStatus.openProjectsSubMenu = false;
      this.toggleStatus.openServicesSubMenu = false;
      this.toggleStatus.openPagesSubMenu = false;
    }
  },
});

// CONTACTS STORE
Alpine.store("contacts", {
  emailAddress: "contact@example.com",
  phoneNumber: "866 888 0000",
  socialMedia: [
    {
      name: "facebook",
      link: "#",
    },
    {
      name: "twitter",
      link: "#",
    },
    {
      name: "pinterest",
      link: "#",
    },
    {
      name: "instagram",
      link: "#",
    },
  ],
});

// SLIDESHOW STORE
Alpine.store("slideShow", {
  slideIndex: 1,
  slides: document.getElementsByClassName("hero-slide"),
  dotIndicators: document.getElementsByClassName(
    "hero-slideshow-dot-indicator"
  ),

  plusSlides: function (n) {
    this.showSlides((this.slideIndex += n));
  },

  currentSlide: function (n) {
    this.showSlides((this.slideIndex = n));
  },

  showSlides: function (n) {
    let i;

    if (n > this.slides.length) this.slideIndex = 1;

    if (n < 1) this.slideIndex = this.slides.length;

    setTimeout(this.incrementSlideIndex, 2000);
  },

  incrementSlideIndex: function () {
    this.showSlides(this.slideIndex++);
  },
});

Alpine.start();
