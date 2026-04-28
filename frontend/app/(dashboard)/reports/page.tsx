// reports page

import ReportsHeader from "@/components/reports/ReportsHeader";
import ReportStats from "@/components/reports/ReportStats";
import RevenueChart from "@/components/reports/RevenueChart";
import ConversionChart from "@/components/reports/ConversionChart";
import PerformanceTable from "@/components/reports/PerformanceTable";

const ReportsPage = () => {
  return (
    <div className="space-y-6 p-6">
      <ReportsHeader />

      <ReportStats />

      <div className="gap-6 grid grid-cols-1 xl:grid-cols-2">
        <RevenueChart />
        <ConversionChart />
      </div>

      <PerformanceTable />
    </div>
  );
};

export default ReportsPage;
