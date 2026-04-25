"use client";

import { Bell, Search, HelpCircle, Grid3X3, Plus } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function Topbar() {
  return (
    <header className="top-0 z-40 sticky flex justify-between items-center bg-white px-6 border-slate-200 border-b h-16">
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="top-3 left-3 absolute w-4 h-4 text-slate-400" />

          <Input
            placeholder="Search leads, tasks, reports..."
            className="bg-slate-50 pl-10 border-0 rounded-xl h-10"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 px-4 rounded-xl h-10 font-medium text-white text-sm transition-all shadow-sm">
          <Plus className="w-4 h-4" />
          Create New
        </button>

        <div className="bg-slate-200 w-px h-6" />

        <button className="hover:bg-slate-50 p-2 rounded-lg">
          <Bell className="w-5 h-5 text-slate-500" />
        </button>

        <button className="hover:bg-slate-50 p-2 rounded-lg">
          <HelpCircle className="w-5 h-5 text-slate-500" />
        </button>

        <button className="hover:bg-slate-50 p-2 rounded-lg">
          <Grid3X3 className="w-5 h-5 text-slate-500" />
        </button>

        <div className="flex justify-center items-center bg-emerald-700 rounded-full w-9 h-9 font-semibold text-sm text-white shadow-sm">
          CR
        </div>
      </div>
    </header>
  );
}
