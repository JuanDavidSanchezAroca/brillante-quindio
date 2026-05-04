import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '@core/models';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCardComponent {
  @Input({ required: true }) testimonial!: Testimonial;

  getInitials(name: string): string {
    return name.split(' ')
      .slice(0, 2)
      .map(n => n[0])
      .join('')
      .toUpperCase();
  }
}
