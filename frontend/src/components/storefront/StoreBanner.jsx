export default function StoreBanner() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

      <div className="relative max-w-7xl mx-auto px-8 py-24 text-center">

        <div className="inline-flex px-4 py-2 rounded-full bg-white/10 backdrop-blur mb-6">
          <span className="text-white text-sm">
            Trusted by 500+ creators
          </span>
        </div>

        <h1 className="text-6xl font-black text-white mb-6">
          Build & Sell
          <br />
          Digital Products
        </h1>

        <p className="max-w-2xl mx-auto text-xl text-blue-100">
          Courses, templates, ebooks, assets and more.
        </p>

      </div>

    </section>
  );
}
