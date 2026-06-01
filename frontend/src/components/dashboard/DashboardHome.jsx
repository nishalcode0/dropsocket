import DashboardLayout from './DashboardLayout';
import DashboardStats from './DashboardStats';

export default function DashboardHome() {
  const recentOrders = [
    {
      product: 'Notion Template',
      amount: '₹299',
      time: '2 mins ago',
    },
    {
      product: 'Canva Pack',
      amount: '₹499',
      time: '12 mins ago',
    },
    {
      product: 'Ebook Bundle',
      amount: '₹199',
      time: '34 mins ago',
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Header */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">
            Welcome Back 
          </h1>

          <p className="text-slate-400 mt-2">
            Here's what's happening in your store today.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
          <DashboardStats
            title="Revenue"
            value="₹12,450"
            change="+12%"
          />

          <DashboardStats
            title="Orders"
            value="42"
            change="+5%"
          />

          <DashboardStats
            title="Products"
            value="7"
            change="+2"
          />

          <DashboardStats
            title="Conversion"
            value="4.8%"
            change="+0.4%"
          />

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

          {/* Analytics Card */}
          <div className="rounded-3xl border border-blue-400/10 bg-linear-to-br from-blue-950/30 to-purple-950/20 backdrop-blur-md p-6">

            <h2 className="text-xl font-semibold text-white mb-4">
              Revenue Analytics
            </h2>

            <div className="h-80 rounded-2xl border border-white/5 flex items-center justify-center text-slate-500">
              Chart Coming Soon
            </div>

          </div>

          {/* Recent Orders */}
          <div className="rounded-3xl border border-blue-400/10 bg-linear-to-br from-blue-950/30 to-purple-950/20 backdrop-blur-md p-6">

            <h2 className="text-xl font-semibold text-white mb-6">
              Recent Orders
            </h2>

            <div>
              {recentOrders.map((order, index) => (
                <div
                  key={index}
                  className="py-4 border-b border-white/5 last:border-none"
                >
                  <div className="flex justify-between items-center">

                    <div>
                      <p className="font-medium text-white">
                        {order.product}
                      </p>

                      <p className="text-sm text-slate-500">
                        {order.time}
                      </p>
                    </div>

                    <span className="text-slate-300 font-medium">
                      {order.amount}
                    </span>

                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </DashboardLayout>
  );
}
