"use client";

import {
  LayoutDashboard,
  Users,
  UserRound,
  CheckSquare,
  KanbanSquare,
  FileText,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    title: "Leads",
    icon: Users,
  },
  {
    title: "Customers",
    icon: UserRound,
  },
  {
    title: "Tasks",
    icon: CheckSquare,
  },
  {
    title: "Pipeline",
    icon: KanbanSquare,
  },
  {
    title: "Quotations",
    icon: FileText,
  },
  {
    title: "Reports",
    icon: BarChart3,
  },
];

export default function Sidebar() {
  return (
    <aside className="hidden top-0 left-0 z-50 fixed md:flex flex-col bg-white/80 backdrop-blur-xl border-slate-200/60 border-r w-64 h-screen transition-all">
      <div className="flex flex-col p-4 h-full">
        {/* Brand */}
        <div className="mb-8 px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl w-10 h-10 text-white shadow-lg shadow-emerald-200/50">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <div>
              <h1 className="bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 font-bold text-transparent text-xl tracking-tight">
                ClientRise
              </h1>
              <p className="text-slate-400 text-[10px] uppercase tracking-widest font-semibold">
                Enterprise CRM
              </p>
            </div>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium group
                  ${
                    item.active
                      ? "bg-emerald-50 text-emerald-700 shadow-sm shadow-emerald-100/50"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                <Icon className={`w-5 h-5 transition-colors ${item.active ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-600"}`} />
                {item.title}
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="space-y-1 pt-4 border-slate-100 border-t">
          <button className="flex items-center gap-3 hover:bg-slate-50 px-4 py-3 rounded-xl w-full font-medium text-slate-500 text-sm transition-all group">
            <Settings className="group-hover:rotate-45 w-5 h-5 text-slate-400 transition-transform duration-500 group-hover:text-slate-600" />
            Settings
          </button>

          <button className="flex items-center gap-3 hover:bg-red-50 px-4 py-3 rounded-xl w-full font-medium text-slate-500 hover:text-red-600 text-sm transition-all group">
            <LogOut className="w-5 h-5 text-slate-400 transition-colors group-hover:text-red-500" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
