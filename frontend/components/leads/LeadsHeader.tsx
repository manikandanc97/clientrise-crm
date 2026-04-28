// leads page header

import { Users, UserPlus, Filter, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const LeadsHeader = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-bold text-slate-900 text-3xl tracking-tight">Leads Management</h1>
          <p className="mt-1 text-slate-500">
            Track and manage your potential business opportunities
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="flex items-center gap-2 bg-white hover:bg-slate-50 px-4 py-2.5 rounded-xl border-slate-200 font-semibold text-slate-700 text-sm transition-all shadow-sm">
            <Download className="w-4 h-4" />
            Export
          </Button>
          
          <Button className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all shadow-lg shadow-emerald-200 active:scale-95">
            <UserPlus className="w-4 h-4" />
            Add New Lead
          </Button>
        </div>
      </div>

      {/* Quick Stats Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-white rounded-3xl border-slate-200/60 shadow-sm transition-all hover:shadow-md">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Total Leads</p>
              <h3 className="text-2xl font-bold text-slate-900">1,248</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-3xl border-slate-200/60 shadow-sm transition-all hover:shadow-md">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-emerald-50 text-emerald-600">
              <UserPlus className="w-6 h-6" />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">New This Month</p>
              <h3 className="text-2xl font-bold text-slate-900">320</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-3xl border-slate-200/60 shadow-sm transition-all hover:shadow-md">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-amber-50 text-amber-600">
              <Filter className="w-6 h-6" />
            </div>
            <div>
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-wider">Active Deals</p>
              <h3 className="text-2xl font-bold text-slate-900">84</h3>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeadsHeader;
