// dummy pipeline data

import { PipelineLeadType } from "@/types/pipeline";

export const pipelineData: PipelineLeadType[] = [
  {
    id: 1,
    name: "John Smith",
    company: "TechNova",
    value: "$4,500",
    followUp: "Tomorrow",
    assignedTo: "Admin",
    stage: "New Lead",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Growthify",
    value: "$8,200",
    followUp: "Today",
    assignedTo: "Admin",
    stage: "Contacted",
  },
  {
    id: 3,
    name: "David Lee",
    company: "PixelSoft",
    value: "$12,000",
    followUp: "Friday",
    assignedTo: "Sales Team",
    stage: "Proposal Sent",
  },
  {
    id: 4,
    name: "Emma Watson",
    company: "BrightPath",
    value: "$15,500",
    followUp: "Closed",
    assignedTo: "Manager",
    stage: "Won",
  },
];
