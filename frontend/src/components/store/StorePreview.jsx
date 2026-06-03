import { ShoppingBag } from 'lucide-react';

export default function StorePreview() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      overflow-hidden
      "
    >
      <div
        className="
        h-40
        bg-gradient-to-r
        from-blue-500/40
        via-purple-500/20
        to-blue-500/40
        "
      />

      <div className="p-6">

        <div
          className="
          w-20
          h-20
          rounded-full
          bg-blue-500
          flex
          items-center
          justify-center
          text-white
          font-bold
          text-2xl
          -mt-16
          border-4
          border-slate-900
          "
        >
          N
        </div>

        <h2 className="text-2xl font-bold text-white mt-4">
          Nishal Store
        </h2>

        <p className="text-slate-400 mt-2">
          Templates, ebooks and digital resources.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mt-8">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="
              rounded-2xl
              bg-white/5
              border
              border-white/10
              p-4
              "
            >
              <ShoppingBag
                size={18}
                className="text-blue-400"
              />

              <h3 className="text-white mt-3">
                Product {item}
              </h3>

              <p className="text-slate-400 text-sm mt-2">
                Digital Product Preview
              </p>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}
