export interface HeaderProps {
  back?(): void;
  next?(): void;
}

export interface Category {
  id: number;
  name: string;
  categoryIndex?: number;
}

export interface Exercise {
  name: string;
  id: number;
  description: string;
  muscles: number[];
  muscles_secondary: number[];
  categoryName: string;
  category: number;
}
