export default function UpgradePlan() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Upgrade Plan
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-white/10 rounded-2xl p-5">
          <h3 className="text-white font-semibold">
            Creator
          </h3>

          <p className="text-3xl font-bold text-white mt-3">
            ₹299
          </p>

          <button className="w-full mt-6 py-3 rounded-xl bg-blue-600 text-white">
            Current Plan
          </button>
        </div>

        <div className="border border-blue-500/30 rounded-2xl p-5">
          <h3 className="text-white font-semibold">
            Creator Pro
          </h3>

          <p className="text-3xl font-bold text-white mt-3">
            ₹999
          </p>

          <button className="w-full mt-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-500">
            Upgrade
          </button>
        </div>
      </div>
    </div>
  );
}
