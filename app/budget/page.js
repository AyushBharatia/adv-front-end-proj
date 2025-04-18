import { lazyLoad } from '../../utils/lazyLoad';

// Dynamically import the client component with lazy loading
const BudgetPageClient = lazyLoad(() => import('./page.client'));

export default function BudgetPage() {
  return <BudgetPageClient />;
} 