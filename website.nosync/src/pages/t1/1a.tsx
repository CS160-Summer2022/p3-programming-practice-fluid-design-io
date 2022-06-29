import {
  BlueBorderBubble,
  BlueBubble,
  GradientBubble,
  GreenBubble,
  OrangeBorderBubble,
  OrangeBubble,
  PurpleBubble,
  YellowBorderBubble,
  YellowBubble,
} from "@/components/1a/Bubbles";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

function Page1a() {
  const router = useRouter();
  const header = (
    <button
      className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
      onClick={() => router.reload()}
    >
      Reset
    </button>
  );

  return (
    <Layout header={header}>
      <div className="row">
        <div className="col-12">
          <div className="shape-container">
            <PurpleBubble />
            <PurpleBubble />
            <PurpleBubble />
            <PurpleBubble />
            <PurpleBubble />
            <GreenBubble />
            <GreenBubble />
            <GreenBubble />
            <GreenBubble />
            <GreenBubble />
            <YellowBorderBubble />
            <YellowBorderBubble />
            <YellowBubble />
            <YellowBubble />
            <YellowBubble />
            <OrangeBorderBubble />
            <OrangeBorderBubble />
            <OrangeBubble />
            <OrangeBubble />
            <OrangeBubble />
            <BlueBubble />
            <BlueBubble />
            <BlueBorderBubble />
            <BlueBorderBubble />
            <BlueBubble />
            <GradientBubble />
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Page1a;
