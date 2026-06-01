import {
  Package,
  CheckCircle,
  ChevronRight,
} from 'lucide-react';

export default function OrderCard({ order }) {
  return (
    <div
      className="
      group
      rounded-3xl
      border
      border-white/5
      bg-linear-to-br
      from-slate-900/90
      via-blue-950/30
      to-purple-950/20
      backdrop-blur-xl
      p-5
      md:p-6
      hover:border-blue-400/20
      transition-all
      duration-300
      "
    >
      <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

        {/* Left Side */}
        <div className="flex items-start gap-4">

          {/* Avatar */}
          {order.picture ? (
            <img
              src={order.picture}
              alt={order.customer}
              className="
              w-12
              h-12
              rounded-full
              object-cover
              border
              border-white/10
              "
            />
          ) : (
            <div
              className="
              w-12
              h-12
              rounded-full
              bg-linear-to-r
              from-blue-500
              to-purple-500
              flex
              items-center
              justify-center
              text-white
              font-semibold
              "
            >
              {order.customer.charAt(0)}
            </div>
          )}

          {/* Customer Info */}
          <div>
            <h3 className="font-semibold text-white">
              {order.customer}
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              {order.email}
            </p>

            <p className="text-xs text-slate-500 mt-2 font-medium">
              #{order.orderId}
            </p>

            <div className="flex items-center gap-2 mt-3 text-slate-300 text-sm">
              <Package size={14} />
              {order.product}
            </div>

            <p className="text-xs text-slate-400 mt-2">
              {order.date}
            </p>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6">

          <div>
            <p className="text-xl font-semibold text-white">
              {order.amount}
            </p>
          </div>

          <div
            className="
            flex
            items-center
            gap-2
            px-3
            py-2
            rounded-full
            bg-green-500/10
            border
            border-green-500/20
            "
          >
            <CheckCircle
              size={14}
              className="text-green-400"
            />

            <span className="text-xs text-green-400 font-medium">
              {order.status}
            </span>
          </div>

          <button
            className="
            w-10
            h-10
            rounded-xl
            bg-white/5
            border
            border-white/10
            flex
            items-center
            justify-center
            hover:bg-blue-500/10
            hover:border-blue-400/20
            hover:scale-105
            transition-all
            duration-300
            "
          >
            <ChevronRight
              size={16}
              className="
              text-slate-400
              group-hover:text-white
              transition-colors
              "
            />
          </button>

        </div>

      </div>
    </div>
  );
}
