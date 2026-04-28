// recent activity section

import { recentActivities } from "@/data/dashboard-data";
import { User, CheckCircle2, FileText, ArrowRight } from "lucide-react";

const activityIcons: Record<string, any> = {
  "New lead added from website form": User,
  "Quotation sent to premium client": FileText,
  "Payment received successfully": CheckCircle2,
};

const activityColors: Record<string, string> = {
  "New lead added from website form": "bg-blue-50 text-blue-600",
  "Quotation sent to premium client": "bg-amber-50 text-amber-600",
  "Payment received successfully": "bg-emerald-50 text-emerald-600",
};

const RecentActivities = () => {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200/60 shadow-sm h-full flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <h2 className="font-bold text-slate-900 text-xl tracking-tight">Recent Activities</h2>
        <button className="text-emerald-600 text-sm font-semibold hover:underline">View All</button>
      </div>

      <div className="space-y-6 flex-1">
        {recentActivities.map((activity) => {
          const Icon = activityIcons[activity.title] || User;
          const colorClass = activityColors[activity.title] || "bg-slate-50 text-slate-600";

          return (
            <div key={activity.id} className="flex items-start gap-4 group cursor-pointer">
              <div className={`p-3 rounded-2xl ${colorClass} transition-transform group-hover:scale-110`}>
                <Icon className="w-5 h-5" />
              </div>

              <div className="flex-1 pb-4 border-b border-slate-100 group-last:border-none">
                <div className="flex justify-between items-start gap-2">
                  <p className="font-semibold text-slate-800 leading-tight group-hover:text-emerald-700 transition-colors">
                    {activity.title}
                  </p>
                  <ArrowRight className="w-4 h-4 text-slate-300 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                </div>
                <span className="text-slate-400 text-xs mt-1 block">{activity.time}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentActivities;
