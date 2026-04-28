import { quotationsData } from "@/data/quotations-data";
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
import { MoreHorizontal, FileText, Send, Download, ExternalLink, Trash2 } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const QuotationsTable = () => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-slate-100">
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Quote ID</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Client Info</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Amount</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Valid Till</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {quotationsData.map((quote) => (
            <TableRow key={quote.id} className="group hover:bg-slate-50/50 transition-colors border-slate-50">
              <TableCell className="px-8 py-5">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-slate-300" />
                  <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{quote.quoteId}</span>
                </div>
              </TableCell>

              <TableCell className="px-8 py-5">
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 rounded-2xl border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-gradient-to-br from-slate-100 to-slate-200 font-bold text-slate-600 text-xs">
                      {quote.client.split(' ').map((n: string) => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-slate-900">{quote.client}</p>
                    <p className="text-slate-400 text-xs">{quote.createdBy}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-8 py-5">
                <span className="font-bold text-slate-900">{quote.amount}</span>
              </TableCell>

              <TableCell className="px-8 py-5">
                <Badge variant="outline" className={`border-none px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider
                  ${quote.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 
                    quote.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 
                    'bg-slate-50 text-slate-500'}`}>
                  {quote.status}
                </Badge>
              </TableCell>

              <TableCell className="px-8 py-5">
                <span className="text-slate-500 text-sm font-medium">{quote.validTill}</span>
              </TableCell>

              <TableCell className="px-8 py-5 text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-white hover:shadow-sm text-slate-400 hover:text-slate-600 transition-all">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-xl border-slate-200 shadow-xl">
                    <DropdownMenuItem className="flex items-center gap-2 text-slate-600 cursor-pointer">
                      <ExternalLink className="w-4 h-4" /> View Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 text-slate-600 cursor-pointer">
                      <Send className="w-4 h-4" /> Send to Client
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 text-slate-600 cursor-pointer">
                      <Download className="w-4 h-4" /> Download PDF
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 text-rose-600 font-semibold cursor-pointer">
                      <Trash2 className="w-4 h-4" /> Delete Quote
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default QuotationsTable;
