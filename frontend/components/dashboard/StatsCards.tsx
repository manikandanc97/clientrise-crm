// stats cards section

import { statsData } from "@/data/dashboard-data";
import { Users, UserPlus, DollarSign, Clock, TrendingUp, TrendingDown } from "lucide-react";

const iconMap: Record<string, any> = {
  "Total Leads": Users,
  "New Customers": UserPlus,
  "Revenue": DollarSign,
  "Pending Tasks": Clock,
};

const colorMap: Record<string, string> = {
  "Total Leads": "from-blue-500 to-indigo-600",
  "New Customers": "from-emerald-500 to-teal-600",
  "Revenue": "from-amber-500 to-orange-600",
  "Pending Tasks": "from-rose-500 to-red-600",
};

const StatsCards = () => {
  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {statsData.map((item, index) => {
        const Icon = iconMap[item.title] || Users;
        const colorClass = colorMap[item.title] || "from-slate-500 to-slate-600";

        return (
          <div 
            key={index} 
            className="group relative overflow-hidden bg-white p-6 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${colorClass} text-white shadow-lg shadow-current/20 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6" />
              </div>
              
              <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold ${
                item.positive ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
              }`}>
                {item.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                {item.change}
              </div>
            </div>

            <div>
              <p className="text-slate-500 text-sm font-medium mb-1">{item.title}</p>
              <h2 className="font-bold text-slate-900 text-3xl tracking-tight">
                {item.value}
              </h2>
            </div>
            
            {/* Subtle background pattern */}
            <div className="absolute -bottom-2 -right-2 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
              <Icon className="w-24 h-24" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StatsCards;
