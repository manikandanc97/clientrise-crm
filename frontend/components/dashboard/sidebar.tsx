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
    href: "/dashboard",
    active: true,
  },
  {
    title: "Leads",
    icon: Users,
    href: "/leads",
  },
  {
    title: "Customers",
    icon: UserRound,
    href: "/customers",
  },
  {
    title: "Tasks",
    icon: CheckSquare,
    href: "/tasks",
  },
  {
    title: "Pipeline",
    icon: KanbanSquare,
    href: "/pipeline",
  },
  {
    title: "Quotations",
    icon: FileText,
    href: "/quotations",
  },
  {
    title: "Reports",
    icon: BarChart3,
    href: "/reports",
  },
];

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logoutUser } from "@/lib/api/auth";

import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = () => {
    logoutUser();
    router.push("/login");
  };

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
            const isActive = pathname === item.href || (item.href === "/dashboard" && pathname === "/dashboard");

            return (
              <Link
                key={item.title}
                href={item.href || "#"}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium group
                  ${
                    isActive
                      ? "bg-emerald-50 text-emerald-700 shadow-sm shadow-emerald-100/50"
                      : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                <Icon className={`w-5 h-5 transition-colors ${isActive ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-600"}`} />
                {item.title}
              </Link>
            );
          })}
        </nav>

        {/* Bottom */}
        <div className="space-y-1 pt-4 border-slate-100 border-t">
          <Link
            href="/settings"
            className={`flex items-center gap-3 px-4 py-3 rounded-xl w-full font-medium text-sm transition-all group
              ${pathname === "/settings" 
                ? "bg-emerald-50 text-emerald-700 shadow-sm shadow-emerald-100/50" 
                : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"}`}
          >
            <Settings className={`group-hover:rotate-45 w-5 h-5 transition-all duration-500 ${pathname === "/settings" ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-600"}`} />
            Settings
          </Link>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <button className="flex items-center gap-3 hover:bg-red-50 px-4 py-3 rounded-xl w-full font-medium text-slate-500 hover:text-red-600 text-sm transition-all group">
                <LogOut className="w-5 h-5 text-slate-400 transition-colors group-hover:text-red-500" />
                Logout
              </button>
            </AlertDialogTrigger>
            <AlertDialogContent className="rounded-[2rem] border-slate-200/60 bg-white/95 backdrop-blur-xl shadow-2xl">
              <AlertDialogHeader>
                <AlertDialogTitle className="text-2xl font-bold text-slate-900 tracking-tight">Confirm Logout</AlertDialogTitle>
                <AlertDialogDescription className="text-slate-500 mt-2">
                  Are you sure you want to log out? You will need to sign in again to access your CRM dashboard.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="mt-6 gap-3 sm:gap-0">
                <AlertDialogCancel className="rounded-2xl border-slate-200 h-11 px-6 font-bold text-slate-600 hover:bg-slate-50 transition-all">Cancel</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={handleLogout}
                  className="rounded-2xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white shadow-lg shadow-red-100 h-11 px-6 font-bold transition-all active:scale-95 border-none"
                >
                  Logout Now
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </aside>
  );
}
