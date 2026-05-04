import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product, ProductCategory, ProductCategoryInfo } from '@core/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private categories: ProductCategoryInfo[] = [
    { id: 'limpiadores', name: 'Limpiadores', icon: '🧴', description: 'Limpiadores multiusos y especializados' },
    { id: 'desinfectantes', name: 'Desinfectantes', icon: '🦠', description: 'Eliminan el 99.9% de gérmenes' },
    { id: 'pisos', name: 'Pisos', icon: '🪣', description: 'Para todo tipo de superficies' },
    { id: 'cocina', name: 'Cocina', icon: '🍳', description: 'Desengrasantes y limpiadores' },
    { id: 'banos', name: 'Baños', icon: '🚿', description: 'Antical y desinfectantes' },
    { id: 'multiusos', name: 'Multiusos', icon: '✨', description: 'Todo en uno' },
    { id: 'aromatizantes', name: 'Aromatizantes', icon: '🌸', description: 'Fragancias frescas' },
    { id: 'herramientas', name: 'Herramientas', icon: '🧹', description: 'Implementos de limpieza' }
  ];

  private products: Product[] = [
    // Limpiadores
    {
      id: 'limpiador-multiusos-lavanda',
      name: 'Limpiador Multiusos Lavanda',
      description: 'Limpiador concentrado con aroma a lavanda. Ideal para superficies de cocina, baños y pisos. Fórmula biodegradable.',
      category: 'limpiadores',
      price: 15000,
      icon: '🧴',
      features: ['Biodegradable', 'Aroma duradero', 'Concentrado', 'Multiusos'],
      isEco: true,
      inStock: true,
      brand: 'EcoClean'
    },
    {
      id: 'limpiador-vidrios',
      name: 'Limpiador de Vidrios Premium',
      description: 'Fórmula especial sin rayas para ventanas, espejos y superficies de vidrio. Secado rápido.',
      category: 'limpiadores',
      price: 12000,
      icon: '🪟',
      features: ['Sin rayas', 'Secado rápido', 'Antiestático', 'Brillo intenso'],
      isEco: false,
      inStock: true,
      brand: 'CristalPro'
    },
    
    // Desinfectantes
    {
      id: 'desinfectante-superficies',
      name: 'Desinfectante Antibacterial',
      description: 'Elimina el 99.9% de bacterias y virus. Ideal para superficies de alto contacto. Aroma fresco.',
      category: 'desinfectantes',
      price: 18000,
      icon: '🛡️',
      features: ['Elimina 99.9% gérmenes', 'Acción prolongada', 'Seguro en alimentos', 'Sin enjuague'],
      isEco: false,
      inStock: true,
      brand: 'SafeGuard'
    },
    {
      id: 'desinfectante-natural',
      name: 'Desinfectante Natural Cítricos',
      description: 'Desinfectante a base de cítricos naturales. Efectivo y amigable con el medio ambiente.',
      category: 'desinfectantes',
      price: 22000,
      icon: '🍋',
      features: ['100% Natural', 'Cítricos reales', 'Sin químicos', 'Biodegradable'],
      isEco: true,
      inStock: true,
      brand: 'NaturalClean'
    },
    
    // Pisos
    {
      id: 'limpiador-pisos-madera',
      name: 'Limpiador Pisos de Madera',
      description: 'Fórmula especial para pisos de madera y laminados. Nutre y protege sin dejar residuos.',
      category: 'pisos',
      price: 25000,
      icon: '🪵',
      features: ['Nutre la madera', 'Sin residuos', 'Brillo natural', 'Protege el acabado'],
      isEco: true,
      inStock: true,
      brand: 'WoodCare'
    },
    {
      id: 'limpiador-pisos-ceramica',
      name: 'Limpiador Pisos Cerámica',
      description: 'Limpieza profunda para pisos de cerámica, porcelanato y baldosas. Elimina manchas difíciles.',
      category: 'pisos',
      price: 16000,
      icon: '🏠',
      features: ['Manchas difíciles', 'Brillo intenso', 'Antideslizante', 'Aroma fresco'],
      isEco: false,
      inStock: true,
      brand: 'FloorMaster'
    },
    
    // Cocina
    {
      id: 'desengrasante-cocina',
      name: 'Desengrasante Extra Fuerte',
      description: 'Elimina grasa quemada y suciedad difícil de cocinas. Acción rápida sin dañar superficies.',
      category: 'cocina',
      price: 14000,
      icon: '🔥',
      features: ['Extra fuerte', 'Grasa quemada', 'Acción rápida', 'No daña superficies'],
      isEco: false,
      inStock: true,
      brand: 'DeGrass'
    },
    {
      id: 'limpiador-acero-inox',
      name: 'Limpiador Acero Inoxidable',
      description: 'Brillo perfecto para electrodomésticos y superficies de acero inoxidable. Elimina huellas.',
      category: 'cocina',
      price: 19000,
      icon: '🥄',
      features: ['Brillo espejo', 'Elimina huellas', 'Protección duradera', 'Sin manchas'],
      isEco: false,
      inStock: true,
      brand: 'SteelShine'
    },
    
    // Baños
    {
      id: 'limpiador-banos',
      name: 'Limpiador de Baños Antical',
      description: 'Elimina cal, sarro y manchas de agua dura. Ideal para sanitarios, duchas y grifería.',
      category: 'banos',
      price: 13000,
      icon: '🚿',
      features: ['Elimina cal', 'Quita sarro', 'Brillo grifería', 'Aroma fresco'],
      isEco: false,
      inStock: true,
      brand: 'BathPro'
    },
    {
      id: 'gel-sanitario',
      name: 'Gel Sanitario Desinfectante',
      description: 'Gel espeso para limpieza profunda del inodoro. Desinfecta y elimina manchas.',
      category: 'banos',
      price: 8000,
      icon: '🚽',
      features: ['Gel espeso', 'Desinfectante', 'Elimina manchas', 'Aroma pino'],
      isEco: false,
      inStock: true,
      brand: 'ToiletGel'
    },
    
    // Aromatizantes
    {
      id: 'aromatizante-ambiente',
      name: 'Aromatizante Ambiental Premium',
      description: 'Fragancia duradera para ambientes. Disponible en varios aromas: lavanda, vainilla, cítricos.',
      category: 'aromatizantes',
      price: 12000,
      icon: '🌺',
      features: ['Larga duración', 'Varias fragancias', 'No mancha', 'Elimina olores'],
      isEco: true,
      inStock: true,
      brand: 'AromaLife'
    },
    {
      id: 'eliminador-olores',
      name: 'Eliminador de Olores Enzimático',
      description: 'Elimina olores de mascotas, cocina y baños. Fórmula enzimática que destruye el olor de raíz.',
      category: 'aromatizantes',
      price: 24000,
      icon: '🐾',
      features: ['Enzimático', 'Mascotas', 'Sin perfume', 'Acción profunda'],
      isEco: true,
      inStock: true,
      brand: 'OdorZero'
    },
    
    // Herramientas
    {
      id: 'mopa-microfibra',
      name: 'Mopa de Microfibra Premium',
      description: 'Mopa profesional con paños de microfibra intercambiables. Ideal para todo tipo de pisos.',
      category: 'herramientas',
      price: 45000,
      icon: '🧹',
      features: ['Microfibra', 'Paños lavables', 'Mango telescópico', 'Giro 360°'],
      isEco: true,
      inStock: true,
      brand: 'CleanPro'
    },
    {
      id: 'guantes-latex',
      name: 'Guantes de Látex (Caja x100)',
      description: 'Guantes desechables de látex. Alta resistencia para limpieza profesional.',
      category: 'herramientas',
      price: 35000,
      icon: '🧤',
      features: ['Caja x100', 'Alta resistencia', 'Sin polvo', 'Tallas S/M/L'],
      isEco: false,
      inStock: true,
      brand: 'SafeHands'
    },
    {
      id: 'panos-microfibra',
      name: 'Paños Microfibra (Pack x5)',
      description: 'Paños de microfibra multicolor para diferentes superficies. Ultra absorbentes.',
      category: 'herramientas',
      price: 28000,
      icon: '🧽',
      features: ['Pack x5', 'Ultra absorbente', '500+ lavadas', 'Sin pelusas'],
      isEco: true,
      inStock: true,
      brand: 'MicroCloth'
    },
    {
      id: 'cepillo-limpieza',
      name: 'Kit Cepillos Limpieza (3 piezas)',
      description: 'Set de cepillos para diferentes usos: grietas, juntas y superficies. Cerdas resistentes.',
      category: 'herramientas',
      price: 22000,
      icon: '🪥',
      features: ['3 cepillos', 'Cerdas duras', 'Ergonómicos', 'Multiusos'],
      isEco: false,
      inStock: true,
      brand: 'BrushMaster'
    }
  ];

  getCategories(): Observable<ProductCategoryInfo[]> {
    return of(this.categories);
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getProductsByCategory(category: ProductCategory): Observable<Product[]> {
    return of(this.products.filter(p => p.category === category));
  }

  getEcoProducts(): Observable<Product[]> {
    return of(this.products.filter(p => p.isEco));
  }

  getProductById(id: string): Observable<Product | undefined> {
    return of(this.products.find(p => p.id === id));
  }

  formatPrice(price: number): string {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  }
}
