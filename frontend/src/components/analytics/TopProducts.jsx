import {
  Package,
  ArrowUpRight,
} from 'lucide-react';

const products = [
  {
    name: 'Notion Study Template',
    sales: 42,
    revenue: '₹12,558',
  },
  {
    name: 'Canva Invitation Pack',
    sales: 31,
    revenue: '₹15,469',
  },
  {
    name: 'Productivity Ebook',
    sales: 28,
    revenue: '₹5,572',
  },
  {
    name: 'Freelancer Kit',
    sales: 19,
    revenue: '₹9,481',
  },
];

export default function TopProducts() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      "
    >
      <h2 className="text-xl font-semibold text-white mb-6">
        Top Products
      </h2>

      <div className="space-y-4">

        {products.map((product) => (
          <div
            key={product.name}
            className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-4
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                w-12
                h-12
                rounded-2xl
                bg-blue-500/10
                flex
                items-center
                justify-center
                text-blue-400
                "
              >
                <Package size={18} />
              </div>

              <div>
                <h3 className="text-white font-medium">
                  {product.name}
                </h3>

                <p className="text-slate-400 text-sm">
                  {product.sales} sales
                </p>
              </div>

            </div>

            <div className="flex items-center gap-4">

              <span className="text-white font-semibold">
                {product.revenue}
              </span>

              <button
                className="
                w-10
                h-10
                rounded-xl
                bg-white/5
                border
                border-white/10
                flex
                items-center
                justify-center
                "
              >
                <ArrowUpRight size={16} />
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
