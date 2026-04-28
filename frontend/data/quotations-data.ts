// dummy quotation data

import { QuotationType } from "@/types/quotation";

export const quotationsData: QuotationType[] = [
  {
    id: 1,
    quoteId: "QT-1024",
    client: "TechNova",
    amount: "$18,500",
    status: "Pending",
    validTill: "May 10",
    createdBy: "Admin",
  },
  {
    id: 2,
    quoteId: "QT-2025",
    client: "Growthify",
    amount: "$12,200",
    status: "Approved",
    validTill: "May 14",
    createdBy: "Sales Team",
  },
  {
    id: 3,
    quoteId: "QT-3026",
    client: "PixelSoft",
    amount: "$24,000",
    status: "Pending",
    validTill: "May 18",
    createdBy: "Manager",
  },
  {
    id: 4,
    quoteId: "QT-4027",
    client: "BrightPath",
    amount: "$8,400",
    status: "Rejected",
    validTill: "May 06",
    createdBy: "Admin",
  },
];
