'use client';

import { motion } from 'framer-motion';
import { Share2, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ShareButtonProps {
  onShare: () => void;
  copied: boolean;
  darkMode: boolean;
}

export function ShareButton({ onShare, copied, darkMode }: ShareButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Button
        onClick={onShare}
        variant="outline"
        className={`w-full border-2 transition-all duration-300 ${
          copied
            ? 'bg-green-500/20 border-green-500/50 text-green-400'
            : darkMode
              ? 'bg-white/5 border-white/10 hover:border-white/20 text-white backdrop-blur-sm'
              : 'bg-white/80 border-gray-200 hover:border-gray-300 text-gray-900 backdrop-blur-sm'
        }`}
      >
        <motion.div
          key={copied ? 'copied' : 'share'}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center space-x-2"
        >
          {copied ? (
            <Check className="w-4 h-4" />
          ) : (
            <Share2 className="w-4 h-4" />
          )}
          <span className="font-medium">
            {copied ? 'Link Copied!' : 'Share Profile'}
          </span>
        </motion.div>
      </Button>
    </motion.div>
  );
}