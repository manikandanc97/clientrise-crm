import { Plus, Download, Filter, MoreHorizontal, DollarSign, Users, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const PipelineHeader = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Sales Pipeline</h1>
          <p className="text-slate-500 mt-1">Manage and track your deals across different stages.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="rounded-2xl border-slate-200 h-11 px-5 font-semibold text-slate-600 hover:bg-slate-50">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-100 h-11 px-5 font-bold transition-all active:scale-95">
            <Plus className="w-4 h-4 mr-2" />
            Add New Deal
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="bg-white rounded-[2rem] border-slate-200/60 shadow-sm overflow-hidden hover:shadow-md transition-all">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Value</p>
              <h3 className="text-xl font-bold text-slate-900">$40,200</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-[2rem] border-slate-200/60 shadow-sm overflow-hidden hover:shadow-md transition-all">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Active Deals</p>
              <h3 className="text-xl font-bold text-slate-900">12 Deals</h3>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white rounded-[2rem] border-slate-200/60 shadow-sm overflow-hidden hover:shadow-md transition-all">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Win Rate</p>
              <h3 className="text-xl font-bold text-slate-900">68%</h3>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PipelineHeader;
