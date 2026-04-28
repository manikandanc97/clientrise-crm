// customer types

export interface CustomerType {
  id: number;
  name: string;
  company: string;
  status: "Premium" | "Active" | "Inactive";
  revenue: string;
  lastContact: string;
  manager: string;
}
