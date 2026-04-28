import { PipelineLeadType } from "@/types/pipeline";
import PipelineCard from "./PipelineCard";
import { Plus, MoreHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Props {
  title: string;
  items: PipelineLeadType[];
}

const PipelineColumn = ({ title, items }: Props) => {
  return (
    <div className="flex flex-col bg-slate-100/40 rounded-[2.5rem] min-w-[320px] max-w-[320px] h-full border border-slate-200/40 pb-4 shadow-inner">
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h2 className="font-bold text-slate-900">{title}</h2>
          <Badge variant="secondary" className="bg-white text-slate-500 border-slate-200 shadow-sm rounded-full h-6 px-2 min-w-[24px] justify-center">
            {items.length}
          </Badge>
        </div>
        <button className="text-slate-400 hover:text-slate-600">
          <MoreHorizontal className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 px-4 space-y-4 overflow-y-auto scrollbar-hide">
        {items.map((item) => (
          <PipelineCard key={item.id} item={item} />
        ))}
        
        <button className="w-full py-4 rounded-2xl border-2 border-dashed border-slate-200 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all flex items-center justify-center gap-2 group">
          <Plus className="w-4 h-4 group-hover:scale-125 transition-transform" />
          <span className="text-sm font-bold">Add Lead</span>
        </button>
      </div>
    </div>
  );
};

export default PipelineColumn;
