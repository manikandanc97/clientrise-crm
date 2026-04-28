// search + filters

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

interface LeadFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  viewMode: "list" | "grid";
  setViewMode: (mode: "list" | "grid") => void;
}

const LeadFilters = ({
  searchQuery,
  setSearchQuery,
  statusFilter,
  setStatusFilter,
  viewMode,
  setViewMode,
}: LeadFiltersProps) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-3xl border border-slate-200/60 shadow-sm">
      <div className="relative flex-1 w-full md:max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 z-10" />
        <Input
          placeholder="Search by name, company, or email..."
          className="w-full bg-slate-50 pl-11 pr-4 py-6 border-transparent focus:border-emerald-500/30 focus:bg-white rounded-2xl outline-none transition-all duration-300"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-full md:w-48 bg-white pl-10 pr-4 py-6 border-slate-200 rounded-2xl focus:ring-emerald-500/30 font-medium text-slate-700 text-sm h-auto">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <SlidersHorizontal className="w-4 h-4 text-slate-400" />
              </div>
              <SelectValue placeholder="All Statuses" />
            </SelectTrigger>
            <SelectContent className="rounded-xl border-slate-200 shadow-xl">
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="contacted">Contacted</SelectItem>
              <SelectItem value="proposal">Proposal Sent</SelectItem>
              <SelectItem value="won">Won</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center bg-slate-100 p-1 rounded-2xl h-full shadow-inner border border-slate-200/30">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setViewMode("list")}
            className={`h-11 w-11 rounded-xl transition-all duration-300 ${
              viewMode === "list" 
                ? "bg-white shadow-md text-emerald-600 scale-105" 
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <List className="w-5 h-5" />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setViewMode("grid")}
            className={`h-11 w-11 rounded-xl transition-all duration-300 ${
              viewMode === "grid" 
                ? "bg-white shadow-md text-emerald-600 scale-105" 
                : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <LayoutGrid className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LeadFilters;
