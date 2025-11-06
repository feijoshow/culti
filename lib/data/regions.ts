// data/regions.ts

// Re-export the regionCoordinates and regions data
import { regions as regionsData } from "../../app/data/regions";
import regionCoordinates from "./regionCoordinates";

// Export the combined data
export { regionCoordinates };
export const regions = regionsData;