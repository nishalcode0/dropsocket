import {
  DollarSign,
  ShoppingCart,
  Users,
  TrendingUp,
} from 'lucide-react';

//Good Bye dropsocket for now :)

const stats = [
  {
    title: 'Revenue',
    value: '₹42,890',
    icon: DollarSign,
  },
  {
    title: 'Orders',
    value: '152',
    icon: ShoppingCart,
  },
  {
    title: 'Customers',
    value: '108',
    icon: Users,
  },
  {
    title: 'Conversion',
    value: '4.8%',
    icon: TrendingUp,
  },
];

export default function AnalyticsCards() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-6
            "
          >
            <div className="flex justify-between items-center">

              <div>
                <p className="text-slate-400 text-sm">
                  {stat.title}
                </p>

                <h3 className="text-3xl font-bold text-white mt-2">
                  {stat.value}
                </h3>
              </div>

              <div
                className="
                w-12
                h-12
                rounded-2xl
                bg-blue-500/10
                border
                border-blue-500/20
                flex
                items-center
                justify-center
                text-blue-400
                "
              >
                <Icon size={22} />
              </div>

            </div>
          </div>
        );
      })}
    </div>
  );
}
