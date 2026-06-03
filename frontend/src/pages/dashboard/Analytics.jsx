import DashboardLayout from '../../components/dashboard/DashboardLayout';

import AnalyticsCards from '../../components/analytics/AnalyticsCards';
import RevenueChart from '../../components/analytics/RevenueChart';
import SalesChart from '../../components/analytics/SalesChart';
import TopProducts from '../../components/analytics/TopProducts';

export default function Analytics() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Analytics
          </h1>

          <p className="text-slate-400 mt-2">
            Track revenue, orders and store performance.
          </p>
        </div>

        <AnalyticsCards />

        <div className="grid xl:grid-cols-2 gap-6">
          <RevenueChart />
          <SalesChart />
        </div>

        <TopProducts />

      </div>
    </DashboardLayout>
  );
}
