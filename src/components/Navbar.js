import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image src="/SchoolifyT2ai.png" alt="SchooliFY Logo" width={40} height={40} className="mr-2" priority />
              <span className="text-2xl font-bold text-white">SchooliFY</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-schoolify-main">
              Home
            </Link>
            <Link href="/resources" className="hover:text-schoolify-main">
              Resources
            </Link>
            <Link href="/gradebook" className="hover:text-schoolify-main">
              Gradebook
            </Link>
            <Link href="/appointment" className="hover:text-schoolify-main">
              Appointment
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-white rounded-full transition-colors group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-white group-hover:stroke-black transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </button>
            <button className="p-2 hover:bg-white rounded-full transition-colors group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-white group-hover:stroke-black transition-colors"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}