"use client"

import { useState } from "react"
import { Part } from "@/types"
import { ChevronDownIcon, ChevronRightIcon, CircleIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PartsTreeProps {
  parts: Part[]
  className?: string
}

export function PartsTree({ parts, className }: PartsTreeProps) {
  return (
    <div className={cn("space-y-1", className)}>
      {parts.map((part) => (
        <PartItem key={part.id} part={part} level={0} />
      ))}
    </div>
  )
}

interface PartItemProps {
  part: Part
  level: number
}

function PartItem({ part, level }: PartItemProps) {
  const [isExpanded, setIsExpanded] = useState(level < 1)
  const hasChildren = part.children && part.children.length > 0

  return (
    <div>
      <div
        className={cn(
          "flex items-center rounded-md px-2 py-1.5 transition-colors",
          "hover:bg-muted/50"
        )}
        style={{ paddingLeft: `${(level * 16) + 8}px` }}
      >
        {hasChildren ? (
          <Button
            variant="ghost"
            size="icon"
            className="h-5 w-5 mr-1 p-0 text-muted-foreground hover:text-foreground"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <ChevronDownIcon className="h-4 w-4" />
            ) : (
              <ChevronRightIcon className="h-4 w-4" />
            )}
            <span className="sr-only">
              {isExpanded ? "Collapse" : "Expand"}
            </span>
          </Button>
        ) : (
          <CircleIcon className="h-2 w-2 mx-1.5 text-muted-foreground" />
        )}
        <div className="ml-1 flex-1">
          <div className="flex items-baseline justify-between">
            <span className="font-medium">{part.name}</span>
            <span className="text-xs text-muted-foreground">{part.partNumber}</span>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-1">
            {part.description}
          </p>
          <div className="mt-1 text-xs">
            <span className="text-muted-foreground">Quantity: {part.quantity}</span>
          </div>
        </div>
      </div>
      {isExpanded && hasChildren && (
        <div>
          {part.children?.map((child) => (
            <PartItem key={child.id} part={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}