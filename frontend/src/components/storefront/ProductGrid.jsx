const products = [
  {
    id: 1,
    name: "React Mastery",
    price: "₹999",
  },
  {
    id: 2,
    name: "SaaS Starter Kit",
    price: "₹1499",
  },
  {
    id: 3,
    name: "UI Design Pack",
    price: "₹799",
  },
  {
    id: 4,
    name: "Framer Templates",
    price: "₹1299",
  },
  {
    id: 5,
    name: "Tailwind Components",
    price: "₹699",
  },
  {
    id: 6,
    name: "Notion Creator Pack",
    price: "₹499",
  },
];

export default function ProductGrid() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16">

      <h2 className="text-4xl font-bold text-white mb-10">
        Featured Products
      </h2>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-blue-500 transition-all"
          >

            <div className="h-52 bg-gradient-to-br from-blue-600 to-purple-600" />

            <div className="p-6">

              <h3 className="text-xl font-bold text-white">
                {product.name}
              </h3>

              <p className="text-blue-400 font-semibold mt-2">
                {product.price}
              </p>

              <p className="text-slate-400 text-sm mt-4">
                Premium digital product with instant delivery.
              </p>

              <button className="mt-6 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition">
                View Product
              </button>

            </div>

          </div>
        ))}

      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-16">

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

          <h3 className="font-semibold text-white mb-2">
            Instant Delivery
          </h3>

          <p className="text-slate-400">
            Files delivered immediately after purchase.
          </p>

        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

          <h3 className="font-semibold text-white mb-2">
            Secure Checkout
          </h3>

          <p className="text-slate-400">
            Payments processed securely.
          </p>

        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">

          <h3 className="font-semibold text-white mb-2">
            Lifetime Access
          </h3>

          <p className="text-slate-400">
            Download your purchases anytime.
          </p>

        </div>

      </div>

    </section>
  );
}
