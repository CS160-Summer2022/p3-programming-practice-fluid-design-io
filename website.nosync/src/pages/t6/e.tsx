import Layout from "@/components/Layout";
import BackToTaskSix from "@/components/task6/BackToTaskSix";

function ViewE() {
  return (
    <Layout title="View E" header={<BackToTaskSix />}>
      <div className="bg-red-400 h-16" />
      <div className="grid grid-cols-2 place-items-stretch place-content-stretch h-[calc(100vh-92px)]">
        <div className="bg-amber-400" />
        <div className="bg-lime-400" />
        <div className="bg-sky-400 col-span-2 py-20" />
      </div>
    </Layout>
  );
}
export default ViewE;
