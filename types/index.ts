export interface Asset {
  id: string;
  name: string;
  model: string;
  manufacturer: string;
  category: string;
  imageUrl: string;
  description: string;
  status: "operational" | "maintenance" | "offline";
  lastMaintenance: string;
  nextMaintenance: string;
}

export interface ProductInfo {
  id: string;
  assetId: string;
  specifications: {
    dimensions: string;
    weight: string;
    powerRequirements: string;
    operatingTemperature: string;
    connectivity: string[];
    sensors: string[];
    batteries: string;
    software: string;
  };
  certifications: string[];
  warranty: string;
  manufactureDate: string;
  endOfLife: string;
}

export interface RepairInstruction {
  id: string;
  assetId: string;
  title: string;
  difficulty: "easy" | "medium" | "hard" | "expert";
  estimatedTime: string;
  tools: string[];
  safetyNotes: string[];
  steps: {
    step: number;
    title: string;
    description: string;
    imageUrl?: string;
  }[];
}

export interface Part {
  id: string;
  assetId: string;
  name: string;
  partNumber: string;
  description: string;
  quantity: number;
  imageUrl?: string;
  children?: Part[];
}

export interface CadModel {
  id: string;
  assetId: string;
  name: string;
  format: string;
  fileSize: string;
  lastUpdated: string;
  previewUrl: string;
}
