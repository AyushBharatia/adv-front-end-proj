// Default metadata
export const defaultMetadata = {
  title: 'TravelEase - Travel Planning Simplified',
  description: 'Plan your trips, manage itineraries, and track your travel budget with TravelEase',
  keywords: 'travel planning, trip organizer, itinerary builder, travel budget tracker, vacation planner',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://travelease.vercel.app',
    siteName: 'TravelEase',
    title: 'TravelEase - Travel Planning Simplified',
    description: 'Plan your trips, manage itineraries, and track your travel budget with TravelEase',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TravelEase - Travel Planning Simplified',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TravelEase - Travel Planning Simplified',
    description: 'Plan your trips, manage itineraries, and track your travel budget with TravelEase',
    images: ['/images/twitter-image.jpg'],
  },
};

// Page-specific metadata
export const pageMetadata = {
  home: {
    title: 'TravelEase - Travel Planning Simplified',
    description: 'Your all-in-one solution for stress-free travel planning. Plan trips, create itineraries, and track expenses.',
  },
  trips: {
    title: 'My Trips - TravelEase',
    description: 'Create and manage your trips with TravelEase. Keep all your travel plans organized in one place.',
  },
  itinerary: {
    title: 'Trip Itinerary - TravelEase',
    description: 'Plan your daily activities and build comprehensive travel itineraries with TravelEase.',
  },
  budget: {
    title: 'Travel Budget - TravelEase',
    description: 'Track and manage your travel expenses. Set budgets and monitor spending by category.',
  },
}; 