"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { Asset } from "@/types"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StatusBadge } from "@/components/ui/status-badge"
import { Button } from "@/components/ui/button"
import { ArrowRightIcon, InfoIcon } from "lucide-react"

interface AssetCardProps {
  asset: Asset
}

export function AssetCard({ asset }: AssetCardProps) {
  const router = useRouter()
  
  const statusLabel = {
    operational: "Operational",
    maintenance: "Maintenance",
    offline: "Offline"
  }

  const handleViewDetails = () => {
    router.push(`/assets/${asset.id}`)
  }

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={asset.imageUrl}
          alt={asset.name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold tracking-tight">{asset.name}</h3>
            <p className="text-sm text-muted-foreground">{asset.manufacturer}</p>
          </div>
          <StatusBadge variant={asset.status}>
            {statusLabel[asset.status]}
          </StatusBadge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground line-clamp-2">{asset.description}</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">{asset.model}</Badge>
            <Badge variant="outline">{asset.category}</Badge>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button 
          variant="default" 
          className="w-full gap-2"
          onClick={handleViewDetails}
        >
          <InfoIcon size={16} />
          <span>View Details</span>
          <ArrowRightIcon size={16} className="ml-auto" />
        </Button>
      </CardFooter>
    </Card>
  )
}