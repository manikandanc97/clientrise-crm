// settings page

import SettingsHeader from "@/components/settings/SettingsHeader";
import ProfileSettings from "@/components/settings/ProfileSettings";
import CompanySettings from "@/components/settings/CompanySettings";
import SecuritySettings from "@/components/settings/SecuritySettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import ThemeSettings from "@/components/settings/ThemeSettings";

const SettingsPage = () => {
  return (
    <div className="space-y-6 p-6">
      <SettingsHeader />

      <ProfileSettings />

      <CompanySettings />

      <div className="gap-6 grid grid-cols-1 xl:grid-cols-2">
        <SecuritySettings />
        <div className="space-y-6">
          <NotificationSettings />
          <ThemeSettings />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
