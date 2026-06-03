import DashboardLayout from '../../components/dashboard/DashboardLayout';

import CurrentPlan from "../../components/billing/CurrentPlan";
import UpgradePlan from "../../components/billing/UpgradePlan";
import BillingHistory from "../../components/billing/BillingHistory";

export default function Billing() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Billing
          </h1>

          <p className="text-slate-400 mt-2">
            Manage subscriptions and invoices.
          </p>
        </div>

        <CurrentPlan />

        <UpgradePlan />

        <BillingHistory />

      </div>
    </DashboardLayout>
  );
}
