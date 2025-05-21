"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getAllAssets, searchAssets } from "@/lib/data";
import { AssetList } from "@/components/assets/asset-list";
import { AssetSearch } from "@/components/assets/asset-search";
import { PageHeader } from "@/components/layout/page-header";

export default function AssetsPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";

  const [assets, setAssets] = useState(getAllAssets());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialQuery) {
      setAssets(searchAssets(initialQuery));
    } else {
      setAssets(getAllAssets());
    }
  }, [initialQuery]);

  const handleSearch = (query: string) => {
    setIsLoading(true);

    setTimeout(() => {
      if (query) {
        router.push(`/assets?q=${encodeURIComponent(query)}`);
        setAssets(searchAssets(query));
      } else {
        router.push("/assets");
        setAssets(getAllAssets());
      }
      setIsLoading(false);
    }, 300);
  };

  return (
    <div className="space-y-6">
      <PageHeader
        heading="Robotic Assets"
        subheading="View and manage your robotic assets"
      />

      <div className="mb-6">
        <AssetSearch onSearch={handleSearch} initialQuery={initialQuery} />
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="h-[300px] rounded-lg bg-muted/50 animate-pulse"
            />
          ))}
        </div>
      ) : (
        <AssetList assets={assets} />
      )}
    </div>
  );
}
