import { popBorderedColors, popColors, popGradient } from "@/util/helper-1a";

export const PurpleBubble = () => {
  return (
    <div
      className="p2-circle bg-purple"
      onClick={() => popColors(["purple"])}
    />
  );
};
export const GreenBubble = () => {
  return (
    <div
      className="p2-circle bg-green"
      onClick={() => popColors(["green", "blue"])}
    />
  );
};
export const YellowBubble = () => {
  return <div className="p2-circle bg-yellow" />;
};
export const YellowBorderBubble = () => {
  return <div className="p2-circle bg-yellow p2-border" />;
};
export const OrangeBubble = () => {
  return <div className="p2-circle bg-orange" />;
};
export const OrangeBorderBubble = () => {
  return (
    <div
      className="p2-circle bg-orange p2-border"
      onClick={() => popBorderedColors(["orange"])}
    />
  );
};
export const BlueBubble = () => {
  return <div className="p2-circle bg-blue" />;
};
export const BlueBorderBubble = () => {
  return <div className="p2-circle bg-blue p2-border" />;
};
export const GradientBubble = () => {
  return (
    <div
      className="p2-circle"
      id="gradient-circle"
      onMouseEnter={popGradient}
    />
  );
};
