'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LinkData {
  id: string;
  title: string;
  url?: string;
  icon: string;
  description?: string;
  featured?: boolean;
  children?: LinkData[];
}

interface LinkButtonProps {
  link: LinkData;
  onClick: () => void;
  darkMode: boolean;
}

export function LinkButton({ link, onClick, darkMode }: LinkButtonProps) {
  const getIcon = (iconName: string) => {
    // This would normally import from lucide-react dynamically
    // For now, we'll use a simple approach
    return iconName;
  };

  const iconMap: Record<string, string> = {
    'DC': '/Icons8/icons8-discord-new-50.png',
    'IG': '/Icons8/icons8-instagram-50.png',
    'LI': '/Icons8/icons8-linkedin-50.png',
    'WA': '/Icons8/icons8-whatsapp-50.png',
    'X': '/Icons8/icons8-x-50.png',
    'YT': '/Icons8/icons8-youtube-squared-50.png',
    'TG': '/Icons8/icons8-telegram-app-50.png',
    'WEB': '/Icons8/icons8-salt-bae-50.png',
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="w-full"
    >
      <Button
        onClick={onClick}
        variant="outline"
        className={`w-full h-auto p-4 justify-between group border-2 transition-all duration-300 ${
          link.featured
            ? darkMode
              ? 'bg-gradient-to-r from-purple-600/20 to-pink-600/20 border-purple-500/50 hover:border-purple-400 text-white'
              : 'bg-gradient-to-r from-purple-100 to-pink-100 border-purple-300 hover:border-purple-400 text-gray-900'
            : darkMode
              ? 'bg-white/5 border-white/10 hover:border-white/20 text-white backdrop-blur-sm'
              : 'bg-white/80 border-gray-200 hover:border-gray-300 text-gray-900 backdrop-blur-sm'
        }`}
      >
        <div className="flex items-center space-x-3">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
            link.featured
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
              : darkMode
                ? 'bg-white/10 text-gray-300'
                : 'bg-gray-100 text-gray-600'
          }`}>
            {iconMap[link.icon] ? (
              <img src={iconMap[link.icon]} alt={link.title + ' icon'} className="w-6 h-6 object-contain" />
            ) : (
              link.icon
            )}
          </div>
          <div className="text-left">
            <p className="font-semibold text-sm">{link.title}</p>
            {link.description && (
              <p className={`text-xs ${
                darkMode ? 'text-gray-400' : 'text-gray-500'
              }`}>
                {link.description}
              </p>
            )}
          </div>
        </div>
        
        <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
      </Button>
    </motion.div>
  );
}