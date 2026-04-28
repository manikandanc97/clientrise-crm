// task types

export interface TaskType {
  id: number;
  title: string;
  dueDate: string;
  priority: "High" | "Medium" | "Low";
  assignedTo: string;
  status: "Pending" | "In Progress" | "Completed";
}
