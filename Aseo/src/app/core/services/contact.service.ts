import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ContactForm, ContactInfo } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  
  private contactInfo: ContactInfo = {
    phone: '+57 316 456 7890',
    whatsapp: '573164567890',
    email: 'contacto@brillantequindio.com',
    address: 'Calle 20 #15-32, Centro',
    city: 'Armenia, Quindío',
    workingHours: {
      weekdays: 'Lunes a Viernes: 7:00 AM - 6:00 PM',
      saturday: 'Sábados: 8:00 AM - 4:00 PM',
      sunday: 'Domingos: Solo emergencias'
    },
    socialMedia: {
      facebook: 'https://facebook.com/brillantequindio',
      instagram: 'https://instagram.com/brillantequindio',
      tiktok: 'https://tiktok.com/@brillantequindio'
    }
  };

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  submitContactForm(form: ContactForm): Observable<{ success: boolean; message: string }> {
    // Simula envío de formulario
    console.log('Formulario enviado:', form);
    return of({
      success: true,
      message: '¡Gracias por contactarnos! Te responderemos pronto.'
    }).pipe(delay(1500));
  }

  getWhatsAppLink(message?: string): string {
    const baseUrl = 'https://wa.me/';
    const encodedMessage = message ? `?text=${encodeURIComponent(message)}` : '';
    return `${baseUrl}${this.contactInfo.whatsapp}${encodedMessage}`;
  }
}
