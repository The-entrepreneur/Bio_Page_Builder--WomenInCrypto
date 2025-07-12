'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

interface EmailSubscriptionProps {
  darkMode: boolean;
}

export function EmailSubscription({ darkMode }: EmailSubscriptionProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMessage('Thanks for subscribing! 🎉');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.message || 'Please enter a valid email address');
      }
    } catch (err) {
      setStatus('error');
      setMessage('Server error. Please try again later.');
    }

    setTimeout(() => {
      setStatus('idle');
      setMessage('');
    }, 3000);
  };

  return (
    <Card className={`border-2 ${
      darkMode 
        ? 'bg-white/5 border-white/10 backdrop-blur-sm' 
        : 'bg-white/80 border-gray-200 backdrop-blur-sm'
    }`}>
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <div className={`w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3 ${
            darkMode 
              ? 'bg-gradient-to-r from-purple-600 to-pink-600' 
              : 'bg-gradient-to-r from-purple-500 to-pink-500'
          }`}>
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h3 className={`font-semibold mb-2 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Stay Updated
          </h3>
          <p className={`text-sm ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Get the latest updates on crypto opportunities and community events
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <Input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            className={`${
              darkMode 
                ? 'bg-white/10 border-white/20 text-white placeholder:text-gray-400' 
                : 'bg-white border-gray-300 text-gray-900 placeholder:text-gray-500'
            }`}
          />
          
          <Button
            type="submit"
            disabled={status === 'loading' || !email}
            className={`w-full ${
              status === 'success'
                ? 'bg-green-600 hover:bg-green-700'
                : status === 'error'
                  ? 'bg-red-600 hover:bg-red-700'
                  : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700'
            }`}
          >
            {status === 'loading' && (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
            )}
            {status === 'success' && <Check className="w-4 h-4 mr-2" />}
            {status === 'error' && <AlertCircle className="w-4 h-4 mr-2" />}
            
            {status === 'loading' ? 'Subscribing...' : 
             status === 'success' ? 'Subscribed!' : 
             status === 'error' ? 'Try Again' : 
             'Subscribe'}
          </Button>
        </form>

        {message && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`text-sm text-center mt-3 ${
              status === 'success' 
                ? 'text-green-400' 
                : status === 'error' 
                  ? 'text-red-400' 
                  : darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {message}
          </motion.p>
        )}
      </CardContent>
    </Card>
  );
}