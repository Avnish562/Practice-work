import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="mx-auto mb-10 flex max-w-xl items-center justify-between rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
      <Link href="/" className="font-bold text-slate-900 hover:text-blue-600">
        Counter App
      </Link>
      <div className="flex gap-5 text-sm font-semibold text-slate-600">
        <Link href="/" className="hover:text-blue-600">
          Counter
        </Link>
        <Link href="/about" className="hover:text-blue-600">
          About
        </Link>
      </div>
    </nav>
  );
}


