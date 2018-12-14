import { Injectable } from '@angular/core';
import { Tile, TableRow } from 'src/app/body/dashboard/dashboard.model';

@Injectable()
export class DashboardService {

    constructor() { }

    getTileData(): Tile[] {
        return [
            {
                'title': 'Introduction to Native Cloud Application Architecture',
                'instructor': 'Linjith Kunnon',
                'rating': 3,
                'price': 3000,
                'summary': 'Build and deploy an app from the scratch completely on AWS',
                'category': 'Architecture',
                'longDescription': 'LOREM IPSUM',
                'difficulty': 'Basic',
                'hours': 20
            },
            {
                'title': 'JavaScript Design Patterns',
                'instructor': 'MadhuBala',
                'rating': 3,
                'price': 5000,
                'summary': 'Write better code by learning about the standard design patterns in JS',
                'category': 'Programming',
                'longDescription': 'LOREM IPSUM',
                'difficulty': 'Basic',
                'hours': 20
            },
            {
                'title': 'Web Assembly',
                'instructor': 'Adithya Prabhu',
                'rating': 3,
                'price': 8000,
                'summary': 'Introductory course to web assembly',
                'category': 'Languages',
                'longDescription': 'LOREM IPSUM',
                'difficulty': 'Basic',
                'hours': 20
            },
            {
                'title': 'Reactive Programming : A fad or the future',
                'instructor': 'Linjith Kunnon',
                'rating': 4,
                'price': 9000,
                'summary': 'Why is it so cool among devs? Will it stick?',
                'category': 'Languages',
                'longDescription': 'LOREM IPSUM',
                'difficulty': 'Basic',
                'hours': 20
            },
            {
                'title': 'Learn GoLang in 30 hours',
                'instructor': 'MadhuBala',
                'rating': 3,
                'price': 5000,
                'summary': 'Go from zero to hero in Google\'s GoLang in 30 hours',
                'category': 'Languages',
                'longDescription': 'LOREM IPSUM',
                'difficulty': 'Basic',
                'hours': 20
            },
            {
                'title': 'AI/ML for a newbie',
                'instructor': 'Adithya Prabhu',
                'rating': 3,
                'price': 2000,
                'summary': 'Introductory course to AI and ML using R',
                'category': 'AI-ML',
                'longDescription': 'LOREM IPSUM',
                'difficulty': 'Basic',
                'hours': 20
            }
        ];
    }

    getTableData(): TableRow[] {
        return [
            {
                'country': 'Argentina',
                'language': 'Spanish (official), English, Italian, German, French',
                'population': '41,803,125',
                'medianAge': '31.3',
                'area': '2,780,387'
            },
            {
                'country': 'Australia',
                'language': 'English 79%, native and other languages',
                'population': '23,630,169',
                'medianAge': '37.3',
                'area': '7,739,983'
            },
            {
                'country': 'Greece',
                'language': 'Greek 99% (official), English, French',
                'population': '11,128,404',
                'medianAge': '43.2',
                'area': '131,956'
            },
            {
                'country': 'Luxembourg',
                'language': 'Luxermbourgish (national) French, German (both administrative)',
                'population': '536,761',
                'medianAge': '39.1',
                'area': '2,586'
            },
            {
                'country': 'Russia',
                'language': 'Russian, others',
                'population': '142,467,651',
                'medianAge': '38.4',
                'area': '17,076,310'
            },
            {
                'country': 'Sweden',
                'language': 'Swedish, small Sami- and Finnish-speaking minorities',
                'population': '9,631,261',
                'medianAge': '41.1',
                'area': '449,954'
            }
        ];
    }
}
