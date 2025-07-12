// Simple analytics system - would integrate with services like Vercel Analytics
interface AnalyticsData {
  pageViews: number;
  totalClicks: number;
  uniqueVisitors: number;
  linkClicks: Record<string, number>;
}

export function trackClick(linkTitle: string) {
  const analytics = getAnalytics();
  analytics.totalClicks += 1;
  analytics.linkClicks[linkTitle] = (analytics.linkClicks[linkTitle] || 0) + 1;
  
  localStorage.setItem('analytics', JSON.stringify(analytics));
}

export function trackPageView() {
  const analytics = getAnalytics();
  analytics.pageViews += 1;
  
  // Simple unique visitor tracking (in production, use proper user identification)
  const visitorId = localStorage.getItem('visitorId');
  if (!visitorId) {
    analytics.uniqueVisitors += 1;
    localStorage.setItem('visitorId', Math.random().toString(36).substr(2, 9));
  }
  
  localStorage.setItem('analytics', JSON.stringify(analytics));
}

export function getAnalytics(): AnalyticsData {
  const defaultAnalytics: AnalyticsData = {
    pageViews: parseInt(localStorage.getItem('pageViews') || '0'),
    totalClicks: 0,
    uniqueVisitors: 0,
    linkClicks: {}
  };
  
  try {
    const stored = localStorage.getItem('analytics');
    return stored ? { ...defaultAnalytics, ...JSON.parse(stored) } : defaultAnalytics;
  } catch {
    return defaultAnalytics;
  }
}

export function resetAnalytics() {
  localStorage.removeItem('analytics');
  localStorage.removeItem('pageViews');
  localStorage.removeItem('visitorId');
}

// Export analytics data for dashboard/reporting
export function exportAnalytics() {
  const analytics = getAnalytics();
  const exportData = {
    ...analytics,
    exportedAt: new Date().toISOString(),
    topLinks: Object.entries(analytics.linkClicks)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([title, clicks]) => ({ title, clicks }))
  };
  
  return exportData;
}