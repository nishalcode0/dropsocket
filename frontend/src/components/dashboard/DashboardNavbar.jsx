import { Bell } from "lucide-react";

export default function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-blue-400/10 backdrop-blur-xl bg-black/10">

      <div className="flex items-center justify-between px-8 py-5">

        {/* Left Side */}
        <div>
          <h2 className="text-xl font-semibold text-white">
            Dashboard 
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Manage your products, orders and store.
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <button
            className="
              relative
              w-11
              h-11
              rounded-2xl
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              text-slate-400
              hover:text-white
              hover:border-blue-400/20
              transition-all
              duration-300
            "
          >
            <Bell size={18} />

            <span className="
              absolute
              top-2
              right-2
              w-2
              h-2
              rounded-full
              bg-blue-500
            " />
          </button>

          <div className="
            w-11
            h-11
            rounded-full
            bg-linear-to-r
            from-blue-500
            to-purple-500
            flex
            items-center
            justify-center
            font-semibold
            text-white
            border
            border-white/10
          ">
            N
          </div>

        </div>

      </div>

    </header>
  );
}
