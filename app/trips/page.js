import { lazyLoad } from '../../utils/lazyLoad';

// Dynamically import the client component with lazy loading
const TripsPageClient = lazyLoad(() => import('./page.client'));

export default function TripsPage() {
  return <TripsPageClient />;
} 