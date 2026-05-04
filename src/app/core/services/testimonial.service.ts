import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Testimonial } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  
  private testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'María Fernanda Gómez',
      location: 'Armenia, Quindío',
      comment: 'Excelentes productos y envío súper rápido. El desinfectante natural de cítricos es mi favorito, huele delicioso y rinde muchísimo.',
      rating: 5,
      serviceType: 'Desinfectantes',
      date: new Date('2024-01-15')
    },
    {
      id: '2',
      name: 'Carlos Alberto Mejía',
      location: 'Montenegro, Quindío',
      comment: 'Siempre compro aquí los productos para mi negocio. Buenos precios y productos originales. El envío llega al día siguiente.',
      rating: 5,
      serviceType: 'Compras mayoristas',
      date: new Date('2024-01-20')
    },
    {
      id: '3',
      name: 'Andrea Valentina Ríos',
      location: 'Quimbaya, Quindío',
      comment: 'Me encanta la línea ecológica. Por fin encontré productos que limpian bien sin dañar el medio ambiente. 100% recomendados.',
      rating: 5,
      serviceType: 'Productos Eco',
      date: new Date('2024-02-01')
    },
    {
      id: '4',
      name: 'Roberto Andrés López',
      location: 'Calarcá, Quindío',
      comment: 'La mopa de microfibra es espectacular, hace el trabajo mucho más fácil. Y los paños son de excelente calidad.',
      rating: 5,
      serviceType: 'Implementos',
      date: new Date('2024-02-10')
    },
    {
      id: '5',
      name: 'Patricia Elena Vargas',
      location: 'La Tebaida, Quindío',
      comment: 'Pedí varios productos por WhatsApp y me llegaron perfectos. El limpiador de pisos de madera dejó mis pisos como nuevos.',
      rating: 5,
      serviceType: 'Limpiadores',
      date: new Date('2024-02-15')
    }
  ];

  getTestimonials(): Observable<Testimonial[]> {
    return of(this.testimonials);
  }

  getTopTestimonials(count: number = 3): Observable<Testimonial[]> {
    return of(this.testimonials.slice(0, count));
  }
}
