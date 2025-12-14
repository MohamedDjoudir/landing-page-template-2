import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-bold text-xl focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-md"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-purple-600 to-pink-500 text-white shadow-md">
        S
      </div>
      <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
        SaasPro
      </span>
    </Link>
  );
}
