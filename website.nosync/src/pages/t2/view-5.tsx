import Layout from "@/components/Layout";
import { NavToNext, NavToPrev } from "@/components/task2/NavOverlay";
import T2HomeBtn from "@/components/task2/T2HomeBtn";

function ViewTwo() {
  return (
    <Layout title="View 5" header={<T2HomeBtn />}>
      <NavToNext href="/t2/view-2" />
      <NavToPrev href="/t2/view-4" />
      <img
        src="/images/3.2.5.png"
        alt="View 5"
        className="object-contain w-full h-[calc(100vh-92px)]"
      />
    </Layout>
  );
}
export default ViewTwo;
