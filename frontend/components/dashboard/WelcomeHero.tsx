// welcome hero section

import { Sparkles, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const WelcomeHero = () => {
  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl shadow-slate-200 p-10 rounded-[2.5rem] overflow-hidden text-white">
      {/* Decorative elements */}
      <div className="top-0 right-0 absolute bg-emerald-500/10 blur-[100px] rounded-full w-64 h-64 -translate-y-1/2 translate-x-1/2" />
      <div className="bottom-0 left-0 absolute bg-teal-500/10 blur-[100px] rounded-full w-64 h-64 -translate-x-1/2 translate-y-1/2" />

      <div className="z-10 relative flex md:flex-row flex-col justify-between md:items-center gap-8">
        <div>
          <Badge variant="outline" className="bg-white/10 backdrop-blur-md mb-6 px-4 py-1.5 border-white/10 rounded-full font-bold text-emerald-400 text-xs uppercase tracking-wider hover:bg-white/20 transition-colors">
            <Sparkles className="w-3.5 h-3.5 mr-2" />
            System Live & Optimized
          </Badge>

          <h1 className="mb-4 font-bold text-white text-4xl md:text-5xl leading-tight tracking-tight">
            Welcome back,{" "}
            <span className="bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 text-transparent">
              Admin
            </span>
          </h1>

          <p className="max-w-xl text-slate-300 text-lg leading-relaxed">
            Your business grew by{" "}
            <span className="font-semibold text-emerald-400">+12.5%</span> this
            week. Check your latest leads and conversion reports below.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Button variant="secondary" size="lg" className="group h-auto bg-white hover:bg-slate-50 shadow-lg px-8 py-4 rounded-2xl font-bold text-slate-900 text-sm active:scale-95 transition-all flex items-center gap-2">
            View Analytics
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Button>
          <Button variant="outline" size="lg" className="h-auto bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-4 border-white/10 rounded-2xl font-bold text-white text-sm active:scale-95 transition-all">
            Manage Leads
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHero;
