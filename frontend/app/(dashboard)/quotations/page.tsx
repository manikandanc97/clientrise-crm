// quotations page

import QuotationsHeader from "@/components/quotations/QuotationsHeader";
import QuotationStats from "@/components/quotations/QuotationStats";
import QuotationFilters from "@/components/quotations/QuotationFilters";
import QuotationsTable from "@/components/quotations/QuotationsTable";

const QuotationsPage = () => {
  return (
    <div className="space-y-6 p-6">
      <QuotationsHeader />

      <QuotationStats />

      <QuotationFilters />

      <QuotationsTable />
    </div>
  );
};

export default QuotationsPage;
