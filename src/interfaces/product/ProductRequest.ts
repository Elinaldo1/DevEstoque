import { Category } from "@entities/Category";
import { Product } from "@entities/Product";
import { Unit } from "@entities/Unit";

export interface ProductRequest { 
    name: Product['name'], 
    category: Category, 
    description: Product['description'], 
    unit: Unit, 
    quantity: Product['quantity'],
}
