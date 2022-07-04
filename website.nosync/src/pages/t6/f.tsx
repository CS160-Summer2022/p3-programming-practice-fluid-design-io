import Layout from "@/components/Layout";
import BackToTaskSix from "@/components/task6/BackToTaskSix";

function ViewF() {
  return (
    <Layout title="View F" header={<BackToTaskSix />}>
      <div className="flex flex-col h-[calc(100vh-92px)]">
        <div className="bg-red-400">
          <div className="grid grid-cols-2 place-items-stretch place-content-stretch h-[33vh] p-6">
            <div className="bg-amber-400" />
            <div className="bg-lime-400" />
          </div>
        </div>
        <div className="bg-sky-400 flex-grow grid">
          <div className="bg-slate-700 w-[13vw] h-[6vh] self-start place-self-end" />
        </div>
      </div>
    </Layout>
  );
}
export default ViewF;
