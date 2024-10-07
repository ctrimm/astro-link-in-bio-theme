// @ts-check

/** @type {import('./src/types').SiteConfig} */
const config = {
  user: {
    name: "Cory Trimm",
    bio: "Serial builder of things - software, hardware, and everything in between. This is my little link in bio project built with Astro.",
    profileImage: "/src/images/profilepic.png",
  },
  background: {
    color: "#f0f0f0",
    image: "/src/images/backgrounds/watercolor-pink-blue.png",
  },
  socialLinks: [
    {
      platform: "instagram",
      url: "https://instagram.com/journey.unknown",
      icon: "camera-retro",
    },
    {
      platform: "threads",
      url: "https://threads.com/@journey.unknown",
      icon: "threads",
    },
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/cory-trimm",
      icon: "linkedin",
    },
    // Add more social links as needed
  ],
  links: [
    {
      title: "My Personal Web Site",
      url: "https://corytrimm.com",
      icon: "globe",
    },
    {
      title: "Join My YouTube Channel",
      url: "https://youtube.com/c/corytrimm",
      icon: "play",
    },
    // Add more links as needed
  ],
  products: [
    {
      title: "Digital Product",
      description: "Description of your digital product",
      url: "https://yourproduct.com",
      price: 19.99,
      includePriceOnSite: true,
      image: "/src/images/product1.png",
    },
    // Add more products as needed
  ],
};

export default config;
