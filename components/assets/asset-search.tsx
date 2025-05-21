"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SearchIcon, XIcon } from "lucide-react"

interface AssetSearchProps {
  onSearch: (query: string) => void
  initialQuery?: string
}

export function AssetSearch({ onSearch, initialQuery = "" }: AssetSearchProps) {
  const [query, setQuery] = useState(initialQuery)

  useEffect(() => {
    setQuery(initialQuery)
  }, [initialQuery])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(query)
  }

  const handleClear = () => {
    setQuery("")
    onSearch("")
  }

  return (
    <form onSubmit={handleSearch} className="relative flex w-full items-center">
      <div className="relative w-full">
        <SearchIcon 
          className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" 
        />
        <Input
          type="text"
          placeholder="Search robots, parts, or models..."
          className="w-full pl-10 pr-10"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 h-7 w-7 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            onClick={handleClear}
          >
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Clear search</span>
          </Button>
        )}
      </div>
      <Button type="submit" className="ml-2">
        Search
      </Button>
    </form>
  )
}