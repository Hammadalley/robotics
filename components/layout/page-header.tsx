import { cn } from "@/lib/utils"

interface PageHeaderProps {
  heading: string
  subheading?: string
  children?: React.ReactNode
  className?: string
}

export function PageHeader({
  heading,
  subheading,
  children,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("pb-4 sm:pb-6", className)}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            {heading}
          </h1>
          {subheading && (
            <p className="mt-1 text-muted-foreground">{subheading}</p>
          )}
        </div>
        {children && <div className="mt-4 sm:ml-4 sm:mt-0">{children}</div>}
      </div>
    </div>
  )
}