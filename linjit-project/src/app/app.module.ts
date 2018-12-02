import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from 'src/app/body/dashboard/dashboard.component';
import { DashboardTileComponent } from 'src/app/body/dashboard/tile/dashboard-tile.component';
import { DashboardTableComponent } from 'src/app/body/dashboard/table/dashboard-table.component';
import { DashboardService } from 'src/app/body/dashboard/dashboard.service';
import { FileUploadComponent } from './body/file-upload/file-upload.component';
import { FileUploadModule, FileUpload } from 'primeng/components/fileupload/fileupload';
import { BodyComponent } from './body/body.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardTileComponent,
    DashboardTableComponent,
    HeaderComponent,
    FileUploadComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    FileUploadModule
  ],
  providers: [
    DashboardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }