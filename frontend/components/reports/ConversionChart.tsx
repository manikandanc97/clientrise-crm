"use client";

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";
import { MoreHorizontal } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const data = [
  { name: "Mon", value: 45 },
  { name: "Tue", value: 52 },
  { name: "Wed", value: 38 },
  { name: "Thu", value: 65 },
  { name: "Fri", value: 48 },
  { name: "Sat", value: 25 },
  { name: "Sun", value: 32 },
];

const COLORS = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'];

const ConversionChart = () => {
  return (
    <Card className="bg-white rounded-[2.5rem] border-slate-200/60 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between p-8 pb-4">
        <div className="space-y-1">
          <CardTitle className="font-bold text-slate-900 text-xl tracking-tight">Lead Conversion</CardTitle>
          <CardDescription className="text-slate-400 text-sm mt-1">Weekly conversion percentage</CardDescription>
        </div>
        
        <Button variant="ghost" size="icon" className="rounded-xl transition-colors">
          <MoreHorizontal className="w-5 h-5 text-slate-400" />
        </Button>
      </CardHeader>

      <CardContent className="p-8 pt-0">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
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
                cursor={{ fill: '#f8fafc' }}
                contentStyle={{ 
                  borderRadius: '16px', 
                  border: 'none', 
                  boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                  padding: '12px'
                }} 
              />
              <Bar 
                dataKey="value" 
                radius={[6, 6, 0, 0]}
                barSize={32}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversionChart;
