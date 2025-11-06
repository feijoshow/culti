// Coordinates for production zones used by the app.
// Edit these values to match your real region locations. They are kept
// in one file so they can be updated without touching code that queries the API.
export const regionCoordinates: { [region: string]: { latitude: number; longitude: number } } = {
  // Keys matching the UI region names (used by app/data/regions.ts)
  Central: { latitude: -22.5609, longitude: 17.0658 }, // Windhoek area
  Karst: { latitude: -26.5296, longitude: 15.8060 }, // approximate
  Kavango: { latitude: -17.9333, longitude: 20.8333 },
  'North Central': { latitude: -20.0, longitude: 17.0 },
  'Orange River': { latitude: -28.7, longitude: 17.9333 },
  South: { latitude: -24.0, longitude: 17.0 },
  Zambezi: { latitude: -17.5, longitude: 22.5 },

  // Backwards-compatible keys (older code used '... Production Zone')
  'Central Production Zone': { latitude: -22.5609, longitude: 17.0658 },
  'Karst Production Zone': { latitude: -26.5296, longitude: 15.8060 },
  'Kavango Production Zone': { latitude: -17.9333, longitude: 20.8333 },
  'North Central Production Zone': { latitude: -20.0, longitude: 17.0 },
  'Orange River Production Zone': { latitude: -28.7, longitude: 17.9333 },
  'South Production Zone': { latitude: -24.0, longitude: 17.0 },
  'Zambezi Production Zone': { latitude: -17.5, longitude: 22.5 },
};

export default regionCoordinates;
