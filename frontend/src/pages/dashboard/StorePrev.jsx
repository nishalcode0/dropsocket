import DashboardLayout from "../../components/dashboard/DashboardLayout";

import StoreHeader from "../../components/storefront/StoreHeader";
import StoreBanner from "../../components/storefront/StoreBanner";
import ProductGrid from "../../components/storefront/ProductGrid";

export default function StorePreview() {
  return (
    <DashboardLayout>
      <div className="space-y-6">

        <div>
          <h1 className="text-4xl font-bold text-white">
            Store Preview
          </h1>

          <p className="text-slate-400 mt-2">
            This is how customers will see your store.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden border border-slate-800 bg-slate-950">

          <div className="bg-slate-900 px-4 py-3 border-b border-slate-800 flex items-center gap-2">

            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />

            <div className="ml-4 text-sm text-slate-500">
              https://yourstore.dropsocket.in
            </div>

          </div>

          <StoreHeader />

          <StoreBanner />

          <ProductGrid />

        </div>

      </div>
    </DashboardLayout>
  );
}
