import clsxm from "@/lib/clsxm";
import Link from "next/link";

export const NavToNext = ({
  href,
  splitScreen = true,
}: {
  href: string;
  splitScreen?: boolean;
}) => {
  // an overlay that is 50vh tall and 100vw wide
  // and is positioned at the top of the screen
  return (
    <Link href={href}>
      <a
        className={clsxm(
          "fixed top-0 left-0 w-full hover:text-indigo-500 transition hover:bg-indigo-100/30 bg-indigo-100/0 hover:backdrop-blur-sm z-50 flex justify-center items-center group",
          splitScreen ? "h-[50vh]" : "h-screen"
        )}
      >
        <span className="h-16 w-16 rounded-full bg-indigo-500 flex items-center justify-center group-hover:opacity-100 opacity-0 transition text-white hover:scale-105">
          Next
        </span>
      </a>
    </Link>
  );
};

export const NavToPrev = ({
  href,
  splitScreen = true,
}: {
  href: string;
  splitScreen?: boolean;
}) => {
  // an overlay that is 50vh tall and 100vw wide
  // and is positioned at the top of the screen
  return (
    <Link href={href}>
      <a
        className={clsxm(
          "fixed left-0 w-full hover:text-indigo-500 transition hover:bg-indigo-100/30 bg-indigo-100/0 hover:backdrop-blur-sm z-50 flex justify-center items-center group",
          splitScreen ? "top-[50vh] h-[50vh]" : "top-0 h-screen"
        )}
      >
        <span className="h-16 w-16 rounded-full bg-indigo-500 flex items-center justify-center group-hover:opacity-100 opacity-0 transition text-white hover:scale-105">
          Prev
        </span>
      </a>
    </Link>
  );
};
