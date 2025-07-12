# Women in Crypto - Link in Bio

A beautiful, responsive link-in-bio landing page built with Next.js for the Women in Crypto community.

## 🚀 Features

- **Modern Design**: Inspired by premium link-in-bio platforms with glassmorphism effects
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Dark/Light Mode**: Theme toggle with smooth transitions
- **CMS Integration**: Easy content management through structured data
- **Analytics**: Built-in click tracking and visitor analytics
- **Social Sharing**: Native share functionality with fallback copy-to-clipboard
- **Email Subscription**: Newsletter signup with validation
- **Media Embeds**: Support for YouTube videos and podcast players
- **Animations**: Smooth Framer Motion animations throughout
- **SEO Optimized**: Complete meta tags and Open Graph integration

## 🛠️ Tech Stack

- **Framework**: Next.js 13 with App Router
- **Styling**: Tailwind CSS + Radix UI components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel (optimized for Next.js)

## 📱 Components

### Core Components
- `Hero`: Profile section with avatar, title, and bio
- `LinkButton`: Customizable social/website link buttons
- `EmailSubscription`: Newsletter signup form
- `MediaEmbed`: YouTube/podcast player integration
- `Analytics`: Real-time click and visitor tracking
- `ShareButton`: Native sharing with copy fallback
- `ThemeToggle`: Dark/light mode switcher

### CMS System
- `lib/cms-data.ts`: Centralized content management
- Easy updating of links, descriptions, and media
- Support for featured/priority links
- Flexible data structure for future expansion

## 🎨 Design Features

- **Color System**: Purple/pink gradient theme with proper contrast
- **Typography**: Clean Inter font with proper hierarchy
- **Spacing**: Consistent 8px grid system
- **Animations**: Staggered entrance animations and micro-interactions
- **Glassmorphism**: Subtle backdrop blur effects
- **Mobile-First**: Optimized for mobile with desktop enhancements

## 📊 Analytics

Built-in analytics system tracks:
- Page views and unique visitors
- Individual link click counts
- Popular content identification
- Export functionality for reporting

## 🔧 Customization

### Update Profile Information
Edit `lib/cms-data.ts`:
```typescript
export const cmsData = {
  hero: {
    avatar: "your-image-url",
    title: "Your Community Name",
    tagline: "Your Tagline",
    bio: "Your bio description",
    badge: "Your Badge"
  },
  // ... rest of configuration
}
```

### Add/Remove Links
```typescript
links: [
  {
    id: "unique-id",
    title: "Link Title",
    url: "https://your-url.com",
    icon: "ICON", // 2-3 character abbreviation
    description: "Link description",
    featured: true // Optional: highlights the link
  }
]
```

### Customize Theme
Modify Tailwind CSS variables in `app/globals.css` for custom color schemes.

## 🚀 Deployment

### Quick Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Environment automatically detected as Next.js
3. Automatic deployments on push to main branch

### Manual Deployment
```bash
npm run build
npm run start
```

## 📈 SEO & Performance

- **Perfect Lighthouse Scores**: Optimized for Core Web Vitals
- **Meta Tags**: Complete OpenGraph and Twitter Card integration
- **Sitemap**: Automatic generation for search engines
- **Image Optimization**: Next.js automatic image optimization
- **Static Export**: Can be deployed as static site if needed

## 🔒 Security & Privacy

- **No Data Collection**: Analytics stored locally
- **HTTPS Only**: Secure connection required
- **Input Validation**: Form inputs properly validated
- **CSP Headers**: Content Security Policy implemented

## 🤝 Community Features

Perfect for crypto communities with:
- Multiple social platform integration
- Newsletter collection for updates
- Event promotion through featured media
- Community growth tracking via analytics
- Easy content updates without technical knowledge

## 📝 License

MIT License - feel free to customize for your community but not without giving credits to us thanks!

---

Built with 💜 By Dero Idoghor - Dev Work's Enterprise for the Women in Crypto Nigeria community