import {
  FileText,
  Image,
  BookOpen,
  Pencil,
  MoreVertical,
  Copy,
} from 'lucide-react';

export default function ProductCard({ product }) {
  const getProductIcon = (type) => {
    switch (type) {
      case 'notion':
        return <FileText size={20} />;
      case 'canva':
        return <Image size={20} />;
      case 'ebook':
        return <BookOpen size={20} />;
      default:
        return <FileText size={20} />;
    }
  };

  return (
    <div
      className="
      rounded-3xl
  border
  border-white/10
  bg-linear-to-br
  from-slate-900/90
  via-blue-950/40
  to-purple-950/30
  backdrop-blur-xl
  p-5 md:p-6
  hover:border-blue-400/20
  transition-all
  duration-300
      "
    >
      {/* Top Section */}
      <div className="flex items-start justify-between">

        <div className="
          w-12
          h-12
          rounded-2xl
          bg-blue-500/10
          border
          border-blue-400/10
          flex
          items-center
          justify-center
          text-blue-400
        ">
          {getProductIcon(product.type)}
        </div>

        <div className="flex items-center gap-2">

          <button
            className="
            p-2
            rounded-xl
            border
            border-white/5
            bg-white/5
            hover:bg-white/10
            transition-all
            "
          >
            <Pencil size={15} />
          </button>

          <button
            className="
            p-2
            rounded-xl
            border
            border-white/5
            bg-white/5
            hover:bg-white/10
            transition-all
            "
          >
            <MoreVertical size={15} />
          </button>

        </div>
      </div>

      {/* Product Info */}
      <div className="mt-5">

        <div className="flex items-center gap-2 mb-2">

          <div className="w-2 h-2 rounded-full bg-green-500" />

          <span className="text-xs text-green-400 font-medium">
            Live
          </span>

        </div>

        <h3 className="text-xl font-semibold text-white">
          {product.name}
        </h3>

        <p className="text-sm text-slate-300 mt-2">
          Digital Product
        </p>

      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-4 mt-6">

        <div
          className="
          rounded-2xl
          border
          border-white/5
          bg-white/[0.03]
          p-4
          "
        >
          <p className="text-xs text-slate-400 uppercase tracking-wide">
            Price
          </p>

          <p className="text-lg font-semibold text-white mt-2">
            {product.price}
          </p>
        </div>

        <div
          className="
          rounded-2xl
          border
          border-white/5
          bg-white/[0.03]
          p-4
          "
        >
          <p className="text-xs text-slate-400 uppercase tracking-wide">
            Sales
          </p>

          <p className="text-lg font-semibold text-white mt-2">
            {product.sales}
          </p>
        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 pt-5 border-t border-white/5">

        <button
          className="
          w-full
          flex
          items-center
          justify-center
          gap-2
          rounded-2xl
          border
          border-blue-400/10
          bg-blue-500/5
          py-3
          text-sm
          text-blue-300
          hover:bg-blue-500/10
          transition-all
          "
        >
          <Copy size={14} />
          Copy Store Link
        </button>

      </div>
    </div>
  );
}
