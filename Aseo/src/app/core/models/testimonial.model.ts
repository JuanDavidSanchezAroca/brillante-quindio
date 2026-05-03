export interface Testimonial {
  id: string;
  name: string;
  location: string;
  comment: string;
  rating: number;
  avatar?: string;
  serviceType: string;
  date: Date;
}
