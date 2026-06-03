export default function RevenueChart() {
  const bars = [40, 60, 90, 70, 95, 85, 100];

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
        Revenue
      </h2>

      <div className="h-64 flex items-end gap-4">
        {bars.map((height, index) => (
          <div
            key={index}
            className="
            flex-1
            rounded-t-xl
            bg-gradient-to-t
            from-blue-500
            to-purple-500
            "
            style={{
              height: `${height}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
