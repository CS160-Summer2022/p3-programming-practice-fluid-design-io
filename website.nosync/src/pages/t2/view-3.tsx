import Layout from "@/components/Layout";
import { NavToNext, NavToPrev } from "@/components/task2/NavOverlay";
import T2HomeBtn from "@/components/task2/T2HomeBtn";

function ViewTwo() {
  return (
    <Layout title="View 3" header={<T2HomeBtn />}>
      <NavToNext href="/t2/view-4"  />
      <NavToPrev href="/t2/view-2"  />
      <img
        src="/images/3.2.3.png"
        alt="View 3"
        className="object-contain w-full h-[calc(100vh-92px)]"
      />
    </Layout>
  );
}
export default ViewTwo;
