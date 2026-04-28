import { Search, SlidersHorizontal, LayoutGrid, List } from "lucide-react";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const QuotationFilters = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-slate-200/60 shadow-sm">
      <div className="relative flex-1 w-full md:max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
        <Input
          placeholder="Search by quote #, client, or project..."
          className="w-full bg-slate-50 pl-11 pr-4 py-6 border-transparent focus:border-emerald-500/30 focus:bg-white rounded-2xl outline-none transition-all duration-300"
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none">
          <Select defaultValue="all">
            <SelectTrigger className="w-full md:w-48 bg-white pl-10 pr-4 py-6 border-slate-200 rounded-2xl focus:ring-emerald-500/30 font-medium text-slate-700 text-sm h-auto text-left">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
              </div>
              <SelectValue placeholder="All Status" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-slate-200 shadow-xl">
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="approved">Approved</SelectItem>
              <SelectItem value="rejected">Rejected</SelectItem>
              <SelectItem value="expired">Expired</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center bg-slate-100 p-1 rounded-2xl h-full shadow-inner border border-slate-200/30">
          <Button variant="ghost" size="icon" className="h-11 w-11 rounded-xl bg-white shadow-md text-emerald-600 scale-105 transition-all">
            <List className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-11 w-11 rounded-xl text-slate-400 hover:text-slate-600 transition-all">
            <LayoutGrid className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuotationFilters;
