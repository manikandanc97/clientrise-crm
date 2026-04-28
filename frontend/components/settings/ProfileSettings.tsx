import { User, Mail, Phone, ShieldCheck, Camera } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

const ProfileSettings = () => {
  return (
    <Card className="bg-white rounded-[2.5rem] border-slate-200/60 shadow-sm overflow-hidden">
      <CardHeader className="p-8 pb-4">
        <CardTitle className="font-bold text-slate-900 text-xl tracking-tight">Profile Information</CardTitle>
        <CardDescription className="text-slate-400 text-sm mt-1">Update your personal details and how others see you.</CardDescription>
      </CardHeader>

      <CardContent className="p-8 pt-4">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="relative group">
            <Avatar className="w-24 h-24 rounded-3xl border-4 border-slate-50 shadow-sm transition-transform group-hover:scale-105">
              <AvatarFallback className="bg-gradient-to-br from-emerald-400 to-teal-500 text-white text-2xl font-bold">
                AU
              </AvatarFallback>
            </Avatar>
            <Button size="icon" className="absolute -bottom-2 -right-2 w-8 h-8 rounded-xl bg-white border border-slate-200 shadow-lg text-slate-500 hover:text-emerald-600 transition-all">
              <Camera className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="space-y-2">
              <Label className="text-slate-500 font-semibold text-xs uppercase tracking-wider ml-1">Full Name</Label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input defaultValue="Admin User" className="bg-slate-50 border-transparent focus:border-emerald-500/30 focus:bg-white pl-11 py-6 rounded-2xl transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-500 font-semibold text-xs uppercase tracking-wider ml-1">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input defaultValue="admin@clientrise.com" className="bg-slate-50 border-transparent focus:border-emerald-500/30 focus:bg-white pl-11 py-6 rounded-2xl transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-500 font-semibold text-xs uppercase tracking-wider ml-1">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input defaultValue="+91 9876543210" className="bg-slate-50 border-transparent focus:border-emerald-500/30 focus:bg-white pl-11 py-6 rounded-2xl transition-all" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-slate-500 font-semibold text-xs uppercase tracking-wider ml-1">Account Role</Label>
              <div className="relative">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input defaultValue="Super Admin" disabled className="bg-slate-100/50 border-transparent pl-11 py-6 rounded-2xl cursor-not-allowed italic text-slate-500" />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileSettings;
