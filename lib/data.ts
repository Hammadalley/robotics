import { Asset, ProductInfo, RepairInstruction, Part, CadModel } from "@/types";

export const assets: Asset[] = [
  {
    id: "1",
    name: "RoboArm X1",
    model: "RA-X1-2023",
    manufacturer: "RoboCorp Industries",
    category: "Industrial Arm",
    imageUrl:
      "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Advanced robotic arm for precision manufacturing with 6 degrees of freedom and 0.01mm accuracy.",
    status: "operational",
    lastMaintenance: "2023-11-15",
    nextMaintenance: "2024-04-15",
  },
  {
    id: "2",
    name: "Scout Rover",
    model: "SR-450",
    manufacturer: "Mobility Robotics",
    category: "Autonomous Vehicle",
    imageUrl:
      "https://images.pexels.com/photos/8566570/pexels-photo-8566570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "All-terrain scout rover designed for reconnaissance in hazardous environments.",
    status: "maintenance",
    lastMaintenance: "2023-12-01",
    nextMaintenance: "2024-02-01",
  },
  {
    id: "3",
    name: "Aero Drone",
    model: "AD-750",
    manufacturer: "Sky Robotics",
    category: "Aerial",
    imageUrl:
      "https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "High-altitude drone with extended flight time and advanced imaging capabilities.",
    status: "offline",
    lastMaintenance: "2023-10-20",
    nextMaintenance: "2024-01-20",
  },
  {
    id: "4",
    name: "MediBot",
    model: "MB-100",
    manufacturer: "Healthcare Robotics",
    category: "Medical",
    imageUrl:
      "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Assistance robot designed for patient care and monitoring in healthcare settings.",
    status: "operational",
    lastMaintenance: "2023-12-15",
    nextMaintenance: "2024-03-15",
  },
  {
    id: "5",
    name: "Assembly Bot",
    model: "AB-2000",
    manufacturer: "RoboCorp Industries",
    category: "Industrial",
    imageUrl:
      "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "High-speed assembly robot for electronics manufacturing with precision handling.",
    status: "operational",
    lastMaintenance: "2024-01-05",
    nextMaintenance: "2024-05-05",
  },
  {
    id: "6",
    name: "Explorer Sub",
    model: "ES-300",
    manufacturer: "Oceanic Robotics",
    category: "Underwater",
    imageUrl:
      "https://images.pexels.com/photos/8566570/pexels-photo-8566570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    description:
      "Deep sea exploration submarine capable of reaching 3000m depth with advanced sampling tools.",
    status: "maintenance",
    lastMaintenance: "2023-11-10",
    nextMaintenance: "2024-02-10",
  },
];

export const productInfos: Record<string, ProductInfo> = {
  "1": {
    id: "pi-1",
    assetId: "1",
    specifications: {
      dimensions: "120cm x 45cm x 30cm",
      weight: "75kg",
      powerRequirements: "220-240V AC, 1.5kW",
      operatingTemperature: "-10°C to 50°C",
      connectivity: ["Ethernet", "Wi-Fi", "Bluetooth 5.0"],
      sensors: ["Force/Torque", "Proximity", "Vision"],
      batteries: "Lithium-ion 48V 20Ah backup",
      software: "RoboOS 4.5",
    },
    certifications: ["ISO 9001", "CE", "UL", "RoHS"],
    warranty: "2 years standard, extendable to 5 years",
    manufactureDate: "2023-06-18",
    endOfLife: "2033-06-18",
  },
  "2": {
    id: "pi-2",
    assetId: "2",
    specifications: {
      dimensions: "90cm x 60cm x 40cm",
      weight: "45kg",
      powerRequirements: "Battery-powered, 48V system",
      operatingTemperature: "-30°C to 60°C",
      connectivity: ["4G/5G", "Wi-Fi", "Satellite"],
      sensors: ["LIDAR", "Infrared", "GPS", "Multi-spectrum Camera"],
      batteries: "Swappable Lithium-ion 48V 50Ah, 8-hour runtime",
      software: "Mobility OS 3.2",
    },
    certifications: ["IP67", "MIL-STD-810", "ATEX Zone 2"],
    warranty: "3 years standard",
    manufactureDate: "2023-08-12",
    endOfLife: "2031-08-12",
  },
  "3": {
    id: "pi-3",
    assetId: "3",
    specifications: {
      dimensions: "80cm wingspan, 10cm height",
      weight: "2.2kg",
      powerRequirements: "Battery-powered, 22.2V system",
      operatingTemperature: "-20°C to 50°C",
      connectivity: ["4G/5G", "Wi-Fi", "RF 2.4GHz"],
      sensors: ["4K Camera", "Thermal Imaging", "Barometric", "GPS"],
      batteries: "Lithium-polymer 22.2V 10000mAh, 45-minute flight time",
      software: "SkyControl 2.5",
    },
    certifications: ["FAA Part 107", "IP54", "CE"],
    warranty: "1 year standard",
    manufactureDate: "2023-09-05",
    endOfLife: "2028-09-05",
  },
  "4": {
    id: "pi-4",
    assetId: "4",
    specifications: {
      dimensions: "150cm x 60cm x 60cm",
      weight: "95kg",
      powerRequirements: "110-240V AC, also battery-powered",
      operatingTemperature: "10°C to 40°C",
      connectivity: ["Wi-Fi", "Bluetooth", "NFC"],
      sensors: ["Vital Signs Monitors", "Proximity", "3D Camera"],
      batteries: "Lithium-ion 24V 30Ah, 6-hour runtime",
      software: "MediOS 2.1 (HIPAA Compliant)",
    },
    certifications: ["FDA Class II", "CE Medical", "ISO 13485"],
    warranty: "2 years standard, extendable to 4 years",
    manufactureDate: "2023-07-20",
    endOfLife: "2031-07-20",
  },
  "5": {
    id: "pi-5",
    assetId: "5",
    specifications: {
      dimensions: "180cm x 80cm x 60cm",
      weight: "120kg",
      powerRequirements: "380-480V AC, 3-phase, 3kW",
      operatingTemperature: "5°C to 40°C",
      connectivity: ["Ethernet", "Modbus", "Profinet"],
      sensors: ["Vision", "Force/Torque", "Proximity"],
      batteries: "No battery, direct power",
      software: "RoboOS 4.5 Manufacturing Suite",
    },
    certifications: ["ISO 9001", "CE", "UL", "RoHS"],
    warranty: "2 years standard, extendable to 5 years",
    manufactureDate: "2023-10-15",
    endOfLife: "2033-10-15",
  },
  "6": {
    id: "pi-6",
    assetId: "6",
    specifications: {
      dimensions: "200cm x 80cm x 80cm",
      weight: "350kg",
      powerRequirements: "Battery-powered, 48V system",
      operatingTemperature: "-5°C to 45°C",
      connectivity: [
        "Acoustic Modem",
        "RF when surfaced",
        "Satellite when surfaced",
      ],
      sensors: ["Sonar", "Pressure", "Water Quality", "4K Camera"],
      batteries: "Lithium-ion 48V 100Ah, 10-hour runtime",
      software: "OceanOS 1.8",
    },
    certifications: ["DNV-GL", "IP68", "Pressure rated to 300 Bar"],
    warranty: "2 years standard",
    manufactureDate: "2023-05-25",
    endOfLife: "2030-05-25",
  },
};

export const repairInstructions: Record<string, RepairInstruction[]> = {
  "1": [
    {
      id: "ri-1-1",
      assetId: "1",
      title: "Joint Calibration",
      difficulty: "medium",
      estimatedTime: "45 minutes",
      tools: ["Calibration kit", "5mm Allen key", "Digital torque wrench"],
      safetyNotes: [
        "Ensure power is disconnected before beginning",
        "Secure arm in maintenance position using provided brace",
      ],
      steps: [
        {
          step: 1,
          title: "Preparation",
          description:
            "Power down robot and wait 5 minutes for capacitors to discharge. Secure arm using maintenance brace.",
          imageUrl:
            "https://images.pexels.com/photos/3862634/pexels-photo-3862634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          step: 2,
          title: "Access Calibration Panel",
          description:
            "Remove the four M5 bolts from joint cover using 5mm Allen key. Carefully remove cover to expose calibration points.",
        },
        {
          step: 3,
          title: "Connect Calibration Tool",
          description:
            "Connect the calibration tool to port J5 and power on the calibration device. Wait for green status light.",
        },
        {
          step: 4,
          title: "Run Calibration Sequence",
          description:
            "Press the calibration button and wait for the sequence to complete. This should take approximately 3 minutes.",
        },
        {
          step: 5,
          title: "Verify Calibration",
          description:
            "Check that all joints show green status on calibration tool display. Record calibration values in maintenance log.",
        },
        {
          step: 6,
          title: "Reassembly",
          description:
            "Replace joint cover and secure with the four M5 bolts. Torque to 5Nm using digital torque wrench.",
        },
      ],
    },
  ],
  "2": [
    {
      id: "ri-2-1",
      assetId: "2",
      title: "Wheel Motor Replacement",
      difficulty: "hard",
      estimatedTime: "90 minutes",
      tools: ["Socket set", "Torque wrench", "Multimeter", "Wire crimpers"],
      safetyNotes: [
        "Disconnect main battery before servicing",
        "Support vehicle weight properly before removing wheel assembly",
        "Wear appropriate PPE including gloves and eye protection",
      ],
      steps: [
        {
          step: 1,
          title: "Preparation",
          description:
            "Power down rover and disconnect main battery. Secure rover on maintenance stand to lift the affected wheel off the ground.",
          imageUrl:
            "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          step: 2,
          title: "Remove Wheel Assembly",
          description:
            "Remove the six M8 bolts securing the wheel to the hub. Carefully remove wheel to expose the motor assembly.",
        },
        {
          step: 3,
          title: "Disconnect Motor",
          description:
            "Disconnect the power and encoder cables from the motor. Label each connection for reassembly.",
        },
        {
          step: 4,
          title: "Remove Motor",
          description:
            "Remove the four M6 bolts securing the motor to the gearbox. Carefully separate motor from gearbox.",
        },
        {
          step: 5,
          title: "Install New Motor",
          description:
            "Align new motor with gearbox and secure with the four M6 bolts. Torque to 10Nm in a cross pattern.",
        },
        {
          step: 6,
          title: "Reconnect Wiring",
          description:
            "Reconnect power and encoder cables to the new motor. Verify connections with wiring diagram.",
        },
        {
          step: 7,
          title: "Reinstall Wheel",
          description:
            "Reattach wheel to hub using the six M8 bolts. Torque to 25Nm in a star pattern.",
        },
        {
          step: 8,
          title: "Test Operation",
          description:
            "Reconnect battery and perform a function test of the motor at low speed. Verify encoder feedback.",
        },
      ],
    },
  ],
  "3": [
    {
      id: "ri-3-1",
      assetId: "3",
      title: "Propeller Replacement",
      difficulty: "easy",
      estimatedTime: "15 minutes",
      tools: ["2mm Allen key", "Propeller balancer (optional)"],
      safetyNotes: [
        "Remove battery before servicing",
        "Handle propellers carefully as edges may be sharp",
      ],
      steps: [
        {
          step: 1,
          title: "Preparation",
          description:
            "Remove battery from drone. Place drone on flat surface with propellers facing up.",
          imageUrl:
            "https://images.pexels.com/photos/8566460/pexels-photo-8566460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          step: 2,
          title: "Remove Damaged Propeller",
          description:
            "Using 2mm Allen key, loosen the center screw securing the propeller to the motor shaft. Remove propeller.",
        },
        {
          step: 3,
          title: "Install New Propeller",
          description:
            "Note the rotation direction marked on the propeller. Match to the corresponding motor position (clockwise or counter-clockwise).",
        },
        {
          step: 4,
          title: "Secure Propeller",
          description:
            "Place new propeller on motor shaft and secure with center screw. Do not overtighten.",
        },
        {
          step: 5,
          title: "Verify Installation",
          description:
            "Manually rotate propeller to ensure free movement without obstruction. Check that all propellers are installed in correct positions.",
        },
      ],
    },
  ],
};

export const parts: Record<string, Part[]> = {
  "1": [
    {
      id: "p-1-1",
      assetId: "1",
      name: "Base Assembly",
      partNumber: "RA-X1-BA-001",
      description: "Main supporting base with power supply and control unit",
      quantity: 1,
      imageUrl:
        "https://images.pexels.com/photos/5207288/pexels-photo-5207288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      children: [
        {
          id: "p-1-1-1",
          assetId: "1",
          name: "Control Unit",
          partNumber: "RA-X1-CU-100",
          description: "Main controller with processor and I/O interfaces",
          quantity: 1,
          children: [
            {
              id: "p-1-1-1-1",
              assetId: "1",
              name: "Mainboard",
              partNumber: "RA-X1-MB-105",
              description: "Primary circuit board with ARM processor",
              quantity: 1,
            },
            {
              id: "p-1-1-1-2",
              assetId: "1",
              name: "Power Management Module",
              partNumber: "RA-X1-PM-106",
              description: "Regulates and distributes power to components",
              quantity: 1,
            },
          ],
        },
        {
          id: "p-1-1-2",
          assetId: "1",
          name: "Power Supply",
          partNumber: "RA-X1-PS-200",
          description: "1.5kW power supply with surge protection",
          quantity: 1,
        },
      ],
    },
    {
      id: "p-1-2",
      assetId: "1",
      name: "Arm Assembly",
      partNumber: "RA-X1-AA-002",
      description: "Robotic arm with 6 joints and end effector",
      quantity: 1,
      imageUrl:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      children: [
        {
          id: "p-1-2-1",
          assetId: "1",
          name: "Shoulder Joint",
          partNumber: "RA-X1-SJ-301",
          description: "Base rotation joint with high-torque servo",
          quantity: 1,
          children: [
            {
              id: "p-1-2-1-1",
              assetId: "1",
              name: "Servo Motor",
              partNumber: "RA-X1-SM-331",
              description: "150Nm servo motor",
              quantity: 1,
            },
            {
              id: "p-1-2-1-2",
              assetId: "1",
              name: "Bearing Assembly",
              partNumber: "RA-X1-BA-332",
              description: "Double-row bearing assembly",
              quantity: 1,
            },
          ],
        },
        {
          id: "p-1-2-2",
          assetId: "1",
          name: "Elbow Joint",
          partNumber: "RA-X1-EJ-302",
          description: "Secondary pivot joint with medium-torque servo",
          quantity: 1,
        },
        {
          id: "p-1-2-3",
          assetId: "1",
          name: "Wrist Assembly",
          partNumber: "RA-X1-WA-303",
          description: "3-axis wrist with rotation, pitch, and roll",
          quantity: 1,
        },
        {
          id: "p-1-2-4",
          assetId: "1",
          name: "End Effector",
          partNumber: "RA-X1-EE-304",
          description: "Precision gripper with force feedback",
          quantity: 1,
        },
      ],
    },
  ],
  "2": [
    {
      id: "p-2-1",
      assetId: "2",
      name: "Chassis Assembly",
      partNumber: "SR-450-CA-001",
      description: "Main structural frame with suspension mounts",
      quantity: 1,
      imageUrl:
        "https://images.pexels.com/photos/8566570/pexels-photo-8566570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      children: [
        {
          id: "p-2-1-1",
          assetId: "2",
          name: "Main Frame",
          partNumber: "SR-450-MF-101",
          description: "Aluminum composite frame with mounting points",
          quantity: 1,
        },
        {
          id: "p-2-1-2",
          assetId: "2",
          name: "Suspension System",
          partNumber: "SR-450-SS-102",
          description: "Independent suspension with shock absorbers",
          quantity: 1,
          children: [
            {
              id: "p-2-1-2-1",
              assetId: "2",
              name: "Front Suspension",
              partNumber: "SR-450-FS-121",
              description: "Double wishbone suspension for front wheels",
              quantity: 1,
            },
            {
              id: "p-2-1-2-2",
              assetId: "2",
              name: "Rear Suspension",
              partNumber: "SR-450-RS-122",
              description: "Trailing arm suspension for rear wheels",
              quantity: 1,
            },
          ],
        },
      ],
    },
    {
      id: "p-2-2",
      assetId: "2",
      name: "Drivetrain",
      partNumber: "SR-450-DT-002",
      description: "4-wheel drive system with independent motors",
      quantity: 1,
      children: [
        {
          id: "p-2-2-1",
          assetId: "2",
          name: "Wheel Assembly",
          partNumber: "SR-450-WA-201",
          description: "All-terrain wheel with hub motor",
          quantity: 4,
          children: [
            {
              id: "p-2-2-1-1",
              assetId: "2",
              name: "Hub Motor",
              partNumber: "SR-450-HM-211",
              description: "500W brushless hub motor",
              quantity: 1,
            },
            {
              id: "p-2-2-1-2",
              assetId: "2",
              name: "Tire",
              partNumber: "SR-450-TR-212",
              description: "Puncture-resistant all-terrain tire",
              quantity: 1,
            },
          ],
        },
        {
          id: "p-2-2-2",
          assetId: "2",
          name: "Motor Controller",
          partNumber: "SR-450-MC-202",
          description: "Quad motor controller with traction control",
          quantity: 1,
        },
      ],
    },
  ],
};

export const cadModels: Record<string, CadModel[]> = {
  "1": [
    {
      id: "cm-1-1",
      assetId: "1",
      name: "Complete Assembly",
      format: "STEP",
      fileSize: "25.4 MB",
      lastUpdated: "2023-06-20",
      previewUrl:
        "https://images.pexels.com/photos/8566437/pexels-photo-8566437.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cm-1-2",
      assetId: "1",
      name: "Base Assembly",
      format: "STEP",
      fileSize: "8.2 MB",
      lastUpdated: "2023-06-15",
      previewUrl:
        "https://images.pexels.com/photos/5207288/pexels-photo-5207288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cm-1-3",
      assetId: "1",
      name: "Arm Assembly",
      format: "STEP",
      fileSize: "12.1 MB",
      lastUpdated: "2023-06-18",
      previewUrl:
        "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cm-1-4",
      assetId: "1",
      name: "End Effector",
      format: "STEP",
      fileSize: "5.7 MB",
      lastUpdated: "2023-06-17",
      previewUrl:
        "https://images.pexels.com/photos/8566556/pexels-photo-8566556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],
  "2": [
    {
      id: "cm-2-1",
      assetId: "2",
      name: "Complete Assembly",
      format: "STEP",
      fileSize: "32.8 MB",
      lastUpdated: "2023-08-14",
      previewUrl:
        "https://images.pexels.com/photos/8566570/pexels-photo-8566570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cm-2-2",
      assetId: "2",
      name: "Chassis Frame",
      format: "STEP",
      fileSize: "10.5 MB",
      lastUpdated: "2023-08-10",
      previewUrl:
        "https://images.pexels.com/photos/7140250/pexels-photo-7140250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cm-2-3",
      assetId: "2",
      name: "Suspension System",
      format: "STEP",
      fileSize: "8.7 MB",
      lastUpdated: "2023-08-12",
      previewUrl:
        "https://images.pexels.com/photos/6770611/pexels-photo-6770611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      id: "cm-2-4",
      assetId: "2",
      name: "Wheel Assembly",
      format: "STEP",
      fileSize: "4.2 MB",
      lastUpdated: "2023-08-13",
      previewUrl:
        "https://images.pexels.com/photos/614070/pexels-photo-614070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ],
};

export const getAllAssets = (): Asset[] => {
  return assets;
};

export const getAssetById = (id: string): Asset | undefined => {
  return assets.find((asset) => asset.id === id);
};

export const getProductInfo = (assetId: string): ProductInfo | undefined => {
  return productInfos[assetId];
};

export const getRepairInstructions = (assetId: string): RepairInstruction[] => {
  return repairInstructions[assetId] || [];
};

export const getParts = (assetId: string): Part[] => {
  return parts[assetId] || [];
};

export const getCadModels = (assetId: string): CadModel[] => {
  return cadModels[assetId] || [];
};

export const searchAssets = (query: string): Asset[] => {
  const lowercaseQuery = query.toLowerCase();
  return assets.filter(
    (asset) =>
      asset.name.toLowerCase().includes(lowercaseQuery) ||
      asset.model.toLowerCase().includes(lowercaseQuery) ||
      asset.manufacturer.toLowerCase().includes(lowercaseQuery) ||
      asset.category.toLowerCase().includes(lowercaseQuery) ||
      asset.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const searchParts = (query: string): { part: Part; asset: Asset }[] => {
  const lowercaseQuery = query.toLowerCase();
  const results: { part: Part; asset: Asset }[] = [];

  const searchPartsRecursive = (part: Part, asset: Asset) => {
    if (
      part.name.toLowerCase().includes(lowercaseQuery) ||
      part.partNumber.toLowerCase().includes(lowercaseQuery) ||
      part.description.toLowerCase().includes(lowercaseQuery)
    ) {
      results.push({ part, asset });
    }

    if (part.children) {
      part.children.forEach((child) => searchPartsRecursive(child, asset));
    }
  };

  Object.entries(parts).forEach(([assetId, assetParts]) => {
    const asset = getAssetById(assetId);
    if (asset) {
      assetParts.forEach((part) => searchPartsRecursive(part, asset));
    }
  });

  return results;
};

export const getAllAssetIds = (): string[] => {
  return assets.map((asset) => asset.id);
};
