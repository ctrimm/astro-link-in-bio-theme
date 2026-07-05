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
      url: "https://example.com",
      startDate: "2018",
      endDate: "2021",
      location: "San Francisco, CA",
      description: "Worked on web platform and developer tooling.",
      icon: "code",
    },
    {
      role: "Junior Developer",
      organization: "Startup Studio",
      startDate: "2016",
      endDate: "2018",
      location: "Austin, TX",
      description: "Shipped features across several early-stage products.",
      icon: "rocket",
    },
  ],
  videos: [],
};

export default config;
