import Layout from "@/components/Layout";
import BackToTaskSix from "@/components/task6/BackToTaskSix";

function ViewB() {
  return (
    <Layout title="View B" header={<BackToTaskSix />}>
      <div className="grid grid-rows-3 grid-cols-2 place-items-stretch place-content-stretch h-[calc(100vh-92px)]">
        <div className="bg-red-400" />
        <div className="bg-amber-400" />
        <div className="bg-lime-400" />
        <div className="bg-sky-400" />
        <div className="bg-slate-400" />
        <div className="bg-cyan-400" />
      </div>
    </Layout>
  );
}
export default ViewB;
