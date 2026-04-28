import { Mail, Phone, ExternalLink, MoreVertical } from "lucide-react";

const statusColors: Record<string, string> = {
  "New": "bg-blue-50 text-blue-600 border-blue-100",
  "Contacted": "bg-amber-50 text-amber-600 border-amber-100",
  "Proposal Sent": "bg-indigo-50 text-indigo-600 border-indigo-100",
  "Won": "bg-emerald-50 text-emerald-600 border-emerald-100",
  "Lost": "bg-rose-50 text-rose-600 border-rose-100",
};
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
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

interface Lead {
  id: number;
  name: string;
  company: string;
  status: string;
  email: string;
}

interface LeadsTableProps {
  leads: Lead[];
}

const LeadsTable = ({ leads }: LeadsTableProps) => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-slate-100">
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Lead Info</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Company</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Contact</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.id} className="group hover:bg-slate-50/50 transition-colors border-slate-50">
              <TableCell className="px-8 py-5">
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center font-bold text-slate-600 text-sm shadow-sm group-hover:scale-110 transition-transform">
                    <AvatarFallback>{lead.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{lead.name}</p>
                    <p className="text-xs text-slate-400 mt-0.5">ID: #LD-{lead.id}024</p>
                  </div>
                </div>
              </TableCell>
              <TableCell className="px-8 py-5 text-sm font-medium text-slate-600">{lead.company}</TableCell>
              <TableCell className="px-8 py-5">
                <Badge variant="outline" className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${statusColors[lead.status] || "bg-slate-100 text-slate-600"}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-current mr-2" />
                  {lead.status}
                </Badge>
              </TableCell>
              <TableCell className="px-8 py-5">
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-emerald-50 text-slate-400 hover:text-emerald-600 transition-all" title="Email Lead">
                    <Mail className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-all" title="Call Lead">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-9 w-9 rounded-lg hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 transition-all" title="View Profile">
                    <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell>
              <TableCell className="px-8 py-5 text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-all">
                      <MoreVertical className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-xl border-slate-200 shadow-xl">
                    <DropdownMenuItem className="rounded-lg cursor-pointer">Edit Lead</DropdownMenuItem>
                    <DropdownMenuItem className="rounded-lg cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50">Delete Lead</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      {/* Table Footer / Pagination */}
      <div className="px-8 py-6 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
        <p className="text-sm text-slate-500 font-medium">
          Showing <span className="text-slate-900">4</span> of <span className="text-slate-900">1,248</span> leads
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="px-4 py-2 rounded-xl border-slate-200 text-sm font-bold text-slate-400 cursor-not-allowed h-auto">Previous</Button>
          <Button variant="outline" className="px-4 py-2 rounded-xl bg-white border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all h-auto">Next</Button>
        </div>
      </div>
    </div>
  );
};

export default LeadsTable;
