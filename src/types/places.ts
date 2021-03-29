export interface Place {
  id?: number;
  name: string;
  lat: number;
  lon: number;
  description: string;
  phone: string;
  zip: number;
  address: string;
  cap: number;
  city: string;
  province: string;
  categories: number;
  extra?: string;
}
