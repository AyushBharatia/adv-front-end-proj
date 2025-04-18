import { lazyLoad } from '../../utils/lazyLoad';

// Dynamically import the client component with lazy loading
const ItineraryPageClient = lazyLoad(() => import('./page.client'));

export default function ItineraryPage() {
  return <ItineraryPageClient />;
} 