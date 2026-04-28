// pipeline page

import PipelineHeader from "@/components/pipeline/PipelineHeader";
import PipelineBoard from "@/components/pipeline/PipelineBoard";

const PipelinePage = () => {
  return (
    <div className="space-y-6 p-6">
      <PipelineHeader />

      <PipelineBoard />
    </div>
  );
};

export default PipelinePage;
