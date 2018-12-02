import { Injectable } from '@angular/core';
import { Tile, TableRow } from 'src/app/body/dashboard/dashboard.model';

@Injectable()
export class DashboardService {

    constructor() { }

    getTileData(): Tile[] {
        return [
            {
                'title': 'TITLE 1',
                'description': 'DESCRIPTION 1'
            },
            {
                'title': 'TITLE 2',
                'description': 'DESCRIPTION 2'
            },
            {
                'title': 'TITLE 3',
                'description': 'DESCRIPTION 3'
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
