import ProductCard from './ProductCard';

export default function ProductTable() {
  const products = [
    {
      id: 1,
      name: 'Notion Study Template',
      price: '₹299',
      sales: 12,
      type: 'notion',
      status: 'live',
    },
    {
      id: 2,
      name: 'Canva Invitation Pack',
      price: '₹499',
      sales: 8,
      type: 'canva',
      status: 'live',
    },
    {
      id: 3,
      name: 'Productivity Ebook Bundle',
      price: '₹199',
      sales: 5,
      type: 'ebook',
      status: 'live',
    },
  ];

  if (products.length === 0) {
    return (
      <div
        className="
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        p-12
        text-center
      "
      >
        <div
          className="
          w-20
          h-20
          mx-auto
          rounded-3xl
          bg-blue-500/10
          flex
          items-center
          justify-center
          text-3xl
          mb-6
        "
        >
          📦
        </div>

        <h2 className="text-2xl font-semibold text-white">
          No Products Yet
        </h2>

        <p className="text-slate-400 mt-3 max-w-md mx-auto">
          Create your first digital product and start selling
          through your DropSocket storefront.
        </p>

        <button
          className="
          mt-6
          px-6
          py-3
          rounded-2xl
          bg-linear-to-r
          from-blue-500
          to-purple-500
          font-medium
          hover:opacity-90
          transition-all
        "
        >
          Create First Product
        </button>
      </div>
    );
  }

  return (
    <div
      className="
      grid
  grid-cols-1
  md:grid-cols-2
  xl:grid-cols-3
  gap-6
    "
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
