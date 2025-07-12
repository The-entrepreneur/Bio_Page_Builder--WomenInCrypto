'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Share2, 
  Copy, 
  Check, 
  ExternalLink,
  Mail,
  Moon,
  Sun,
  Eye,
  MousePointer,
  Calendar,
  Users,
  TrendingUp
} from 'lucide-react';
import { Hero } from '@/components/Hero';
import { LinkButton } from '@/components/LinkButton';
import { EmailSubscription } from '@/components/EmailSubscription';
import { MediaEmbed } from '@/components/MediaEmbed';
import { Analytics } from '@/components/Analytics';
import { ShareButton } from '@/components/ShareButton';
import { ThemeToggle } from '@/components/ThemeToggle';
import { cmsData } from '@/lib/cms-data';
import { trackClick, getAnalytics } from '@/lib/analytics';

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [analytics, setAnalytics] = useState({ pageViews: 0, totalClicks: 0, uniqueVisitors: 0 });
  // Dropdown state for parent links with children (e.g., WhatsApp groups)
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  useEffect(() => {
    // Track page view
    const currentViews = parseInt(localStorage.getItem('pageViews') || '0') + 1;
    localStorage.setItem('pageViews', currentViews.toString());
    
    // Load analytics
    setAnalytics(getAnalytics());
    
    // Apply theme
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const handleLinkClick = (linkTitle: string, url: string) => {
    trackClick(linkTitle);
    setAnalytics(getAnalytics());
    window.open(url, '_blank');
  };

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: cmsData.hero.title,
          text: cmsData.hero.bio,
          url: url,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const bgClass = darkMode
    ? 'bg-gradient-to-br from-[#4e2323] via-[#a94442] to-[#f08080]'
    : 'bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50';

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bgClass}`}>
      {/* Background Pattern */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.1,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10">
        {/* Header with Theme Toggle */}
        <header className="flex justify-between items-center p-6">
          <div className="flex items-center space-x-4">
            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
              darkMode 
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                : 'bg-purple-100 text-purple-700 border border-purple-200'
            }`}>
              Live
            </div>
          </div>
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </header>

        {/* Main Content */}
        <div className="max-w-md mx-auto px-6 pb-12">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Hero data={cmsData.hero} darkMode={darkMode} />
          </motion.div>

          {/* Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <Analytics analytics={analytics} darkMode={darkMode} />
          </motion.div>

          {/* Share Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <ShareButton onShare={handleShare} copied={copied} darkMode={darkMode} />
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4 mb-8"
          >
            {cmsData.links.map((link: any, index: number) => {
              const hasChildren = Array.isArray(link.children) && link.children.length > 0;
              return (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  {hasChildren ? (
                    <div className="relative">
                      <div className="w-full">
                        <LinkButton
                          link={link}
                        onClick={() => setOpenDropdownId(openDropdownId === link.id ? null : link.id)}
                          darkMode={darkMode}
                          />
                      </div>
                      {openDropdownId === link.id && (
                        <div className="absolute z-10 w-full mt-2 p-2 rounded-xl shadow-xl border border-pink-400/40 bg-gradient-to-br from-[#3a1c1c] via-[#5a2323] to-[#7a2d2d] dark:bg-gradient-to-br dark:from-[#3a1c1c] dark:via-[#5a2323] dark:to-[#7a2d2d] space-y-2">
                          {link.children.map((childLink: any) => (
                            <LinkButton
                              key={childLink.id}
                              link={childLink}
                              onClick={() => handleLinkClick(childLink.title, childLink.url)}
                              darkMode={darkMode}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <LinkButton
                      link={link}
                      onClick={() => handleLinkClick(link.title, link.url)}
                      darkMode={darkMode}
                    />
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* Featured Media */}
          {cmsData.featuredMedia && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-8"
            >
              <MediaEmbed data={cmsData.featuredMedia} darkMode={darkMode} />
            </motion.div>
          )}

          {/* Email Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="mb-8"
          >
            <EmailSubscription darkMode={darkMode} />
          </motion.div>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className={`text-center text-sm ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            <p>© 2025 Women in Crypto. Empowering the future of blockchain.</p>
            <p className="mt-2">Built by Dev Work's Enterprise for the community</p>
          </motion.footer>
        </div>
      </div>
    </div>
  );
}