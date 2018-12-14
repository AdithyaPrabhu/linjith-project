export interface Tile {
    title: string;
    category: string;
    summary: string;
    longDescription: string;
    instructor: string;
    rating: 1 | 2 | 3 | 4 | 5;
    price: number;
    difficulty: string;
    hours: number;
}

export interface TableRow {
    country: string;
    language: string;
    population: string;
    medianAge: string;
    area: string;
}
