"use client";

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { MoreHorizontal, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const data = [
  { name: "Jan", revenue: 32000 },
  { name: "Feb", revenue: 38000 },
  { name: "Mar", revenue: 35000 },
  { name: "Apr", revenue: 42000 },
  { name: "May", revenue: 48000 },
  { name: "Jun", revenue: 45000 },
];

const RevenueChart = () => {
  return (
    <Card className="bg-white rounded-[2.5rem] border-slate-200/60 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between p-8 pb-4">
        <div className="space-y-1">
          <CardTitle className="font-bold text-slate-900 text-xl tracking-tight">Revenue Analysis</CardTitle>
          <CardDescription className="text-slate-400 text-sm mt-1">Monthly revenue trends for 2024</CardDescription>
        </div>
        
        <Button variant="ghost" size="icon" className="rounded-xl transition-colors">
          <MoreHorizontal className="w-5 h-5 text-slate-400" />
        </Button>
      </CardHeader>

      <CardContent className="p-8 pt-0">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#94a3b8', fontSize: 12 }} 
              />
              <Tooltip 
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: 'none', 
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  padding: '12px'
                }} 
              />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stroke="#0ea5e9" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorRevenue)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueChart;
