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
  template: `
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-pattern"></div>
        <div class="hero-gradient"></div>
      </div>
      
      <div class="container hero-content">
        <div class="hero-text">
          <span class="hero-badge">
            <span class="badge-icon">🧴</span>
            Tienda de Productos de Aseo
          </span>
          
          <h1>
            Todo para la<br>
            <span class="text-gradient">limpieza</span><br>
            de tu hogar
          </h1>
          
          <p class="hero-description">
            Los mejores productos de aseo del Quindío. Limpiadores, desinfectantes, 
            aromatizantes y más. Envíos a todo el departamento.
          </p>
          
          <div class="hero-cta">
            <a routerLink="/productos" class="btn-primary">
              Ver Catálogo
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
            <a [href]="whatsappLink" target="_blank" class="btn-whatsapp">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Pedir por WhatsApp
            </a>
          </div>
          
          <div class="hero-stats">
            <div class="stat">
              <span class="stat-number">50+</span>
              <span class="stat-label">Productos</span>
            </div>
            <div class="stat">
              <span class="stat-number">500+</span>
              <span class="stat-label">Clientes felices</span>
            </div>
            <div class="stat">
              <span class="stat-number">12</span>
              <span class="stat-label">Municipios</span>
            </div>
          </div>
        </div>
        
        <div class="hero-visual">
          <div class="hero-card hero-card-1">
            <span class="card-icon">🧴</span>
            <span class="card-text">Limpiadores</span>
          </div>
          <div class="hero-card hero-card-2">
            <span class="card-icon">🌸</span>
            <span class="card-text">Aromatizantes</span>
          </div>
          <div class="hero-card hero-card-3">
            <span class="card-icon">🧹</span>
            <span class="card-text">Implementos</span>
          </div>
          <div class="hero-illustration">
            <div class="illustration-circle"></div>
            <div class="illustration-sparkle sparkle-1">✦</div>
            <div class="illustration-sparkle sparkle-2">✦</div>
            <div class="illustration-sparkle sparkle-3">✦</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Categories Section -->
    <section class="categories section" id="categorias">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Categorías</span>
          <h2>Todo lo que necesitas<br><span class="text-gradient">para la limpieza</span></h2>
          <p>Productos de calidad para cada área de tu hogar u oficina.</p>
        </div>
        
        <div class="categories-grid">
          @for (category of categories(); track category.id) {
            <a [routerLink]="['/productos']" [queryParams]="{categoria: category.id}" class="category-card">
              <span class="category-icon">{{ category.icon }}</span>
              <h3>{{ category.name }}</h3>
              <p>{{ category.description }}</p>
              <span class="category-link">
                Ver productos
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </a>
          }
        </div>
      </div>
    </section>
    
    <!-- Featured Products Section -->
    <section class="featured section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Destacados</span>
          <h2>Productos <span class="text-gradient">más vendidos</span></h2>
          <p>Los favoritos de nuestros clientes en el Quindío.</p>
        </div>
        
        <div class="products-grid">
          @for (product of featuredProducts(); track product.id) {
            <article class="product-card" [class.eco]="product.isEco">
              @if (product.isEco) {
                <span class="eco-badge">🌱 Eco</span>
              }
              
              <div class="product-icon">{{ product.icon }}</div>
              
              <span class="product-brand">{{ product.brand }}</span>
              <h3>{{ product.name }}</h3>
              <p>{{ product.description }}</p>
              
              <div class="product-footer">
                <span class="product-price">{{ formatPrice(product.price) }}</span>
                <a [href]="getWhatsAppLink(product)" target="_blank" class="buy-btn">
                  Pedir
                </a>
              </div>
            </article>
          }
        </div>
        
        <div class="section-cta">
          <a routerLink="/productos" class="view-all-link">
            Ver todos los productos
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
    
    <!-- Benefits Section -->
    <section class="benefits section">
      <div class="container">
        <div class="benefits-grid">
          <div class="benefit">
            <div class="benefit-icon">🚚</div>
            <h4>Envío a domicilio</h4>
            <p>Entregamos en todo el Quindío. Armenia, Calarcá, Montenegro y más.</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">💳</div>
            <h4>Pago fácil</h4>
            <p>Efectivo, transferencia, Nequi o Daviplata. Como prefieras.</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">🌱</div>
            <h4>Línea ecológica</h4>
            <p>Productos biodegradables y amigables con el medio ambiente.</p>
          </div>
          <div class="benefit">
            <div class="benefit-icon">⭐</div>
            <h4>Calidad garantizada</h4>
            <p>Solo productos originales de las mejores marcas.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials section">
      <div class="container">
        <div class="section-header">
          <span class="section-tag">Opiniones</span>
          <h2>Lo que dicen<br><span class="text-gradient">nuestros clientes</span></h2>
        </div>
        
        <div class="testimonials-grid">
          @for (testimonial of testimonials(); track testimonial.id) {
            <div class="testimonial-card">
              <div class="testimonial-rating">
                @for (star of [1,2,3,4,5]; track star) {
                  <span class="star" [class.filled]="star <= testimonial.rating">★</span>
                }
              </div>
              <p class="testimonial-text">"{{ testimonial.comment }}"</p>
              <div class="testimonial-author">
                <div class="author-avatar">{{ getInitials(testimonial.name) }}</div>
                <div class="author-info">
                  <span class="author-name">{{ testimonial.name }}</span>
                  <span class="author-location">{{ testimonial.location }}</span>
                </div>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>¿Listo para <span class="highlight">ordenar</span>?</h2>
          <p>Haz tu pedido por WhatsApp y recibe tus productos en la puerta de tu casa.</p>
          
          <a [href]="whatsappLink" target="_blank" class="whatsapp-cta">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Hacer pedido por WhatsApp
          </a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    /* Hero Section */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      padding: var(--space-4xl) 0;
      overflow: hidden;
    }
    
    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: -1;
    }
    
    .hero-pattern {
      position: absolute;
      inset: 0;
      opacity: 0.03;
      background-image: 
        radial-gradient(circle at 2px 2px, var(--color-primary) 1px, transparent 0);
      background-size: 40px 40px;
    }
    
    .hero-gradient {
      position: absolute;
      inset: 0;
      background: 
        radial-gradient(ellipse at 20% 80%, rgba(26, 77, 46, 0.08) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 20%, rgba(247, 127, 0, 0.06) 0%, transparent 50%);
    }
    
    .hero-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4xl);
      align-items: center;
      
      @media (max-width: 992px) {
        grid-template-columns: 1fr;
        text-align: center;
      }
    }
    
    .hero-text {
      animation: fadeInUp 0.8s ease-out;
    }
    
    .hero-badge {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      background: var(--color-surface);
      padding: var(--space-sm) var(--space-lg);
      border-radius: var(--radius-full);
      font-family: var(--font-display);
      font-weight: 500;
      font-size: 0.9rem;
      color: var(--color-primary);
      margin-bottom: var(--space-xl);
      
      .badge-icon {
        font-size: 1.2rem;
      }
    }
    
    .hero h1 {
      font-size: clamp(2.5rem, 6vw, 4.5rem);
      font-weight: 700;
      line-height: 1.1;
      margin-bottom: var(--space-xl);
    }
    
    .hero-description {
      font-size: 1.25rem;
      color: var(--color-text-muted);
      max-width: 500px;
      margin-bottom: var(--space-2xl);
      
      @media (max-width: 992px) {
        margin: 0 auto var(--space-2xl);
      }
    }
    
    .hero-cta {
      display: flex;
      gap: var(--space-md);
      margin-bottom: var(--space-3xl);
      
      @media (max-width: 992px) {
        justify-content: center;
        flex-wrap: wrap;
      }
    }
    
    .btn-primary {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      background: var(--color-primary);
      color: var(--color-text-light);
      padding: var(--space-md) var(--space-xl);
      border-radius: var(--radius-full);
      font-family: var(--font-display);
      font-weight: 600;
      text-decoration: none;
      transition: all var(--transition-fast);
      
      &:hover {
        background: var(--color-primary-dark);
        transform: translateY(-2px);
        box-shadow: var(--shadow-medium);
        color: var(--color-text-light);
      }
    }
    
    .btn-whatsapp {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      background: #25D366;
      color: white;
      padding: var(--space-md) var(--space-xl);
      border-radius: var(--radius-full);
      font-family: var(--font-display);
      font-weight: 600;
      text-decoration: none;
      transition: all var(--transition-fast);
      
      &:hover {
        background: #128C7E;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        color: white;
      }
    }
    
    .hero-stats {
      display: flex;
      gap: var(--space-2xl);
      
      @media (max-width: 992px) {
        justify-content: center;
      }
      
      @media (max-width: 576px) {
        flex-direction: column;
        gap: var(--space-lg);
      }
    }
    
    .stat {
      display: flex;
      flex-direction: column;
    }
    
    .stat-number {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 2.5rem;
      color: var(--color-primary);
      line-height: 1;
    }
    
    .stat-label {
      font-size: 0.9rem;
      color: var(--color-text-muted);
    }
    
    .hero-visual {
      position: relative;
      height: 500px;
      
      @media (max-width: 992px) {
        display: none;
      }
    }
    
    .hero-card {
      position: absolute;
      background: var(--color-background);
      padding: var(--space-lg);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-medium);
      display: flex;
      align-items: center;
      gap: var(--space-md);
      animation: float 4s ease-in-out infinite;
      
      .card-icon {
        font-size: 2rem;
      }
      
      .card-text {
        font-family: var(--font-display);
        font-weight: 600;
        color: var(--color-primary-dark);
      }
    }
    
    .hero-card-1 { top: 10%; left: 10%; animation-delay: 0s; }
    .hero-card-2 { top: 40%; right: 5%; animation-delay: 1s; }
    .hero-card-3 { bottom: 15%; left: 20%; animation-delay: 2s; }
    
    .hero-illustration {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    
    .illustration-circle {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--color-primary-light) 0%, var(--color-primary) 100%);
      opacity: 0.1;
    }
    
    .illustration-sparkle {
      position: absolute;
      color: var(--color-accent);
      font-size: 1.5rem;
      animation: sparkle 2s ease-in-out infinite;
    }
    
    .sparkle-1 { top: -20px; left: 50%; animation-delay: 0s; }
    .sparkle-2 { bottom: 20px; left: -10px; animation-delay: 0.5s; }
    .sparkle-3 { bottom: 40px; right: -20px; animation-delay: 1s; }
    
    @keyframes sparkle {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.2); }
    }
    
    /* Categories Section */
    .categories {
      background: var(--color-surface);
    }
    
    .section-header {
      text-align: center;
      margin-bottom: var(--space-3xl);
      
      h2 { margin-bottom: var(--space-md); }
      p { max-width: 600px; margin: 0 auto; }
    }
    
    .section-tag {
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
    
    .categories-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-lg);
      
      @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 576px) { grid-template-columns: 1fr; }
    }
    
    .category-card {
      background: var(--color-background);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      text-decoration: none;
      transition: all var(--transition-base);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-medium);
        
        .category-icon { transform: scale(1.2); }
        .category-link svg { transform: translateX(4px); }
      }
    }
    
    .category-icon {
      font-size: 3rem;
      margin-bottom: var(--space-md);
      transition: transform var(--transition-bounce);
    }
    
    .category-card h3 {
      font-size: 1.1rem;
      color: var(--color-primary-dark);
      margin-bottom: var(--space-sm);
    }
    
    .category-card p {
      font-size: 0.9rem;
      color: var(--color-text-muted);
      margin-bottom: var(--space-md);
    }
    
    .category-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-xs);
      color: var(--color-primary);
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 0.9rem;
      
      svg { transition: transform var(--transition-fast); }
    }
    
    /* Featured Products */
    .featured {
      background: var(--color-background);
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
      
      @media (max-width: 1200px) { grid-template-columns: repeat(3, 1fr); }
      @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 576px) { grid-template-columns: 1fr; }
    }
    
    .product-card {
      background: var(--color-surface);
      border-radius: var(--radius-lg);
      padding: var(--space-lg);
      position: relative;
      transition: all var(--transition-base);
      
      &:hover {
        transform: translateY(-6px);
        box-shadow: var(--shadow-medium);
        
        .product-icon { transform: scale(1.1); }
      }
      
      &.eco { border: 2px solid rgba(26, 77, 46, 0.2); }
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
      font-size: 2.5rem;
      margin-bottom: var(--space-md);
      display: block;
      transition: transform var(--transition-bounce);
    }
    
    .product-brand {
      font-size: 0.75rem;
      color: var(--color-accent);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    
    .product-card h3 {
      font-size: 1rem;
      color: var(--color-primary-dark);
      margin: var(--space-xs) 0 var(--space-sm);
      line-height: 1.3;
    }
    
    .product-card p {
      font-size: 0.85rem;
      color: var(--color-text-muted);
      line-height: 1.5;
      margin-bottom: var(--space-lg);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
    
    .product-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: var(--space-md);
      border-top: 1px solid rgba(26, 77, 46, 0.08);
    }
    
    .product-price {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1rem;
      color: var(--color-primary);
    }
    
    .buy-btn {
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
        color: white;
      }
    }
    
    .section-cta {
      text-align: center;
      margin-top: var(--space-3xl);
    }
    
    .view-all-link {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 1.1rem;
      color: var(--color-primary);
      
      svg { transition: transform var(--transition-fast); }
      
      &:hover {
        color: var(--color-accent);
        svg { transform: translateX(4px); }
      }
    }
    
    /* Benefits */
    .benefits {
      background: var(--color-surface);
    }
    
    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
      
      @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 576px) { grid-template-columns: 1fr; }
    }
    
    .benefit {
      text-align: center;
      padding: var(--space-xl);
      background: var(--color-background);
      border-radius: var(--radius-lg);
      transition: all var(--transition-base);
      
      &:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-soft);
        
        .benefit-icon { transform: scale(1.1); }
      }
    }
    
    .benefit-icon {
      font-size: 2.5rem;
      display: block;
      margin-bottom: var(--space-md);
      transition: transform var(--transition-bounce);
    }
    
    .benefit h4 {
      font-size: 1rem;
      margin-bottom: var(--space-sm);
      color: var(--color-primary-dark);
    }
    
    .benefit p {
      font-size: 0.9rem;
      color: var(--color-text-muted);
    }
    
    /* Testimonials */
    .testimonials {
      background: var(--color-background);
    }
    
    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-xl);
      
      @media (max-width: 992px) { grid-template-columns: repeat(2, 1fr); }
      @media (max-width: 576px) { grid-template-columns: 1fr; }
    }
    
    .testimonial-card {
      background: var(--color-surface);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
    }
    
    .testimonial-rating {
      margin-bottom: var(--space-md);
      
      .star {
        color: #e0e0e0;
        font-size: 1.2rem;
        
        &.filled { color: var(--color-accent); }
      }
    }
    
    .testimonial-text {
      font-size: 1rem;
      line-height: 1.7;
      color: var(--color-text);
      font-style: italic;
      margin-bottom: var(--space-lg);
    }
    
    .testimonial-author {
      display: flex;
      align-items: center;
      gap: var(--space-md);
    }
    
    .author-avatar {
      width: 44px;
      height: 44px;
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--color-text-light);
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 0.9rem;
    }
    
    .author-info {
      display: flex;
      flex-direction: column;
    }
    
    .author-name {
      font-family: var(--font-display);
      font-weight: 600;
      color: var(--color-primary-dark);
      font-size: 0.95rem;
    }
    
    .author-location {
      font-size: 0.85rem;
      color: var(--color-text-muted);
    }
    
    /* CTA Section */
    .cta-section {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
      padding: var(--space-4xl) 0;
    }
    
    .cta-content {
      text-align: center;
      
      h2 {
        color: var(--color-text-light);
        margin-bottom: var(--space-md);
        
        .highlight {
          color: var(--color-secondary);
        }
      }
      
      p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.25rem;
        margin-bottom: var(--space-2xl);
        max-width: none;
      }
    }
    
    .whatsapp-cta {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      background: #25D366;
      color: white;
      padding: var(--space-lg) var(--space-2xl);
      border-radius: var(--radius-full);
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 1.1rem;
      text-decoration: none;
      transition: all var(--transition-fast);
      
      &:hover {
        background: #128C7E;
        transform: translateY(-3px);
        box-shadow: 0 8px 24px rgba(37, 211, 102, 0.4);
        color: white;
      }
    }
  `]
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
      // Mostrar los primeros 8 productos como destacados
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
