import Layout from "@/components/Layout";
import { NavToNext } from "@/components/task2/NavOverlay";

function ViewOne() {
  return (
    <Layout title="View 1">
      <NavToNext href="/t2/view-2" splitScreen={false} />
      <img
        src="/images/3.2.1.png"
        alt="View 1"
        className="object-contain w-full h-[calc(100vh-92px)]"
      />
    </Layout>
  );
}
export default ViewOne;
