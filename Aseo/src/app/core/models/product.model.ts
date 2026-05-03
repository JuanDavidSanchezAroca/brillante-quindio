export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  price: number;
  image?: string;
  icon: string;
  features: string[];
  isEco: boolean;
  inStock: boolean;
  brand?: string;
}

export type ProductCategory = 
  | 'limpiadores' 
  | 'desinfectantes' 
  | 'pisos' 
  | 'cocina' 
  | 'banos' 
  | 'multiusos' 
  | 'aromatizantes'
  | 'herramientas';

export interface ProductCategoryInfo {
  id: ProductCategory;
  name: string;
  icon: string;
  description: string;
}
