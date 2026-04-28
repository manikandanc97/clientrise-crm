"use client";

import { useState } from "react";
import LeadsHeader from "@/components/leads/LeadsHeader";
import LeadFilters from "@/components/leads/LeadFilters";
import LeadsTable from "@/components/leads/LeadsTable";
import { leadsData } from "@/data/leads-data";
import { SearchX, UserPlus, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const LeadsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");

  const filteredLeads = leadsData.filter((lead) => {
    const matchesSearch = 
      lead.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lead.email.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || lead.status.toLowerCase() === statusFilter.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
  };

  return (
    <div className="space-y-6 p-6">
      <LeadsHeader />

      <LeadFilters 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />

      {filteredLeads.length > 0 ? (
        viewMode === "list" ? (
          <LeadsTable leads={filteredLeads} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLeads.map((lead) => (
              <div key={lead.id} className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-md transition-all group">
                 <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center font-bold text-slate-600 shadow-sm group-hover:scale-110 transition-transform">
                      {lead.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{lead.name}</h3>
                      <p className="text-xs text-slate-500">{lead.company}</p>
                    </div>
                 </div>
                 <div className="space-y-2 mb-4">
                    <p className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="text-slate-400">Email:</span> {lead.email}
                    </p>
                    <p className="text-sm text-slate-600 flex items-center gap-2">
                      <span className="text-slate-400">Status:</span> 
                      <span className="font-semibold text-emerald-600">{lead.status}</span>
                    </p>
                 </div>
                 <Button variant="secondary" className="w-full bg-slate-50 hover:bg-slate-100 rounded-xl text-sm font-bold text-slate-700 transition-all h-auto py-2.5">
                   View Details
                 </Button>
              </div>
            ))}
          </div>
        )
      ) : (
        <div className="flex flex-col items-center justify-center py-20 px-6 bg-white rounded-[2.5rem] border border-dashed border-slate-300">
          <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mb-6">
            <SearchX className="w-10 h-10 text-slate-300" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">No leads found</h3>
          <p className="text-slate-500 text-center max-w-sm mb-8 leading-relaxed">
            We couldn't find any leads matching your current search or filter criteria. Try adjusting your search or clear all filters.
          </p>
          <div className="flex items-center gap-4">
            <Button 
              variant="outline" 
              onClick={clearFilters}
              className="flex items-center gap-2 rounded-2xl px-6 py-6 h-auto font-bold text-slate-600 border-slate-200 hover:bg-slate-50 transition-all"
            >
              <XCircle className="w-4 h-4" />
              Clear All Filters
            </Button>
            <Button 
              className="flex items-center gap-2 rounded-2xl px-6 py-6 h-auto font-bold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg shadow-emerald-100 transition-all active:scale-95"
            >
              <UserPlus className="w-4 h-4" />
              Add New Lead
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeadsPage;
