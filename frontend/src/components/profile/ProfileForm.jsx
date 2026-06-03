export default function ProfileForm() {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">

      <h2 className="text-xl font-semibold text-white mb-6">
        Personal Information
      </h2>

      <div className="grid md:grid-cols-2 gap-4">

        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Full Name
          </label>

          <input
            type="text"
            defaultValue="Nishal"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white"
          />
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Email Address
          </label>

          <input
            type="email"
            defaultValue="nishal@example.com"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white"
          />
        </div>

      </div>

      <button className="mt-6 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium">
        Save Changes
      </button>

    </div>
  );
}
