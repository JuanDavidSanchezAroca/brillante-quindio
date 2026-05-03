import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Testimonial } from '@core/models';

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="testimonial-card">
      <div class="quote-icon">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path d="M12 8H6C4.89543 8 4 8.89543 4 10V16C4 17.1046 4.89543 18 6 18H10V22C10 23.1046 9.10457 24 8 24H6V28H8C11.3137 28 14 25.3137 14 22V10C14 8.89543 13.1046 8 12 8Z" fill="currentColor"/>
          <path d="M26 8H20C18.8954 8 18 8.89543 18 10V16C18 17.1046 18.8954 18 20 18H24V22C24 23.1046 23.1046 24 22 24H20V28H22C25.3137 28 28 25.3137 28 22V10C28 8.89543 27.1046 8 26 8Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div class="rating">
        @for (star of [1,2,3,4,5]; track star) {
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 20 20" 
            [class.filled]="star <= testimonial.rating"
          >
            <path d="M10 1L12.39 6.36L18.18 7.27L14.09 11.27L15.18 17.05L10 14.27L4.82 17.05L5.91 11.27L1.82 7.27L7.61 6.36L10 1Z" 
              fill="currentColor" 
              stroke="currentColor" 
              stroke-width="1.5" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            />
          </svg>
        }
      </div>
      
      <p class="comment">"{{ testimonial.comment }}"</p>
      
      <div class="author">
        <div class="avatar">
          {{ getInitials(testimonial.name) }}
        </div>
        <div class="info">
          <span class="name">{{ testimonial.name }}</span>
          <span class="location">{{ testimonial.location }}</span>
          <span class="service">{{ testimonial.serviceType }}</span>
        </div>
      </div>
    </article>
  `,
  styles: [`
    .testimonial-card {
      background: var(--color-background);
      border: 1px solid rgba(26, 77, 46, 0.08);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      position: relative;
      transition: all var(--transition-base);
      height: 100%;
      display: flex;
      flex-direction: column;
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-soft);
        
        .quote-icon {
          transform: scale(1.1);
        }
      }
    }
    
    .quote-icon {
      color: var(--color-secondary);
      opacity: 0.5;
      margin-bottom: var(--space-md);
      transition: transform var(--transition-base);
    }
    
    .rating {
      display: flex;
      gap: 2px;
      margin-bottom: var(--space-lg);
      
      svg {
        color: #e0e0e0;
        
        &.filled {
          color: var(--color-accent);
        }
      }
    }
    
    .comment {
      font-size: 1.05rem;
      line-height: 1.7;
      color: var(--color-text);
      font-style: italic;
      flex-grow: 1;
      margin-bottom: var(--space-xl);
    }
    
    .author {
      display: flex;
      align-items: center;
      gap: var(--space-md);
      padding-top: var(--space-lg);
      border-top: 1px solid rgba(26, 77, 46, 0.08);
    }
    
    .avatar {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-text-light);
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 1rem;
    }
    
    .info {
      display: flex;
      flex-direction: column;
    }
    
    .name {
      font-family: var(--font-display);
      font-weight: 600;
      color: var(--color-primary-dark);
      font-size: 0.95rem;
    }
    
    .location {
      font-size: 0.85rem;
      color: var(--color-text-muted);
    }
    
    .service {
      font-size: 0.8rem;
      color: var(--color-accent);
      font-weight: 500;
    }
  `]
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
