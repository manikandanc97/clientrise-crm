import { Users, Star, CreditCard, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const CustomerStats = () => {
  const stats = [
    {
      title: "Total Customers",
      value: "1,248",
      icon: Users,
      color: "blue",
      change: "+12%",
      positive: true,
    },
    {
      title: "Premium Clients",
      value: "320",
      icon: Star,
      color: "amber",
      change: "+5%",
      positive: true,
    },
    {
      title: "Monthly Revenue",
      value: "$42,800",
      icon: CreditCard,
      color: "emerald",
      change: "+18%",
      positive: true,
    },
  ];

  return (
    <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index} className="bg-white rounded-[2rem] border-slate-200/60 shadow-sm overflow-hidden hover:shadow-md transition-all group">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110
                  ${item.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                    item.color === 'amber' ? 'bg-amber-50 text-amber-600' : 
                    'bg-emerald-50 text-emerald-600'}`}>
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

export default CustomerStats;
