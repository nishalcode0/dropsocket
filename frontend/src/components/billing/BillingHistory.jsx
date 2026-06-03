const invoices = [
  {
    id: "INV-001",
    date: "May 2026",
    amount: "₹299",
    status: "Paid",
  },
  {
    id: "INV-002",
    date: "Apr 2026",
    amount: "₹299",
    status: "Paid",
  },
];

export default function BillingHistory() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <h2 className="text-xl font-semibold text-white mb-6">
        Billing History
      </h2>

      <div className="space-y-4">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex justify-between items-center border border-white/10 rounded-xl p-4"
          >
            <div>
              <p className="text-white font-medium">
                {invoice.id}
              </p>

              <p className="text-slate-400 text-sm">
                {invoice.date}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-white">
                {invoice.amount}
              </span>

              <span className="text-green-400">
                {invoice.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
