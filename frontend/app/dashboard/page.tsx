// dashboard main page

import WelcomeHero from "@/components/dashboard/WelcomeHero";
import StatsCards from "@/components/dashboard/StatsCards";
import RecentActivities from "@/components/dashboard/RecentActivities";
import SalesChart from "@/components/dashboard/SalesChart";

const DashboardPage = () => {
  return (
    <div className="space-y-6 p-6">
      <WelcomeHero />

      <StatsCards />

      <div className="gap-6 grid grid-cols-1 xl:grid-cols-2">
        <SalesChart />
        <RecentActivities />
      </div>
    </div>
  );
};

export default DashboardPage;
