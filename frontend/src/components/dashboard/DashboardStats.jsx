export default function DashboardStats({
  title,
  value,
  change,
}) {
  return (
    <div className="
      rounded-3xl
      border border-blue-400/10
      bg-linear-to-br
      from-blue-950/30
      to-purple-950/20
      backdrop-blur-md
      p-6
      transition-all
      duration-300
      hover:border-blue-400/20
      hover:translate-y-[-2px]
    ">

      <div className="flex items-start justify-between">

        <div>
          <p className="
            text-xs
            uppercase
            tracking-wider
            text-slate-400
          ">
            {title}
          </p>

          <h3 className="
            text-3xl
            font-semibold
            text-white
            mt-3
          ">
            {value}
          </h3>
        </div>

        <span className="
          px-2.5
          py-1
          rounded-full
          bg-green-500/10
          border border-green-500/20
          text-green-400
          text-xs
          font-medium
        ">
          {change}
        </span>

      </div>

    </div>
  );
}
