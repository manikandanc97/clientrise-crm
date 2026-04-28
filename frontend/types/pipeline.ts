// pipeline types

export interface PipelineLeadType {
  id: number;
  name: string;
  company: string;
  value: string;
  followUp: string;
  assignedTo: string;
  stage: "New Lead" | "Contacted" | "Proposal Sent" | "Won" | "Lost";
}
