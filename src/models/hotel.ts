export interface Hotel {
  comment: string;
  contents: string;
  id: string;
  images: string[];
  location: Location;
  mainImageUrl: string;
  name: string;
  price: number;
  starRating: number;
}

interface Location {
  directions: string;
  pointGeolocation: GeoLocation;
}

interface GeoLocation {
  x: number;
  y: number;
}
