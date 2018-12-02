import { Component, OnInit } from '@angular/core';
import { Tile, TableRow } from 'src/app/body/dashboard/dashboard.model';
import { DashboardService } from 'src/app/body/dashboard/dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  tilesData: Tile[];
  tableData: TableRow[];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.tilesData = this.dashboardService.getTileDate();
    this.tableData = this.dashboardService.getTableData();
  }

}