import { Upload } from 'lucide-react';

export default function BrandingSettings() {
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
        Branding
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div
          className="
          h-40
          rounded-3xl
          border-2
          border-dashed
          border-white/10
          flex
          flex-col
          items-center
          justify-center
          text-slate-400
          "
        >
          <Upload size={22} />

          <p className="mt-3">
            Upload Store Logo
          </p>
        </div>

        <div
          className="
          h-40
          rounded-3xl
          border-2
          border-dashed
          border-white/10
          flex
          flex-col
          items-center
          justify-center
          text-slate-400
          "
        >
          <Upload size={22} />

          <p className="mt-3">
            Upload Store Banner
          </p>
        </div>

      </div>
    </div>
  );
}
