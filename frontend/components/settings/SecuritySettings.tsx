import { Lock, KeyRound, ShieldCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SecuritySettings = () => {
  return (
    <Card className="bg-white rounded-[2.5rem] border-slate-200/60 shadow-sm overflow-hidden h-full">
      <CardHeader className="p-8 pb-4">
        <CardTitle className="font-bold text-slate-900 text-xl tracking-tight">Security & Authentication</CardTitle>
        <CardDescription className="text-slate-400 text-sm mt-1">Keep your account secure by updating your password regularly.</CardDescription>
      </CardHeader>

      <CardContent className="p-8 pt-4 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-slate-500 font-semibold text-xs uppercase tracking-wider ml-1">Current Password</Label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input type="password" placeholder="••••••••" className="bg-slate-50 border-transparent focus:border-emerald-500/30 focus:bg-white pl-11 py-6 rounded-2xl transition-all" />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-slate-500 font-semibold text-xs uppercase tracking-wider ml-1">New Password</Label>
            <div className="relative">
              <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input type="password" placeholder="••••••••" className="bg-slate-50 border-transparent focus:border-emerald-500/30 focus:bg-white pl-11 py-6 rounded-2xl transition-all" />
            </div>
          </div>
        </div>

        <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 mt-0.5" />
          <div>
            <p className="text-emerald-800 text-xs font-bold">Password Security</p>
            <p className="text-emerald-600 text-[10px] mt-1 leading-relaxed">
              Use at least 8 characters with a mix of letters, numbers, and symbols for maximum protection.
            </p>
          </div>
        </div>

        <Button className="w-full rounded-2xl bg-slate-900 hover:bg-slate-800 text-white h-11 font-bold transition-all active:scale-95">
          Update Password
        </Button>
      </CardContent>
    </Card>
  );
};

export default SecuritySettings;
