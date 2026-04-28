import { Plus, Download, FileText, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const QuotationsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Quotations</h1>
        <p className="text-slate-500 mt-1">Create, manage and track all client quotations professionally.</p>
      </div>
      <div className="flex items-center gap-3 w-full md:w-auto">
        <Button variant="outline" className="flex-1 md:flex-none rounded-2xl border-slate-200 h-11 px-5 font-semibold text-slate-600 hover:bg-slate-50 transition-all">
          <Download className="w-4 h-4 mr-2" />
          Export
        </Button>
        <Button className="flex-1 md:flex-none rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-100 h-11 px-5 font-bold transition-all active:scale-95">
          <Plus className="w-4 h-4 mr-2" />
          Create Quote
        </Button>
      </div>
    </div>
  );
};

export default QuotationsHeader;
