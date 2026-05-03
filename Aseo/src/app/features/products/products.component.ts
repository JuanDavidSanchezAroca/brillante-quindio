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
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="page-tag">Tienda</span>
        <h1>Productos de <span class="text-gradient">Aseo</span></h1>
        <p>
          Los mejores productos de limpieza que usamos en nuestros servicios, 
          ahora disponibles para ti.
        </p>
      </div>
    </section>
    
    <!-- Filtros por categoría -->
    <section class="filters-section">
      <div class="container">
        <div class="filters-wrapper">
          <button 
            class="filter-btn"
            [class.active]="selectedCategory() === null"
            (click)="selectCategory(null)"
          >
            <span class="filter-icon">🛒</span>
            <span>Todos</span>
          </button>
          
          @for (category of categories(); track category.id) {
            <button 
              class="filter-btn"
              [class.active]="selectedCategory() === category.id"
              (click)="selectCategory(category.id)"
            >
              <span class="filter-icon">{{ category.icon }}</span>
              <span>{{ category.name }}</span>
            </button>
          }
        </div>
        
        <div class="filter-toggle">
          <label class="eco-toggle">
            <input 
              type="checkbox" 
              [checked]="showEcoOnly()"
              (change)="toggleEco()"
            >
            <span class="toggle-slider"></span>
            <span class="toggle-label">🌱 Solo ecológicos</span>
          </label>
        </div>
      </div>
    </section>
    
    <!-- Grid de productos -->
    <section class="products-section section">
      <div class="container">
        <div class="products-header">
          <p class="results-count">
            {{ filteredProducts().length }} productos encontrados
          </p>
        </div>
        
        <div class="products-grid">
          @for (product of filteredProducts(); track product.id) {
            <article class="product-card" [class.eco]="product.isEco">
              @if (product.isEco) {
                <span class="eco-badge">🌱 Eco</span>
              }
              
              <div class="product-icon">
                {{ product.icon }}
              </div>
              
              <div class="product-content">
                <span class="product-brand">{{ product.brand }}</span>
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
                
                <ul class="product-features">
                  @for (feature of product.features.slice(0, 3); track feature) {
                    <li>{{ feature }}</li>
                  }
                </ul>
                
                <div class="product-footer">
                  <span class="product-price">{{ formatPrice(product.price) }}</span>
                  
                  <a 
                    [href]="getWhatsAppLink(product)" 
                    target="_blank" 
                    class="buy-btn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Pedir
                  </a>
                </div>
              </div>
            </article>
          } @empty {
            <div class="empty-state">
              <span class="empty-icon">🔍</span>
              <h3>No hay productos</h3>
              <p>No encontramos productos con los filtros seleccionados.</p>
              <button class="reset-btn" (click)="resetFilters()">
                Ver todos los productos
              </button>
            </div>
          }
        </div>
      </div>
    </section>
    
    <!-- Beneficios -->
    <section class="benefits section">
      <div class="container">
        <div class="benefits-grid">
          <div class="benefit">
            <span class="benefit-icon">🚚</span>
            <h4>Envío en el Quindío</h4>
            <p>Entrega a domicilio en todo el departamento</p>
          </div>
          <div class="benefit">
            <span class="benefit-icon">💳</span>
            <h4>Múltiples pagos</h4>
            <p>Efectivo, transferencia o Nequi</p>
          </div>
          <div class="benefit">
            <span class="benefit-icon">✅</span>
            <h4>Productos originales</h4>
            <p>Garantía de autenticidad en todos los productos</p>
          </div>
          <div class="benefit">
            <span class="benefit-icon">🌱</span>
            <h4>Línea ecológica</h4>
            <p>Opciones amigables con el medio ambiente</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>¿Necesitas productos al por mayor?</h2>
          <p>Ofrecemos precios especiales para empresas y grandes pedidos.</p>
          <a [href]="wholesaleWhatsApp" target="_blank" class="cta-btn">
            Cotizar al por mayor
          </a>
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
    
    .filters-section {
      background: var(--color-background);
      padding: var(--space-xl) 0;
      border-bottom: 1px solid rgba(26, 77, 46, 0.08);
      position: sticky;
      top: 60px;
      z-index: 100;
    }
    
    .filters-wrapper {
      display: flex;
      gap: var(--space-sm);
      overflow-x: auto;
      padding-bottom: var(--space-sm);
      margin-bottom: var(--space-md);
      
      &::-webkit-scrollbar {
        height: 4px;
      }
      
      &::-webkit-scrollbar-thumb {
        background: var(--color-secondary);
        border-radius: var(--radius-full);
      }
    }
    
    .filter-btn {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      padding: var(--space-sm) var(--space-md);
      background: var(--color-surface);
      border: 2px solid transparent;
      border-radius: var(--radius-full);
      font-family: var(--font-display);
      font-weight: 500;
      font-size: 0.9rem;
      color: var(--color-text);
      cursor: pointer;
      white-space: nowrap;
      transition: all var(--transition-fast);
      
      .filter-icon {
        font-size: 1.2rem;
      }
      
      &:hover {
        background: var(--color-primary);
        color: var(--color-text-light);
      }
      
      &.active {
        background: var(--color-primary);
        color: var(--color-text-light);
        border-color: var(--color-primary-dark);
      }
    }
    
    .filter-toggle {
      display: flex;
      justify-content: flex-end;
    }
    
    .eco-toggle {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      cursor: pointer;
      
      input {
        display: none;
      }
      
      .toggle-slider {
        width: 44px;
        height: 24px;
        background: var(--color-surface-alt);
        border-radius: var(--radius-full);
        position: relative;
        transition: background var(--transition-fast);
        
        &::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: transform var(--transition-fast);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
      }
      
      input:checked + .toggle-slider {
        background: var(--color-primary);
        
        &::before {
          transform: translateX(20px);
        }
      }
      
      .toggle-label {
        font-family: var(--font-display);
        font-weight: 500;
        font-size: 0.9rem;
        color: var(--color-text);
      }
    }
    
    .products-section {
      background: var(--color-background);
      padding-top: var(--space-2xl);
    }
    
    .products-header {
      margin-bottom: var(--space-xl);
    }
    
    .results-count {
      color: var(--color-text-muted);
      font-size: 0.95rem;
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
      
      @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
      }
      
      @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 576px) {
        grid-template-columns: 1fr;
      }
    }
    
    .product-card {
      background: var(--color-surface);
      border-radius: var(--radius-lg);
      padding: var(--space-lg);
      position: relative;
      transition: all var(--transition-base);
      display: flex;
      flex-direction: column;
      
      &:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-medium);
        
        .product-icon {
          transform: scale(1.1) rotate(5deg);
        }
      }
      
      &.eco {
        border: 2px solid rgba(26, 77, 46, 0.2);
      }
    }
    
    .eco-badge {
      position: absolute;
      top: var(--space-md);
      right: var(--space-md);
      background: var(--color-primary);
      color: var(--color-text-light);
      font-size: 0.75rem;
      font-weight: 600;
      padding: var(--space-xs) var(--space-sm);
      border-radius: var(--radius-sm);
    }
    
    .product-icon {
      font-size: 3rem;
      margin-bottom: var(--space-md);
      transition: transform var(--transition-bounce);
    }
    
    .product-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
    }
    
    .product-brand {
      font-size: 0.8rem;
      color: var(--color-accent);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: var(--space-xs);
    }
    
    .product-card h3 {
      font-size: 1.1rem;
      margin-bottom: var(--space-sm);
      color: var(--color-primary-dark);
      line-height: 1.3;
    }
    
    .product-card p {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      line-height: 1.5;
      margin-bottom: var(--space-md);
      flex-grow: 1;
    }
    
    .product-features {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-xs);
      list-style: none;
      margin-bottom: var(--space-lg);
      
      li {
        background: var(--color-background);
        padding: var(--space-xs) var(--space-sm);
        border-radius: var(--radius-sm);
        font-size: 0.75rem;
        color: var(--color-primary);
        font-weight: 500;
      }
    }
    
    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: var(--space-md);
      border-top: 1px solid rgba(26, 77, 46, 0.08);
      margin-top: auto;
    }
    
    .product-price {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1.1rem;
      color: var(--color-primary);
    }
    
    .buy-btn {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      background: #25D366;
      color: white;
      padding: var(--space-sm) var(--space-md);
      border-radius: var(--radius-full);
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 0.85rem;
      text-decoration: none;
      transition: all var(--transition-fast);
      
      &:hover {
        background: #128C7E;
        transform: scale(1.05);
        color: white;
      }
    }
    
    .empty-state {
      grid-column: 1 / -1;
      text-align: center;
      padding: var(--space-4xl) var(--space-xl);
      
      .empty-icon {
        font-size: 4rem;
        display: block;
        margin-bottom: var(--space-lg);
      }
      
      h3 {
        margin-bottom: var(--space-sm);
      }
      
      p {
        color: var(--color-text-muted);
        margin-bottom: var(--space-xl);
      }
      
      .reset-btn {
        background: var(--color-primary);
        color: var(--color-text-light);
        padding: var(--space-md) var(--space-xl);
        border: none;
        border-radius: var(--radius-full);
        font-family: var(--font-display);
        font-weight: 600;
        cursor: pointer;
        transition: all var(--transition-fast);
        
        &:hover {
          background: var(--color-primary-dark);
        }
      }
    }
    
    .benefits {
      background: var(--color-surface);
    }
    
    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
      
      @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      @media (max-width: 576px) {
        grid-template-columns: 1fr;
      }
    }
    
    .benefit {
      text-align: center;
      padding: var(--space-xl);
      
      .benefit-icon {
        font-size: 2.5rem;
        display: block;
        margin-bottom: var(--space-md);
      }
      
      h4 {
        font-size: 1rem;
        margin-bottom: var(--space-sm);
        color: var(--color-primary-dark);
      }
      
      p {
        font-size: 0.9rem;
        color: var(--color-text-muted);
      }
    }
    
    .cta-section {
      background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%);
      padding: var(--space-4xl) 0;
    }
    
    .cta-content {
      text-align: center;
      
      h2 {
        color: var(--color-text-light);
        margin-bottom: var(--space-md);
      }
      
      p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 1.2rem;
        margin-bottom: var(--space-xl);
        max-width: none;
      }
      
      .cta-btn {
        display: inline-block;
        background: var(--color-primary-dark);
        color: var(--color-text-light);
        padding: var(--space-md) var(--space-2xl);
        border-radius: var(--radius-full);
        font-family: var(--font-display);
        font-weight: 600;
        text-decoration: none;
        transition: all var(--transition-fast);
        
        &:hover {
          background: var(--color-primary);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
          color: var(--color-text-light);
        }
      }
    }
  `]
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
}
