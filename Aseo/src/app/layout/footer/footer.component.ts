import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContactService } from '@core/services';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <footer>
      <div class="footer-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0 60L48 55C96 50 192 40 288 45C384 50 480 70 576 75C672 80 768 70 864 60C960 50 1056 40 1152 45C1248 50 1344 70 1392 80L1440 90V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="currentColor"/>
        </svg>
      </div>
      
      <div class="footer-content">
        <div class="container">
          <div class="footer-grid">
            
            <div class="footer-brand">
              <a routerLink="/" class="logo">
                <span class="logo-icon">✨</span>
                <span class="logo-text">
                  <span class="logo-main">Brillante</span>
                  <span class="logo-sub">Quindío</span>
                </span>
              </a>
              <p>
                Tu tienda de productos de aseo en el Quindío. 
                Limpiadores, desinfectantes, aromatizantes y más. Envíos a domicilio.
              </p>
              <div class="social-links">
                <a href="https://facebook.com/brillantequindio" target="_blank" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="https://instagram.com/brillantequindio" target="_blank" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="https://tiktok.com/@brillantequindio" target="_blank" aria-label="TikTok">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div class="footer-links">
              <h4>Navegación</h4>
              <ul>
                <li><a routerLink="/">Inicio</a></li>
                <li><a routerLink="/productos">Productos</a></li>
                <li><a routerLink="/nosotros">Nosotros</a></li>
                <li><a routerLink="/contacto">Contacto</a></li>
              </ul>
            </div>
            
            <div class="footer-links">
              <h4>Categorías</h4>
              <ul>
                <li><a routerLink="/productos" [queryParams]="{categoria: 'limpiadores'}">Limpiadores</a></li>
                <li><a routerLink="/productos" [queryParams]="{categoria: 'desinfectantes'}">Desinfectantes</a></li>
                <li><a routerLink="/productos" [queryParams]="{categoria: 'aromatizantes'}">Aromatizantes</a></li>
                <li><a routerLink="/productos" [queryParams]="{categoria: 'herramientas'}">Implementos</a></li>
              </ul>
            </div>
            
            <div class="footer-contact">
              <h4>Contacto</h4>
              <ul>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                  +57 316 456 7890
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  contacto&#64;brillantequindio.com
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  Armenia, Quindío
                </li>
              </ul>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; {{ currentYear }} Brillante Quindío. Todos los derechos reservados.</p>
            <p class="tagline">Hecho con 💚 en el corazón del Eje Cafetero</p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background: var(--color-primary-dark);
      color: var(--color-text-light);
      margin-top: var(--space-4xl);
      position: relative;
    }
    
    .footer-wave {
      position: absolute;
      top: -60px;
      left: 0;
      right: 0;
      height: 60px;
      color: var(--color-primary-dark);
      
      svg {
        width: 100%;
        height: 100%;
      }
    }
    
    .footer-content {
      padding: var(--space-4xl) 0 var(--space-xl);
    }
    
    .container {
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 var(--space-lg);
    }
    
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: var(--space-3xl);
      
      @media (max-width: 992px) {
        grid-template-columns: 1fr 1fr;
      }
      
      @media (max-width: 576px) {
        grid-template-columns: 1fr;
        gap: var(--space-2xl);
      }
    }
    
    .footer-brand {
      .logo {
        display: inline-flex;
        align-items: center;
        gap: var(--space-sm);
        text-decoration: none;
        margin-bottom: var(--space-lg);
      }
      
      .logo-icon {
        font-size: 2rem;
      }
      
      .logo-main {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 1.5rem;
        color: var(--color-text-light);
      }
      
      .logo-sub {
        font-family: var(--font-display);
        font-weight: 500;
        font-size: 1rem;
        color: var(--color-secondary);
      }
      
      p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.95rem;
        line-height: 1.7;
        margin-bottom: var(--space-lg);
        max-width: 320px;
      }
    }
    
    .social-links {
      display: flex;
      gap: var(--space-md);
      
      a {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--color-text-light);
        transition: all var(--transition-fast);
        
        &:hover {
          background: var(--color-accent);
          transform: translateY(-3px);
        }
      }
    }
    
    .footer-links, .footer-contact {
      h4 {
        font-family: var(--font-display);
        font-weight: 600;
        font-size: 1.1rem;
        color: var(--color-text-light);
        margin-bottom: var(--space-lg);
      }
      
      ul {
        list-style: none;
      }
      
      li {
        margin-bottom: var(--space-sm);
      }
      
      a {
        color: rgba(255, 255, 255, 0.7);
        text-decoration: none;
        font-size: 0.95rem;
        transition: all var(--transition-fast);
        
        &:hover {
          color: var(--color-secondary);
          padding-left: 4px;
        }
      }
    }
    
    .footer-contact {
      li {
        display: flex;
        align-items: center;
        gap: var(--space-sm);
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.95rem;
        margin-bottom: var(--space-md);
        
        svg {
          color: var(--color-secondary);
          flex-shrink: 0;
        }
      }
    }
    
    .footer-bottom {
      margin-top: var(--space-3xl);
      padding-top: var(--space-xl);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      text-align: center;
      
      p {
        color: rgba(255, 255, 255, 0.5);
        font-size: 0.9rem;
        margin: 0;
      }
      
      .tagline {
        margin-top: var(--space-sm);
        color: rgba(255, 255, 255, 0.7);
      }
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
