import Link from "next/link";

function T2HomeBtn() {
  return (
    <Link href="/t2">
      <a className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-indigo-50">
        t2 Home
      </a>
    </Link>
  );
}
export default T2HomeBtn;
