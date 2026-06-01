import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  BarChart3,
  Store,
  CreditCard,
  User,
} from "lucide-react";

export default function DashboardSidebar() {
  const menuItems = [
    {
      name: "Overview",
      icon: LayoutDashboard,
      active: true,
    },
    {
      name: "Products",
      icon: Package,
    },
    {
      name: "Orders",
      icon: ShoppingCart,
    },
    {
      name: "Analytics",
      icon: BarChart3,
    },
    {
      name: "Store Settings",
      icon: Store,
    },
    {
      name: "Billing",
      icon: CreditCard,
    },
    {
      name: "Profile",
      icon: User,
    },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r border-blue-400/10 bg-black/20 backdrop-blur-xl">

      {/* Logo */}
      <div className="px-6 py-8 border-b border-white/5">
        <h1 className="text-2xl font-bold bg-linear-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
          DROPSOCKET
        </h1>

        <p className="text-xs text-slate-500 mt-2">
          Creator Commerce Platform
        </p>
      </div>

      {/* Navigation */}
      <nav className="px-4 py-6 space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              className={`group flex items-center gap-3 w-full px-4 py-3 rounded-2xl transition-all duration-300
                ${
                  item.active
                    ? "bg-blue-500/15 border border-blue-400/20 text-white shadow-lg shadow-blue-500/5"
                    : "text-slate-400 hover:bg-white/5 hover:text-white"
                }
              `}
            >
              <Icon
                size={18}
                className={`${
                  item.active
                    ? "text-blue-400"
                    : "text-slate-500 group-hover:text-blue-400"
                }`}
              />

              <span className="font-medium text-sm">
                {item.name}
              </span>
            </button>
          );
        })}

      </nav>

      {/* Bottom Profile */}
      <div className="absolute bottom-0 left-0 w-full p-4 border-t border-white/5">

        <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5">

          <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-purple-500 flex items-center justify-center font-semibold text-white">
            N
          </div>

          <div>
            <p className="text-sm font-medium text-white">
              Nishal
            </p>

            <p className="text-xs text-slate-500">
              Creator Plan
            </p>
          </div>

        </div>

      </div>

    </aside>
  );
}
