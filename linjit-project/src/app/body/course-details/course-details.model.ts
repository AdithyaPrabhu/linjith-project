export interface CourseDetails {
    courseId: string;
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
    featuredReviews: Review[];
}

export interface Review {
    reviewBy: string;
    rating: 1 | 2 | 3 | 4 | 5;
    comment: string;
}
