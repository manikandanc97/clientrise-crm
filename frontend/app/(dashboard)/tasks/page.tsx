// tasks page

import TasksHeader from "@/components/tasks/TasksHeader";
import TaskStats from "@/components/tasks/TaskStats";
import TaskFilters from "@/components/tasks/TaskFilters";
import TasksTable from "@/components/tasks/TasksTable";

const TasksPage = () => {
  return (
    <div className="space-y-6 p-6">
      <TasksHeader />

      <TaskStats />

      <TaskFilters />

      <TasksTable />
    </div>
  );
};

export default TasksPage;
