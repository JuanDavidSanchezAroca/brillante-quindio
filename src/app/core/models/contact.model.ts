export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
  preferredDate?: Date;
  preferredTime?: string;
}

export interface ContactInfo {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  city: string;
  workingHours: WorkingHours;
  socialMedia: SocialMedia;
}

export interface WorkingHours {
  weekdays: string;
  saturday: string;
  sunday: string;
}

export interface SocialMedia {
  facebook?: string;
  instagram?: string;
  tiktok?: string;
}
