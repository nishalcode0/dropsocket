export default function StoreHeader() {
  return (
    <header className="border-b border-slate-800 bg-slate-950">

      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500" />

          <div>
            <h2 className="font-bold text-white text-lg">
              Sample Store
            </h2>

            <p className="text-xs text-slate-400">
              Digital Products
            </p>
          </div>

        </div>

        <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium transition">
          Cart (0)
        </button>

      </div>

    </header>
  );
}
