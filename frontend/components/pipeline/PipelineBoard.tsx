import { pipelineData } from "@/data/pipeline-data";
import PipelineColumn from "./PipelineColumn";

const stages = ["New Lead", "Contacted", "Proposal Sent", "Won", "Lost"];

const PipelineBoard = () => {
  return (
    <div className="relative">
      <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide -mx-6 px-6 h-[calc(100vh-280px)] min-h-[600px]">
        {stages.map((stage) => {
          const filtered = pipelineData.filter((item) => item.stage === stage);

          return <PipelineColumn key={stage} title={stage} items={filtered} />;
        })}
        
        {/* Add Stage Placeholder */}
        <div className="min-w-[320px] rounded-[2.5rem] border-2 border-dashed border-slate-200 bg-slate-50/50 flex flex-col items-center justify-center gap-3 text-slate-400 hover:text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50/50 transition-all cursor-pointer group">
           <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform">
             <span className="text-2xl">+</span>
           </div>
           <span className="font-bold">Add Stage</span>
        </div>
      </div>
      
      {/* Decorative Gradient Fades for Scroll */}
      <div className="absolute top-0 right-0 bottom-8 w-20 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-0 bottom-8 w-20 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
    </div>
  );
};

export default PipelineBoard;
