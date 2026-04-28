"use client";

import { Bell, Search, HelpCircle, Grid3X3, Plus } from "lucide-react";

import { Input } from "@/components/ui/input";

export default function Topbar() {
  return (
    <header className="top-0 z-40 sticky flex justify-between items-center bg-white/70 backdrop-blur-md px-8 border-slate-200/60 border-b h-20 transition-all">
      {/* Search */}
      <div className="flex-1 max-w-lg">
        <div className="relative group">
          <Search className="top-1/2 left-4 absolute w-4 h-4 text-slate-400 -translate-y-1/2 transition-colors group-focus-within:text-emerald-500" />

          <Input
            placeholder="Search leads, tasks, reports..."
            className="bg-slate-100/50 hover:bg-slate-100 focus:bg-white pl-11 border-transparent focus:border-emerald-500/30 rounded-2xl h-11 transition-all duration-300"
          />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 px-5 rounded-2xl h-11 font-semibold text-white text-sm transition-all shadow-md shadow-emerald-200 active:scale-95">
          <Plus className="w-4 h-4" />
          Create New
        </button>

        <div className="bg-slate-200 mx-2 w-px h-8" />

        <div className="flex items-center gap-2">
          <button className="relative hover:bg-slate-100 p-2.5 rounded-xl transition-colors group">
            <Bell className="w-5 h-5 text-slate-500 transition-colors group-hover:text-slate-900" />
            <span className="top-2.5 right-2.5 absolute bg-red-500 border-2 border-white rounded-full w-2.5 h-2.5" />
          </button>

          <button className="hover:bg-slate-100 p-2.5 rounded-xl transition-colors group">
            <HelpCircle className="w-5 h-5 text-slate-500 transition-colors group-hover:text-slate-900" />
          </button>

          <button className="hover:bg-slate-100 p-2.5 rounded-xl transition-colors group">
            <Grid3X3 className="w-5 h-5 text-slate-500 transition-colors group-hover:text-slate-900" />
          </button>
        </div>

        <div className="bg-slate-200 mx-2 w-px h-8" />

        <button className="flex items-center gap-3 hover:bg-slate-50 p-1 pr-3 rounded-2xl transition-all group">
          <div className="flex justify-center items-center bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl w-10 h-10 font-bold text-sm text-white shadow-sm">
            CR
          </div>
          <div className="md:block hidden text-left">
            <p className="font-semibold text-slate-900 text-sm leading-none">Admin User</p>
            <p className="mt-1 text-slate-400 text-xs">Super Admin</p>
          </div>
        </button>
      </div>
    </header>
  );
}
