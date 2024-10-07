// @ts-check
import profileImage from './src/images/profilepic.png?url';
import backgroundImage from './src/images/backgrounds/watercolor-blue-green.png?url';
import productImage from './src/images/product1.png?url';

/** @type {import('./src/types').SiteConfig} */
const config = {
  user: {
    name: "Cory Trimm",
    bio: "Serial builder of things - software, hardware, and everything in between. This is my little link in bio project built with Astro and Tailwind.",
    profileImage: profileImage,
  },
  background: {
    color: "#f0f0f0",
    image: backgroundImage,
  },
  socialLinks: [
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
    {
      platform: "linkedin",
      url: "https://linkedin.com/in/cory-trimm",
      icon: "linkedin",
    },
    {
      platform: "spotify",
      url: "https://spotify.com",
      icon: "spotify",
    },
    {
      platform: "snapchat",
      url: "https://snapchat.com",
      icon: "snapchaat",
    },
    {
      platform: "tiktok",
      url: "https://tiktok.com",
      icon: "tiktok",
    },
    // Add more social links as needed
    // Search for icons here - https://fontawesome.com/search
  ],
  links: [
    {
      title: "Use This Template",
      url: "https://github.com/ctrimm/astro-link-in-bio-theme",
      icon: "code",
    },
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
      url: "https://inshortpod.com",
      price: 19.99,
      includePriceOnSite: true,
      image: productImage,
    },
    // Add more products as needed
  ],
};

export const analytics = {
  posthog: {
    enableTracking: false
  }
};

export default config;
