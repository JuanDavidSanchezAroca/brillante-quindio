import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header [class.scrolled]="isScrolled()" [class.menu-open]="isMenuOpen()">
      <div class="container">
        <a routerLink="/" class="logo">
          <span class="logo-icon">✨</span>
          <span class="logo-text">
            <span class="logo-main">Brillante</span>
            <span class="logo-sub">Quindío</span>
          </span>
        </a>
        
        <nav [class.active]="isMenuOpen()">
          <ul>
            <li>
              <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">
                Inicio
              </a>
            </li>
            <li>
              <a routerLink="/productos" routerLinkActive="active" (click)="closeMenu()">
                Productos
              </a>
            </li>
            <li>
              <a routerLink="/nosotros" routerLinkActive="active" (click)="closeMenu()">
                Nosotros
              </a>
            </li>
            <li>
              <a routerLink="/contacto" routerLinkActive="active" (click)="closeMenu()">
                Contacto
              </a>
            </li>
          </ul>
        </nav>
        
        <a href="https://wa.me/573164567890" target="_blank" class="whatsapp-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          <span>WhatsApp</span>
        </a>
        
        <button 
          class="menu-toggle" 
          [class.active]="isMenuOpen()"
          (click)="toggleMenu()"
          aria-label="Menú"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  `,
  styles: [`
    header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      padding: var(--space-md) 0;
      transition: all var(--transition-base);
      
      &.scrolled {
        background: rgba(255, 254, 249, 0.95);
        backdrop-filter: blur(10px);
        box-shadow: var(--shadow-soft);
        padding: var(--space-sm) 0;
      }
      
      &.menu-open {
        background: var(--color-background);
      }
    }
    
    .container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      max-width: 1280px;
      margin: 0 auto;
      padding: 0 var(--space-lg);
    }
    
    .logo {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      text-decoration: none;
      z-index: 1001;
    }
    
    .logo-icon {
      font-size: 1.75rem;
      animation: float 3s ease-in-out infinite;
    }
    
    .logo-text {
      display: flex;
      flex-direction: column;
      line-height: 1.1;
    }
    
    .logo-main {
      font-family: var(--font-display);
      font-weight: 700;
      font-size: 1.25rem;
      color: var(--color-primary);
    }
    
    .logo-sub {
      font-family: var(--font-display);
      font-weight: 500;
      font-size: 0.85rem;
      color: var(--color-accent);
    }
    
    nav {
      @media (max-width: 768px) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--color-background);
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        visibility: hidden;
        transition: all var(--transition-base);
        
        &.active {
          opacity: 1;
          visibility: visible;
        }
      }
      
      ul {
        display: flex;
        align-items: center;
        gap: var(--space-xl);
        list-style: none;
        
        @media (max-width: 768px) {
          flex-direction: column;
          gap: var(--space-2xl);
        }
      }
      
      a {
        font-family: var(--font-display);
        font-weight: 500;
        font-size: 0.95rem;
        color: var(--color-text);
        text-decoration: none;
        position: relative;
        padding: var(--space-xs) 0;
        transition: color var(--transition-fast);
        
        @media (max-width: 768px) {
          font-size: 1.5rem;
        }
        
        &::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-accent);
          transition: width var(--transition-fast);
        }
        
        &:hover,
        &.active {
          color: var(--color-primary);
          
          &::after {
            width: 100%;
          }
        }
      }
    }
    
    .whatsapp-btn {
      display: flex;
      align-items: center;
      gap: var(--space-sm);
      background: #25D366;
      color: white;
      padding: var(--space-sm) var(--space-lg);
      border-radius: var(--radius-full);
      font-family: var(--font-display);
      font-weight: 600;
      font-size: 0.9rem;
      text-decoration: none;
      transition: all var(--transition-fast);
      
      @media (max-width: 768px) {
        display: none;
      }
      
      &:hover {
        background: #128C7E;
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
        color: white;
      }
    }
    
    .menu-toggle {
      display: none;
      flex-direction: column;
      justify-content: center;
      gap: 5px;
      width: 32px;
      height: 32px;
      background: none;
      border: none;
      cursor: pointer;
      z-index: 1001;
      
      @media (max-width: 768px) {
        display: flex;
      }
      
      span {
        display: block;
        width: 24px;
        height: 2px;
        background: var(--color-primary);
        transition: all var(--transition-fast);
        transform-origin: center;
      }
      
      &.active {
        span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        span:nth-child(2) {
          opacity: 0;
        }
        span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = signal(false);
  isMenuOpen = signal(false);
  
  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }
  
  toggleMenu(): void {
    this.isMenuOpen.update(v => !v);
  }
  
  closeMenu(): void {
    this.isMenuOpen.set(false);
  }
}
