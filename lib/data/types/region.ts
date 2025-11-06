export interface RegionCrop {
  name: string;
  planting: number[];
  harvesting: number[];
}

export interface Region {
  name: string;
  crops: RegionCrop[];
}