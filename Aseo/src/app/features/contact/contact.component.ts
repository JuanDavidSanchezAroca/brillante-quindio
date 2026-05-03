import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from '@shared/components';
import { ContactService, ProductService } from '@core/services';
import { ContactInfo, ProductCategoryInfo } from '@core/models';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ButtonComponent],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="page-tag">Contacto</span>
        <h1>¿Cómo podemos <span class="text-gradient">ayudarte</span>?</h1>
        <p>
          Estamos aquí para resolver tus dudas y tomar tu pedido.
        </p>
      </div>
    </section>
    
    <section class="contact-section section">
      <div class="container">
        <div class="contact-grid">
          
          <div class="contact-form-wrapper">
            <h2>Envíanos un mensaje</h2>
            <p>Completa el formulario y te responderemos pronto.</p>
            
            <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="contact-form">
              <div class="form-group">
                <label for="name">Nombre completo *</label>
                <input 
                  type="text" 
                  id="name" 
                  formControlName="name"
                  placeholder="Tu nombre"
                  [class.error]="isFieldInvalid('name')"
                >
                @if (isFieldInvalid('name')) {
                  <span class="error-message">El nombre es requerido</span>
                }
              </div>
              
              <div class="form-row">
                <div class="form-group">
                  <label for="email">Correo electrónico *</label>
                  <input 
                    type="email" 
                    id="email" 
                    formControlName="email"
                    placeholder="tu@correo.com"
                    [class.error]="isFieldInvalid('email')"
                  >
                  @if (isFieldInvalid('email')) {
                    <span class="error-message">Ingresa un correo válido</span>
                  }
                </div>
                
                <div class="form-group">
                  <label for="phone">Teléfono / WhatsApp *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    formControlName="phone"
                    placeholder="300 123 4567"
                    [class.error]="isFieldInvalid('phone')"
                  >
                  @if (isFieldInvalid('phone')) {
                    <span class="error-message">El teléfono es requerido</span>
                  }
                </div>
              </div>
              
              <div class="form-group">
                <label for="subject">Asunto</label>
                <select id="subject" formControlName="subject">
                  <option value="">Selecciona un asunto</option>
                  <option value="pedido">Quiero hacer un pedido</option>
                  <option value="mayorista">Compra al por mayor</option>
                  <option value="disponibilidad">Consultar disponibilidad</option>
                  <option value="envio">Información de envío</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              
              <div class="form-group">
                <label for="message">Mensaje *</label>
                <textarea 
                  id="message" 
                  formControlName="message"
                  rows="5"
                  placeholder="Cuéntanos qué productos necesitas o escribe tu consulta..."
                  [class.error]="isFieldInvalid('message')"
                ></textarea>
                @if (isFieldInvalid('message')) {
                  <span class="error-message">El mensaje es requerido</span>
                }
              </div>
              
              <app-button 
                type="submit" 
                variant="accent" 
                size="lg" 
                [loading]="isSubmitting"
                [disabled]="contactForm.invalid"
              >
                Enviar mensaje
              </app-button>
              
              @if (submitMessage) {
                <div class="submit-message" [class.success]="submitSuccess">
                  {{ submitMessage }}
                </div>
              }
            </form>
          </div>
          
          <div class="contact-info-wrapper">
            <div class="whatsapp-card">
              <div class="whatsapp-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
              <h3>¿Prefieres WhatsApp?</h3>
              <p>Es la forma más rápida de hacer tu pedido</p>
              <a [href]="whatsappLink" target="_blank" class="whatsapp-button">
                Escríbenos ahora
              </a>
            </div>
            
            <div class="info-card">
              <h3>Información de contacto</h3>
              
              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div class="info-content">
                  <span class="info-label">Teléfono</span>
                  <a href="tel:+573164567890">{{ contactInfo?.phone }}</a>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div class="info-content">
                  <span class="info-label">Correo</span>
                  <a href="mailto:contacto@brillantequindio.com">{{ contactInfo?.email }}</a>
                </div>
              </div>
              
              <div class="info-item">
                <div class="info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div class="info-content">
                  <span class="info-label">Ubicación</span>
                  <span>{{ contactInfo?.city }}</span>
                </div>
              </div>
            </div>
            
            <div class="hours-card">
              <h3>Horarios de atención</h3>
              <ul>
                <li>
                  <span>Lunes a Viernes</span>
                  <span>8:00 AM - 6:00 PM</span>
                </li>
                <li>
                  <span>Sábados</span>
                  <span>8:00 AM - 2:00 PM</span>
                </li>
                <li>
                  <span>Domingos</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-hero {
      padding: calc(80px + var(--space-4xl)) 0 var(--space-4xl);
      background: var(--color-surface);
      text-align: center;
      
      .page-tag {
        display: inline-block;
        background: var(--color-primary);
        color: var(--color-text-light);
        padding: var(--space-xs) var(--space-md);
        border-radius: var(--radius-full);
        font-family: var(--font-display);
        font-weight: 600;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin-bottom: var(--space-lg);
      }
      
      h1 {
        margin-bottom: var(--space-lg);
      }
      
      p {
        max-width: 600px;
        margin: 0 auto;
        font-size: 1.2rem;
      }
    }
    
    .contact-section {
      background: var(--color-background);
    }
    
    .contact-grid {
      display: grid;
      grid-template-columns: 1.2fr 1fr;
      gap: var(--space-4xl);
      
      @media (max-width: 992px) {
        grid-template-columns: 1fr;
      }
    }
    
    .contact-form-wrapper {
      h2 {
        margin-bottom: var(--space-sm);
      }
      
      > p {
        color: var(--color-text-muted);
        margin-bottom: var(--space-2xl);
      }
    }
    
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: var(--space-lg);
    }
    
    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-lg);
      
      @media (max-width: 576px) {
        grid-template-columns: 1fr;
      }
    }
    
    .form-group {
      display: flex;
      flex-direction: column;
      gap: var(--space-sm);
    }
    
    label {
      font-family: var(--font-display);
      font-weight: 500;
      font-size: 0.95rem;
      color: var(--color-primary-dark);
    }
    
    input, select, textarea {
      padding: var(--space-md);
      border: 2px solid rgba(26, 77, 46, 0.15);
      border-radius: var(--radius-md);
      font-family: var(--font-body);
      font-size: 1rem;
      color: var(--color-text);
      background: var(--color-background);
      transition: all var(--transition-fast);
      
      &:focus {
        outline: none;
        border-color: var(--color-primary);
        box-shadow: 0 0 0 3px rgba(26, 77, 46, 0.1);
      }
      
      &::placeholder {
        color: var(--color-text-muted);
        opacity: 0.6;
      }
      
      &.error {
        border-color: #e53935;
      }
    }
    
    select {
      cursor: pointer;
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%231a4d2e' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 12px center;
      background-size: 20px;
      padding-right: 48px;
    }
    
    textarea {
      resize: vertical;
      min-height: 120px;
    }
    
    .error-message {
      color: #e53935;
      font-size: 0.85rem;
    }
    
    .submit-message {
      padding: var(--space-md);
      border-radius: var(--radius-md);
      background: #ffebee;
      color: #c62828;
      font-size: 0.95rem;
      
      &.success {
        background: #e8f5e9;
        color: #2e7d32;
      }
    }
    
    .contact-info-wrapper {
      display: flex;
      flex-direction: column;
      gap: var(--space-xl);
    }
    
    .whatsapp-card {
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      text-align: center;
      color: white;
      
      .whatsapp-icon {
        margin-bottom: var(--space-md);
      }
      
      h3 {
        color: white;
        margin-bottom: var(--space-sm);
      }
      
      p {
        color: rgba(255, 255, 255, 0.9);
        margin-bottom: var(--space-lg);
      }
      
      .whatsapp-button {
        display: inline-block;
        background: white;
        color: #128C7E;
        padding: var(--space-md) var(--space-xl);
        border-radius: var(--radius-full);
        font-family: var(--font-display);
        font-weight: 600;
        text-decoration: none;
        transition: all var(--transition-fast);
        
        &:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }
      }
    }
    
    .info-card, .hours-card {
      background: var(--color-surface);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      
      h3 {
        font-size: 1.1rem;
        margin-bottom: var(--space-lg);
        color: var(--color-primary-dark);
      }
    }
    
    .info-item {
      display: flex;
      gap: var(--space-md);
      padding: var(--space-md) 0;
      border-bottom: 1px solid rgba(26, 77, 46, 0.08);
      
      &:last-child {
        border-bottom: none;
        padding-bottom: 0;
      }
      
      &:first-of-type {
        padding-top: 0;
      }
    }
    
    .info-icon {
      width: 44px;
      height: 44px;
      background: var(--color-background);
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-primary);
      flex-shrink: 0;
    }
    
    .info-content {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .info-label {
      font-size: 0.85rem;
      color: var(--color-text-muted);
    }
    
    .info-content a, .info-content span:not(.info-label) {
      font-family: var(--font-display);
      font-weight: 500;
      color: var(--color-primary-dark);
    }
    
    .info-content a:hover {
      color: var(--color-accent);
    }
    
    .hours-card ul {
      list-style: none;
    }
    
    .hours-card li {
      display: flex;
      justify-content: space-between;
      padding: var(--space-sm) 0;
      font-size: 0.95rem;
      
      span:first-child {
        color: var(--color-text-muted);
      }
      
      span:last-child {
        font-family: var(--font-display);
        font-weight: 500;
        color: var(--color-primary-dark);
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  private fb = inject(FormBuilder);
  private contactService = inject(ContactService);
  
  contactForm!: FormGroup;
  contactInfo: ContactInfo | null = null;
  whatsappLink = '';
  
  isSubmitting = false;
  submitMessage = '';
  submitSuccess = false;
  
  ngOnInit(): void {
    this.initForm();
    this.loadData();
  }
  
  private initForm(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      subject: [''],
      message: ['', Validators.required]
    });
  }
  
  private loadData(): void {
    this.contactService.getContactInfo().subscribe(info => {
      this.contactInfo = info;
    });
    
    this.whatsappLink = this.contactService.getWhatsAppLink(
      '¡Hola! Quiero hacer un pedido de productos de aseo.'
    );
  }
  
  isFieldInvalid(field: string): boolean {
    const control = this.contactForm.get(field);
    return control ? control.invalid && control.touched : false;
  }
  
  onSubmit(): void {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }
    
    this.isSubmitting = true;
    this.submitMessage = '';
    
    this.contactService.submitContactForm(this.contactForm.value).subscribe({
      next: (response) => {
        this.isSubmitting = false;
        this.submitSuccess = response.success;
        this.submitMessage = response.message;
        
        if (response.success) {
          this.contactForm.reset();
        }
      },
      error: () => {
        this.isSubmitting = false;
        this.submitSuccess = false;
        this.submitMessage = 'Hubo un error al enviar el formulario. Por favor intenta de nuevo.';
      }
    });
  }
}
