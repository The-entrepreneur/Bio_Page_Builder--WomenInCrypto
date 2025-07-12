// CMS Data - This would typically come from a headless CMS like Strapi or Payload
export const cmsData = {
  hero: {
    avatar: "https://ugc.production.linktr.ee/DytoegRJSyGYXbB3lVc6_1x3q7X02riP1PZ2s?io=true&size=avatar-v3_0",
    title: "Women in Crypto-Currency",
    tagline: "Empowering Nigerian Women With Wealth and Knowledge",
    bio: "Building the future of financial freedom through education, community, and innovation. Join thousands of women breaking barriers and making more money in crypto.",
    badge: "Community"
  },
  links: [
    {
      id: "1",
      title: "Join Our Telegram",
      url: "https://t.me/womenincrypto",
      icon: "TG",
      description: "Daily Discussions & Alpha Tips",
      featured: true
    },
    {
      id: "2", 
      title: "WhatsApp Group",
      icon: "WA",
      description: "Quick updates, Tutorials & networking",
      // Add children for dropdown
      children: [
        {
          id: "2-1",
          title: "WIC General Group",
          url: "https://chat.whatsapp.com/general-group-link",
          icon: "WA",
          description: "Main community chat"
        },
        {
          id: "2-2",
          title: "WIC Trading Group",
          url: "https://chat.whatsapp.com/trading-group-link",
          icon: "WA",
          description: "Trading discussions"
        },
        {
          id: "2-3",
          title: "WIC Learning Hub",
          url: "https://chat.whatsapp.com/learning-hub-link",
          icon: "WA",
          description: "Educational resources"
        },
        {
          id: "2-4",
          title: "WIC Events Group",
          url: "https://chat.whatsapp.com/events-group-link",
          icon: "WA",
          description: "Events & meetups"
        }
      ]
    },
    {
      id: "3",
      title: "Follow on Twitter",
      url: "https://twitter.com/womenincrypto",
      icon: "X",
      description: "Latest news & insights"
    },
    {
      id: "4",
      title: "Instagram",
      url: "https://www.instagram.com/women_in_cryptocurrency/#",
      icon: "IG",
      description: "Keep Up With Us"
    },
    {
      id: "5",
      title: "Discord Community",
      url: "#",
      icon: "DC",
      description: "Real-time chat & events"
    },
    {
      id: "6",
      title: "Official Website",
      url: "https://womenincrypto.com",
      icon: "WEB",
      description: "Resources & learning hub",
      featured: true
    },
    {
      id: "7",
      title: "YouTube Channel",
      url: "https://www.youtube.com/@Womenincrypto",
      icon: "YT",
      description: "Educational videos & interviews"
    },
    {
      id: "8",
      title: "LinkedIn",
      url: "https://linkedin.com/company/womenincrypto",
      icon: "LI",
      description: "Professional networking"
    }
  ],
  featuredMedia: {
    type: "youtube" as const,
    title: "Women in Crypto: Breaking Barriers",
    description: "Crypto has made more billionaires than any other business in the world",
    embedUrl: "https://www.youtube.com/embed/zSd7C4poOpM",
    duration: "2:25"
  }
};

// CMS Update Functions (would integrate with actual CMS API)
export const updateCMSData = {
  updateHero: (newData: Partial<typeof cmsData.hero>) => {
    Object.assign(cmsData.hero, newData);
  },
  
  updateLink: (linkId: string, newData: Partial<typeof cmsData.links[0]>) => {
    const linkIndex = cmsData.links.findIndex(link => link.id === linkId);
    if (linkIndex !== -1) {
      Object.assign(cmsData.links[linkIndex], newData);
    }
  },
  
  addLink: (linkData: typeof cmsData.links[0]) => {
    cmsData.links.push(linkData);
  },
  
  removeLink: (linkId: string) => {
    const linkIndex = cmsData.links.findIndex(link => link.id === linkId);
    if (linkIndex !== -1) {
      cmsData.links.splice(linkIndex, 1);
    }
  },
  
  updateFeaturedMedia: (newData: Partial<typeof cmsData.featuredMedia>) => {
    if (cmsData.featuredMedia) {
      Object.assign(cmsData.featuredMedia, newData);
    }
  }
};