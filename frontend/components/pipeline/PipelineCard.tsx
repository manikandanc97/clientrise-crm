import { PipelineLeadType } from "@/types/pipeline";
import { MoreHorizontal, Calendar, DollarSign, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Props {
  item: PipelineLeadType;
}

const PipelineCard = ({ item }: Props) => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all group cursor-grab active:cursor-grabbing">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{item.name}</h3>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-slate-500 mb-4">{item.company}</p>

      <div className="flex flex-col gap-2 mb-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
          <div className="w-6 h-6 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600">
            <DollarSign className="w-3 h-3" />
          </div>
          {item.value}
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
          <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center text-slate-400">
            <Calendar className="w-3 h-3" />
          </div>
          {item.followUp}
        </div>
      </div>

      <div className="flex justify-between items-center pt-3 border-t border-slate-50">
        <div className="flex items-center gap-2">
           <Avatar className="w-6 h-6 rounded-lg border border-white shadow-sm">
             <AvatarFallback className="bg-slate-100 text-[10px] font-bold text-slate-600">
               {item.assignedTo.split(' ').map(n => n[0]).join('')}
             </AvatarFallback>
           </Avatar>
           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.assignedTo}</span>
        </div>
        <Badge variant="outline" className="text-[10px] bg-slate-50 border-none text-slate-500 rounded-lg">High</Badge>
      </div>
    </div>
  );
};

export default PipelineCard;
