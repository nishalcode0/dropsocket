import DashboardLayout from '../../components/dashboard/DashboardLayout';
import OrdersTable from '../../components/orders/OrdersTable';

export default function Orders() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Orders
            </h1>

            <p className="text-slate-400 mt-2">
              Track customer purchases and payments.
            </p>
          </div>

          <button
            className="
              w-full
              md:w-auto
              px-5
              py-3
              rounded-2xl
              border
              border-blue-400/10
              bg-blue-500/5
              text-blue-300
              hover:bg-blue-500/10
              transition-all
            "
          >
            Export Orders
          </button>

        </div>

        <OrdersTable />

      </div>
    </DashboardLayout>
  );
}
