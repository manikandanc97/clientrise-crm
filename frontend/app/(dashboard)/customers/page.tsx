// customers page

import CustomersHeader from "@/components/customers/CustomersHeader";
import CustomerStats from "@/components/customers/CustomerStats";
import CustomerFilters from "@/components/customers/CustomerFilters";
import CustomersTable from "@/components/customers/CustomersTable";

const CustomersPage = () => {
  return (
    <div className="space-y-6 p-6">
      <CustomersHeader />

      <CustomerStats />

      <CustomerFilters />

      <CustomersTable />
    </div>
  );
};

export default CustomersPage;
