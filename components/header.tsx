import { Home, Pizza, UtensilsCrossed } from 'lucide-react'
import { Separator } from './ui/separator'
import Link from 'next/link'

export function Header() {
  return (
    <div className="border-b text-white w-full">
      <div className="flex h-16 items-center gap-6 px-6 ">
        <Pizza className="h6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <Link href="/" className="flex gap-1">
            <Home className="h-4 w-4 mt-1" />
            Home
          </Link>
          <Link href="/orders" className="flex gap-1">
            <UtensilsCrossed className="h-4 w-4 mt-1" />
            Files
          </Link>
        </nav>
      </div>
    </div>
  )
}
