export default function StoreSettingsForm() {
  return (
    <div
      className="
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      "
    >
      <h2 className="text-xl font-semibold text-white mb-6">
        General Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Store Name
          </label>

          <input
            type="text"
            defaultValue="DropSocket Creator Store"
            className="
            w-full
            rounded-2xl
            bg-white/5
            border
            border-white/10
            px-4
            py-3
            text-white
            outline-none
            "
          />
        </div>

        <div>
          <label className="block text-sm text-slate-400 mb-2">
            Store URL
          </label>

          <input
            type="text"
            defaultValue="dropsocket.in/store/nishal"
            className="
            w-full
            rounded-2xl
            bg-white/5
            border
            border-white/10
            px-4
            py-3
            text-white
            outline-none
            "
          />
        </div>

      </div>

      <div className="mt-5">
        <label className="block text-sm text-slate-400 mb-2">
          Description
        </label>

        <textarea
          rows="4"
          defaultValue="Sell templates, ebooks and digital products."
          className="
          w-full
          rounded-2xl
          bg-white/5
          border
          border-white/10
          px-4
          py-3
          text-white
          outline-none
          resize-none
          "
        />
      </div>

      <div className="mt-5">
        <label className="block text-sm text-slate-400 mb-2">
          Support Email
        </label>

        <input
          type="email"
          defaultValue="support@dropsocket.in"
          className="
          w-full
          rounded-2xl
          bg-white/5
          border
          border-white/10
          px-4
          py-3
          text-white
          outline-none
          "
        />
      </div>

      <button
        className="
        mt-6
        px-5
        py-3
        rounded-2xl
        bg-blue-500
        text-white
        hover:bg-blue-600
        transition-all
        "
      >
        Save Changes
      </button>
    </div>
  );
}
