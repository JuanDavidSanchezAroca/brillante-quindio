import { Component, inject, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProductService } from '@core/services/product.service';
import { Product, ProductCategory, ProductCategoryInfo } from '@core/models';
import { ContactService } from '@core/services';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  private productService = inject(ProductService);
  private contactService = inject(ContactService);

  categories = signal<ProductCategoryInfo[]>([]);
  products = signal<Product[]>([]);
  selectedCategory = signal<ProductCategory | null>(null);
  showEcoOnly = signal(false);

  wholesaleWhatsApp = '';

  filteredProducts = computed(() => {
    let result = this.products();

    if (this.selectedCategory()) {
      result = result.filter(p => p.category === this.selectedCategory());
    }

    if (this.showEcoOnly()) {
      result = result.filter(p => p.isEco);
    }

    return result;
  });

  ngOnInit(): void {
    this.productService.getCategories().subscribe(cats => {
      this.categories.set(cats);
    });

    this.productService.getProducts().subscribe(prods => {
      this.products.set(prods);
    });

    this.wholesaleWhatsApp = this.contactService.getWhatsAppLink(
      '¡Hola! Me interesa cotizar productos de aseo al por mayor.'
    );
  }

  selectCategory(category: ProductCategory | null): void {
    this.selectedCategory.set(category);
  }

  toggleEco(): void {
    this.showEcoOnly.update(v => !v);
  }

  resetFilters(): void {
    this.selectedCategory.set(null);
    this.showEcoOnly.set(false);
  }

  formatPrice(price: number): string {
    return this.productService.formatPrice(price);
  }

  getWhatsAppLink(product: Product): string {
    return this.contactService.getWhatsAppLink(
      `¡Hola! Me interesa el producto: ${product.name} (${this.formatPrice(product.price)})`
    );
  }

  onImageError(event: Event, product: Product): void {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
    const parent = img.parentElement;
    if (parent) {
      parent.textContent = product.icon;
    }
  }
}
