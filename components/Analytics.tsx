'use client';

import { motion } from 'framer-motion';
import { Eye, MousePointer, Users, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface AnalyticsData {
  pageViews: number;
  totalClicks: number;
  uniqueVisitors: number;
}

interface AnalyticsProps {
  analytics: AnalyticsData;
  darkMode: boolean;
}

export function Analytics({ analytics, darkMode }: AnalyticsProps) {
  const stats = [
    {
      icon: Eye,
      label: 'Page Views',
      value: analytics.pageViews,
      color: 'text-blue-400'
    },
    {
      icon: MousePointer,
      label: 'Link Clicks',
      value: analytics.totalClicks,
      color: 'text-green-400'
    },
    {
      icon: Users,
      label: 'Visitors',
      value: analytics.uniqueVisitors,
      color: 'text-purple-400'
    }
  ];

  return (
    <Card className={`border-2 ${
      darkMode 
        ? 'bg-white/5 border-white/10 backdrop-blur-sm' 
        : 'bg-white/80 border-gray-200 backdrop-blur-sm'
    }`}>
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className={`font-semibold text-sm ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Analytics
          </h3>
          <TrendingUp className={`w-4 h-4 ${
            darkMode ? 'text-green-400' : 'text-green-600'
          }`} />
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <stat.icon className={`w-5 h-5 mx-auto mb-1 ${stat.color}`} />
              <p className={`text-lg font-bold ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {stat.value.toLocaleString()}
              </p>
              <p className={`text-xs ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}