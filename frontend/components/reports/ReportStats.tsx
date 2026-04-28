import { DollarSign, UserPlus, Briefcase, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ReportStats = () => {
  const stats = [
    {
      title: "Monthly Revenue",
      value: "$48,200",
      icon: DollarSign,
      color: "blue",
      change: "+12%",
      positive: true,
    },
    {
      title: "Lead Conversion",
      value: "68%",
      icon: UserPlus,
      color: "amber",
      change: "+5%",
      positive: true,
    },
    {
      title: "Closed Deals",
      value: "42",
      icon: Briefcase,
      color: "emerald",
      change: "+18%",
      positive: true,
    },
    {
      title: "Growth Rate",
      value: "+18%",
      icon: TrendingUp,
      color: "indigo",
      change: "+2%",
      positive: true,
    },
  ];

  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index} className="bg-white rounded-[2rem] border-slate-200/60 shadow-sm overflow-hidden hover:shadow-md transition-all group">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110
                  ${item.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                    item.color === 'amber' ? 'bg-amber-50 text-amber-600' : 
                    item.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 
                    'bg-indigo-50 text-indigo-600'}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <Badge variant="outline" className={`border-none font-bold text-xs ${item.positive ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'}`}>
                  {item.change}
                </Badge>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.title}</p>
                <h2 className="mt-1 text-2xl font-bold text-slate-900 leading-none">
                  {item.value}
                </h2>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default ReportStats;
