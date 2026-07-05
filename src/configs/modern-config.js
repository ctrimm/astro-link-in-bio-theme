// @ts-check
/** @type {import('../types').SiteConfig} */
export default {
  user: {
    name: "Cory Trimm",
    bio: "Serial builder of things - software, hardware, and everything in between. This is my little link in bio project built with Astro and Tailwind.",
    profileImage: "/src/images/profilepic.png"
  },
  background: {
    color: "#f9fafb",
    image: ""
  },
  socialLinks: [
    {
      platform: "instagram",
      url: "#",
    },
    {
      platform: "threads",
      url: "#",
    },
    {
      platform: "linkedin",
      url: "#",
    },
    {
      platform: "spotify",
      url: "#",
    },
    {
      platform: "snapchat",
      url: "#",
    },
    {
      platform: "tiktok",
      url: "#",
    }
  ],
  links: [
    {
      title: "Building a Modern Link in Bio with Astro",
      url: "#",
      icon: "newspaper"
    },
    {
      title: "Use This Template",
      url: "#",
      icon: "code"
    },
    {
      title: "My Personal Web Site",
      url: "#",
      icon: "globe"
    }
  ],
  products: [
    {
      title: "My YouTube Channel",
      description: "Check out my latest videos on software development, hardware projects, and more!",
      url: "#",
      price: 0,
      includePriceOnSite: false,
      image: "/src/images/product1.png"
    }
  ],
  experience: [
    {
      role: "Founder",
      organization: "Independent",
      startDate: "2021",
      current: true,
      location: "Remote",
      description: "Building software and hardware side projects, including this link-in-bio theme.",
      icon: "briefcase"
    },
    {
      role: "Software Engineer",
      organization: "Acme Corp",
      startDate: "2018",
      endDate: "2021",
      location: "San Francisco, CA",
      description: "Worked on web platform and developer tooling.",
      icon: "code"
    }
  ],
  videos: []
};
