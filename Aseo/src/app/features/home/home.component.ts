import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from '@shared/components';
import { ProductService, ContactService, TestimonialService } from '@core/services';
import { Product, ProductCategoryInfo, Testimonial } from '@core/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  private productService = inject(ProductService);
  private contactService = inject(ContactService);
  private testimonialService = inject(TestimonialService);

  categories = signal<ProductCategoryInfo[]>([]);
  featuredProducts = signal<Product[]>([]);
  testimonials = signal<Testimonial[]>([]);
  whatsappLink = '';

  ngOnInit(): void {
    this.productService.getCategories().subscribe(cats => {
      this.categories.set(cats);
    });

    this.productService.getProducts().subscribe(products => {
      this.featuredProducts.set(products.slice(0, 8));
    });

    this.testimonialService.getTopTestimonials(3).subscribe(t => {
      this.testimonials.set(t);
    });

    this.whatsappLink = this.contactService.getWhatsAppLink(
      '¡Hola! Me interesan sus productos de aseo.'
    );
  }

  formatPrice(price: number): string {
    return this.productService.formatPrice(price);
  }

  getWhatsAppLink(product: Product): string {
    return this.contactService.getWhatsAppLink(
      `¡Hola! Me interesa: ${product.name} (${this.formatPrice(product.price)})`
    );
  }

  getInitials(name: string): string {
    return name.split(' ').slice(0, 2).map(n => n[0]).join('').toUpperCase();
  }
}
