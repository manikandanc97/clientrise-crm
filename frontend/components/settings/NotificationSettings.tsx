import { Bell, Mail, Smartphone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

const NotificationSettings = () => {
  return (
    <Card className="bg-white rounded-[2.5rem] border-slate-200/60 shadow-sm overflow-hidden">
      <CardHeader className="p-8 pb-4">
        <CardTitle className="font-bold text-slate-900 text-xl tracking-tight">Notifications</CardTitle>
        <CardDescription className="text-slate-400 text-sm mt-1">Control how you receive alerts and updates.</CardDescription>
      </CardHeader>

      <CardContent className="p-8 pt-4 space-y-6">
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-colors hover:bg-white hover:border-emerald-200/50 group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <Label className="text-sm font-bold text-slate-700 cursor-pointer">Email Alerts</Label>
              <p className="text-[10px] text-slate-400">Receive reports via email</p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>

        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-colors hover:bg-white hover:border-emerald-200/50 group">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-emerald-600 transition-colors">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <Label className="text-sm font-bold text-slate-700 cursor-pointer">Push Notifications</Label>
              <p className="text-[10px] text-slate-400">Real-time browser alerts</p>
            </div>
          </div>
          <Switch defaultChecked />
        </div>
      </CardContent>
    </Card>
  );
};

export default NotificationSettings;
