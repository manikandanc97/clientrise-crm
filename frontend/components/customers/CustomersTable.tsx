import { customersData } from "@/data/customers-data";
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
import { MoreHorizontal, Mail, Phone, Calendar, ExternalLink } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";

const CustomersTable = () => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-slate-100">
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Customer Info</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Company</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Revenue</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Last Contact</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {customersData.map((customer) => (
            <TableRow key={customer.id} className="group hover:bg-slate-50/50 transition-colors border-slate-50">
              <TableCell className="px-8 py-5">
                <div className="flex items-center gap-4">
                  <Avatar className="w-10 h-10 rounded-2xl border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-gradient-to-br from-slate-100 to-slate-200 font-bold text-slate-600 text-xs">
                      {customer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">{customer.name}</p>
                    <p className="text-slate-400 text-xs">{customer.manager}</p>
                  </div>
                </div>
              </TableCell>

              <TableCell className="px-8 py-5 font-semibold text-slate-600">{customer.company}</TableCell>

              <TableCell className="px-8 py-5">
                <Badge variant="outline" className={`border-none px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider
                  ${customer.status === 'Premium' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>
                  {customer.status}
                </Badge>
              </TableCell>

              <TableCell className="px-8 py-5">
                <span className="font-bold text-slate-900">{customer.revenue}</span>
              </TableCell>

              <TableCell className="px-8 py-5">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Calendar className="w-3.5 h-3.5 text-slate-300" />
                  {customer.lastContact}
                </div>
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
                      <Mail className="w-4 h-4" /> Email Customer
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 text-slate-600 cursor-pointer">
                      <Phone className="w-4 h-4" /> Call Customer
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 text-emerald-600 font-semibold cursor-pointer">
                      <ExternalLink className="w-4 h-4" /> View Profile
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

export default CustomersTable;
