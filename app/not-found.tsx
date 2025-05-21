import Link from "next/link"
import { AlertTriangleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-16 md:py-24">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
        <AlertTriangleIcon className="h-10 w-10 text-muted-foreground" />
      </div>
      <h1 className="mt-6 text-3xl font-bold">Not Found</h1>
      <p className="mt-2 text-center text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Button asChild className="mt-8">
        <Link href="/assets">Return to Assets</Link>
      </Button>
    </div>
  )
}