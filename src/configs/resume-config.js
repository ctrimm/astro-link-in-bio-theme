// @ts-check
import profileImage from '../images/profilepic.png?url';
import productImage from '../images/product1.png?url';

/** @type {import('../types').SiteConfig} */
const config = {
  user: {
    name: "Cory Trimm",
    title: "Software Engineer",
    bio: "Serial builder of things - software, hardware, and everything in between. This is my little link in bio project built with Astro and Tailwind.",
    profileImage: profileImage,
  },
  background: {
    color: "#f1f5f9",
    image: "",
  },
  socialLinks: [
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/cory-trimm",
      icon: "linkedin",
    },
    {
      platform: "instagram",
      url: "https://instagram.com/journey.unknown",
      icon: "camera-retro",
    },
    {
      platform: "threads",
      url: "https://threads.net/@journey.unknown",
      icon: "threads",
    },
  ],
  links: [
    {
      title: "My Personal Web Site",
      url: "https://corytrimm.com",
      icon: "globe",
    },
    {
      title: "Use This Template",
      url: "https://github.com/ctrimm/astro-link-in-bio-theme",
      icon: "code",
    },
    {
      title: "Join My YouTube Channel",
      url: "https://youtube.com/c/corytrimm",
      icon: "play",
    },
  ],
  products: [
    {
      title: "Digital Product",
      description: "Description of your digital product",
      url: "https://inshortpod.com",
      price: 19.99,
      includePriceOnSite: true,
      image: productImage,
    },
  ],
  videos: [],
};

export default config;
