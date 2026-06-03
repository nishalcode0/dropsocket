export default function SalesChart() {
  const sales = [30, 45, 55, 80, 65, 95, 70];

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
        Sales Activity
      </h2>

      <div className="h-64 flex items-end gap-4">
        {sales.map((height, index) => (
          <div
            key={index}
            className="
            flex-1
            rounded-t-xl
            bg-gradient-to-t
            from-purple-500
            to-blue-400
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
