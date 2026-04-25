"use client";

import ProtectedRoute from "@/components/auth/protected-route";
import Sidebar from "@/components/dashboard/sidebar";
import Topbar from "@/components/dashboard/topbar";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <div className="flex bg-slate-100 min-h-screen">
        <Sidebar />

        <div className="flex flex-col flex-1 md:pl-64">
          <Topbar />

          <main className="p-8">
            <div className="bg-white shadow-sm p-8 border border-slate-200 rounded-3xl">
              <h2 className="font-bold text-slate-900 text-2xl">
                Welcome to ClientRise Dashboard 🔥
              </h2>

              <p className="mt-2 text-slate-500">
                Premium CRM system for modern business growth.
              </p>
            </div>
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
