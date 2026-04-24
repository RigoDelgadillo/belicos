export interface Category {
  categoryId: number;
  name: string;
  description?: string;
  active: boolean;
}

export type UpdateCategory = Omit<Category, 'categoryId'>
export type CreateCategory = Omit<Category, 'categoryId' | 'active'>