import DashboardLayout from "../../components/dashboard/DashboardLayout";

import ProfileForm from "../../components/profile/ProfileForm";
import AccountSettings from "../../components/profile/AccountSettings";
import ChangePassword from "../../components/profile/ChangePassword";

export default function Profile() {
  return (
    <DashboardLayout>
      <div className="space-y-8">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Profile
          </h1>

          <p className="text-slate-400 mt-2">
            Manage your account settings and personal information.
          </p>
        </div>

        <ProfileForm />

        <div className="grid lg:grid-cols-2 gap-6">
          <AccountSettings />
          <ChangePassword />
        </div>

      </div>
    </DashboardLayout>
  );
}
