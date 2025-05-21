import { notFound } from "next/navigation";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { StatusBadge } from "@/components/ui/status-badge";
import { Badge } from "@/components/ui/badge";
import { PartsTree } from "@/components/assets/parts-tree";
import { PageHeader } from "@/components/layout/page-header";
import {
  getAssetById,
  getProductInfo,
  getRepairInstructions,
  getParts,
  getCadModels,
  getAllAssetIds,
} from "@/lib/data";
import {
  ArrowLeftIcon,
  InfoIcon,
  WrenchIcon,
  LayersIcon,
  FileCode2Icon,
  CalendarIcon,
  ClockIcon,
  AlertTriangleIcon,
} from "lucide-react";

export async function generateStaticParams() {
  const assetIds = getAllAssetIds();
  return assetIds.map((id) => ({
    id: id.toString(),
  }));
}

export default async function AssetDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const asset = getAssetById(params.id);
  if (!asset) {
    notFound();
  }

  const productInfo = getProductInfo(params.id);
  const repairInstructions = getRepairInstructions(params.id);
  const parts = getParts(params.id);
  const cadModels = getCadModels(params.id);

  const statusLabel = {
    operational: "Operational",
    maintenance: "Maintenance",
    offline: "Offline",
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" asChild>
          <a href="/assets">
            <ArrowLeftIcon className="h-4 w-4" />
            <span className="sr-only">Back to assets</span>
          </a>
        </Button>
        <PageHeader heading={asset.name} subheading={asset.model} />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <div className="relative aspect-square overflow-hidden rounded-t-lg">
            <Image
              src={asset.imageUrl}
              alt={asset.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>{asset.name}</CardTitle>
              <StatusBadge variant={asset.status}>
                {statusLabel[asset.status]}
              </StatusBadge>
            </div>
            <CardDescription>{asset.manufacturer}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium">Description</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  {asset.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-medium">Details</h4>
                <div className="mt-1 space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Model</span>
                    <span>{asset.model}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Category</span>
                    <Badge variant="outline">{asset.category}</Badge>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Last Maintenance
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                      {asset.lastMaintenance}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      Next Maintenance
                    </span>
                    <span className="flex items-center gap-1">
                      <CalendarIcon className="h-3.5 w-3.5 text-muted-foreground" />
                      {asset.nextMaintenance}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2">
          <Tabs defaultValue="product-info">
            <TabsList className="w-full border-b">
              <TabsTrigger value="product-info" className="flex gap-1">
                <InfoIcon className="h-4 w-4" />
                <span>Product Info</span>
              </TabsTrigger>
              <TabsTrigger value="repair" className="flex gap-1">
                <WrenchIcon className="h-4 w-4" />
                <span>Repair Instructions</span>
              </TabsTrigger>
              <TabsTrigger value="parts" className="flex gap-1">
                <LayersIcon className="h-4 w-4" />
                <span>Parts</span>
              </TabsTrigger>
              <TabsTrigger value="cad-models" className="flex gap-1">
                <FileCode2Icon className="h-4 w-4" />
                <span>CAD Models</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="product-info" className="pt-4">
              {productInfo ? (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">Specifications</h3>
                    <div className="mt-3 rounded-lg border">
                      <div className="grid grid-cols-1 divide-y md:grid-cols-2 md:divide-x md:divide-y-0">
                        <div className="p-4 space-y-3">
                          <div>
                            <h4 className="text-sm font-medium">Dimensions</h4>
                            <p className="text-sm text-muted-foreground">
                              {productInfo.specifications.dimensions}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Weight</h4>
                            <p className="text-sm text-muted-foreground">
                              {productInfo.specifications.weight}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">
                              Power Requirements
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {productInfo.specifications.powerRequirements}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">
                              Operating Temperature
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {productInfo.specifications.operatingTemperature}
                            </p>
                          </div>
                        </div>
                        <div className="p-4 space-y-3">
                          <div>
                            <h4 className="text-sm font-medium">
                              Connectivity
                            </h4>
                            <div className="mt-1 flex flex-wrap gap-1">
                              {productInfo.specifications.connectivity.map(
                                (item) => (
                                  <Badge key={item} variant="secondary">
                                    {item}
                                  </Badge>
                                )
                              )}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Sensors</h4>
                            <div className="mt-1 flex flex-wrap gap-1">
                              {productInfo.specifications.sensors.map(
                                (item) => (
                                  <Badge key={item} variant="secondary">
                                    {item}
                                  </Badge>
                                )
                              )}
                            </div>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Batteries</h4>
                            <p className="text-sm text-muted-foreground">
                              {productInfo.specifications.batteries}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">Software</h4>
                            <p className="text-sm text-muted-foreground">
                              {productInfo.specifications.software}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium">General Information</h3>
                    <div className="mt-3 space-y-4">
                      <div className="rounded-lg border p-4">
                        <h4 className="text-sm font-medium">Certifications</h4>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {productInfo.certifications.map((cert) => (
                            <Badge key={cert} variant="outline">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                          <div>
                            <h4 className="text-sm font-medium">Warranty</h4>
                            <p className="text-sm text-muted-foreground">
                              {productInfo.warranty}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">
                              Manufacture Date
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {productInfo.manufactureDate}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-sm font-medium">End of Life</h4>
                            <p className="text-sm text-muted-foreground">
                              {productInfo.endOfLife}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex h-[300px] items-center justify-center rounded-lg border border-dashed">
                  <p className="text-muted-foreground">
                    No product information available
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="repair" className="pt-4">
              {repairInstructions.length > 0 ? (
                <div className="space-y-6">
                  {repairInstructions.map((instruction) => (
                    <Card key={instruction.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{instruction.title}</CardTitle>
                          <Badge
                            variant={
                              instruction.difficulty === "easy"
                                ? "secondary"
                                : instruction.difficulty === "medium"
                                ? "default"
                                : instruction.difficulty === "hard"
                                ? "destructive"
                                : "outline"
                            }
                          >
                            {instruction.difficulty.charAt(0).toUpperCase() +
                              instruction.difficulty.slice(1)}
                          </Badge>
                        </div>
                        <CardDescription className="flex items-center gap-1">
                          <ClockIcon className="h-3.5 w-3.5" />
                          <span>
                            Estimated time: {instruction.estimatedTime}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div>
                          <h4 className="text-sm font-medium">
                            Required Tools
                          </h4>
                          <div className="mt-2 flex flex-wrap gap-1">
                            {instruction.tools.map((tool) => (
                              <Badge key={tool} variant="outline">
                                {tool}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium flex items-center gap-1.5">
                            <AlertTriangleIcon className="h-4 w-4 text-yellow-500" />
                            <span>Safety Notes</span>
                          </h4>
                          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                            {instruction.safetyNotes.map((note, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-1.5"
                              >
                                <span className="mt-1">•</span>
                                <span>{note}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm font-medium mb-4">
                            Procedure
                          </h4>
                          <div className="space-y-4">
                            {instruction.steps.map((step) => (
                              <div key={step.step} className="flex gap-4">
                                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-muted">
                                  <span className="text-sm font-medium">
                                    {step.step}
                                  </span>
                                </div>
                                <div className="space-y-2">
                                  <h5 className="font-medium">{step.title}</h5>
                                  <p className="text-sm text-muted-foreground">
                                    {step.description}
                                  </p>
                                  {step.imageUrl && (
                                    <div className="mt-2 overflow-hidden rounded-md">
                                      <Image
                                        src={step.imageUrl}
                                        alt={step.title}
                                        width={400}
                                        height={300}
                                        className="object-cover"
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex h-[300px] items-center justify-center rounded-lg border border-dashed">
                  <p className="text-muted-foreground">
                    No repair instructions available
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="parts" className="pt-4">
              {parts.length > 0 ? (
                <Card>
                  <CardHeader>
                    <CardTitle>Parts Hierarchy</CardTitle>
                    <CardDescription>
                      Expand items to view the detailed parts structure
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PartsTree parts={parts} />
                  </CardContent>
                </Card>
              ) : (
                <div className="flex h-[300px] items-center justify-center rounded-lg border border-dashed">
                  <p className="text-muted-foreground">
                    No parts information available
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="cad-models" className="pt-4">
              {cadModels.length > 0 ? (
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {cadModels.map((model) => (
                    <Card
                      key={model.id}
                      className="overflow-hidden flex flex-col"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          src={model.previewUrl}
                          alt={model.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{model.name}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-2">
                          <span>Format: {model.format}</span>
                          <span>•</span>
                          <span>Size: {model.fileSize}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="pb-4 pt-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Last updated: {model.lastUpdated}
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex h-[300px] items-center justify-center rounded-lg border border-dashed">
                  <p className="text-muted-foreground">
                    No CAD models available
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
