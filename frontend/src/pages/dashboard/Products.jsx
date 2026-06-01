import DashboardLayout from '../../components/dashboard/DashboardLayout';
import ProductTable from '../../components/products/ProductTable';

export default function Products() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <h1 className="text-4xl font-bold text-white">
              Products
            </h1>

            <p className="text-slate-400 mt-2">
              Manage your digital products.
            </p>
          </div>

          <button className="
              w-full
    md:w-auto
    px-5
    py-3
    rounded-2xl
    bg-linear-to-r
    from-blue-500
    to-purple-500
    font-medium
          ">
            + Create Product
          </button>

        </div>

        <ProductTable />

      </div>
    </DashboardLayout>
  );
}
