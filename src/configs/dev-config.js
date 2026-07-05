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
    color: "#f8fafc",
    image: "",
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
  experience: [
    {
      role: "Founder",
      organization: "Independent",
      startDate: "2021",
      current: true,
      location: "Remote",
      description: "Building software and hardware side projects, including this link-in-bio theme.",
      icon: "briefcase",
    },
    {
      role: "Software Engineer",
      organization: "Acme Corp",
      startDate: "2018",
      endDate: "2021",
      location: "San Francisco, CA",
      description: "Worked on web platform and developer tooling.",
      icon: "code",
    },
  ],
  videos: [],
};

export default config;
