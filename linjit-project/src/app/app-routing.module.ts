import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/body/dashboard/dashboard.component';
import { CourseDetailsComponent } from 'src/app/body/course-details/course-details.component';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'course/:course_id', component: CourseDetailsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
