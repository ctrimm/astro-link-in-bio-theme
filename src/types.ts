export interface SiteConfig {
  user: {
    name: string;
    title?: string;
    bio: string;
    profileImage: string;
  };
  background: {
    color: string;
    image: string;
  };
  socialLinks: Array<{
    platform: string;
    url: string;
    icon?: string;
  }>;
  links: Array<{
    title: string;
    url: string;
    icon?: string;
  }>;
  products: Array<{
    title: string;
    description: string;
    url: string;
    price: number;
    includePriceOnSite: boolean;
    image: string;
  }>;
  videos?: Array<{
    title: string;
    description?: string;
    url: string;
  }>;
  experience?: Array<{
    role: string;
    organization: string;
    url?: string;
    location?: string;
    startDate?: string;
    endDate?: string;
    current?: boolean;
    description?: string;
    icon?: string;
  }>;
}
