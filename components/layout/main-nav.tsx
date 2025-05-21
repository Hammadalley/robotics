"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BotIcon as RobotIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export function MainNav() {
  const pathname = usePathname()
  
  const mainNavItems = [
    {
      title: "Assets",
      href: "/assets",
    },
  ]

  return (
    <div className="mr-4 flex items-center">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <RobotIcon className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          RoboTech Manager
        </span>
      </Link>
      <nav className="flex items-center space-x-4 text-sm font-medium">
        {mainNavItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              pathname === item.href || pathname.startsWith(`${item.href}/`)
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}