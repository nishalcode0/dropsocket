import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Store,
  CreditCard,
  User,
  X,
} from "lucide-react";

import { Link, useLocation } from "react-router-dom";

export default function DashboardSidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const location = useLocation();

  const menuItems = [
    {
      name: "Overview",
      path: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Products",
      path: "/dashboard/products",
      icon: Package,
    },
    {
      name: "Orders",
      path: "/dashboard/orders",
      icon: ShoppingCart,
    },
    {
      name: "Analytics",
      path: "/dashboard/analytics",
      icon: BarChart3,
    },
    {
      name: "Store Settings",
      path: "/dashboard/store-settings",
      icon: Store,
    },
    {
      name: "Billing",
      path: "/dashboard/billing",
      icon: CreditCard,
    },
    {
      name: "Profile",
      path: "/dashboard/profile",
      icon: User,
    },
  ];

  return (
    <>
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="
            fixed
            inset-0
            bg-black/60
            backdrop-blur-sm
            z-40
            lg:hidden
          "
        />
      )}

      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          h-screen
          w-64
          border-r
          border-white/10
          bg-slate-950/95
          backdrop-blur-xl
          transition-transform
          duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >
        {/* Header */}

        <div className="px-6 py-8 border-b border-white/5">

          <div className="flex items-center justify-between">

            <div>
              <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                DROPSOCKET
              </h1>

              <p className="text-xs text-slate-500 mt-2">
                Creator Commerce Platform
              </p>
            </div>

            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-400"
            >
              <X size={20} />
            </button>

          </div>

        </div>

        {/* Navigation */}

        <nav className="px-4 py-6 space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            const isActive =
              location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`
                  flex
                  items-center
                  gap-3
                  w-full
                  px-4
                  py-3
                  rounded-2xl
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-blue-500/15 border border-blue-400/20 text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }
                `}
              >
                <Icon
                  size={18}
                  className={
                    isActive
                      ? "text-blue-400"
                      : "text-slate-500"
                  }
                />

                <span className="font-medium text-sm">
                  {item.name}
                </span>

              </Link>
            );
          })}

        </nav>

        {/* User */}

        <div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/5">

          <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">

            <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center font-semibold">
              N
            </div>

            <div>
              <p className="text-sm font-medium">
                Nishal
              </p>

              <p className="text-xs text-slate-500">
                Creator Plan
              </p>
            </div>

          </div>

        </div>

      </aside>
    </>
  );
}
