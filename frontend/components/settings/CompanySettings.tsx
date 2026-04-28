import { Building2, Hash, Globe, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

const CompanySettings = () => {
  return (
    <Card className="bg-white rounded-[2.5rem] border-slate-200/60 shadow-sm overflow-hidden">
      <CardHeader className="p-8 pb-4">
        <CardTitle className="font-bold text-slate-900 text-xl tracking-tight">Company Profile</CardTitle>
        <CardDescription className="text-slate-400 text-sm mt-1">Manage your organization's business details and location.</CardDescription>
      </CardHeader>

      <CardContent className="p-8 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-slate-500 font-semibold text-xs uppercase tracking-wider ml-1">Company Name</Label>
            <div className="relative">
              <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input defaultValue="ClientRise CRM" className="bg-slate-50 border-transparent focus:border-emerald-500/30 focus:bg-white pl-11 py-6 rounded-2xl transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-500 font-semibold text-xs uppercase tracking-wider ml-1">Business ID / GST</Label>
            <div className="relative">
              <Hash className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input defaultValue="GST123456789" className="bg-slate-50 border-transparent focus:border-emerald-500/30 focus:bg-white pl-11 py-6 rounded-2xl transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-500 font-semibold text-xs uppercase tracking-wider ml-1">Timezone</Label>
            <div className="relative">
              <Select defaultValue="ist">
                <SelectTrigger className="bg-slate-50 border-transparent focus:ring-emerald-500/30 focus:bg-white pl-11 py-6 rounded-2xl transition-all h-auto">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2">
                    <Globe className="w-4 h-4 text-slate-400" />
                  </div>
                  <SelectValue placeholder="Select Timezone" />
                </SelectTrigger>
                <SelectContent className="rounded-xl border-slate-200 shadow-xl">
                  <SelectItem value="ist">Asia/Kolkata (IST)</SelectItem>
                  <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                  <SelectItem value="est">America/New_York (EST)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-500 font-semibold text-xs uppercase tracking-wider ml-1">Business Address</Label>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input defaultValue="Coimbatore, Tamil Nadu" className="bg-slate-50 border-transparent focus:border-emerald-500/30 focus:bg-white pl-11 py-6 rounded-2xl transition-all" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompanySettings;
