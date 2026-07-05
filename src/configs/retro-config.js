// @ts-check
export default {
  user: {
    name: "Cory Trimm",
    bio: "Serial builder of things - software, hardware, and everything in between. This is my little link in bio project built with Astro and Tailwind.",
    profileImage: "/src/images/profilepic.png"
  },
  background: {
    color: "#000000",
    image: "",
    pattern: "retro-grid"
  },
  theme: {
    primary: "retro-yellow",
    secondary: "retro-pink",
    accent: "retro-cyan"
  },
  socialLinks: [
    {
      platform: "instagram",
      url: "#",
      color: "retro-pink"
    },
    {
      platform: "threads",
      url: "#",
      color: "retro-cyan"
    },
    {
      platform: "linkedin",
      url: "#",
      color: "retro-green"
    },
    {
      platform: "spotify",
      url: "#",
      color: "retro-purple"
    },
    {
      platform: "snapchat",
      url: "#",
      color: "retro-yellow"
    },
    {
      platform: "tiktok",
      url: "#",
      color: "retro-orange"
    }
  ],
  links: [
    {
      title: "Check Out My Blog",
      url: "#",
      icon: "newspaper",
      color: "retro-green"
    },
    {
      title: "Use This Template",
      url: "#",
      icon: "code",
      color: "retro-orange"
    },
    {
      title: "My Personal Web Site",
      url: "#",
      icon: "globe",
      color: "retro-purple"
    }
  ],
  products: [
    {
      title: "My YouTube Channel",
      description: "Check out my latest videos on software development, hardware projects, and more!",
      url: "#",
      price: 0,
      includePriceOnSite: false,
      image: "/src/images/product1.png",
      color: "retro-pink"
    }
  ],
  experience: /** @type {import('../types').SiteConfig['experience']} */ ([
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
  ]),
  videos: []
};
