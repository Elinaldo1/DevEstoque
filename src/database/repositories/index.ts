import { Product } from "@entities/Product";
import { datasource } from "../configs/datasource";
import { Category } from "@entities/Category";
import { Unit } from "@entities/Unit";

const productRepository = datasource.getRepository(Product);
const categoryRepository = datasource.getRepository(Category);
const unitRepository = datasource.getRepository(Unit);

export {
    productRepository,
    categoryRepository,
    unitRepository,
}