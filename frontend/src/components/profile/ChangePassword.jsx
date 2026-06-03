export default function ChangePassword() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl font-semibold text-white mb-6">
        Security
      </h2>

      <div className="space-y-4">

        <input
          type="password"
          placeholder="Current Password"
          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white"
        />

        <input
          type="password"
          placeholder="New Password"
          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white"
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white"
        />

        <button className="w-full py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium">
          Update Password
        </button>

      </div>

    </div>
  );
}
