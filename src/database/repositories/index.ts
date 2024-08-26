import { Product } from "@entities/Product";
import { datasource } from "../configs/datasource";
import { Category } from "@entities/Category";
import { Unit } from "@entities/Unit";

const productRepository = datasource.getRepository(Product);
const categoriesRepository = datasource.getRepository(Category);
const unitRepository = datasource.getRepository(Unit);