export interface SiteConfig {
  user: {
    name: string;
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
}
