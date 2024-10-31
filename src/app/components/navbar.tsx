import Link from "next/link";

export default function Navbar() {
  return (
    <header className="py-4 mt-10">
      <nav className="max-w-2xl mx-auto ">
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 text-lg bg-black text-white py-6 px-4 sm:px-10 sm:border rounded-full border-gray-300 transition-shadow duration-300 hover:shadow-[0px_0px_25px_5px_rgba(138,43,226,0.8)]">
          <Link href="/home" passHref>
            <li className="cursor-pointer hover:text-gray-300">Home</li>
          </Link>
          <Link href="/about" passHref>
            <li className="cursor-pointer hover:text-gray-300">About</li>
          </Link>
          <Link href="/skills" passHref>
            <li className="cursor-pointer hover:text-gray-300">Skills</li>
          </Link>
          <Link href="/contact" passHref>
            <li className="cursor-pointer hover:text-gray-300">Contact</li>
          </Link>
          <li>
            <button className="bg-slate-300 text-black hover:bg-purple-300 px-6 py-3 rounded-2xl">Hire Me</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}