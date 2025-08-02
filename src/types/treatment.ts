export interface TreatmentService {
  serviceId: string;
  description: string;
  targetAreas: string[];
  type: string;
  price?: number;
  priceRangeMin?: number;
  priceRangeMax?: number;
  currency: string;
}

export interface TreatmentImage {
  purpose: string;
  imageKey: string;
}

export interface Treatment {
  treatmentId: string;
  name: string;
  shortDescription: string;
  category: string;
  treatmentAreas: string[];
  targetResults: string[];
  status: string;
  images: TreatmentImage[];
  services: TreatmentService[];
}
