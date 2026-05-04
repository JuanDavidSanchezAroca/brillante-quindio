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
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
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
