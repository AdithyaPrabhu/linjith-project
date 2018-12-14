import { Component, OnInit, Input } from '@angular/core';
import { Tile } from 'src/app/body/dashboard/dashboard.model';

@Component({
  selector: 'app-dashboard-tile',
  templateUrl: './dashboard-tile.component.html',
  styleUrls: ['./dashboard-tile.component.scss']
})
export class DashboardTileComponent implements OnInit {

  // @Input() title: string;
  // @Input() description: string;
  // @Input() instructor: string;
  // @Input() rating: 1 | 2 | 3 | 4 | 5;
  // @Input() price: string;

  @Input() tileData: Tile;

  constructor() { }

  ngOnInit() {
  }

}
