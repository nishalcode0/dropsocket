export default function CurrentPlan() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold text-white mb-4">
        Current Plan
      </h2>

      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-lg font-medium">
            Creator Plan
          </p>

          <p className="text-slate-400 mt-1">
            ₹299/month
          </p>
        </div>

        <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">
          Active
        </span>
      </div>
    </div>
  );
}
