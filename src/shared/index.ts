export interface HeaderProps {
  back?(): void;
  next?(): void;
}

interface Set {
  weight: number;
  reps: number;
  complete: boolean;
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
  sets?: number;
}
