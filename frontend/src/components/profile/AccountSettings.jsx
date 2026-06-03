export default function AccountSettings() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl font-semibold text-white mb-6">
        Account Settings
      </h2>

      <div className="space-y-4">

        <div className="flex items-center justify-between">
          <span className="text-slate-300">
            Google Account
          </span>

          <span className="text-green-400">
            Connected
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-300">
            Email Notifications
          </span>

          <input type="checkbox" defaultChecked />
        </div>

        <div className="flex items-center justify-between">
          <span className="text-slate-300">
            Marketing Emails
          </span>

          <input type="checkbox" />
        </div>

      </div>

    </div>
  );
}
