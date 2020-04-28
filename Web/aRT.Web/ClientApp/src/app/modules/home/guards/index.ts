import { ProductsGuard } from './products.guard';
import { ProductExistsGuard } from './product-exists.guard';

export const guards: any[] = [ProductsGuard, ProductExistsGuard];

export * from './products.guard';
export * from './product-exists.guard';
