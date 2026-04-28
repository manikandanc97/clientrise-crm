// welcome hero section

import { Sparkles, ArrowUpRight } from "lucide-react";

const WelcomeHero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-10 rounded-[2.5rem] text-white shadow-2xl shadow-slate-200">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            System Live & Optimized
          </div>
          
          <h1 className="font-bold text-white text-4xl md:text-5xl leading-tight tracking-tight mb-4">
            Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Admin</span> 🔥
          </h1>

          <p className="max-w-xl text-slate-300 text-lg leading-relaxed">
            Your business grew by <span className="text-emerald-400 font-semibold">+12.5%</span> this week. 
            Check your latest leads and conversion reports below.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <button className="bg-white text-slate-900 hover:bg-slate-50 px-8 py-4 rounded-2xl font-bold text-sm transition-all shadow-lg active:scale-95 flex items-center gap-2 group">
            View Analytics
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-2xl font-bold text-sm transition-all border border-white/10 active:scale-95">
            Manage Leads
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHero;
