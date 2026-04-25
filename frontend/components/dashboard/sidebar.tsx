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
    <aside className="hidden top-0 left-0 z-50 fixed md:flex flex-col bg-white border-slate-200 border-r w-64 h-screen">
      <div className="flex flex-col p-4 h-full">
        {/* Brand */}
        <div className="mb-4 px-4 py-6">
          <h1 className="font-bold text-slate-900 text-xl">ClientRise CRM</h1>

          <p className="mt-1 text-slate-500 text-xs">Enterprise Edition</p>
        </div>

        {/* Menu */}
        <nav className="flex-1 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.title}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all text-sm font-medium
                  ${
                    item.active
                      ? "bg-emerald-50 text-emerald-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                <Icon className="w-5 h-5" />
                {item.title}
              </button>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="space-y-1 pt-4 border-slate-100 border-t">
          <button className="flex items-center gap-3 hover:bg-slate-50 px-4 py-3 rounded-xl w-full font-medium text-slate-600 text-sm">
            <Settings className="w-5 h-5" />
            Settings
          </button>

          <button className="flex items-center gap-3 hover:bg-slate-50 px-4 py-3 rounded-xl w-full font-medium text-slate-600 text-sm">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </aside>
  );
}
