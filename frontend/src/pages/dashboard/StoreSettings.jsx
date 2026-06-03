import DashboardLayout from '../../components/dashboard/DashboardLayout';

import StoreSettingsForm from '../../components/store/StoreSettingsForm';
import BrandingSettings from '../../components/store/BrandingSettings';
import ThemeCustomizer from '../../components/store/ThemeCustomizer';
import StorePreview from '../../components/store/StorePreview';

export default function StoreSettings() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Store Settings
          </h1>

          <p className="text-slate-400 mt-2">
            Customize your storefront, branding and customer experience.
          </p>
        </div>

        <StoreSettingsForm />

        <BrandingSettings />

        <ThemeCustomizer />

        <StorePreview />

      </div>
    </DashboardLayout>
  );
}
