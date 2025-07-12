'use client';

import { Play, Volume2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface MediaData {
  type: 'youtube' | 'podcast' | 'audio';
  title: string;
  description: string;
  embedUrl: string;
  thumbnail?: string;
  duration?: string;
}

interface MediaEmbedProps {
  data: MediaData;
  darkMode: boolean;
}

export function MediaEmbed({ data, darkMode }: MediaEmbedProps) {
  return (
    <Card className={`border-2 overflow-hidden ${
      darkMode 
        ? 'bg-white/5 border-white/10 backdrop-blur-sm' 
        : 'bg-white/80 border-gray-200 backdrop-blur-sm'
    }`}>
      <CardContent className="p-0">
        {/* Media Header */}
        <div className="p-4 border-b border-white/10">
          <div className="flex items-center justify-between">
            <div>
              <h3 className={`font-semibold text-sm ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                {data.title}
              </h3>
              <p className={`text-xs mt-1 ${
                darkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {data.description}
              </p>
            </div>
            {data.duration && (
              <span className={`text-xs px-2 py-1 rounded ${
                darkMode 
                  ? 'bg-white/10 text-gray-300' 
                  : 'bg-gray-100 text-gray-600'
              }`}>
                {data.duration}
              </span>
            )}
          </div>
        </div>

        {/* Media Content */}
        <div className="relative">
          {data.type === 'youtube' ? (
            <div className="aspect-video">
              <iframe
                src={data.embedUrl}
                title={data.title}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="p-6">
              <div className={`aspect-video rounded-lg flex items-center justify-center ${
                darkMode 
                  ? 'bg-gradient-to-br from-purple-900/50 to-pink-900/50' 
                  : 'bg-gradient-to-br from-purple-100 to-pink-100'
              }`}>
                <Button
                  size="lg"
                  className="rounded-full w-16 h-16 bg-white/20 hover:bg-white/30 backdrop-blur-sm"
                >
                  {data.type === 'podcast' ? (
                    <Volume2 className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8" />
                  )}
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}