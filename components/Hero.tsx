'use client';

import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface HeroData {
  avatar: string;
  title: string;
  tagline: string;
  bio: string;
  badge: string;
}

interface HeroProps {
  data: HeroData;
  darkMode: boolean;
}

export function Hero({ data, darkMode }: HeroProps) {
  return (
    <div className="text-center mb-8">
      {/* Avatar */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
        className="mb-6"
      >
        <Avatar className="w-24 h-24 mx-auto ring-4 ring-purple-500/20">
          <AvatarImage src={data.avatar} alt={data.title} />
          <AvatarFallback className={`text-2xl font-bold ${
            darkMode 
              ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white' 
              : 'bg-gradient-to-br from-purple-400 to-pink-400 text-white'
          }`}>
            WIC
          </AvatarFallback>
        </Avatar>
      </motion.div>

      {/* Title and Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-4"
      >
        <div className="flex items-center justify-center gap-3 mb-2">
          <h1 className={`text-2xl font-bold ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {data.title}
          </h1>
          <Badge variant="secondary" className={`${
            darkMode 
              ? 'bg-purple-500/20 text-purple-300 border-purple-500/30' 
              : 'bg-purple-100 text-purple-700 border-purple-200'
          }`}>
            {data.badge}
          </Badge>
        </div>
        
        <p className={`text-lg font-medium mb-3 ${
          darkMode 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400' 
            : 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'
        }`}>
          {data.tagline}
        </p>
      </motion.div>

      {/* Bio */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`text-sm leading-relaxed max-w-sm mx-auto ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}
      >
        {data.bio}
      </motion.p>
    </div>
  );
}