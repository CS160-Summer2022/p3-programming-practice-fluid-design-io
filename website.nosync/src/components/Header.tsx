import { useRouter } from "next/router";

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: "Solutions", href: "#" },
  { name: "Pricing", href: "#" },
  { name: "Docs", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header({ header }: { header?: JSX.Element }) {
  const router = useRouter();
  const isBase = router.pathname === "/";
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-start text-lg flex-col">
            <div className="text-white font-semibold">
              <a href="/">{!isBase && "Back to"} Project 3</a>
            </div>
            <p className="text-xs text-indigo-200">
              Programming Practice • By Oliver Pan
            </p>
          </div>
          <div className="ml-10 space-x-4">{header && header}</div>
        </div>
      </nav>
    </header>
  );
}
