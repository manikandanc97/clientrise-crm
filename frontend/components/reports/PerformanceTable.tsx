import { performanceData } from "@/data/reports-data";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, TrendingUp, Trophy } from "lucide-react";

const PerformanceTable = () => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
      <div className="p-8 pb-4 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-slate-900 text-xl tracking-tight">Team Performance</h2>
          <p className="text-slate-400 text-sm mt-1">Top performing sales representatives</p>
        </div>
        <Trophy className="w-6 h-6 text-amber-400" />
      </div>

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-slate-100">
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Team Member</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Deals Closed</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Revenue Generated</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Conversion</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Trend</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {performanceData.map((item) => (
            <TableRow key={item.id} className="group hover:bg-slate-50/50 transition-colors border-slate-50">
              <TableCell className="px-8 py-5">
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 rounded-2xl border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-gradient-to-br from-slate-100 to-slate-200 font-bold text-slate-600 text-xs">
                      {item.name.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <p className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{item.name}</p>
                </div>
              </TableCell>

              <TableCell className="px-8 py-5 font-semibold text-slate-600">{item.dealsClosed} Deals</TableCell>

              <TableCell className="px-8 py-5">
                <span className="font-bold text-slate-900">{item.revenue}</span>
              </TableCell>

              <TableCell className="px-8 py-5">
                <Badge variant="outline" className="border-none bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider">
                  {item.conversionRate}
                </Badge>
              </TableCell>

              <TableCell className="px-8 py-5 text-right">
                <div className="flex items-center justify-end gap-1 text-emerald-500 font-bold text-sm">
                  <TrendingUp className="w-4 h-4" />
                  Stable
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PerformanceTable;
