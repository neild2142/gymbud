export interface HeaderProps {
  back?(): void;
  next?(): void;
}

export interface Set {
  weight: string;
  reps: string;
  complete: boolean;
}

export interface FormSet {
  weight: string;
  reps: string;
}

export interface Category {
  id: number;
  name: BodyPart;
  categoryIndex?: number;
}

export interface Exercise {
  name: string;
  id: number;
  description: string;
  muscles: number[];
  muscles_secondary: number[];
  categoryName: BodyPart;
  category: number;
}

export type SetState = {
  [exerciseId: string]: Set[];
};

export type BodyPart = "Abs" | "Arms" | "Back" | "Chest" | "Legs" | "Shoulders";

export type CategoryTag = {
  [bodyPart in BodyPart]: string;
};
