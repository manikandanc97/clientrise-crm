// static dashboard data

import { ActivityType, StatCardType } from "@/types/dashboard";

export const statsData: StatCardType[] = [
  {
    title: "Total Leads",
    value: "1,248",
    change: "+12.5%",
    positive: true,
  },
  {
    title: "New Customers",
    value: "320",
    change: "+8.2%",
    positive: true,
  },
  {
    title: "Revenue",
    value: "$18,420",
    change: "+15.1%",
    positive: true,
  },
  {
    title: "Pending Tasks",
    value: "27",
    change: "-3.4%",
    positive: false,
  },
];

export const recentActivities: ActivityType[] = [
  {
    id: 1,
    title: "New lead added from website form",
    time: "2 mins ago",
  },
  {
    id: 2,
    title: "Quotation sent to premium client",
    time: "15 mins ago",
  },
  {
    id: 3,
    title: "Payment received successfully",
    time: "1 hour ago",
  },
];

export const salesChartData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4500 },
  { name: "May", value: 6000 },
  { name: "Jun", value: 5500 },
  { name: "Jul", value: 7000 },
];
