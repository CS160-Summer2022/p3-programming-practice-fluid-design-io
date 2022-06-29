import Layout from "@/components/Layout";
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
import React, { useEffect, useState } from "react";

function Page1b() {
  const bubbles = [
    <BlueBorderBubble />,
    <BlueBubble />,
    <GradientBubble />,
    <GreenBubble />,
    <OrangeBorderBubble />,
    <OrangeBubble />,
    <PurpleBubble />,
    <YellowBorderBubble />,
    <YellowBubble />,
  ];

  const [bubbleList, setBubbleList] = useState([]);
  // A new bubble is added to the bubbleList every one second. Until the user clicks the stop button
  const [intervalId, setIntervalId] = useState(null);

  const header = (
    <button
      className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50"
      onClick={() => clearInterval(intervalId)}
    >
      Stop
    </button>
  );
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("interval");
      setBubbleList([
        ...bubbleList,
        bubbles[Math.floor(Math.random() * bubbles.length)],
      ]);
    }, 1000);
    setIntervalId(interval);
    return () => clearInterval(interval);
  }, [bubbleList]);

  return (
    <Layout header={header}>
      <div className="row">
        <div className="col-12">
          <div className="shape-container" id="bubble-container">
            {/* <!-- Have your circles dynamically appear here! --> */}
            {/* <!-- Example circle: <div className="p2-circle bg-blue"></div> --> */}
            {bubbleList.map((bubble, index) => (
              <span key={index}>{bubble}</span>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
export default Page1b;
