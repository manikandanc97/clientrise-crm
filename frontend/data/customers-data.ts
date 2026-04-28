// dummy customer data

import { CustomerType } from "@/types/customer";

export const customersData: CustomerType[] = [
  {
    id: 1,
    name: "John Smith",
    company: "TechNova",
    status: "Premium",
    revenue: "$18,500",
    lastContact: "Yesterday",
    manager: "Admin",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "Growthify",
    status: "Active",
    revenue: "$12,200",
    lastContact: "2 days ago",
    manager: "Sales Team",
  },
  {
    id: 3,
    name: "David Lee",
    company: "PixelSoft",
    status: "Premium",
    revenue: "$24,000",
    lastContact: "Today",
    manager: "Manager",
  },
  {
    id: 4,
    name: "Emma Watson",
    company: "BrightPath",
    status: "Inactive",
    revenue: "$8,400",
    lastContact: "Last week",
    manager: "Admin",
  },
];
