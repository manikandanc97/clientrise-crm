// dummy task data

import { TaskType } from "@/types/task";

export const tasksData: TaskType[] = [
  {
    id: 1,
    title: "Follow-up call with TechNova",
    dueDate: "Tomorrow",
    priority: "High",
    assignedTo: "Admin",
    status: "Pending",
  },
  {
    id: 2,
    title: "Send proposal to Growthify",
    dueDate: "Today",
    priority: "High",
    assignedTo: "Sales Team",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Client meeting with PixelSoft",
    dueDate: "Friday",
    priority: "Medium",
    assignedTo: "Manager",
    status: "Pending",
  },
  {
    id: 4,
    title: "Invoice follow-up for BrightPath",
    dueDate: "Completed",
    priority: "Low",
    assignedTo: "Admin",
    status: "Completed",
  },
];
