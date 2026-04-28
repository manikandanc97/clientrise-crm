import { tasksData } from "@/data/tasks-data";
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
import { MoreHorizontal, Calendar, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

const TasksTable = () => {
  return (
    <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent border-slate-100">
            <TableHead className="w-[50px] px-8 py-5">
              <Checkbox className="rounded-md border-slate-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600" />
            </TableHead>
            <TableHead className="px-4 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Task Description</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Due Date</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Priority</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Assignee</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider">Status</TableHead>
            <TableHead className="px-8 py-5 text-xs font-bold text-slate-400 uppercase tracking-wider text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {tasksData.map((task) => (
            <TableRow key={task.id} className="group hover:bg-slate-50/50 transition-colors border-slate-50">
              <TableCell className="px-8 py-5">
                <Checkbox className="rounded-md border-slate-300 data-[state=checked]:bg-emerald-600 data-[state=checked]:border-emerald-600" checked={task.status === "Completed"} />
              </TableCell>

              <TableCell className="px-4 py-5">
                <div>
                  <p className={`font-bold text-slate-900 group-hover:text-emerald-700 transition-colors ${task.status === "Completed" ? "line-through text-slate-400" : ""}`}>
                    {task.title}
                  </p>
                  <p className="text-slate-400 text-xs mt-0.5 italic">Internal Project</p>
                </div>
              </TableCell>

              <TableCell className="px-8 py-5">
                <div className="flex items-center gap-2 text-slate-500 text-sm font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-300" />
                  {task.dueDate}
                </div>
              </TableCell>

              <TableCell className="px-8 py-5">
                <Badge variant="outline" className={`border-none px-3 py-1 rounded-full font-bold text-[10px] uppercase tracking-wider
                  ${task.priority === 'High' ? 'bg-rose-50 text-rose-600' : 
                    task.priority === 'Medium' ? 'bg-blue-50 text-blue-600' : 
                    'bg-slate-50 text-slate-500'}`}>
                  {task.priority}
                </Badge>
              </TableCell>

              <TableCell className="px-8 py-5">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 rounded-xl border border-white shadow-sm">
                    <AvatarFallback className="bg-slate-100 font-bold text-slate-600 text-[10px]">
                      {task.assignedTo.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-xs font-semibold text-slate-600">{task.assignedTo}</span>
                </div>
              </TableCell>

              <TableCell className="px-8 py-5">
                <div className="flex items-center gap-2">
                  {task.status === "Completed" ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Clock className="w-4 h-4 text-blue-400" />
                  )}
                  <span className={`text-sm font-bold ${task.status === "Completed" ? "text-emerald-600" : "text-blue-600"}`}>
                    {task.status}
                  </span>
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
                      Edit Task
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 text-slate-600 cursor-pointer text-rose-600">
                      Delete Task
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

export default TasksTable;
