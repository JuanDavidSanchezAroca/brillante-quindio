import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-hero">
      <div class="container">
        <span class="page-tag">Nosotros</span>
        <h1>Somos <span class="text-gradient">Brillante Quindío</span></h1>
        <p>
          Tu tienda de productos de aseo de confianza en el corazón del Eje Cafetero.
        </p>
      </div>
    </section>
    
    <section class="about-story section">
      <div class="container">
        <div class="story-grid">
          <div class="story-content">
            <h2>Nuestra Historia</h2>
            <p>
              Brillante Quindío nació con una misión simple: llevar los mejores productos 
              de aseo a todos los hogares y negocios del Quindío a precios justos.
            </p>
            <p>
              Empezamos como una pequeña distribuidora local y hoy somos el aliado de 
              cientos de familias quindianas que confían en nosotros para mantener sus 
              espacios limpios y frescos.
            </p>
            <p>
              Nos apasiona encontrar los mejores productos del mercado, incluyendo opciones 
              ecológicas que cuidan tanto tu hogar como el medio ambiente.
            </p>
          </div>
          
          <div class="story-visual">
            <div class="visual-frame">
              <div class="visual-placeholder">
                <span class="placeholder-emoji">🧴</span>
                <span class="placeholder-text">Productos de Calidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section class="values section">
      <div class="container">
        <div class="section-header">
          <h2>¿Por qué elegirnos?</h2>
          <p>Lo que nos hace diferentes.</p>
        </div>
        
        <div class="values-grid">
          <div class="value-card">
            <div class="value-icon">✅</div>
            <h3>Productos Originales</h3>
            <p>
              Solo vendemos productos 100% originales de las mejores marcas. 
              Cero imitaciones.
            </p>
          </div>
          
          <div class="value-card">
            <div class="value-icon">💰</div>
            <h3>Precios Justos</h3>
            <p>
              Precios competitivos sin sacrificar calidad. 
              Descuentos especiales en compras al por mayor.
            </p>
          </div>
          
          <div class="value-card">
            <div class="value-icon">🚚</div>
            <h3>Envío Rápido</h3>
            <p>
              Entrega a domicilio en todo el Quindío. 
              Tu pedido llega rápido a tu puerta.
            </p>
          </div>
          
          <div class="value-card">
            <div class="value-icon">🌱</div>
            <h3>Línea Ecológica</h3>
            <p>
              Amplio catálogo de productos biodegradables y 
              amigables con el medio ambiente.
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <section class="coverage section">
      <div class="container">
        <div class="coverage-grid">
          <div class="coverage-visual">
            <div class="map-placeholder">
              <span class="map-icon">🗺️</span>
              <div class="map-pins">
                <span class="pin">📍 Armenia</span>
                <span class="pin">📍 Calarcá</span>
                <span class="pin">📍 Montenegro</span>
                <span class="pin">📍 Quimbaya</span>
                <span class="pin">📍 La Tebaida</span>
                <span class="pin">📍 Circasia</span>
              </div>
            </div>
          </div>
          
          <div class="coverage-content">
            <span class="section-tag">Cobertura</span>
            <h2>Envíos a todo el Quindío</h2>
            <p>
              No importa dónde estés, te llevamos tus productos de aseo. 
              Cubrimos todos los municipios del departamento.
            </p>
            
            <ul class="coverage-list">
              <li>Armenia</li>
              <li>Calarcá</li>
              <li>Montenegro</li>
              <li>Quimbaya</li>
              <li>La Tebaida</li>
              <li>Circasia</li>
              <li>Filandia</li>
              <li>Salento</li>
              <li>Córdoba</li>
              <li>Buenavista</li>
              <li>Pijao</li>
              <li>Génova</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    
    <section class="stats section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <span class="stat-number">50+</span>
            <span class="stat-label">Productos en catálogo</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">500+</span>
            <span class="stat-label">Clientes satisfechos</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">12</span>
            <span class="stat-label">Municipios cubiertos</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">5</span>
            <span class="stat-label">Años en el mercado</span>
          </div>
        </div>
      </div>
    </section>
    
    <section class="cta section">
      <div class="container">
        <div class="cta-content">
          <h2>¿Listo para ordenar?</h2>
          <p>Explora nuestro catálogo y haz tu pedido hoy.</p>
          <a routerLink="/productos" class="cta-button">
            Ver Productos
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
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
    
    .about-story {
      background: var(--color-background);
    }
    
    .story-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4xl);
      align-items: center;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
    
    .story-content {
      h2 {
        margin-bottom: var(--space-xl);
      }
      
      p {
        margin-bottom: var(--space-lg);
        font-size: 1.1rem;
        line-height: 1.8;
        
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    
    .story-visual {
      @media (max-width: 768px) {
        order: -1;
      }
    }
    
    .visual-frame {
      position: relative;
      
      &::before {
        content: '';
        position: absolute;
        top: -20px;
        right: -20px;
        width: 100%;
        height: 100%;
        border: 3px solid var(--color-secondary);
        border-radius: var(--radius-lg);
        z-index: 0;
      }
    }
    
    .visual-placeholder {
      position: relative;
      z-index: 1;
      aspect-ratio: 4/3;
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-light) 100%);
      border-radius: var(--radius-lg);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(--space-md);
      color: var(--color-text-light);
      
      .placeholder-emoji {
        font-size: 5rem;
      }
      
      .placeholder-text {
        font-family: var(--font-display);
        font-weight: 500;
        font-size: 1.2rem;
      }
    }
    
    .values {
      background: var(--color-surface);
    }
    
    .section-header {
      text-align: center;
      margin-bottom: var(--space-3xl);
      
      h2 {
        margin-bottom: var(--space-md);
      }
      
      p {
        max-width: 500px;
        margin: 0 auto;
      }
    }
    
    .values-grid {
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
    
    .value-card {
      background: var(--color-background);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      text-align: center;
      transition: all var(--transition-base);
      
      &:hover {
        transform: translateY(-8px);
        box-shadow: var(--shadow-medium);
        
        .value-icon {
          transform: scale(1.2);
        }
      }
    }
    
    .value-icon {
      font-size: 3rem;
      margin-bottom: var(--space-lg);
      display: block;
      transition: transform var(--transition-bounce);
    }
    
    .value-card h3 {
      font-size: 1.2rem;
      margin-bottom: var(--space-sm);
    }
    
    .value-card p {
      font-size: 0.95rem;
      color: var(--color-text-muted);
      line-height: 1.6;
    }
    
    .coverage {
      background: var(--color-background);
    }
    
    .coverage-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: var(--space-4xl);
      align-items: center;
      
      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    }
    
    .map-placeholder {
      background: var(--color-surface);
      border-radius: var(--radius-xl);
      padding: var(--space-3xl);
      text-align: center;
      
      .map-icon {
        font-size: 6rem;
        display: block;
        margin-bottom: var(--space-xl);
      }
    }
    
    .map-pins {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: var(--space-sm);
    }
    
    .pin {
      background: var(--color-background);
      padding: var(--space-xs) var(--space-md);
      border-radius: var(--radius-full);
      font-size: 0.85rem;
      color: var(--color-primary);
    }
    
    .coverage-content {
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
      
      h2 {
        margin-bottom: var(--space-lg);
      }
      
      > p {
        margin-bottom: var(--space-xl);
        font-size: 1.1rem;
      }
    }
    
    .coverage-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--space-sm);
      list-style: none;
      
      @media (max-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
      }
      
      li {
        padding: var(--space-sm);
        background: var(--color-surface);
        border-radius: var(--radius-sm);
        font-size: 0.95rem;
        text-align: center;
        color: var(--color-primary-dark);
      }
    }
    
    .stats {
      background: var(--color-surface);
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: var(--space-xl);
      
      @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    .stat-card {
      background: var(--color-background);
      border-radius: var(--radius-lg);
      padding: var(--space-xl);
      text-align: center;
    }
    
    .stat-number {
      display: block;
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 3rem;
      color: var(--color-primary);
      line-height: 1;
      margin-bottom: var(--space-sm);
    }
    
    .stat-label {
      font-size: 0.95rem;
      color: var(--color-text-muted);
    }
    
    .cta {
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    }
    
    .cta-content {
      text-align: center;
      
      h2 {
        color: var(--color-text-light);
        margin-bottom: var(--space-md);
      }
      
      p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.2rem;
        margin-bottom: var(--space-xl);
        max-width: none;
      }
    }
    
    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: var(--space-sm);
      background: var(--color-accent);
      color: var(--color-text-light);
      padding: var(--space-md) var(--space-xl);
      border-radius: var(--radius-full);
      font-family: var(--font-display);
      font-weight: 600;
      text-decoration: none;
      transition: all var(--transition-fast);
      
      svg {
        transition: transform var(--transition-fast);
      }
      
      &:hover {
        background: #e06f00;
        transform: translateY(-2px);
        box-shadow: var(--shadow-glow);
        color: var(--color-text-light);
        
        svg {
          transform: translateX(4px);
        }
      }
    }
  `]
})
export class AboutComponent {}
