export default function DashboardStats({
  title,
  value,
  change,
}) {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-4 md:p-6
      "
    >
      <p className="text-xs md:text-sm text-slate-400">
        {title}
      </p>

      <h3 className="text-2xl md:text-3xl font-semibold mt-3">
        {value}
      </h3>

      <div
        className="
        inline-flex
        mt-3
        px-2
        py-1
        rounded-full
        bg-green-500/10
        border
        border-green-500/20
        "
      >
        <p className="text-green-400 text-xs">
          {change}
        </p>
      </div>
    </div>
  );
}
