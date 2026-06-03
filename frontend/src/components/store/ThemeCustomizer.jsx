const colors = [
  'bg-blue-500',
  'bg-purple-500',
  'bg-green-500',
  'bg-pink-500',
  'bg-orange-500',
];

export default function ThemeCustomizer() {
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
        Theme Customizer
      </h2>

      <div>
        <p className="text-slate-400 mb-4">
          Accent Color
        </p>

        <div className="flex gap-3 flex-wrap">
          {colors.map((color) => (
            <button
              key={color}
              className={`
                w-10
                h-10
                rounded-full
                ${color}
              `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
