import { Save, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

const SettingsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Account Settings</h1>
        <p className="text-slate-500 mt-1">Manage your profile, company and system preferences professionally.</p>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto">
        <Button className="flex-1 md:flex-none rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-100 h-11 px-5 font-bold transition-all active:scale-95">
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default SettingsHeader;
