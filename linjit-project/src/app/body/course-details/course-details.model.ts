export interface CourseDetails {
    id: string;
    title: string;
    category: string;
    summary: string;
    longDescription: string;
    instructors: string[];
    rating: 1 | 2 | 3 | 4 | 5;
    price: number;
    difficulty: string;
    hours: number;
    imageUrl: string;
    requirements: string[];
    featuredReviews: string[];

}
