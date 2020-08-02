export interface Credential {
    id: string;
    key: string;
}

export interface Meal {
    food: Food;
    measures: Measure[];
}

export interface Food {
    category?: string;
    categoryLabel?: string;
    foodId: string;
    image?: string;
    label: string;
    nutrients: MainNutrients;
}

export interface Measure {
    label: string;
    qualified?: any;
    uri: string;
}

export interface Ingredient {
    quantity: number;
    measureURI: string;
    foodId: string;
}

export interface Nutrient {
    label: string;
    quantity: number;
    unit: string;
}

export interface MainNutrients {
    [key: string]: number;
}

export interface Theme {
    [key: string]: string | number;
}
