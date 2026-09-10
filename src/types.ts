export interface DoctorInfo {
  name: string;
  bengaliName: string;
  specialization: string;
  bengaliSpecialization: string;
  location: string;
  clinic: string;
  address: {
    line1: string;
    line2: string;
    area: string;
    city: string;
    state: string;
    pincode: string;
    plusCode: string;
  };
  phone: string;
  phoneRaw: string;
  whatsappUrl: string;
  profilePhoto: string;
  profilePhotoLocal: string;
  googleRating: number;
  totalReviews: number;
  googleListingStatus: string;
  mapsUrl: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  verifiedTheme: string;
}

export interface SpecialtyItem {
  id: string;
  title: string;
  bengaliTitle?: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  fallbackSrc: string;
  alt: string;
  label: string;
  aspect: string;
  description: string;
}

export interface AppointmentFormData {
  fullName: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  message: string;
}
