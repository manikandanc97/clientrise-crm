// lead types

export interface LeadType {
  id: number;
  name: string;
  company: string;
  email: string;
  status: "New" | "Contacted" | "Proposal Sent" | "Won";
}
