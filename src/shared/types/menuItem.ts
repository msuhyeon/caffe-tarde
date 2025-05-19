type Nutrition = {
  calories: number;
  fat: number;
  protein: number;
  sodium: number;
  sugar: number;
  caffeine: number;
};

export type DetailTypes = {
  id: string;
  category: string;
  name: string;
  englishName: string;
  description: string;
  volume?: string;
  imageSrc: string;
  imageAlt: string;
  nutrition: Nutrition;
  allergens: string[];
};
