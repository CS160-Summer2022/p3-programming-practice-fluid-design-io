import Layout from "@/components/Layout";
import BackToTaskSix from "@/components/task6/BackToTaskSix";

function ViewD() {
  return (
    <Layout title="View D" header={<BackToTaskSix />}>
      <div className="bg-red-400 h-16" />
      <div className="grid place-items-stretch place-content-stretch h-[calc(100vh-92px)]">
        <div className="bg-amber-400" />
        <div className="bg-sky-400 p-6">
          <div className="bg-lime-400 h-24" />
        </div>
      </div>
    </Layout>
  );
}
export default ViewD;
